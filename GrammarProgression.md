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
  Introduced Book 6 (revised); independently introduced for the Tenzin
  series in Book 103 (revised) for dialogue attribution ("X ཟེར" — X says),
  e.g. སྒྲོལ་མས་ཟེར, པདྨས་ཟེར, བསྟན་འཛིན་གིས་ཟེར.
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
  eat"), with negation `<verb>མི་སྲིད` ("might not ..."). Introduced Book 6
  (revised); independently introduced for the Tenzin series in Book 103
  (revised).
- **Gerundive obligation `<verb>དགོས`** — "must ..." (e.g. ཉལ་དགོས "must
  sleep", རྩེ་དགོས "must play"). Introduced Book 103 (revised).
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

### Book 103 — Drolma Wants to Sleep (uniqueWords 49)

Sentence-by-sentence adaptation of amarahasa's "nalinī nidrāluḥ"
(saṃjayalokaḥ series book 3, 7 chapters): Drolma is a sleepy mother, but
baby Padma won't sleep. Padma is fed, then shuttled between Drolma and
Tenzin, finally allowed to play, and falls asleep happy along with Tenzin —
leaving Drolma, now that the house is quiet, unable to sleep herself.

**New grammar:**
- **Progressive/continuous aspect** `<verb>་གི་ཡོད / <verb>་གི་མེད` ("is
  ...-ing" / "is not ...-ing") — new construction for this series (see
  cross-cutting notes), applied to ཉལ (sleep) → ཉལ་གི་ཡོད/ཉལ་གི་མེད, ཟ (eat)
  → ཟ་གི་ཡོད, རྩེ (play) → རྩེ་གི་ཡོད.
- Desiderative predicate/modifying adjective pair extended to a new verb:
  **ཉལ་འདོད་པོ** ("sleepy", predicate) / **ཉལ་འདོད་པ** ("sleepy", modifying,
  absorbs འི), mirroring སྐྱིད་པོ/སྐྱིད་པ.
- Perfective verb pair **ཕྱིན / མ་ཕྱིན** ("went" / "did not go") — past tense
  of འགྲོ, the first ordinary past-tense verb pair in the Tenzin series.
- Verb-root imperatives/hortatives: bare-root imperative (ཟོ "eat!", སོང
  "go!"), suffixed imperative `<verb>དང` (ཉལ་དང "go to sleep!"), and
  hortative `<verb>ཨང` (རྩེད་ཨང "let's play!").
- Negative past compound **མ་རྩེད** ("has not played"), parallel to མ་ཕྱིན.
- Gerund/converb `<verb>ནས` on ordinary verbs (ཟོས་ནས "having eaten",
  རྩེད་ནས "having played"), extending Buddha Book 2's ནས to the Tenzin
  series.
- See cross-cutting notes for this book's independent introduction of the
  **agentive case** (dialogue attribution "X ཟེར" — སྒྲོལ་མས་ཟེར, པདྨས་ཟེར,
  བསྟན་འཛིན་གིས་ཟེར), the **optative `<verb>སྲིད`/`<verb>མི་སྲིད`** ("might
  .../might not ..."), and the **gerundive obligation `<verb>དགོས`** ("must
  ...").
- **2nd-person pronoun ཁྱོད** ("you") — the first personal pronoun in the
  Tenzin series.

**New vocabulary:** names — པདྨ (Padma, baby); nouns — བུ་ཆུང (baby); verbs —
ཉལ (sleeps), ཟ/ཟོས (eats/ate), རྩེ/རྩེད (plays/played), ཟེར (says);
interjection ཨང་ཨང (baby's cry, "waah"); question words སུ (who, shared with
Buddha Book 3) and ཅི (what). Reuses ནི, ཨ་མ, ཡིན, སྐྱིད་པོ/སྐྱིད་པ,
བསྟན་འཛིན, གི, ཕྲུ་གུ, འདོད/འདོད་དམ/མི་འདོད, ཅིའི་ཕྱིར, ཡིན་ནམ, མིན,
མི་སྐྱིད་པ, འགྲོ, ལ, and དང from Books 101–102.

### Book 104 — Norbu is Afraid (uniqueWords 81)

Sentence-by-sentence adaptation of amarahasa's "āroha, rāhula!"
(saṃjayalokaḥ series book 4, 8 chapters): Norbu is afraid of the big tree
outside his house. With Dawa's encouragement he approaches it, but glimpses
a frightening figure in its branches. The "demon" turns out to be a boy,
Tenzin, who teaches Norbu to climb — and Norbu, having climbed up, ends the
book unable to climb back down.

**New grammar:**
- **1st/2nd-person pronouns ང (I) / ཁྱོད (you)** — the first personal
  pronouns in this series besides ཁྱོད's earlier introduction in Book 103;
  here both are used throughout, plus possessives **ཁྱོད་ཀྱི** ("your") and
  **ང་ཡི** ("my").
- Fear verb triple **སྐྲག / སྐྲག་གམ / མི་སྐྲག** ("is afraid" / "is afraid?" /
  "is not afraid"), plus adjective **སྐྲག་པོ** ("afraid") — the book's
  central theme, set up in chapter 1 and resolved in chapter 7's title
  ("Norbu is Not Afraid").
- **Nominalizer/relative-clause marker པ / པའི**: `<verb>པ` nominalizes a
  verb ("the act of X-ing", e.g. འཛེགས་པ་ལ་སྐྲག "afraid of climbing"); `<verb>
  པའི <noun>` forms a relative clause ("the noun that X-s", e.g. ཤིང་ལ་
  སྐྲག་པའི་ཕྲུ་གུ "a child who is afraid of the tree").
- **Desiderative pattern** X་འདོད / X་མི་འདོད / X་འདོད་དམ extended across
  five verbs in this book: འཛེགས་འདོད (wants to climb), མཐོང་འདོད (wants to
  see), འགྲོ་འདོད (wants to go), ཤེས་འདོད (wants to know), སློབ་འདོད (wants
  to teach) — with question forms འཛེགས་འདོད་དམ, ཤེས་འདོད་དམ, འགྲོ་འདོད་དམ,
  མཐོང་འདོད་དམ.
- **Knowledge modal `<verb>ཤེས / <verb>མི་ཤེས / <verb>ཤེས་སམ`** ("knows how
  to X" / "does not know how to X" / "knows how to X?"), introduced as
  འཛེགས་ཤེས / འཛེགས་མི་ཤེས / འཛེགས་ཤེས་སམ.
- **Gerundive obligation `<verb>དགོས`** ("must X") and its negation
  `<verb>མི་དགོས` ("must not X") — འགྲོ་དགོས, འཛེགས་དགོས, མཐོང་དགོས,
  འགྲོ་མི་དགོས.
- **Future `<verb>འགྱུར`** ("will X") — ཤེས་འགྱུར, འཛེགས་འགྱུར.
- **Progressive `<verb>གི་ཡོད`** ("is X-ing"), extending Book 103's
  progressive pattern to འགྲོ (འགྲོ་གི་ཡོད) and འཛེགས (འཛེགས་གི་ཡོད).
- **Completive aspect `<verb>ཟིན`** ("has X-ed") — a new aspect marker
  distinct from the progressive, introduced as འཛེགས་ཟིན ("has climbed");
  pays off in the final chapter's cliffhanger (Norbu has climbed up but
  doesn't know how to climb down, མར་འཛེགས་མི་ཤེས).
- **Question particles by final consonant**: -སམ (འཛེགས་སམ, ཤེས་སམ,
  འཛེགས་ཤེས་སམ), -ངམ (མཐོང་ངམ), -གམ (འགྲོ་གམ, སྐྲག་གམ), -དམ (ཡོད་དམ,
  ཤེས་འདོད་དམ, འཛེགས་འདོད་དམ, འགྲོ་འདོད་དམ, མཐོང་འདོད་དམ).
- **Imperatives `<verb>དང`** ("X!") — འཛེགས་དང, འགྲོ་དང, སློབ་དང; plus bare
  ལྟོས ("look!").
- **Gerund/ablative ནས** ("from"/"having..."), chainable for multi-clause
  sentences (e.g. "ཤིང་ལ་འགྲོ་ནས་སྐྲག་ནས་ཁྱིམ་ལ་འགྲོ" = "having gone to the
  tree, out of fear, goes home"); also used idiomatically as "out of X"
  (སྐྲག་ནས = "out of fear").
- **Narrative speech-frames**: "<Name> ནི་བསམས།" ("X thought:") for Norbu's
  interior monologue/direct address, and "<Name> ནི་སྨྲས།" ("X said:") for
  other characters' dialogue — a consistent attribution pattern introduced
  in this book.
- **Vocative addressing**: "<Name/Noun>།" at the start of a line (e.g.
  "ཤིང།" "Tree!", "ནོར་བུ།" "Norbu!").
- **Directional verb compound མར་འཛེགས** ("climbs down/descends" = མར
  "down" + འཛེགས "climbs"), and the combined **མར་འཛེགས་མི་ཤེས** ("does not
  know how to climb down").
- New interrogative pronoun **སུ** ("who/whom"), alongside the chapter-5
  introduction of **ཅི** ("what") and the existing **ཅིའི་ཕྱིར** ("why").

**New vocabulary:** names — ནོར་བུ (Norbu); ཟླ་བ (Dawa, reusing Book 102's
character as Norbu's friend); བསྟན་འཛིན (Tenzin, revealed in chapter 7 as
the figure Norbu feared was a demon). Nouns — ཤིང (tree), ཁྱིམ (home),
སྲིན་པོ (demon), ཕྲུ་གུ (child). Adjectives — སྐྱིད་པོ (happy), སྐྲག་པོ
(afraid). Verbs — མཐོང (sees), འཛེགས (climbs), འགྲོ (goes), སྐྲག (is afraid),
སྨྲས (said), བསམས (thought), ཤེས (knows), སློབ (teaches), སྟོན (shows).
Particles/adverbs — ནང (inside, reused from Book 102), མར (down), ནས
(from/having), ཅི (what), ཅིའི་ཕྱིར (why), གཞན (other), ཨ་ཙི (ah!,
exclamation).

### Book 105 — Tenzin Wants to Play (uniqueWords 61)

Sentence-by-sentence adaptation of amarahasa's "sañjayaḥ kriditum icchati"
(saṃjayalokaḥ series book 5, 8 chapters): Tenzin wants to play, but his
mother Drolma is tired, baby sister Padma doesn't want him, and friend Norbu
has to go home. Tenzin wonders if anyone wants to play with him — and on the
way home meets Drolma's friend Dekyi and her daughter Dawa, who finally
wants to play with him.

**New grammar:**
- **1st-person "must" `ངས <verb>དགོས`** (ergative subject) vs. **2nd/3rd-
  person "must" `X་ནི <verb>དགོས`** (topic construction, no ergative) —
  refines Book 104's gerundive obligation with person-based marking;
  negation **`<verb>མི་དགོས`** (e.g. རྩེ་མི་དགོས "must not play"), parallel
  to Book 104's འགྲོ་མི་དགོས.
- **Negative universal quantifiers སུ་ཡང / ཅི་ཡང`<verb>མི་འདོད`** — "nobody
  wants ..." / "doesn't want anything", built on the existing
  interrogatives སུ (who) and ཅི (what) + ཡང ("even") + negated verb.
- **Possessive `X་གི <noun>` extended to personal names** (e.g.
  སྒྲོལ་མ་གི་གྲོགས་པོ "Drolma's friend", བསྟན་འཛིན་གི་ཁྱིམ "Tenzin's
  house"), reusing Book 101's possessive གི uniformly regardless of the
  preceding word's final letter.
- **Perfective ཕྱིན** ("went/has gone"), reused from Books 102–103 and
  newly added to this series' running vocabulary (ནོར་བུ་ནི་ཁྱིམ་ལ་ཕྱིན
  "Norbu has gone home").
- **Progressive `<verb>གི་ཡོད` extended to ལྟ** (look) — ལྟ་གི་ཡོད "is
  looking at", the first non-Book-103 verb to take this aspect marker in
  this series besides Book 104's འགྲོ་གི་ཡོད/འཛེགས་གི་ཡོད.
- **Imperative རྩེད་དང with object** — `X་དང་རྩེད་དང` ("play with me!"),
  combining Book 103's imperative རྩེད་དང with the comitative དང ("with").
- **Mid-sentence ellipsis "..."** for interrupted/incomplete utterances
  (e.g. འོན་ཀྱང་...ཡིན་ནམ "But ... ?", ཁྱོད་ནི་...ཅི་འདོད "You want ...
  what?!").
- Continues this series' narrative speech-frames ("X ནི་བསམས།" for Tenzin's
  POV thoughts, "X ནི་སྨྲས།" for other characters) and vocative+statement
  combining ("X། <statement>") from Book 104.

**New vocabulary:** names — བདེ་སྐྱིད (Dekyi, Drolma's friend, new character
for Shanta); ཟླ་བ (Dawa, reusing Book 102/104's character for Harini, here
Dekyi's daughter); ནོར་བུ, པདྨ, སྒྲོལ་མ (reused). Nouns — གྲོགས་པོ (friend),
ཁྱིམ (home, reused from Book 104), བུ་མོ (girl, reused from Book 102).
Verbs — རྩེ་འདོད/རྩེ་མི་འདོད (wants/doesn't want to play), འགྲོ་དགོས/
མཐོང་དགོས/རྩེ་མི་དགོས (must go/see/not play), མི་མཐོང (doesn't see), འགྲོ
(goes), ལྟ་གི་ཡོད (is looking at). Particles — སུ་ཡང (nobody), ཅི་ཡང
(anything/nothing), གཞན (other/someone, reused from Book 104), ལ
(to/in).

### Book 106 — Tenzin Sees a Monkey (uniqueWords 103)

Sentence-by-sentence adaptation of amarahasa's "sanjayo vanaram pasyati"
(saṃjayalokaḥ series book 6, 11 chapters): Tenzin wants to play with a
monkey but doesn't know where to find one. His mother Drolma is too tired
and busy with baby Padma to help; Dawa's mother Dekyi says Dawa has gone off
to play; and Norbu's mother Yangchen makes both boys eat before they can go
looking. While searching for Dawa, the boys find that a monkey has found
her first — and frightened her — before the monkey, named Haha, turns out to
want nothing more than to play, and becomes everyone's friend.

**New grammar:**
- **Optative/potential `<verb>སྲིད` extended**: མཐོང་སྲིད ("might see", ch1),
  ཤེས་སྲིད ("might know", ch1), འགྲོ་འདོད་སྲིད ("might want to go", ch1),
  ཟ་འདོད་སྲིད ("might want to eat", ch8), ཟ་སྲིད ("might eat", ch10) — the
  bare-stem optative from Book 6/103 now covers desideratives as well as
  plain verbs.
- **Purpose infinitive `<verb>བར`** (Book 6, Buddha series) enters the
  Tenzin series for the first time: མཐོང་བར ("to see", ch1), then རྩེ་བར
  ("to play") and ཟ་བར ("to eat") in ch4.
- **Laughing verb triple དགོད / མི་དགོད** ("laughs" / "does not laugh", ch2)
  with exclamation ཧ་ཧ་ཧ ("Ahaha!"); later distinguished from a shorter
  two-syllable exclamation ཧ་ཧ ("Ha! Ha!", ch8) — the source's
  escalation/de-escalation distinction is preserved as two separate
  `words[]` entries.
- **Eating-verb family**: desiderative/negation/obligation triple ཟ་འདོད /
  ཟ་མི་འདོད / ཟ་དགོས (ch3), question forms ཟོས་སམ ("have eaten?", ch4) and
  ཟ་འདོད་སམ ("want to eat?", ch7), and negative perfective མ་ཟོས ("has not
  eaten", ch3) extending Book 6's མ་<verb> negative-perfective pattern to a
  new verb.
- **Progressive `<verb>གི་ཡོད` extended to ཡོང`** ("comes") → ཡོང་གི་ཡོད ("is
  coming", ch2); its negative counterpart `<verb>གི་མེད` is introduced as
  ཟ་གི་མེད ("is not eating", ch10) — the first negative-progressive form in
  the series.
- **New imperatives** ཡོང་དང ("come!", ch3) and ལྟ་དང ("look!", ch9), joining
  the existing `<verb>དང` imperative pattern.
- **Indefinite ཞིག extended to nouns**: མི་ཞིག ("someone", ch7) and
  སྤྲེའུ་ཞིག ("a monkey", ch9), generalizing Book 6's "a/a certain" marker
  beyond its earlier uses.
- **Predicate-adjective frame `X་ལ་<adjective>་ཡིན`** — "X is [adjective] of/
  at Y", e.g. ཟླ་བ་ནི་སྤྲེའུ་ལ་སྐྲག་ཡིན ("Harini is scared of the monkey",
  ch8); a new use of the dative/locative ལ particle.
- **Object-pronoun-before-verb** for desideratives: སྤྲེའུ་ནི་ང་ཟ་འདོད་སྲིད
  ("the monkey might want to eat me", ch8–9) places the object pronoun
  directly before the verb with no case marker.
- **Mixed-person "must" construction**: for groups that include "I" (where
  Book 105 would otherwise require the 1st-person ergative ངས), the whole
  group becomes the topic instead — `X་དང་Y་དང་Z་ནི <verb>དགོས`, e.g.
  ཁྱོད་དང་ང་དང་ནོར་བུ་ནི་འགྲོ་དགོས ("You, I, and Norbu must go", ch9).
- **Locative compound `X་གི/ཡི་སྟེང་ལ་ཡོད`** — "is on X" (ch10): nouns take
  གི (སྤྲེའུ་ནི་བསྟན་འཛིན་གི་སྟེང་ལ་ཡོད, "the monkey is on Tenzin"),
  pronouns take ཡི (ང་ཡི་སྟེང་ལ་ཡོད, "is on me"), matching the existing
  noun/pronoun split for possessives.
- **Existential question `<verb>ནམ`**: ཡོད་ནམ ("is there?/has?", ch10),
  extending the question-particle family (cf. Book 104's -ངམ/-དམ).
- **Universal quantifier ཡང ("even/also") + སུ`** → སུ་ཡང ("anyone", ch10),
  paralleling Book 105's negative quantifiers (སུ་ཡང "nobody" with a negated
  verb vs. here with a question).
- **1st-person plural pronoun ང་ཚོ** ("we/us", ch11) — the series' first
  plural pronoun.
- **Naming pun preserved from source**: the monkey's name ཧ་ཧ (Haha,
  revealed ch11) is spelled identically to the two-syllable laughter
  exclamation ཧ་ཧ introduced in ch8 — a single `words[]` entry covers both
  senses with an expanded `meaning` gloss.

**New vocabulary:** names — དབྱངས་ཅན (Yangchen, Norbu's mother, ch5); ཧ་ཧ
(Haha, the monkey, ch11). Nouns/particles — མི (person), ཞིག (a/some,
indefinite), ཐང་ཆད (tired), ཅུང་ཟད (a little), སྟེང (on/on top of), ལས
(from/away from), ཡང (even/also), ང་ཚོ (we/us). Verbs/compounds — ཡོང/
ཡོང་གི་ཡོད/ཡོང་དང (comes/is coming/come!), ལྟ་དང (look!), དགོད/མི་དགོད
(laughs/does not laugh), ཟ་འདོད/ཟ་མི་འདོད/ཟ་དགོས/ཟ་འདོད་སམ/ཟ་འདོད་སྲིད/
ཟ་སྲིད/ཟ་གི་མེད/མ་ཟོས/ཟོས་སམ (eating-verb family: desiderative, negation,
obligation, question, optative-desiderative, optative, negative-progressive,
negative-perfective, perfective-question), མཐོང་སྲིད/ཤེས་སྲིད/
འགྲོ་འདོད་སྲིད (might see/know/want to go), མཐོང་བར/རྩེ་བར/ཟ་བར (purpose
infinitives: to see/to play/to eat), མཐོང་སམ (has seen?), ཡོད་ནམ (is
there?/has?). Exclamations — ཧ་ཧ་ཧ (Ahaha!), ཧ་ཧ (Ha! Ha! / Haha, the
monkey's name).

### Book 107 — Dekyi's Ring (uniqueWords 138)

Sentence-by-sentence adaptation of amarahasa's "aṅgulīyakam" (saṃjayalokaḥ
series book 7, 9 chapters): Dekyi has a beautiful ring to show her friend
Drolma. On the way, a curious bird startles Dekyi and makes off with the
ring; once Dekyi and Drolma reach Drolma's house, baby Padma goes missing —
and turns up holding Dekyi's ring, to everyone's relief and laughter. The
final chapter steps outside the present-tense frame entirely, narrating in
flashback exactly how the ring travelled from the bird to Padma.

**New grammar:**
- **Possessive-predicate frame `X་ལ་Y་Adj་ཡོད`** — "X has a [adjective] Y"
  (ch1): བདེ་སྐྱིད་ལ་སོར་རྟགས་མཛེས་པོ་ཡོད ("Dekyi has a beautiful ring"),
  confirming noun-before-adjective order inside the possessed-object NP.
- **Progressive `<verb>གི་ཡོད` extended** to ལྟ་གི་ཡོད ("is looking", ch1),
  འཚོལ་གི་ཡོད ("is searching", ch6), དགོད་གི་ཡོད ("is laughing", ch7),
  ལྷུང་གི་ཡོད ("is falling", ch7), འཁྱེར་གི་ཡོད ("is holding", ch8).
- **Negative-perfective `མ་<verb>` extended** to མ་ཡོང ("has not come", ch5),
  མ་འཚོལ ("has not searched", ch8), and མ་མཐོང ("did not see", ch9) —
  continuing Books 105/106's མ་ཕྱིན/མ་ཟོས pattern onto new verbs.
- **Optative `<verb>སྲིད` family extended**: མཐོང་འདོད་སྲིད ("might want to
  see", ch1), འདོད་སྲིད ("might want", ch4), རྩེ་མི་འདོད་སྲིད ("might not
  want to play", ch5, a negated desiderative-optative), ལྷུང་སྲིད ("might
  fall", ch7), འཚོལ་འདོད་སྲིད ("might want to search", ch8).
- **Bare `མི་<verb>` negation extended**: མི་སྐྲག ("is not afraid", ch6),
  མི་ཤེས ("does not know", ch6), མི་འཛེགས/འཛེགས་མི་དགོས ("does not
  climb"/"must not climb", ch7), མི་དགོད ("does not laugh", ch7),
  ལྟ་མི་འདོད ("does not want to look", ch5).
- **Question-particle family extended**: ཡིན་ནམ/མིན་ནམ ("is/isn't it?",
  ch7), and the -སམ allomorph (after ས-final stems) in ཤེས་སམ ("do you
  know?") and ཤེས་འདོད་དམ ("do you want to know?", ch9).
- **First systematic simple past via `<verb>སོང`** (ch9): the closing
  flashback chapter introduces a general perfective suffix for ordinary
  past-tense narration — མཐོང་སོང (saw), འདོད་སོང (wanted), ལེན་སོང (took),
  འཁྱེར་སོང (grabbed/carried off), རྩེ་སོང (played), ཡོང་སོང (came),
  སྟོན་སོང (showed), འཛེགས་སོང (climbed); combined with the desiderative
  for "wanted to X" — སྟོན་འདོད་སོང, ཟ་འདོད་སོང, རྩེ་འདོད་སོང,
  ལྷུང་འདོད་སོང. Previously-established ཕྱིན (went) and ལྷུང (falls/fell,
  already glossed with a past sense in earlier chapters) slot into this
  narration unchanged.
- **Reflexive possessive རང་གི** ("his/her own", reused from earlier books)
  becomes central to ch9's third-person narration: རང་གི་སོར་རྟགས ("her own
  ring"), རང་གི་ཨ་མ ("her own mother").
- **Converb ནས extended**: ཁ་ནས ("with/from its mouth", ch9) and chained
  converbs (སོར་རྟགས་འཁྱེར་ནས...ཕྱིན, "having grabbed the ring,
  went...").

**New vocabulary:** Nouns — སོར་རྟགས (ring), བྱ (bird), ཁ (mouth), ཀུར་ཀུར
(Coo! Coo!, bird sound). Adjective — མཛེས་པོ (beautiful). Verbs — སླེབས
(arrives), འཚོལ (searches), ལྟ (looks at), འཁྱེར (holds/carries), ཤེས
(knows), ལྷུང (falls/fell). Particles/question words — ཇི་ལྟར (how),
ཅི་ཞིག (something). Imperatives/hortatives — སྟོན་དང (show!), ཕྱིན་ཨང
(let's go!), ཟོས་ཨང (let's eat!), རྩེ་དང (play!), འཚོལ་དང/འཚོལ་ཨང
(search!/let's search!).
