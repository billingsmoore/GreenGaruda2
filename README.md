# Tibetan Language Learner

A fully functional React-based language learning interface inspired by Sanskrit learning platforms, adapted for Tibetan language instruction.

## Features

- **Script Switching**: Toggle between Wylie transliteration and Tibetan script (བོད་ཡིག)
- **Word Breakdown**: Interactive word cards showing meanings, parts of speech, and transliterations
- **Grammar Analysis**: Sentence structure explanations and grammar notes
- **Context Information**: Cultural and usage context for each lesson
- **Responsive Design**: Clean, dark-themed interface that works across devices
- **Easy Integration**: Modular React component structure for easy embedding in other projects

## Project Structure

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── TibetanLesson.jsx
│   ├── styles/
│   │   └── TibetanLesson.css
│   ├── App.jsx
│   ├── App.css
│   └── index.jsx
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Running the Application

```bash
npm start
```

The app will open at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

## Component Architecture

### TibetanLesson Component

The main component (`src/components/TibetanLesson.jsx`) manages:
- **Script state**: Toggles between Wylie and Tibetan scripts
- **Lesson data**: Structured lesson objects with word breakdowns and translations
- **Rendering**: Conditional rendering based on selected script

#### Lesson Data Structure

```javascript
{
  id: 1,
  title: 'Tibetan text',
  titleTransliteration: 'Wylie transliteration',
  titleEnglish: 'English translation',
  image: 'Image URL',
  wordBreakdown: [
    {
      tibetan: 'Tibetan text',
      wylie: 'Wylie',
      meaning: 'English meaning',
      partOfSpeech: 'noun|verb|adjective|etc'
    }
  ],
  sentenceBreakdown: 'Grammar explanation',
  context: 'Usage and cultural context'
}
```

## Integration Guide

To integrate this into another React project:

1. Copy the `src/components/TibetanLesson.jsx` component
2. Copy the `src/styles/TibetanLesson.css` stylesheet
3. Import and use in your app:

```jsx
import TibetanLesson from './components/TibetanLesson';

function MyApp() {
  return <TibetanLesson />;
}
```

## Customization

### Adding New Lessons

Edit the `lessons` array in `src/components/TibetanLesson.jsx`:

```javascript
const lessons = [
  {
    id: 1,
    title: 'Your Tibetan text',
    titleTransliteration: 'Wylie version',
    titleEnglish: 'English translation',
    // ... rest of lesson data
  },
  // Add more lessons
];
```

### Styling

All styles are in `src/styles/TibetanLesson.css`. Key theme variables:

- Primary dark background: `#1a1a1a`
- Secondary background: `#252525`
- Accent color: `#c9302c` (red)
- Text color: `#e0e0e0`

## Sample Content

The application includes sample Tibetan phrases with:
- Audio-less phonetic translations (Wylie system)
- Word-by-word meanings and grammatical classifications
- Sentence structure analysis
- Cultural context and usage examples

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This is a proof-of-concept educational application.
