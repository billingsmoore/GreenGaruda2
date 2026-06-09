import React, { useState } from 'react';
import '../styles/TibetanLesson.css';

const TibetanLesson = () => {
  const [script, setScript] = useState('wylie');

  const lessons = [
    {
      id: 1,
      title: 'བདག་གིས་སླེབ་སོང་།',
      titleTransliteration: 'dag gis sleb song.',
      titleEnglish: 'I have arrived.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
      wordBreakdown: [
        {
          tibetan: 'བདག',
          wylie: 'dag',
          meaning: 'I',
          partOfSpeech: 'pronoun'
        },
        {
          tibetan: 'གིས',
          wylie: 'gis',
          meaning: 'by, instrumental case marker',
          partOfSpeech: 'particle'
        },
        {
          tibetan: 'སླེབ',
          wylie: 'sleb',
          meaning: 'to arrive, to reach',
          partOfSpeech: 'verb'
        },
        {
          tibetan: 'སོང',
          wylie: 'song',
          meaning: 'perfect aspect marker',
          partOfSpeech: 'auxiliary'
        }
      ],
      sentenceBreakdown: 'The sentence is constructed using the ergative case (གིས) to mark the agent (I), followed by the main verb "to arrive" (སླེབ), and the perfective aspect marker (སོང) indicating a completed action.',
      context: 'This is a common greeting phrase used when arriving at a destination or when introducing yourself in a situation where you have just completed a journey.'
    },
    {
      id: 2,
      title: 'ང་ཚོ་དགེ་ལེགས།',
      titleTransliteration: 'nga tso dge legs.',
      titleEnglish: 'We are well.',
      image: 'https://images.unsplash.com/photo-1516738901601-a51a0a6a1f61?w=500&h=400&fit=crop',
      wordBreakdown: [
        {
          tibetan: 'ང་ཚོ',
          wylie: 'nga tso',
          meaning: 'we',
          partOfSpeech: 'pronoun'
        },
        {
          tibetan: 'དགེ',
          wylie: 'dge',
          meaning: 'good, well',
          partOfSpeech: 'adjective'
        },
        {
          tibetan: 'ལེགས',
          wylie: 'legs',
          meaning: 'fine, complete',
          partOfSpeech: 'adverb'
        }
      ],
      sentenceBreakdown: 'A simple existential statement expressing the wellbeing of a group. "ང་ཚོ" is the plural form of the first-person pronoun, and "དགེ ལེགས" is an idiomatic expression meaning "good and well."',
      context: 'This phrase is commonly used as a response to inquiries about health or wellbeing, or as a greeting to indicate that things are going well.'
    },
    {
      id: 3,
      title: 'ཀུན་གྱི་རྒྱུད་ལ་བདེ་བ་ཞུ་གི་ཡིན།',
      titleTransliteration: 'kun gyi gyud la de ba zhu gi yin.',
      titleEnglish: 'I wish happiness for all beings.',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=400&fit=crop',
      wordBreakdown: [
        {
          tibetan: 'ཀུན',
          wylie: 'kun',
          meaning: 'all, everyone',
          partOfSpeech: 'pronoun'
        },
        {
          tibetan: 'གྱི',
          wylie: 'gyi',
          meaning: 'of, possessive marker',
          partOfSpeech: 'particle'
        },
        {
          tibetan: 'རྒྱུད',
          wylie: 'gyud',
          meaning: 'continuum, being',
          partOfSpeech: 'noun'
        },
        {
          tibetan: 'ལ',
          wylie: 'la',
          meaning: 'to, for, locative case',
          partOfSpeech: 'particle'
        },
        {
          tibetan: 'བདེ་བ',
          wylie: 'de ba',
          meaning: 'happiness, bliss',
          partOfSpeech: 'noun'
        },
        {
          tibetan: 'ཞུ',
          wylie: 'zhu',
          meaning: 'to request, to wish',
          partOfSpeech: 'verb'
        },
        {
          tibetan: 'གི',
          wylie: 'gi',
          meaning: 'of',
          partOfSpeech: 'particle'
        },
        {
          tibetan: 'ཡིན',
          wylie: 'yin',
          meaning: 'to be',
          partOfSpeech: 'copula'
        }
      ],
      sentenceBreakdown: 'A compassionate statement expressing the wish for happiness of all beings. The locative case marker (ལ) indicates the recipient of the wish, and the structure demonstrates the use of the imperfective aspect.',
      context: 'This sentiment is fundamental to Tibetan Buddhist philosophy and is commonly used in prayers, greetings, and meditation practices as an expression of compassion for all sentient beings.'
    }
  ];

  const currentLesson = lessons[0];

  const renderWord = (word) => {
    const display = script === 'wylie' ? word.wylie : word.tibetan;
    return display;
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

      <main className="lesson-content">
        <div className="content-wrapper">
          <div className="lesson-text">
            {/* Main sentence */}
            <div className="main-sentence">
              <h2 className="sentence-title">
                {script === 'wylie' ? currentLesson.titleTransliteration : currentLesson.title}
              </h2>
              <p className="sentence-english">{currentLesson.titleEnglish}</p>
            </div>

            {/* Word breakdown */}
            <div className="word-section">
              <h3 className="section-title">Word Breakdown</h3>
              <div className="words-container">
                {currentLesson.wordBreakdown.map((word, idx) => (
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
              <p className="grammar-text">{currentLesson.sentenceBreakdown}</p>
            </div>

            {/* Context section */}
            <div className="context-section">
              <h3 className="section-title">Context & Usage</h3>
              <p className="context-text">{currentLesson.context}</p>
            </div>
          </div>

          {/* Image section */}
          <div className="lesson-image">
            <img src={currentLesson.image} alt={currentLesson.titleEnglish} />
          </div>
        </div>
      </main>

      <footer className="lesson-footer">
        <p>Tibetan Language Learning Platform • Proof of Concept</p>
      </footer>
    </div>
  );
};

export default TibetanLesson;
