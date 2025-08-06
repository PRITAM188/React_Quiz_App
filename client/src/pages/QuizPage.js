import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/api/questions')
        .then(res => setQuestions(res.data))
        .catch(err => console.log(err));
    }, []);

    const handleOptionChange = (qIndex, optIndex) => {
        setAnswers({ ...answers, [qIndex]: optIndex });
    };

    const handleSubmit = () => {
        let score = 0;
        questions.forEach((q, i) => {
        if (answers[i] === q.correctAnswer) score++;
        });
        navigate("/result", { state: { score, total: questions.length } });
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Quiz</h1>
            {questions.map((q, i) => (
                <div key={i} className="mb-5">
                <p className="font-semibold mb-2">{i + 1}. {q.question}</p>
                {q.options.map((opt, j) => (
                    <label key={j} className="block">
                        <input
                            type="radio"
                            name={`question-${i}`}
                            checked={answers[i] === j}
                            onChange={() => handleOptionChange(i, j)}
                            className="mr-2"
                        />
                        {opt}
                    </label>
                ))}
                </div>
            ))}
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
            >
                Submit Quiz
            </button>
        </div>
    );
}

export default QuizPage;