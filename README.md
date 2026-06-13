# Tibetan Language Learner

A React app for learning Tibetan through short stories, inspired by amarahasa.com. Stories are shown in Tibetan script (བོད་ཡིག); click any highlighted word for its Wylie transliteration, phonetic pronunciation, and English meaning.

## Features

- **Home & Start Here**: landing page and onboarding guide for new visitors
- **Library**: browse stories, filter by series, sort by difficulty (unique word count)
- **Word Lookup**: click any highlighted word for its Wylie, phonetics, and meaning
- **Translations**: toggle English line-by-line translations on/off
- **Story Navigation**: move between stories with Previous/Next

## Getting Started

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

```bash
npm run build
```

builds a production bundle to `build/`.

## Project Structure

```
├── public/
│   └── stories.json              # Story content
├── src/
│   ├── components/
│   │   ├── TibetanLesson.jsx     # App shell: state, header/nav/footer, view routing
│   │   ├── HomeView.jsx          # Landing page
│   │   ├── StartHereView.jsx     # Onboarding guide
│   │   ├── LibraryView.jsx       # Story browser (filter/sort/table)
│   │   ├── StoryView.jsx         # Single story reader
│   │   └── WordDemo.jsx          # Shared click-word-for-definition widget
│   ├── styles/
│   │   ├── shared.css            # Reset, app shell, shared buttons, scrollbar
│   │   ├── ContentSections.css   # Shared boxed-section styles (Home/Start Here/Library)
│   │   ├── WordInteraction.css   # Clickable-word & tooltip styles (StoryView/WordDemo)
│   │   ├── HomeView.css
│   │   ├── StartHereView.css
│   │   ├── LibraryView.css
│   │   └── StoryView.css
│   ├── data/
│   │   └── defaultStories.js     # Fallback data if stories.json fails to load
│   ├── App.jsx
│   └── index.jsx
└── package.json
```

Each view is a self-contained `.jsx` + `.css` pair — see `CLAUDE.md` for the
full module map and conventions for working on this codebase.

## Adding a Story

Add an entry to the `stories` array in `public/stories.json`:

```json
{
  "id": 5,
  "title": "Tibetan text",
  "titleTransliteration": "Wylie title",
  "titleEnglish": "English title",
  "image": "https://image-url.com/image.jpg",
  "series": "Series Name",
  "uniqueWords": 5,
  "textTibetan": "Full story in Tibetan script, lines separated by \\n",
  "lineTranslations": ["English translation of line 1", "..."],
  "words": [
    { "tibetan": "Word", "wylie": "wylie", "phonetics": "pronunciation", "meaning": "English meaning" }
  ]
}
```

`lineTranslations` should have one entry per line of `textTibetan` (use `""` for blank separator lines).

## Styling

Each view has its own CSS file in `src/styles/`, plus a few shared files
(`shared.css`, `ContentSections.css`, `WordInteraction.css`). Dark theme palette:
- Background: `#1a1a1a` / `#252525`
- Accent: `#c9302c`
- Text: `#e0e0e0`
