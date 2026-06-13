# Ingesting a New Book (Buddha Series)

How-to for adding the next book of original Tibetan-language content to the
Buddha series, following the pattern established for Book 1 ("Who is the
Buddha?") and Book 2 ("Where Did the Buddha Go?"). Read `CLAUDE.md` first for
general project conventions.

## 0. Ground rules

- **Work one book at a time, in order.** Don't start the next book until the
  current one is done, regenerated, and building cleanly.
- **Original content only.** amarahasa.com (https://en.amarahasa.com/series/buddha/)
  is a *structural* reference: book/chapter count, topic per chapter, grammar
  level, and pedagogical pattern (statement → yes/no question → negation →
  relational sentences). Do **not** translate or copy amarahasa's actual
  Sanskrit sentences — write new Tibetan sentences that teach the same kind of
  grammar point about the same topic.
- If anything about scope is ambiguous (how many chapters, how to split a
  topic, etc.), check in with the user before writing content — but the
  mechanical steps below (schema, scripts, build) don't need sign-off.

## 1. Research the reference book

Fetch the series page to find the next book in order, its title/description,
and (if listed) its place in the difficulty progression:

```
https://en.amarahasa.com/series/buddha/
```

Then fetch that book's page (URL pattern `https://en.amarahasa.com/books/<slug>/`)
to get its chapter list and titles. If you need the chapter links, ask for
hrefs explicitly — the book page lists chapters as `https://amarahasa.com/books/<slug>/<n>/`.

Optionally fetch one chapter page to gauge the grammar level (what new
constructions it introduces vs. the previous book) — but only to inform your
*own* original sentences, never to copy text.

## 2. Plan the book before writing JSON

Work out, on paper/in your head:

- **Book title** (Tibetan + Wylie transliteration + English), and a one-line
  **`description`** (English) for the table-of-contents page — mirror the
  tone of amarahasa's blurb but write your own wording.
- **Chapters**: one per amarahasa chapter/topic, each with its own Tibetan
  title + transliteration + English title.
- **New grammar/vocab per chapter**: pick 1-2 new grammar concepts per book
  (e.g. Book 2 added the locative particle ལ/ར and four honorific past-tense
  verbs). Keep each chapter's new vocabulary small (roughly 5-15 new items).
- **Narrative continuity**: reuse names/places from earlier chapters and
  books where natural — it reinforces vocabulary and gives the story an arc
  (Book 2's last chapter recaps all three earlier locations in one block of
  relational sentences).

## 3. Conventions to follow (established in Books 1-2)

### Possessive particle
- Vowel-final words take attached **འི** (not a separate clickable token —
  it gets absorbed into the separator string by the tokenizer).
- Consonant-final words take separate **གི**, which IS its own clickable word
  entry (`meaning: "of (possessive)"`).

### Locative particle (introduced Book 2)
- Vowel-final place names take a **fused ར** (e.g. ལུམ་བི་ནི → ལུམ་བི་ནིར) —
  again absorbed into the separator, not its own token.
- Consonant-final place names take a separate **ལ**, which IS its own
  clickable word entry (`meaning: "to/at/in (locative particle)"`).

### Verb forms as separate vocabulary entries
For any new verb, add up to three entries that all appear in `words`:
- base form (e.g. `འཁྲུངས` — "was born")
- negation, written as one compound token `མ་<verb>` (e.g. `མ་འཁྲུངས` —
  "was not born")
- question form, written as one compound token `<verb>་སམ` (e.g.
  `འཁྲུངས་སམ` — "was born? (question)")

This mirrors how `ཡིན` / `མིན` / `ཡིན་ནམ` were treated as three separate
entries in Book 1. Each counts toward `uniqueWords`.

### Image handling
- Don't fabricate new image URLs. Give the **book** (top-level `image`) a
  real URL — reuse one already used elsewhere in `src/data/stories/` (grep
  for `"image"` to find existing ones) if a new one isn't available.
- **Chapters** generally omit `image` entirely; `StoryView` falls back to
  `chapter.image || story.image`.

## 4. File schema

Create `src/data/stories/buddha/<book-slug>.json` (kebab-case English title).
Top level:

```json
{
  "id": <next unused integer in the 1-99 block — check only src/data/stories/buddha/>,
  "title": "Tibetan book title",
  "titleTransliteration": "wylie",
  "titleEnglish": "English Title",
  "description": "One sentence for the TOC page.",
  "image": "https://images.unsplash.com/... (reused from an existing entry)",
  "series": "Buddha",
  "uniqueWords": <computed in step 6>,
  "chapters": [ ... ]
}
```

Each entry in `chapters`:

```json
{
  "title": "Tibetan chapter title",
  "titleTransliteration": "wylie",
  "titleEnglish": "English Chapter Title",
  "textTibetan": "Line 1\nLine 2\n\nLine 4 (blank line above is a '' separator)\n...",
  "textWylie": "same line structure, wylie transliteration, each line ending in '.'",
  "lineTranslations": ["...", "...", "", "...", ...],
  "words": [
    { "tibetan": "...", "wylie": "...", "phonetics": "...", "meaning": "..." }
  ]
}
```

Hard requirements:
- `lineTranslations` must have **exactly one entry per line** of
  `textTibetan` (split on `\n`), including `""` for every blank separator
  line.
- `textWylie` must have the same line count as `textTibetan`.
- `words` only needs entries for words you want clickable — but include every
  word/particle you've decided should be clickable per the conventions above
  (don't forget to re-list words reused from earlier chapters; `words` is
  per-chapter).
- Do **not** write a `lines` field — it's generated in step 7.

Aim for roughly the same chapter length as existing chapters (~12-20 lines
including blank separators) and the same statement → question → negation →
relational-sentence rhythm per topic block.

## 5. Wire it into the library

Edit `src/data/stories/index.js`: import the new JSON and add it to the
`stories` array, in `id` order.

## 6. Compute `uniqueWords`

Take the union of `words[].tibetan` across all chapters in the new book
(count each distinct string once, including separate base/negation/question
forms — they're each "a word" by this project's counting convention). Set
`uniqueWords` to that count.

## 7. Generate `lines`

Run from the project root:

```bash
node scripts/generate-story-lines.js
```

This regenerates the `lines` field (pre-tokenized clickable spans) for every
story, including the new book. Re-run this any time `textTibetan` or `words`
changes.

Spot-check the tokenization on a line or two that uses new vocab/particles,
e.g.:

```bash
node -e "
const story = JSON.parse(require('fs').readFileSync('src/data/stories/buddha/<book-slug>.json','utf-8'));
console.log(JSON.stringify(story.chapters[0].lines[0]));
"
```

Look for: new words tokenizing as single clickable units, possessive/locative
particles being absorbed correctly (vowel-final) or appearing as their own
clickable token (consonant-final), and no leftover untokenized chunks that
should have been words.

## 8. Build and verify

```bash
CI=true npx react-scripts build
```

Must compile with **no warnings or errors** (warnings are treated as errors).
Clean up afterward:

```bash
rm -rf build
```

## 9. What you get for free

The Table of Contents view (`StoryView.jsx`) is fully data-driven — any story
with a non-empty `chapters` array automatically gets a TOC landing page
listing all chapters, the book's `description`, `titleTransliteration`, and
`uniqueWords`. No per-book UI work is needed; if the JSON is correct, the TOC
"just works."

## 10. Report back

Summarize for the user: book title (Tibetan/English), chapter list with one-
line topic each, the new grammar/vocab introduced, the new `uniqueWords`
total, and confirmation the build is clean.
