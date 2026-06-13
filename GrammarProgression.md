# Grammar & Vocabulary Progression

A running record of which grammar concepts and major vocabulary items are
introduced in each book, so future books can build on what's already been
taught and avoid re-teaching the same point from scratch. Update this file
whenever a new book is added (see `IngestContent.md` step 11).

Each entry lists only **new** grammar/vocab — items reused from earlier
books aren't repeated unless the reuse itself is notable (e.g. a word
gaining a new grammatical role).

## Cross-cutting grammar notes

- **Topic marker ནི** — introduced in Book 1, used in nearly every sentence
  across both series as the default topic/subject marker.
- **Possessive particle** — vowel-final words take attached **འི** (absorbed
  into the separator by the tokenizer, not its own clickable word);
  consonant-final words take separate **གི** (clickable, `meaning: "of
  (possessive)"`). Established Book 1.
- **Locative/dative particle ལ/ར** — vowel-final words take a fused **ར**
  (absorbed into the separator); consonant-final words take separate **ལ**
  (clickable). Introduced Book 2 with meaning "to/at/in (locative
  particle)"; reused throughout the Tenzin series with the broader meaning
  "to/for (particle)" (dative/possessive-existential use, e.g. "X has Y" as
  "X ལ Y ཡོད").
- **Verb forms as separate vocabulary entries** — for any new verb, up to
  three `words[]` entries: base form, negation `མ་<verb>` ("did not ..."),
  and a question form. Each counts toward `uniqueWords`. Established Book 1
  with ཡིན/མིན/ཡིན་ནམ, extended to ordinary verbs from Book 2 onward.
- **Question-particle assimilation** — the verb question suffix surfaces in
  several forms depending on the preceding sound, all glossed as "...?
  (question)":
  - **-ནམ** after ཡིན (ཡིན་ནམ)
  - **-སམ** after ས/ད/ང-class finals (འཁྲུངས་སམ, ཐོབ་སམ, བསྟན་སམ, འདས་སམ,
    འཕེལ་སམ, ཤི་སམ, མཐོང་སམ, འགྲོ་སམ, ན་སམ, འགྱུར་རམ — note འགྱུར takes -རམ)
  - **-རམ** after ར/ལ-class finals (འགྱུར་རམ, ཟེར་རམ, ཁྱོད ... )
  - **-དམ** after ད/ད-class finals for existentials (ཡོད་དམ)
  - **-ངམ** after ང-class finals (མཐོང་ངམ, ཡོང་ངམ, འགྲོ་གམ — note འགྲོ takes
    -གམ in the Tenzin series vs. -སམ in the Buddha series)
  - **-ལམ** after ལ (འཚོལ་ལམ)

  The Buddha series has settled mostly on -སམ/-རམ for new verbs; the Tenzin
  series (written for younger readers, simpler phonetics) has used
  -ངམ/-གམ/-ལམ more. Either is grammatically valid Tibetan sandhi — pick
  whichever matches the verb's actual final consonant class, and stay
  consistent with how that verb has already appeared if it's reused.
