---
title: Tibetan Language Learner
emoji: 🇧🇹
colorFrom: 1a1a1a
colorTo: c9302c
sdk: docker
sdk_version: latest
pinned: false
---

Check out the configuration reference at https://huggingface.co/docs/hub/spaces-config-reference

# Tibetan Language Learner

A fully functional React-based language learning interface for Tibetan language instruction, deployed on Hugging Face Spaces.

**Live Demo**: https://huggingface.co/spaces/billingsmoore/test

## Features

- **Script Switching**: Toggle between Wylie transliteration and Tibetan script (བོད་ཡིག)
- **Word Breakdown**: Interactive word cards showing meanings, parts of speech, and transliterations
- **Grammar Analysis**: Sentence structure explanations and grammar notes
- **Context Information**: Cultural and usage context for each lesson
- **Responsive Design**: Clean, dark-themed interface that works across devices
- **JSON Story Import**: Load lessons from `public/stories.json` for easy content management

## Hugging Face Spaces Deployment

This application is configured to run on Hugging Face Spaces using Docker.

### Configuration

- **Docker Port**: 7860 (HF Spaces default)
- **Build**: Multi-stage build compiles React app and serves with `serve`
- **Storage**: Persists `public/stories.json` in the built image

### Deploying Updates

1. Edit `public/stories.json` to add/modify stories
2. Commit and push to the Space repository
3. HF Spaces automatically rebuilds and deploys

### Managing the Space

Visit: https://huggingface.co/spaces/billingsmoore/test

Settings available:
- Toggle public/private visibility
- Configure hardware (free tier sufficient)
- View build logs
- Restart the Space if needed

## Project Structure

```
├── Dockerfile              # HF Spaces Docker configuration
├── public/
│   ├── index.html
│   └── stories.json        # Lesson content (edit this to add stories)
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

## Local Development

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
npx serve -s build
```

## Adding New Stories

Edit `public/stories.json` and add to the `stories` array:

```json
{
  "id": 4,
  "title": "Tibetan text",
  "titleTransliteration": "Wylie transliteration",
  "titleEnglish": "English translation",
  "image": "https://image-url.com/image.jpg",
  "series": "Category Name",
  "uniqueWords": 5,
  "wordBreakdown": [
    {
      "tibetan": "Word in Tibetan",
      "wylie": "wylie",
      "meaning": "English meaning",
      "partOfSpeech": "noun|verb|adjective|particle|etc"
    }
  ],
  "sentenceBreakdown": "Detailed grammar explanation...",
  "context": "Usage context and cultural notes..."
}
```

## Component Architecture

### TibetanLesson Component

Main component (`src/components/TibetanLesson.jsx`) handles:
- Loading stories from `public/stories.json`
- Script toggling (Wylie ↔ Tibetan)
- View switching (Library ↔ Lesson)
- Story selection and display

### Story Data Structure

Each story includes:
- **Metadata**: ID, title, English translation, series, image, unique word count
- **Word Breakdown**: Each word with Tibetan, Wylie, meaning, part of speech
- **Grammar**: Sentence structure analysis
- **Context**: Cultural usage information

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Customization

### Styling

All styles in `src/styles/TibetanLesson.css`:
- Primary background: `#1a1a1a`
- Secondary background: `#252525`
- Accent color: `#c9302c`
- Text color: `#e0e0e0`

### Script Output

Toggle between Wylie transliteration and Tibetan script via the UI buttons.

## Troubleshooting

**App not loading on HF Spaces:**
- Check Space Settings → Logs for build errors
- Ensure all required files are uploaded (Dockerfile, package.json, public/, src/)
- Restart the Space from Settings

**Stories not appearing:**
- Verify `public/stories.json` is properly formatted JSON
- Check browser console for errors
- Rebuild the Space

**Build fails:**
- Check logs in HF Spaces settings
- Ensure `package.json` is valid
- Verify all dependencies are correct

## License

Proof-of-concept educational application.
