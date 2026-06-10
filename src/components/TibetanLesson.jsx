import React, { useState, useEffect } from 'react';
import '../styles/TibetanLesson.css';

const TibetanLesson = () => {
  const [script, setScript] = useState('wylie');
  const [currentView, setCurrentView] = useState('library');
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultStories = [
    {
      id: 1,
      title: 'བདག་གིས་སླེབ་སོང་།',
      titleTransliteration: 'dag gis sleb song.',
      titleEnglish: 'I have arrived.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      series: 'Essential Phrases',
      uniqueWords: 4,
      words: [
        { tibetan: 'བདག', wylie: 'dag', meaning: 'I' },
        { tibetan: 'གིས', wylie: 'gis', meaning: 'by (instrumental marker)' },
        { tibetan: 'སླེབ', wylie: 'sleb', meaning: 'to arrive' },
        { tibetan: 'སོང', wylie: 'song', meaning: 'completed (perfective marker)' }
      ]
    },
    {
      id: 2,
      title: 'ང་ཚོ་དགེ་ལེགས།',
      titleTransliteration: 'nga tso dge legs.',
      titleEnglish: 'We are well.',
      image: 'https://images.unsplash.com/photo-1516738901601-a51a0a6a1f61?w=500&h=400&fit=crop',
      series: 'Essential Phrases',
      uniqueWords: 3,
      words: [
        { tibetan: 'ང་ཚོ', wylie: 'nga tso', meaning: 'we' },
        { tibetan: 'དགེ', wylie: 'dge', meaning: 'good' },
        { tibetan: 'ལེགས', wylie: 'legs', meaning: 'well' }
      ]
    },
    {
      id: 3,
      title: 'ཀུན་གྱི་རྒྱུད་ལ་བདེ་བ་ཞུ་གི་ཡིན།',
      titleTransliteration: 'kun gyi gyud la de ba zhu gi yin.',
      titleEnglish: 'I wish happiness for all beings.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=400&fit=crop',
      series: 'Buddhist Wisdom',
      uniqueWords: 8,
      words: [
        { tibetan: 'ཀུན', wylie: 'kun', meaning: 'all' },
        { tibetan: 'གྱི', wylie: 'gyi', meaning: 'of (possessive)' },
        { tibetan: 'རྒྱུད', wylie: 'gyud', meaning: 'continuum' },
        { tibetan: 'ལ', wylie: 'la', meaning: 'to (locative)' },
        { tibetan: 'བདེ་བ', wylie: 'de ba', meaning: 'happiness' },
        { tibetan: 'ཞུ', wylie: 'zhu', meaning: 'to wish' },
        { tibetan: 'གི', wylie: 'gi', meaning: 'of' },
        { tibetan: 'ཡིན', wylie: 'yin', meaning: 'to be' }
      ]
    }
  ];

  useEffect(() => {
    console.log('TibetanLesson mounted, fetching stories...');
    fetch('/stories.json')
      .then(res => res.json())
      .then(data => {
        console.log('Stories loaded:', data);
        setStories(data.stories);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load stories, using defaults:', err);
        setStories(defaultStories);
        setLoading(false);
      });
  }, []);

  if (loading && stories.length === 0) {
    return (
      <div className="tibetan-lesson-container">
        <header className="lesson-header">
          <h1 className="lesson-title">བོད་ཀྱི་སྐད་</h1>
        </header>
        <div className="loading">Loading stories...</div>
      </div>
    );
  }

  const handleStorySelect = (story) => {
    setSelectedStory(story);
    setCurrentView('story');
    setSelectedWord(null);
  };

  const handleBackToLibrary = () => {
    setCurrentView('library');
    setSelectedStory(null);
    setSelectedWord(null);
  };

  return (
    <div className="tibetan-lesson-container">
      <header className="lesson-header">
        <h1 className="lesson-title">བོད་ཀྱི་སྐད་</h1>
        <p className="lesson-subtitle">Tibetan Language</p>
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
      </header>

      {currentView === 'library' && (
        <LibraryView stories={stories} onSelectStory={handleStorySelect} />
      )}

      {currentView === 'story' && selectedStory && (
        <StoryView
          story={selectedStory}
          script={script}
          selectedWord={selectedWord}
          onWordClick={setSelectedWord}
          onBack={handleBackToLibrary}
        />
      )}

      <footer className="lesson-footer">
        <p>Tibetan Language Learning Platform</p>
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
          Click on a story to read it. Words in the story are clickable for definitions.
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

const StoryView = ({ story, script, selectedWord, onWordClick, onBack }) => {
  const fullText = script === 'wylie' ? story.textWylie : story.textTibetan;

  const renderStoryText = () => {
    if (!fullText) return null;

    const lines = fullText.split('\n');
    return lines.map((line, lineIdx) => (
      <div key={lineIdx} className="story-line">
        {line.split(/\s+/).map((segment, segIdx) => {
          if (!segment) return null;

          const matchingWord = story.words.find(
            w => (script === 'wylie' ? w.wylie : w.tibetan) === segment
          );

          const isSelected = selectedWord &&
            selectedWord.tibetan === segment &&
            !matchingWord;

          return (
            <span key={segIdx}>
              {matchingWord ? (
                <span
                  className={`story-word ${
                    selectedWord?.wylie === matchingWord.wylie ? 'selected' : ''
                  }`}
                  onClick={() => onWordClick(matchingWord)}
                >
                  {segment}
                </span>
              ) : (
                segment
              )}
              {segIdx < line.split(/\s+/).length - 1 ? ' ' : ''}
            </span>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="story-view">
      <button className="back-btn" onClick={onBack}>← Back to Library</button>

      <div className="story-content">
        <div className="story-text-section">
          <h2 className="story-heading">{story.titleEnglish}</h2>
          <p className="story-subtitle-text">{story.series}</p>

          <div className="story-text">
            {renderStoryText()}
          </div>

          {selectedWord && (
            <div className="word-tooltip">
              <div className="tooltip-content">
                <div className="tooltip-header">
                  <div className="tooltip-tibetan">{selectedWord.tibetan}</div>
                  <div className="tooltip-wylie">{selectedWord.wylie}</div>
                </div>
                <div className="tooltip-meaning">{selectedWord.meaning}</div>
              </div>
            </div>
          )}
        </div>

        <div className="story-image-section">
          <img src={story.image} alt={story.titleEnglish} className="story-image" />
        </div>
      </div>
    </div>
  );
};

export default TibetanLesson;
