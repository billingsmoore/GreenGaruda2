// Regenerates the `lines` field for every story under src/data/stories/.
//
// `lines` is a per-line array of tokens consumed directly by StoryView and
// WordDemo: each token is either a plain string (non-clickable text) or a
// word object (a copy of an entry from `words`, used to render a clickable
// `.story-word` span and its tooltip). This avoids matching word boundaries
// against space-free Tibetan text at render time.
//
// Run after editing `textTibetan` or `words` for a story:
//   node scripts/generate-story-lines.js

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const STORIES_DIR = join(import.meta.dirname, '..', 'src', 'data', 'stories');

const tokenizeLine = (line, words) => {
  const sortedWords = [...words].sort((a, b) => b.tibetan.length - a.tibetan.length);
  const tokens = [];
  let i = 0;

  while (i < line.length) {
    const match = sortedWords.find(w => line.startsWith(w.tibetan, i));

    if (match) {
      tokens.push({
        tibetan: match.tibetan,
        wylie: match.wylie,
        phonetics: match.phonetics,
        meaning: match.meaning,
      });
      i += match.tibetan.length;
    } else {
      const last = tokens[tokens.length - 1];
      if (typeof last === 'string') {
        tokens[tokens.length - 1] = last + line[i];
      } else {
        tokens.push(line[i]);
      }
      i += 1;
    }
  }

  return tokens;
};

const findStoryFiles = (dir) => {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      files.push(...findStoryFiles(fullPath));
    } else if (entry.endsWith('.json')) {
      files.push(fullPath);
    }
  }

  return files;
};

for (const file of findStoryFiles(STORIES_DIR)) {
  const story = JSON.parse(readFileSync(file, 'utf-8'));

  if (Array.isArray(story.chapters)) {
    for (const chapter of story.chapters) {
      chapter.lines = chapter.textTibetan.split('\n').map(line => tokenizeLine(line, chapter.words));
    }
  } else {
    story.lines = story.textTibetan.split('\n').map(line => tokenizeLine(line, story.words));
  }

  writeFileSync(file, JSON.stringify(story, null, 2) + '\n');
  console.log(`Updated ${file}`);
}
