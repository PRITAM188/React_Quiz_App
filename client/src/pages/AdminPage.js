import React, { useState } from 'react';
import axios from 'axios';

function AdminPage() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState(0);

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = async () => {
        if (!question || options.some(opt => !opt)) {
        alert("Please fill all fields.");
        return;
        }

        await axios.post('http://localhost:3001/api/questions', {
            question,
            options,
            correctAnswer
        });

        alert("Question added!");
        setQuestion('');
        setOptions(['', '', '', '']);
        setCorrectAnswer(0);
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Add Quiz Question</h1>
        <input
            className="border p-2 w-full mb-3"
            placeholder="Question"
            value={question}
            onChange={e => setQuestion(e.target.value)}
        />
        {options.map((opt, i) => (
            <input
            key={i}
            className="border p-2 w-full mb-2"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={e => handleOptionChange(i, e.target.value)}
            />
        ))}
        <select
            value={correctAnswer}
            onChange={e => setCorrectAnswer(Number(e.target.value))}
            className="border p-2 w-full mb-3"
        >
            <option value={0}>Correct Answer: Option 1</option>
            <option value={1}>Correct Answer: Option 2</option>
            <option value={2}>Correct Answer: Option 3</option>
            <option value={3}>Correct Answer: Option 4</option>
        </select>
        <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded"
        >
            Add Question
        </button>
        </div>
    );
}

export default AdminPage;