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
- **Agentive/instrumental case** — marks the doer of a transitive verb (or
  "by/with" an instrument). Vowel-final words fuse **-ས** directly onto the
  stem and need their own `words[]` compound entry (e.g. སྟག་མོས "tigress
  (agentive)" from སྟག་མོ, ངས "I (agentive)" from ང, དགའ་པོས "happily" from
  དགའ་པོ); consonant-final words take a separate clickable particle **གིས**
  (e.g. ཁོང་གིས "he/she (agentive)"). Distinct from the possessive འི/གི and
  locative ར/ལ, which use the same fusion split but different particles.
  Introduced Book 6 (revised).
- **Negative future `<verb>་མི་འགྱུར`** — "will not ..."; negates the future
  auxiliary འགྱུར (Book 3) directly, vs. negating the main verb. Bare འགྱུར
  remains the positive future marker. Introduced Book 6 (revised).
- **Negative perfective མ་སོང** — "did not go", the first past-tense
  negation using མ rather than མི (pairs with positive perfective སོང from
  Book 5's question-particle work). Introduced Book 6 (revised).
- **Conditional `<verb>ན`** — "if ..." (e.g. ཟོས་ན "if [she] ate").
  Introduced Book 6 (revised).
- **Purpose infinitive `<verb>བར`** — "to ..." (e.g. འཚོལ་བར "to seek").
  Introduced Book 6 (revised).
- **Optative/potential `<verb>སྲིད`** — "might/would ..." (e.g. ཟ་སྲིད "might
  eat"). Introduced Book 6 (revised).
- **Progressive participle `<verb>བཞིན་པ` (+འི)** — "[noun] that is
  ...-ing/being ...-ed", from converb བཞིན ("while") + nominalizer -པ, takes
  possessive འི to modify a following noun (e.g. ཟ་བཞིན་པའི་ལུས "the body
  being eaten"). Resultative -བ on intransitive verbs works the same way
  (ལྷུང་བ "fallen", from ལྷུང "to fall"). Introduced Book 6 (revised).
- **Indefinite article ཞིག** — "a, a certain, one", contrasts with
  demonstrative འདི "this". Introduced Book 6 (revised).

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

### Book 6 — The Tigress Jataka (id 6, uniqueWords 81)

First book of the *jātakamālā* ("garland of birth stories") section of the
series — a self-contained past-life story rather than a continuation of
Siddhartha's biography, built around the classic Vyāghrī Jātaka
(self-sacrifice for a starving tigress and her cubs). Sentence-by-sentence
adaptation of amarahasa's `jatakamala/1` page (38 Sanskrit sentences, the
book's only chapter on amarahasa), split across 4 app chapters. This
replaces an earlier 9-chapter placeholder draft (previously documented here
at uniqueWords 46 with cardinal numbers, plural ཚོ, and ordinary past-tense
verb triples) that did not match amarahasa's actual content — none of that
placeholder vocabulary (cardinals, ཚོ, སྐྱེས་རབས, etc.) remains.

**New grammar:** see cross-cutting notes for agentive/instrumental case,
negative future `<verb>་མི་འགྱུར`, negative perfective མ་སོང, conditional
`<verb>ན`, purpose infinitive `<verb>བར`, optative `<verb>སྲིད`, progressive
participle `<verb>བཞིན་པ`/resultative `<verb>བ`, and indefinite article ཞིག
— all introduced here.

**New vocabulary:** བྱང་ཆུབ་སེམས་དཔའ (bodhisattva), སློབ་མ (disciple),
སྟག་མོ (tigress), སྟག་ཕྲུག (tiger cub), རི / རི་ཕུག (mountain / mountain
cave), སྙིང་རྗེ (compassion), ལུས (body), ཟ / ཟོས (eat / ate), ཟས (food),
ཅང ("anything"; with negation = "nothing"), ལྟོགས་པ (hunger), སྡུག་བསྔལ
(suffering), རང (own/self), གཞན (other), གསོད (kill), ཤི (die), ཡོང (come),
འགྲོ (go), རྒྱུ (wander), ཕྱིར (back), ངོ་མཚར (wonderful), ཤིན་ཏུ
(very/truly), བསམ(ས) (think/thought), སྨྲ(ས) (speak/spoke), སྐྱེས (arose),
བཙས (gave birth), ལྟོས (Look!, imperative), ལགས (vocative/polite particle),
སོང (perfective marker / Go!), ནས (having .../after), ཤོག (optative "may it
be"), དེ་ལྟར (thus, so), དེས (thus, by this), སྔོན་ཆད (formerly), ལྷན་ཅིག
(together), ལྟར (like, as), ཁོང (he/she, honorific), མོ (she). Reuses
མཐོང, འདོད, དགོས, འོན་ཀྱང, དེས་ན, ཆེན་པོ, ནི from earlier books.

---

### Book 7 — The Diamond Sutra (id 7, uniqueWords 162)

First book to use the **levels schema**: each chapter has `levels: [...]`
(four difficulty levels) instead of a flat `textTibetan`/`words`, mirroring
amarahasa's nested `<s-panel>` structure where each chapter page presents the
same content at increasing density — informal paraphrase, plain narrative,
canonical sutra register, and a maximally sandhi-compounded canonical
version. Each level's `words[]` is fully self-contained (re-declares every
reused word, down to single-syllable particles), since each level is
tokenized independently.

**Chapter 1 — The Buddha** (4 levels, 41 sentences): opens the sutra's
narrative frame — the Buddha residing at Shravasti's Jeta Grove, going on the
alms round, returning, and the monks assembling before him.

New grammar:
- Naming construction `<noun> ཟེར` — "is called ..." (ནགས་འདི་ནི་ཛེ་ཏ་ཝ་ན་ཟེར,
  "this forest is called Jetavana").
- Comitative `དང་ལྷན་ཅིག་<verb>` — "resides/dwells together with ..." (pairs
  ལྷན་ཅིག, Book 6, with the honorific verb གནས/བཞུགས).
- Honorific residing verb བཞུགས vs. plain གནས — register distinction for the
  Buddha vs. ordinary subjects, foundational for Chapter 2's broader
  humble/honorific system.
- Motion verbs ཞུགས ("enters") and རྒྱུ ("goes around, wanders") with the
  purpose infinitive `<verb>བར` (Book 6): བསོད་སྙོམས་ལེན་པར...ཞུགས/རྒྱུ
  ("enters/goes around to receive alms"). Compound directional ཕྱིར་ལོག
  ("returned, went back").
- General narrative past marker `<verb>སོང`, extended from its
  question-particle/perfective use (Books 5–6) to ordinary past-tense
  narration throughout Levels 2–4.
- Sutra opening formula འདི་སྐད་བདག་གིས་ཐོས་པ — "Thus have I heard",
  introducing literary བདག ("I") and nominalized ཐོས་པ ("having heard").
  Temporal phrase དུས་གཅིག་ན — "at one time" (locative ན used temporally).
- Numeral compounding: སྟོང་ཕྲག་གཅིག་དང་བརྒྱ་གསུམ — "one thousand and three
  hundred" (cardinal addition via དང).
- Fixed ritual-gesture verb phrases: སྐྱིལ་ཀྲུང་བཅས ("sat cross-legged"),
  ལུས་དྲང་པོར་བསྲང ("straightened the body"), དྲན་པ་བཞག ("established
  mindfulness" — reused register-shifted in Ch.2 Level 4), མགོས་ཕྱག་འཚལ
  ("bowed the head in homage"), ལན་གསུམ་བསྐོར ("circled three times"),
  ཞབས་བཀྲུས ("washed the feet"), ཕྱོགས་གཅིག་ཏུ ("to one side", new
  terminative ཏུ).
- Level 4's closing sentence chains 9 converbs (ནས) into a single sentence —
  the densest converb chain in the series so far, mirroring amarahasa's
  extreme sandhi-compounding at this level.

New vocabulary: ཤྲ་བ་སྟི (Shravasti), གྲོང་ཁྱེར་ཆེན་པོ (great city),
ནགས/ཚལ (forest/grove), ཛེ་ཏ་ཝ་ན (Jetavana), ཨ་ནཱ་ཐ་པིན་ད་ད (Anathapindada),
དགེ་སློང (monk), བཅོམ་ལྡན་འདས (Blessed One), ངལ་གསོ (rested), ལྷུང་བཟེད
(begging bowl), ཆོས་གོས (robes, reused Ch.2), བསོད་སྙོམས (alms), ཟས/ཟོས
(food/ate, reused from Book 6), ཞོགས་པ (morning), གདན (seat), ཚོགས་ཆེན་པོ
(great assembly), ཕྱིན (went, perfective of འགྲོ), ཞབས (feet, honorific),
དེ་དག (those, plural demonstrative).

**Chapter 2 — Subhūti** (4 levels, 65 sentences): Subhūti rises, prostrates
before the Buddha, and opens the sutra's central dialogue.

New grammar:
- Honorific vs. humble speech verbs: གསུངས ("said", honorific — for the
  Buddha) vs. ཞུས/ཞུས་པ ("said", humble — for Subhuti). Levels 1–4.
- Register-graded pronouns: informal ང/ངས ("I") and ཁྱོད ("you") in
  Levels 1–2 vs. formal བདག ("I") and honorific ཁྱེད ("you") in Levels 3–4.
- Exclamatory nominalized-clause patterns: `[verb-stem]་བ་ཡ་མཚན་ཏོ` ("it is
  amazing that ...") and `[verb-stem]་བ་ཡིན་ནོ` ("it is so that ...").
  New emphatic sentence-final particles ཏོ/སོ/ནོ (distinct from plain །).
  Levels 2–4.
- New case particles: ablative ལས ("from"), terminative དུ/ཏུ variants,
  temporal ན (reused from Ch.1's དུས་གཅིག་ན).
- New conjunctions: འམ ("or"), དང ("and"; also joins predicates,
  `X-ba dang Y-par gyur`), སྟེ ("and, so that" — connector after
  consonant-final stems, paired with ནས after vowel-final/converb stems),
  དེ་བས ("therefore").
- Quotative particle standardized to ཞེས (not ཅེས) throughout, for
  consistency.
- Honorific epithets: དེ་བཞིན་གཤེགས་པ (Tathagata), བདེ་བར་གཤེགས་པ
  (Sugata, "Well-Gone One"), and the compound
  དེ་བཞིན་གཤེགས་པ་དགྲ་བཅོམ་པ་ཡང་དག་པར་རྫོགས་པའི་སངས་རྒྱས
  (Tathagata-Arhat-Samyaksambuddha), tokenized as a single `words[]` entry.
- Imperative ཉོན ("listen!"); future auxiliary བྱ ("will ...").
- Level 4 (densest): re-renders Level 3's 24 sentences as 10 by chaining
  predicates with དང/ནས/སྟེ — including a 6-converb mega-sentence (rising
  from the seat → draping the robe → kneeling → folding the hands →
  prostrating → speaking) mirroring Ch.1 Level 4's converb-chaining density,
  plus relativization `ཞུགས་པ་དེ` ("that one who has set out [on the great
  vehicle]") folding a subordinate clause into the question's subject.

New vocabulary: སུ་བྷུ་ཏི (Subhuti), ཚེ་དང་ལྡན་པ (venerable), སྟན (seat),
པུས་མོ (knee), གཡས་པ (right side), ཐལ་མོ་སྦྱར (folds palms in salutation),
ཕྱག་འཚལ (prostrated), ཡ་མཚན (amazing), མཆོག (supreme),
བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོ (bodhisattva mahasattvas, plural of
Book 6's singular), རྗེས་སུ་བཟུང(་བ) (favored/entrusted, nominalized),
གདམས་པ (entrusted/instructed), རིགས་གི་བུ/བུ་མོ (son/daughter of good
family), ཐེག་པ་ཆེན་པོ (great vehicle), གང་ཟག (person), དྲན་པ (mindfulness,
reused from Ch.1 Level 4), ལེགས་སོ (excellent!).

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
