import React, { useState } from 'react';
import '../styles/WordInteraction.css';

const WordDemo = ({ lines, lineTranslations }) => {
  const [selected, setSelected] = useState(null);
  const [tooltipMode, setTooltipMode] = useState('word');
  const selectedWord = selected ? lines[selected.lineIdx][selected.tokenIdx] : null;

  const handleWordClick = (lineIdx, tokenIdx, token) => {
    if (selected?.lineIdx === lineIdx && selected?.tokenIdx === tokenIdx) {
      setTooltipMode(mode => (mode === 'word' ? 'sentence' : 'word'));
    } else {
      setSelected({ lineIdx, tokenIdx });
      setTooltipMode('word');
    }
  };

  const getLineWylie = (line) =>
    line.filter(token => typeof token !== 'string').map(token => token.wylie).join(' ');

  const getLinePhonetics = (line) =>
    line.filter(token => typeof token !== 'string').map(token => token.phonetics).join(' ');

  return (
    <div className="word-demo">
      <div className="story-text demo-text">
        {lines.map((line, lineIdx) => (
          <div key={lineIdx} className="story-line-group">
            <div className="story-line">
              {line.map((token, tokenIdx) =>
                typeof token === 'string' ? (
                  <span key={tokenIdx}>{token}</span>
                ) : (
                  <span
                    key={tokenIdx}
                    className={`story-word ${
                      selected?.lineIdx === lineIdx &&
                      (tooltipMode === 'sentence' || selected?.tokenIdx === tokenIdx)
                        ? 'selected'
                        : ''
                    }`}
                    onClick={() => handleWordClick(lineIdx, tokenIdx, token)}
                  >
                    {token.tibetan}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedWord && (
        <div className="word-tooltip">
          <div className="tooltip-content">
            {tooltipMode === 'sentence' ? (
              <>
                <div className="tooltip-header">
                  <div className="tooltip-wylie">{getLineWylie(lines[selected.lineIdx])}</div>
                  <div className="tooltip-phonetics">{getLinePhonetics(lines[selected.lineIdx])}</div>
                </div>
                <div className="tooltip-meaning">{lineTranslations?.[selected.lineIdx]}</div>
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
  );
};

export default WordDemo;
