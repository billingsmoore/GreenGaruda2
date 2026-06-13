# CLAUDE.md

Guidance for Claude Code (and other agents) working in this repo.

## What this is

A Create React App (react-scripts) single-page app for learning Tibetan
through short stories, modeled on the structure of amarahasa.com. No router —
view switching is done via local state in `TibetanLesson.jsx`.

## Commands

```bash
npm install   # first time only
npm start     # dev server at http://localhost:3000
npm run build # production build to build/ (also catches lint errors)
```

This project is local-dev only. GitHub Actions / Hugging Face deployment
files may exist but are not part of the current workflow — ignore them
unless asked.

## Architecture

`TibetanLesson.jsx` is the **app shell**: it owns all top-level state
(`currentView`, `stories`, `selectedStory`, `selectedWord`), renders the
header/nav/footer, fetches `public/stories.json`, and conditionally renders
one of four view components based on `currentView`:

- `'home'` → `HomeView`
- `'start-here'` → `StartHereView`
- `'library'` → `LibraryView`
- `'story'` → `StoryView`

Navigation is just `setCurrentView(...)` plus clearing `selectedStory`/
`selectedWord` — see `handleNavigate`, `handleStorySelect`,
`handleBackToLibrary` in `TibetanLesson.jsx`.

`WordDemo.jsx` is a small reusable component (single line of clickable words
+ definition tooltip) used by `HomeView` and `StartHereView` to demo the
word-lookup feature. `StoryView` has its own, fuller version of the same
interaction (multi-line, with translations).

Stories are displayed in Tibetan script only (`textTibetan`). Clicking a
word matches on `story.words[].tibetan` and shows a tooltip with `wylie`,
`phonetics`, and `meaning` — see `WordInteraction.css` for the tooltip
layout.

## Module map (for parallel work)

Each view is a self-contained `.jsx` + `.css` pair. Working on one view
should not require editing another view's files. Files most agents will
touch:

| Concern | Component | Styles |
|---|---|---|
| App shell, header/nav/footer, routing, top-level state | `src/components/TibetanLesson.jsx` | `src/styles/shared.css` |
| Landing page (hero, series showcase) | `src/components/HomeView.jsx` | `src/styles/HomeView.css` |
| Onboarding guide | `src/components/StartHereView.jsx` | `src/styles/StartHereView.css` |
| Story browser (filter/sort/table) | `src/components/LibraryView.jsx` | `src/styles/LibraryView.css` |
| Single story reader | `src/components/StoryView.jsx` | `src/styles/StoryView.css` |
| Word-click demo widget | `src/components/WordDemo.jsx` | `src/styles/WordInteraction.css` |
| Fallback story data (used if `stories.json` fetch fails) | `src/data/defaultStories.js` | — |
| Story content | `public/stories.json` | — |

Shared/cross-cutting CSS files — touch these only when a change genuinely
applies to multiple views, since they're the most likely place for agents to
collide:

- `src/styles/shared.css` — reset, body, header/nav/footer, `.cta-btn`
  variants, scrollbar.
- `src/styles/ContentSections.css` — boxed section styles
  (`.philosophy-section`, `.start-here-section`, `.closing-section`,
  `.demo-section`) and `.library-header`/`.library-description`, shared by
  Home, Start Here, and Library.
- `src/styles/WordInteraction.css` — `.story-word`, `.word-tooltip`,
  `.tooltip-*`, `.story-text`/`.story-line`, shared by `StoryView` and
  `WordDemo`.

If a task is scoped to one view, edit only that view's `.jsx`/`.css` pair.
If it needs a new nav entry or changes to top-level state, that's
`TibetanLesson.jsx` — flag it so concurrent agents don't also edit that file.

## Data model (`public/stories.json`)

```json
{
  "stories": [
    {
      "id": 1,
      "title": "Tibetan script title",
      "titleTransliteration": "Wylie title",
      "titleEnglish": "English title",
      "image": "https://...",
      "series": "Series name",
      "uniqueWords": 4,
      "textTibetan": "Full story in Tibetan script, lines joined by \\n",
      "lineTranslations": ["English translation of line 1", "...", ""],
      "words": [
        { "tibetan": "...", "wylie": "...", "phonetics": "...", "meaning": "..." }
      ]
    }
  ]
}
```

