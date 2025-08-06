import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResultPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { score, total } = location.state || { score: 0, total: 0 };

    return (
        <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Quiz Result</h1>
        <p className="text-xl mb-4">You scored {score} out of {total}</p>
        <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded"
        >
            Retake Quiz
        </button>
        </div>
    );
}

export default ResultPage;