import React from 'react';

const Results = ({ winner, votes, onReset }) => {
    if (!winner) return null;

    return (
        <div className="results mt-4">
            <h2>Результати голосування:</h2>
            <h3>Переможець:</h3>
            <div style={{ fontSize: '4rem' }}>{winner}</div>
            <div>Кількість голосів: {votes[winner]}</div>
            <button onClick={onReset} className="btn btn-danger mt-3">Очистити результати</button>
        </div>
    );
};

export default Results;