- **Desiderative compound `<verb>འདོད`** — "wishes to ...", written as its
  own `words[]` entry (not a separate འདོད + verb pair). Introduced Book 3
  with མཐོང་འདོད ("wishes to see"); extended Book 5 with འགྲོ་འདོད ("wishes
  to go") and འགྱུར་འདོད ("wishes to become"). The standalone negation
  མི་འདོད ("does not wish") also appears from Book 5 (Buddha) / the Tenzin
  series independently.
- **Progressive/continuous aspect `<verb>་གི་ཡོད`** — "is ...-ing"
  ("is sleeping" ཉལ་གི་ཡོད, "is eating" ཟ་གི་ཡོད, "is playing" རྩེ་གི་ཡོད),
  with question form `<verb>་གི་ཡོད་དམ` and negation `<verb>་གི་མེད`.
  Introduced in the Tenzin series (Book 103, "Drolma Wants to Sleep") — not
  yet used in the Buddha series.
- **Cardinal numbers** — གཅིག/གཉིས/གསུམ (1/2/3) introduced Book 6. Not verbs,
  so no question/negation forms — just single vocabulary entries used as
  predicates ("X ནི <number> ཡིན" = "there are <number> X").
- **Plural marker ཚོ** — informal plural suffix (e.g. གྲོགས་པོ་ཚོ
  "companions"), introduced Book 6.
- **Ordinary (non-honorific) past-tense verbs** — Book 2's verb-forms
  convention extended to everyday transitive verbs: སྐྱེས/སྐྱེས་སམ/མ་སྐྱེས
  ("arose"/"arose?"/"did not arise"), ཟོས/ཟོས་སམ/མ་ཟོས
  ("ate"/"ate?"/"did not eat"), བྱིན/བྱིན་ནམ/མ་བྱིན
  ("gave"/"gave?"/"did not give" — note -ནམ here since བྱིན ends in ན).
  Introduced Book 6.

---

## Buddha Series (ids 1-99)

### Book 1 — Who is the Buddha? (id 1, uniqueWords 23)

**New grammar:**
- Identity copula **ཡིན / མིན / ཡིན་ནམ** ("is" / "is not" / "is it?") — the
  foundational sentence pattern for the whole project.
- Possessive **གི** (consonant-final, clickable).
- Topic marker **ནི**.

**New vocabulary:** family/role nouns — རྒྱལ་པོ (king), རྒྱལ་མོ (queen),
དགེ་སློང (monk), དགེ་སློང་མ (nun), ཆུང་མ (wife), ཁྱོ་ག (husband), བུ (son),
ཕྲུ་གུ (child), པ (father), ཡུམ (mother, honorific), མེས་པོ (grandfather),
ཆེན་པོ / ཆེན་མོ (great, masc./fem.); names — སངས་རྒྱས (Buddha), ཙུད་དོ་དན
(Śuddhodana), མ་ཡ (Māyā), ཡ་ཤོ་ཊ་ར (Yaśodharā), ར་ཧུ་ལ (Rāhula).

### Book 2 — Where Did the Buddha Go? (id 2, uniqueWords 39)

**New grammar:**
- Locative particle **ལ/ར** (see cross-cutting notes).
- Verb forms as separate vocabulary entries, applied to 5 honorific
  past-tense verbs: **འཁྲུངས** (was born), **བྱོན** (went, honorific),
  **ཐོབ** (attained), **བསྟན** (taught), **འདས** (passed away), each with
  negation `མ་<verb>` and question `<verb>་སམ`.

**New vocabulary:** ནས (from), ད་ལྟ (now), place names — ལུམ་བི་ནི
(Lumbinī), རྡོ་རྗེ་གདན (the Vajra Seat / Bodh Gaya), རི་དྭགས་ནགས (the Deer
Park), རྩྭ་མཆོག་གྲོང (Kushinagar); adjectives — མཛེས་པོ (beautiful), གནས་ཆེན
(sacred place); nouns — ནགས (forest), ཆོས (Dharma/teaching), བྱང་ཆུབ
(enlightenment), འཁྲུངས་ཡུལ (birthplace), གྲོང (town).

### Book 3 — The Birth of the Prince (id 3, uniqueWords 49)

**New grammar:**
- Existential **ཡོད / ཡོད་དམ / མེད** ("there is" / "is there?" / "there is
  not"), contrasted directly with the identity copula ཡིན/མིན/ཡིན་ནམ.
- Future tense **འགྱུར / འགྱུར་རམ / མི་འགྱུར** ("will become" / "will
  become?" / "will not become").
- Desiderative compound **<verb>འདོད** (e.g. མཐོང་འདོད "wishes to see"),
  alongside the underlying verb's own base/question/negation triple (མཐོང /
  མཐོང་སམ / མ་མཐོང "saw" / "saw?" / "did not see").

**New vocabulary:** names — ཨ་སི་ཏ (Asita), and roles/adjectives —
དྲང་སྲོང (sage), བྲམ་ཟེ (Brahmin), ལྷ (god/divine being), དགའ་པོ (happy),
མང་པོ (many), ཀ་པི་ལ་བ་སྟུ (Kapilavastu), ཕོ་བྲང (palace), རྒྱལ་བུ (prince),
སྦྲུམ་མ (pregnant), སུ (who), འདི (this), སྐྱོ་པོ (sad).

### Book 4 — Inside the Palace (id 4, uniqueWords 51)

**New grammar:**
- Mortality verb pair **ཤི / ཤི་སམ / མ་ཤི** ("died" / "died?" / "did not
  die") — completes the life-cycle pair with Book 2's འཁྲུངས ("was born").
- Naming/epithet verb **ཟེར / ཟེར་རམ / མི་ཟེར** ("is called" / "is called?" /
  "is not called").
- Growth verb **འཕེལ / འཕེལ་སམ / མ་འཕེལ** ("grew" / "grew?" / "did not
  grow").

**New vocabulary:** གྲོང་ཁྱེར (city), ཁྱིམ (house), ཡང (also/too), དཔལ་འབྱོར
(prosperity), མཚན (name), གཞན (other), དོན་གྲུབ (Döndrub — epithet meaning
"one whose aims are accomplished"), སྲིང་མོ (younger sister), གཽ་ཏ་མི
(Gautamī — Māyā's sister, the prince's "other mother"), བུ་མོ (girl/
daughter), སྐྱིད་པོ (happy — synonym to Book 3's དགའ་པོ).

### Book 5 — The Prince is Troubled (id 5, uniqueWords 40)

**New grammar:**
- Motion verb pair **འགྲོ / འགྲོ་སམ / མི་འགྲོ** ("goes" / "goes?" / "does not
  go").
- Sickness verb pair **ན / ན་སམ / མ་ན** ("is sick" / "is sick?" / "is not
  sick").
- Desiderative compounds extending Book 3's pattern: **འགྲོ་འདོད** ("wishes
  to go"), **འགྱུར་འདོད** ("wishes to become"), and standalone **མི་འདོད**
  ("does not wish").

**New vocabulary:** ཕྱི་རོལ (outside), ལམ (road), མི (person/man), རྒན་པོ
(old), སྡུག་བསྔལ (suffering), སེམས་ཁྲལ (troubled/worried — the book's title
concept). Reuses དགེ་སློང (monk) from Book 1.

### Book 6 — The Tigress Jataka (id 6, uniqueWords 46)

First book of the *jātakamālā* ("garland of birth stories") section of the
series — a self-contained past-life story rather than a continuation of
Siddhartha's biography, built around the classic Tigress Jataka
(self-sacrifice for a starving tigress and her cubs).

**New grammar:**
- Cardinal numbers **གཅིག / གཉིས / གསུམ** (1/2/3) — first numbers in the
  series, used predicatively ("X ནི <number> ཡིན").
- Plural marker **ཚོ** (e.g. གྲོགས་པོ་ཚོ "companions").
- Ordinary (non-honorific) past-tense verb triples: **སྐྱེས / སྐྱེས་སམ /
  མ་སྐྱེས** ("arose" / "arose?" / "did not arise"), **ཟོས / ཟོས་སམ / མ་ཟོས**
  ("ate" / "ate?" / "did not eat"), **བྱིན / བྱིན་ནམ / མ་བྱིན** ("gave" /
  "gave?" / "did not give").

**New vocabulary:** བྱང་ཆུབ་སེམས་དཔའ (bodhisattva), སྟག་མོ (tigress),
སྟག་ཕྲུག (tiger cub), ལྟོགས་པ (hungry), སྙིང་རྗེ (compassion), ལུས (body),
གྲོགས་པོ (friend/companion), ཟས (food), སྐྱེས་རབས (birth story/jataka),
སྦྱིན་འདོད ("wishes to give" — desiderative compound, extends the Book
3/5 pattern), མི་འདོད ("does not wish"). Reuses མཐོང, ཤི/ཤི་སམ/མ་ཤི, འགྱུར/
འགྱུར་རམ, སྐྱོ་པོ, སྐྱིད་པོ, མིན, དང, ནི, ལ, འདི, ཡིན/ཡིན་ནམ, ཡོད/ཡོད་དམ/མེད,
མི (person), སངས་རྒྱས from earlier books.

---

## Tenzin Series (ids 100-199)

### Book 101 — Tenzin is Not Happy (uniqueWords 20)

The simplest book in the project — establishes the core copula pattern for
younger learners with a minimal vocabulary set.

**New grammar:**
- Identity copula **ཡིན / མིན / ཡིན་ནམ**, topic marker **ནི** (same pattern
  as Buddha Book 1, independently introduced for this series).
- Perception verb pair **མཐོང / མཐོང་ངམ / མི་མཐོང** ("sees" / "sees?" /
  "does not see") — note the **-ངམ** question form (vs. Buddha series'
  -སམ for the same verb).
- Desiderative **འདོད / འདོད་དམ** ("wants" / "wants?").

**New vocabulary:** names — བསྟན་འཛིན (Tenzin), སྒྲོལ་མ (Drolma); nouns —
ཕྲུ་གུ (child), ཁྱི (dog), སྤྲེའུ (monkey), ཨ་མ (mother), བུ (son);
possessive **གི**; adjectives — སྐྱིད་པོ (happy), སེམས་སྐྱོ་པོ (sad); and
connector **དང** (and).

### Book 102 — Where Did the Parrot Go? (uniqueWords 30)

**New grammar:**
- Existential **ཡོད / ཡོད་དམ / མེད**, here glossed "there is/has" / "is
  there?/has?" / "there is not/does not have" — used for possession (dative
  construction "X ལ Y ཡོད" = "X has Y"), as well as plain existence.
- Motion verb pair **འགྲོ / འགྲོ་གམ** ("goes" / "goes?") — note the **-གམ**
  question form here, vs. Buddha series' -སམ.
- Search verb pair **འཚོལ / འཚོལ་ལམ** ("searches" / "searches?").
- Question word **ག་པར** ("where").
- Locative/dative particle **ལ** ("to/for").

**New vocabulary:** names — ཟླ་བ (Dawa); nouns — ནེ་ཙོ (parrot), གྲོགས་པོ
(friend), ཤིང (tree), ཁུང་བུ (hollow), ཚང (nest), ནང (inside), ཅི (what);
adjectives — ཆེན་པོ (big), ཆུང་ཆུང (small), མིན (not), སེམས་སྐྱོ་པོ (sad),
སྐྱིད་པོ (happy); connector དང.

### Book 103 — Drolma Wants to Sleep (uniqueWords 35)

**New grammar:**
- **Progressive/continuous aspect** `<verb>་གི་ཡོད / <verb>་གི་ཡོད་དམ /
  <verb>་གི་མེད` ("is ...-ing" / "is ...-ing?" / "is not ...-ing") — new
  construction for this series, applied to three verbs: ཉལ (sleep) →
  ཉལ་གི་ཡོད/ཉལ་གི་ཡོད་དམ/ཉལ་གི་མེད; ཟ (eat) →
  ཟ་གི་ཡོད/ཟ་གི་ཡོད་དམ/ཟ་གི་མེད; རྩེ (play) →
  རྩེ་གི་ཡོད/རྩེ་གི་ཡོད་དམ.
- Desiderative **འདོད / འདོད་དམ / མི་འདོད** ("wants" / "wants?" / "does not
  want") — now with all three forms (Book 101 only had the first two).
- Coming verb pair **ཡོང / ཡོང་ངམ** ("comes" / "comes?").
- Sequencer **དེ་ནས** ("then").

**New vocabulary:** names — པདྨ (Padma); kinship — བུ་མོ (daughter/girl),
ཕུ་བོ (older brother), སྲིང་མོ (younger sister); nouns — ཟས (food), ཁྱིམ
(home); adjectives — ཆུང་ཆུང (small); reuses possessive གི, locative ལ,
topic ནི, connector དང, and the existing perception verb མཐོང from Book 101.

### Book 104 — Norbu is Afraid (uniqueWords 56)

**New grammar:**
- Fear verb triple **སྐྲག / སྐྲག་གམ / མི་སྐྲག** ("is afraid" / "is afraid?" /
  "is not afraid") — the book's central theme, set up in chapter 1 and
  resolved in chapter 7's title ("Norbu is Not Afraid").
- Climbing verb triple **འཛེགས / འཛེགས་སམ / མི་འཛེགས** ("climbs" / "climbs?"
  / "does not climb").
- **Ability modal `<verb>ཐུབ / <verb>མི་ཐུབ`** ("can ..." / "cannot ...") —
  new construction for this series, introduced as **འཛེགས་ཐུབ / འཛེགས་
  མི་ཐུབ** ("can climb" / "cannot climb"); pays off in the final chapter
  when Norbu can climb up but not down.
- Desiderative pattern extended to **འཛེགས་འདོད / འཛེགས་འདོད་དམ / འཛེགས་
  མི་འདོད** ("wants to climb" / "wants to climb?" / "does not want to
  climb") — completes all three forms for this verb in a single book.
- Negation **མི་འགྲོ** ("does not go") completes the འགྲོ/འགྲོ་གམ pair from
  Book 102.
- Negation **མི་ལྟ** ("does not look") alongside new progressive
  **ལྟ་གི་ཡོད** ("is looking"), extending Book 103's progressive pattern to
  a new verb.

**New vocabulary:** names — ནོར་བུ (Norbu, Tenzin's friend); nouns — ཕྱི
(outside), ཡལ་ག (branch), སྟེང (on top of/above), སྒེའུ་ཁུང (window), གཟུགས
(figure/shape), སྲིན་པོ (demon), སེམས (mind), ཡུལ་ལྗོངས (view/scenery);
adjectives — མཛེས་པོ (beautiful, reused from Buddha Book 2), མང་པོ (many,
reused from Buddha Book 3); particles/adverbs — ནས (from), ཡང (also/again),
དེ (that), ཡར (up), མར (down), ཇི་ལྟར (how); verb — ལྟ (looks at). Reuses
ནང (inside) from Book 102.
