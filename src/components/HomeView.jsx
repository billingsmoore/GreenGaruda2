import React from 'react';
import '../styles/ContentSections.css';
import '../styles/HomeView.css';
import WordDemo from './WordDemo';
import demoSentence from '../data/demoSentence.json';

const HomeView = ({ stories, onNavigate }) => {
  const seriesList = [...new Set(stories.map(s => s.series))].map(seriesName => {
    const seriesStories = stories.filter(s => s.series === seriesName);
    const wordCounts = seriesStories.map(s => s.uniqueWords);
    const minWords = Math.min(...wordCounts);
    const maxWords = Math.max(...wordCounts);
    return {
      name: seriesName,
      image: seriesStories[0].image,
      count: seriesStories.length,
      wordRange: minWords === maxWords ? `${minWords}` : `${minWords}–${maxWords}`,
    };
  });

  return (
    <div className="home-view">
      <section className="hero-section">
        <h2 className="hero-title">Learn Tibetan Through Stories</h2>
        <p className="hero-text">
          Learn to read Tibetan the way you learned to read your first language: by reading short,
          illustrated stories and looking up words as you go &mdash; no grammar drills
          required.
        </p>
        <button className="cta-btn" onClick={() => onNavigate('library')}>
          Browse Library
        </button>
      </section>

      <section className="philosophy-section">
        <h3>Read First, Analyze Later</h3>
        <p>
          This site is designed to help you learn Tibetan by directly immersing yourself in the language. Each story is a self-contained lesson, with a unique set of vocabulary and grammar points. Read for the overall meaning first &mdash; don't worry about identifying every grammar point on the first pass. Click any highlighted word for its definition, then keep going. Comprehension comes before analysis.
        </p>
      </section>

      <section className="series-section">
        <h3>Story Series</h3>
        <div className="series-grid">
          {seriesList.map(s => (
            <div key={s.name} className="series-card" onClick={() => onNavigate('library')}>
              <div className="series-card-image" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="series-card-body">
                <h4>{s.name}</h4>
                <p>{s.count} {s.count === 1 ? 'story' : 'stories'} &middot; {s.wordRange} unique words</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h3>Try It Out</h3>
        <p>Click any highlighted word below to see its meaning.</p>
        <WordDemo lines={demoSentence.lines} lineTranslations={demoSentence.lineTranslations} />
      </section>

      <section className="attribution-section">
        <h3>Acknowledgements</h3>
        <p>
          The stories on this site are Tibetan-language adaptations of the public domain content
          created by <a href="https://www.amarahasa.com" target="_blank" rel="noreferrer">Amarahasa</a>.
          Amarahasa produces beautifully crafted beginner reading material for Sanskrit and Pali
          learners, freely available for reuse. We are grateful for their generosity in releasing
          that work to the public domain, which made this Tibetan adaptation possible.
        </p>
        <p>
          If you are interested in learning Sanskrit or Pali through the same story-based approach,
          we highly recommend visiting{' '}
          <a href="https://www.amarahasa.com" target="_blank" rel="noreferrer">amarahasa.com</a>.
        </p>
      </section>

      <section className="closing-section">
        <h3>New Here?</h3>
        <p>
          <strong>Start Here</strong> walks you through the word-lookup feature and how
          to pick a story that matches your level. Or just dive into the Library and
          start clicking.
        </p>
        <div className="closing-actions">
          <button className="cta-btn" onClick={() => onNavigate('start-here')}>Start Here</button>
          <button className="cta-btn cta-btn-secondary" onClick={() => onNavigate('library')}>
            Explore the Library
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
