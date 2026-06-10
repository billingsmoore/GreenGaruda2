import React, { useState, useEffect } from 'react';
import '../styles/TibetanLesson.css';

const TibetanLesson = () => {
  const [script, setScript] = useState('wylie');
  const [view, setView] = useState('library');
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/stories.json')
      .then(res => res.json())
      .then(data => {
        setStories(data.stories);
        if (data.stories.length > 0) {
          setSelectedStory(data.stories[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load stories');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="tibetan-lesson-container">
        <div className="loading">Loading stories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tibetan-lesson-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  const renderWord = (word) => {
    const display = script === 'wylie' ? word.wylie : word.tibetan;
    return display;
  };

  const handleStorySelect = (story) => {
    setSelectedStory(story);
    setView('lesson');
  };

  return (
    <div className="tibetan-lesson-container">
      <header className="lesson-header">
        <h1 className="lesson-title">བོད་ཀྱི་སྐད་</h1>
        <p className="lesson-subtitle">Tibetan Language</p>
        <div className="header-controls">
          <div className="view-selector">
            <button
              className={`view-btn ${view === 'library' ? 'active' : ''}`}
              onClick={() => setView('library')}
            >
              Library
            </button>
            <button
              className={`view-btn ${view === 'lesson' ? 'active' : ''}`}
              onClick={() => setView('lesson')}
              disabled={!selectedStory}
            >
              Lesson
            </button>
          </div>
          <div className="script-selector">
            <button
              className={`script-btn ${script === 'wylie' ? 'active' : ''}`}
              onClick={() => setScript('wylie')}
            >
              Wylie
            </button>
            <button
              className={`script-btn ${script === 'tibetan' ? 'active' : ''}`}
              onClick={() => setScript('tibetan')}
            >
              བོད་ཡིག
            </button>
          </div>
        </div>
      </header>

      {view === 'library' ? (
        <LibraryView stories={stories} onSelectStory={handleStorySelect} />
      ) : (
        <main className="lesson-content">
        <div className="content-wrapper">
          <div className="lesson-text">
            {/* Main sentence */}
            <div className="main-sentence">
              <h2 className="sentence-title">
                {script === 'wylie' ? selectedStory.titleTransliteration : selectedStory.title}
              </h2>
              <p className="sentence-english">{selectedStory.titleEnglish}</p>
            </div>

            {/* Word breakdown */}
            <div className="word-section">
              <h3 className="section-title">Word Breakdown</h3>
              <div className="words-container">
                {selectedStory.wordBreakdown.map((word, idx) => (
                  <div key={idx} className="word-card">
                    <div className="word-display">{renderWord(word)}</div>
                    <div className="word-details">
                      <div className="word-meaning">
                        <strong>{word.meaning}</strong>
                      </div>
                      <div className="word-type">{word.partOfSpeech}</div>
                      {script === 'tibetan' && (
                        <div className="word-wylie">{word.wylie}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Grammar section */}
            <div className="grammar-section">
              <h3 className="section-title">Sentence Structure</h3>
              <p className="grammar-text">{selectedStory.sentenceBreakdown}</p>
            </div>

            {/* Context section */}
            <div className="context-section">
              <h3 className="section-title">Context & Usage</h3>
              <p className="context-text">{selectedStory.context}</p>
            </div>
          </div>

          {/* Image section */}
          <div className="lesson-image">
            <img src={selectedStory.image} alt={selectedStory.titleEnglish} />
          </div>
        </div>
        </main>
      )}

      <footer className="lesson-footer">
        <p>Tibetan Language Learning Platform • Proof of Concept</p>
      </footer>
    </div>
  );
};

const LibraryView = ({ stories, onSelectStory }) => {
  const [filterSeries, setFilterSeries] = useState(null);

  const series = [...new Set(stories.map(s => s.series))];
  const filteredStories = filterSeries
    ? stories.filter(s => s.series === filterSeries)
    : stories;

  return (
    <div className="library-view">
      <div className="library-header">
        <h2>Library</h2>
        <p className="library-description">
          Click on a story to begin. Stories are grouped by series and show the number of unique words.
        </p>
      </div>

      {series.length > 0 && (
        <div className="series-filter">
          <button
            className={`filter-btn ${!filterSeries ? 'active' : ''}`}
            onClick={() => setFilterSeries(null)}
          >
            All Stories
          </button>
          {series.map(s => (
            <button
              key={s}
              className={`filter-btn ${filterSeries === s ? 'active' : ''}`}
              onClick={() => setFilterSeries(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="stories-table">
        <div className="table-header">
          <div className="table-cell series-col">SERIES</div>
          <div className="table-cell title-col">TITLE</div>
          <div className="table-cell words-col">UNIQUE WORDS</div>
        </div>

        {filteredStories.map(story => (
          <div
            key={story.id}
            className="table-row"
            onClick={() => onSelectStory(story)}
          >
            <div className="table-cell series-col">
              <div className="series-badge" style={{ backgroundImage: `url(${story.image})` }} />
            </div>
            <div className="table-cell title-col">
              <div className="story-title">{story.titleEnglish}</div>
              <div className="story-subtitle">{story.series}</div>
            </div>
            <div className="table-cell words-col">{story.uniqueWords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TibetanLesson;
