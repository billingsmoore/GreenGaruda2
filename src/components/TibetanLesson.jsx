import React, { useState } from 'react';
import '../styles/shared.css';
import HomeView from './HomeView';
import StartHereView from './StartHereView';
import LibraryView from './LibraryView';
import StoryView from './StoryView';
import stories from '../data/stories';

const TibetanLesson = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);

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

  const handleNavigate = (view) => {
    setCurrentView(view);
    setSelectedStory(null);
    setSelectedWord(null);
  };

  return (
    <div className="tibetan-lesson-container">
      <header className="lesson-header">
        <h1 className="lesson-title" onClick={() => handleNavigate('home')}>བོད་ཀྱི་སྐད་</h1>
        <p className="lesson-subtitle">Tibetan Language</p>
        <nav className="main-nav">
          <button
            className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            onClick={() => handleNavigate('home')}
          >
            Home
          </button>
          <button
            className={`nav-link ${currentView === 'start-here' ? 'active' : ''}`}
            onClick={() => handleNavigate('start-here')}
          >
            Start Here
          </button>
          <button
            className={`nav-link ${currentView === 'library' ? 'active' : ''}`}
            onClick={() => handleNavigate('library')}
          >
            Library
          </button>
        </nav>
      </header>

      {currentView === 'home' && (
        <HomeView stories={stories} onNavigate={handleNavigate} />
      )}

      {currentView === 'start-here' && (
        <StartHereView stories={stories} onNavigate={handleNavigate} />
      )}

      {currentView === 'library' && (
        <LibraryView stories={stories} onSelectStory={handleStorySelect} />
      )}

      {currentView === 'story' && selectedStory && (
        <StoryView
          story={selectedStory}
          stories={stories}
          selectedWord={selectedWord}
          onWordClick={setSelectedWord}
          onBack={handleBackToLibrary}
          onNavigate={handleStorySelect}
        />
      )}

      <footer className="lesson-footer">
        <nav className="footer-nav">
          <button className="footer-link" onClick={() => handleNavigate('home')}>Home</button>
          <button className="footer-link" onClick={() => handleNavigate('start-here')}>Start Here</button>
          <button className="footer-link" onClick={() => handleNavigate('library')}>Library</button>
        </nav>
        <p>Tibetan Language Learning Platform</p>
      </footer>
    </div>
  );
};

export default TibetanLesson;
