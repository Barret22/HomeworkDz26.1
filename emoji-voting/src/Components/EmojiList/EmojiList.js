import React from 'react';

const EmojiList = ({ emojis, votes, onVote }) => {
    return (
        <div className="emoji-row">
            {emojis.map((emoji) => (
                <div key={emoji} className="emoji" onClick={() => onVote(emoji)}>
                    <span style={{ fontSize: '2rem' }}>{emoji}</span>
                    <div>{votes[emoji]}</div>
                </div>
            ))}
        </div>
    );
};

export default EmojiList;
