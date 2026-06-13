import React, { useState, useEffect } from 'react';
import '../styles/WordInteraction.css';
import '../styles/StoryView.css';

const StoryView = ({ story, stories, selectedWord, onWordClick, onBack, onNavigate }) => {
  const [tooltipMode, setTooltipMode] = useState('word');
  const [chapterIndex, setChapterIndex] = useState(0);

  useEffect(() => {
    setChapterIndex(Array.isArray(story.chapters) && story.chapters.length > 0 ? -1 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story.id]);

  const hasChapters = Array.isArray(story.chapters) && story.chapters.length > 0;
  const showingToc = hasChapters && chapterIndex === -1;
  const chapter = hasChapters ? (showingToc ? null : story.chapters[chapterIndex]) : story;

  const currentIndex = stories.findIndex(s => s.id === story.id);
  const prevStory = currentIndex > 0 ? stories[currentIndex - 1] : null;
  const nextStory = currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null;

  const hasPrevChapter = hasChapters && chapterIndex > -1;
  const hasNextChapter = hasChapters && chapterIndex < story.chapters.length - 1;

  const goToPrev = () => {
    if (hasPrevChapter) {
      setChapterIndex(chapterIndex - 1);
    } else if (prevStory) {
      onNavigate(prevStory);
    }
  };

  const goToNext = () => {
    if (hasNextChapter) {
      setChapterIndex(chapterIndex + 1);
    } else if (nextStory) {
      onNavigate(nextStory);
    }
  };

  const handleWordClick = (token, lineIdx, tokenIdx) => {
    if (selectedWord?.lineIdx === lineIdx && selectedWord?.tokenIdx === tokenIdx) {
      setTooltipMode(mode => (mode === 'word' ? 'sentence' : 'word'));
    } else {
      onWordClick({ ...token, lineIdx, tokenIdx });
      setTooltipMode('word');
    }
  };

  const getLineWylie = (line) =>
    line.filter(token => typeof token !== 'string').map(token => token.wylie).join(' ');

  const getLinePhonetics = (line) =>
    line.filter(token => typeof token !== 'string').map(token => token.phonetics).join(' ');

  const renderStoryText = () => {
    if (!chapter || !chapter.lines) return null;

    return chapter.lines.map((line, lineIdx) => (
      <div key={lineIdx} className="story-line-group">
        <div className="story-line">
          {line.map((token, tokenIdx) =>
            typeof token === 'string' ? (
              <span key={tokenIdx}>{token}</span>
            ) : (
              <span
                key={tokenIdx}
                className={`story-word ${
                  selectedWord?.lineIdx === lineIdx &&
                  (tooltipMode === 'sentence' || selectedWord?.tokenIdx === tokenIdx)
                    ? 'selected'
                    : ''
                }`}
                onClick={() => handleWordClick(token, lineIdx, tokenIdx)}
              >
                {token.tibetan}
              </span>
            )
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className="story-view">
      <div className="story-toolbar">
        <button className="back-btn" onClick={onBack}>← Back to Library</button>
      </div>

      <div className="story-content">
        <div className="story-text-section">
          {showingToc ? (
            <>
              <h2 className="story-heading">{story.titleEnglish}</h2>
              <p className="toc-tibetan-title">{story.title}</p>
              <p className="toc-transliteration">{story.titleTransliteration}</p>
              <p className="story-subtitle-text">
                {story.series} · {story.uniqueWords} unique words
              </p>

              {story.description && <p className="toc-description">{story.description}</p>}

              <div className="book-toc">
                <h3 className="toc-heading">Chapters</h3>
                <ul className="chapter-toc">
                  {story.chapters.map((ch, idx) => (
                    <li key={idx} className="chapter-toc-item" onClick={() => setChapterIndex(idx)}>
                      <span className="chapter-toc-number">{idx + 1}</span>
                      <div className="chapter-toc-titles">
                        <div className="chapter-toc-tibetan">{ch.title}</div>
                        <div className="chapter-toc-english">{ch.titleEnglish}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="toc-start-btn" onClick={() => setChapterIndex(0)}>
                Begin Reading
              </button>
            </>
          ) : (
            <>
              <h2 className="story-heading">{story.titleEnglish}</h2>
              <p className="story-subtitle-text">
                {story.series}
                {hasChapters && ` · Chapter ${chapterIndex + 1} of ${story.chapters.length}: ${chapter.titleEnglish}`}
              </p>

              <div className="story-text">
                {renderStoryText()}
              </div>
            </>
          )}

          <div className="story-nav">
            <button
              className="nav-btn"
              onClick={goToPrev}
              disabled={!hasPrevChapter && !prevStory}
            >
              ← Previous
            </button>
            <button
              className="nav-btn"
              onClick={goToNext}
              disabled={!hasNextChapter && !nextStory}
            >
              Next →
            </button>
          </div>

          {!showingToc && selectedWord && (
            <div className="word-tooltip">
              <div className="tooltip-content">
                {tooltipMode === 'sentence' ? (
                  <>
                    <div className="tooltip-header">
                      <div className="tooltip-wylie">{getLineWylie(chapter.lines[selectedWord.lineIdx])}</div>
                      <div className="tooltip-phonetics">{getLinePhonetics(chapter.lines[selectedWord.lineIdx])}</div>
                    </div>
                    <div className="tooltip-meaning">{chapter.lineTranslations?.[selectedWord.lineIdx]}</div>
                  </>
                ) : (
                  <>
                    <div className="tooltip-header">
                      <div className="tooltip-wylie">{selectedWord.wylie}</div>
                      <div className="tooltip-phonetics">{selectedWord.phonetics}</div>
                    </div>
                    <div className="tooltip-meaning">{selectedWord.meaning}</div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="story-image-section">
          <img
            src={(chapter && chapter.image) || story.image}
            alt={(chapter && chapter.titleEnglish) || story.titleEnglish}
            className="story-image"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryView;
