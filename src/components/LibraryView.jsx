import React, { useState } from 'react';
import '../styles/ContentSections.css';
import '../styles/LibraryView.css';

const LibraryView = ({ stories, onSelectStory }) => {
  const [viewBy, setViewBy] = useState('series');
  const [selectedSeries, setSelectedSeries] = useState(null);

  const handleViewByChange = (value) => {
    setViewBy(value);
    setSelectedSeries(null);
  };

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

  const renderStoriesTable = (storiesList) => (
    <div className="stories-table">
      <div className="table-header">
        <div className="table-cell series-col">SERIES</div>
        <div className="table-cell title-col">TITLE</div>
        <div className="table-cell words-col">UNIQUE WORDS</div>
      </div>

      {storiesList.map(story => (
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
  );

  return (
    <div className="library-view">
      <div className="library-header">
        <h2>Library</h2>
        <p className="library-description">
          Click on a story to read it. Words in the story are clickable for definitions.
        </p>
      </div>

      <div className="sort-controls">
        <span className="sort-label">View by:</span>
        <button
          className={`filter-btn ${viewBy === 'series' ? 'active' : ''}`}
          onClick={() => handleViewByChange('series')}
        >
          Series
        </button>
        <button
          className={`filter-btn ${viewBy === 'difficulty' ? 'active' : ''}`}
          onClick={() => handleViewByChange('difficulty')}
        >
          Difficulty
        </button>
      </div>

      {viewBy === 'series' ? (
        selectedSeries ? (
          <>
            <div className="series-filter">
              <button className="filter-btn" onClick={() => setSelectedSeries(null)}>
                ← All Series
              </button>
            </div>
            {renderStoriesTable(stories.filter(s => s.series === selectedSeries))}
          </>
        ) : (
          <div className="series-grid">
            {seriesList.map(s => (
              <div key={s.name} className="series-card" onClick={() => setSelectedSeries(s.name)}>
                <div className="series-card-image" style={{ backgroundImage: `url(${s.image})` }} />
                <div className="series-card-body">
                  <h4>{s.name}</h4>
                  <p>{s.count} {s.count === 1 ? 'story' : 'stories'} &middot; {s.wordRange} unique words</p>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        renderStoriesTable([...stories].sort((a, b) => a.uniqueWords - b.uniqueWords))
      )}
    </div>
  );
};

export default LibraryView;
