import React from 'react';
import '../styles/ContentSections.css';
import '../styles/StartHereView.css';
import WordDemo from './WordDemo';
import demoSentence from '../data/demoSentence.json';

const StartHereView = ({ onNavigate }) => {
  return (
    <div className="start-here-view">
      <div className="library-header">
        <h2>Start Here</h2>
        <p className="library-description">
          New to this site? Here's everything you need to know before you dive into a
          story.
        </p>
      </div>

      <section className="start-here-section">
        <h3>How This Works</h3>
        <p>
          Each lesson is a short story. Read for the overall meaning first &mdash; don't
          worry about identifying every grammar point on the first pass. Click any
          highlighted word for its definition, then keep going. Comprehension comes before
          analysis.
        </p>
      </section>

      <section className="start-here-section">
        <h3>Reading Tibetan Script</h3>
        <p>
          Every story is shown in native Tibetan script (<strong>བོད་ཡིག</strong>). You
          don't need to read it fluently to get started &mdash; click any highlighted
          word to see its <strong>Wylie</strong> transliteration (a standard
          letter-by-letter spelling using the Roman alphabet), a phonetic pronunciation
          guide, and its English meaning.
        </p>
      </section>

      <section className="start-here-section">
        <h3>Picking a Story</h3>
        <p>
          Every story in the Library lists its number of <strong>unique words</strong>
          &mdash; the fewer unique words, the simpler the story. If you're just starting
          out, use the Library's "View by: Difficulty" control to put the simplest stories
          first, and work your way up as the vocabulary becomes familiar.
        </p>
      </section>

      <section className="start-here-section demo-section">
        <h3>Looking Up a Word</h3>
        <p>
          Inside a story, any word you can click is highlighted. Try it on the sentence
          below &mdash; click the highlighted word to see its Wylie spelling, phonetic
          pronunciation, and meaning.
        </p>
        <WordDemo lines={[demoSentence.lines[0]]} lineTranslations={[demoSentence.lineTranslations[0]]} />
      </section>

      <section className="start-here-section">
        <h3>Reading a Full Story</h3>
        <p>
          Click a highlighted word once to see its definition. Click that same word
          again to see the Wylie, phonetics, and English translation for the whole
          line &mdash; the full line highlights to show what's being translated. Click
          it again to go back to the single-word view.
        </p>
        <p>
          Longer stories are split into chapters. Opening one of these shows a table
          of contents first &mdash; pick a chapter, or use{' '}
          <strong>Begin Reading</strong> to start from the beginning. The{' '}
          <strong>Previous</strong> / <strong>Next</strong> buttons move between
          chapters within a story, and once you're at the first or last chapter (or
          reading a story with no chapters), they move to the next or previous story
          in the Library.
        </p>
      </section>

      <section className="closing-section">
        <h3>Ready to Read?</h3>
        <p>Head to the Library and pick a story &mdash; the simplest ones are a great place to start.</p>
        <div className="closing-actions">
          <button className="cta-btn" onClick={() => onNavigate('library')}>Go to Library</button>
        </div>
      </section>
    </div>
  );
};

export default StartHereView;