- `id` must be unique — used for prev/next navigation in `StoryView`
  (`stories.findIndex`).
- **ID allocation is per-series, in blocks of 100**, to avoid collisions when
  multiple agents add books to different series at the same time:
  - "The Life of the Buddha": 1-99
  - "Tenzin" series: 100-199
  - Next new series: 200-299, and so on.
  When adding a book, use the next unused id *within your series' block* —
  no need to check other series' files.
- `lineTranslations` must have exactly one entry per line of `textTibetan`
  (split on `\n`); use `""` for blank separator lines.
- `uniqueWords` drives the Library's "Sort by: Difficulty" control.
- `words` only needs entries for words that should be clickable. `wylie` is
  the standard letter-by-letter transliteration; `phonetics` is a simplified
  pronunciation guide (these often differ — Tibetan spelling and pronunciation
  diverge significantly). Both, plus `meaning`, are shown in the word tooltip.
- `textWylie` and `titleTransliteration` may still be present on existing
  entries but are not rendered by the UI — don't rely on them for new
  features.

## Styling

Dark theme, no CSS variables/framework — just plain CSS files imported
per-component. Palette used throughout:

- Backgrounds: `#1a1a1a` (page), `#252525` (cards/panels), `#0d0d0d`
  (header/footer)
- Accent / active state: `#c9302c`
- Text: `#e0e0e0` (body), `#fff` (headings), `#888`/`#aaa`/`#ccc` (secondary)
- Borders: `#333`/`#444`

Active/selected states across buttons (`.nav-link.active`, `.filter-btn.active`,
`.story-word.selected`) all use the same accent-background pattern — match it
for new toggle-style UI.

## Conventions

- No comments unless they explain a non-obvious *why*.
- `CI=true npm run build` should stay clean (no lint warnings or errors).
- Keep new views as `<Name>View.jsx` + `src/styles/<Name>View.css` pairs to
  preserve the module boundaries above.

## Future considerations

- **Routing**: currently view-switching is local state (no router). If
  shareable/bookmarkable story URLs are wanted later, add `react-router` —
  but use `HashRouter`, not `BrowserRouter`. This app deploys to Hugging
  Face Spaces (static hosting), which doesn't support the server-side
  rewrite-to-`index.html` that `BrowserRouter` needs for direct links/
  refreshes on non-root routes. `HashRouter` (`/#/story/3`) works on any
  static host with no server config.

- **Tibetan script-learning section**: a Duolingo-Devanagari-style intro to
  the Tibetan alphabet. Tibetan's traditional teaching order (30 consonants
  in 8 rows of 4) maps naturally to lesson groups — no invented grouping
  needed. Sketch:
  - New `'script'` view added to `currentView` in `TibetanLesson.jsx` + nav
    entry, following the existing `'home' | 'start-here' | 'library' |
    'story'` pattern.
  - New data files `src/data/tibetanScript/consonants.json` (30 letters,
    each with `tibetan`/`wylie`/`phonetics`/`group` 1-8) and `vowels.json`
    (the 4 vowel signs i/u/e/o).
  - Self-contained `ScriptView.jsx` + `ScriptView.css`, internally managing
    group-list → group-detail → practice sub-states (mirroring the
    chapters/TOC pattern already in `StoryView.jsx`). Flashcards reuse the
    `.story-word`/tooltip click-to-reveal interaction.
  - Phasing: (1) consonant flashcards (reference/study only), (2)
    multiple-choice practice quiz per group, (3) vowel signs attached to a
    base consonant + quiz, (4) stretch — memory-match game, stacked/conjunct
    letters.
  - Open questions for whenever this is picked up: whether to add audio,
    whether to persist practice progress via `localStorage`, and whether
    this lives as its own top-level nav item or as an extension of
    "Start Here" → "Reading Tibetan Script".
