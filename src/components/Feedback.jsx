import React, { useState } from 'react';

const Feedback = () => {
    const [feedback, setFeedback] = useState('');

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission of feedback here
        console.log(feedback);
        // Reset the feedback state
        setFeedback('');
    };

    return (
        <div>
            <h2>Feedback</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={handleFeedbackChange}
                    placeholder="Enter your feedback"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Feedback;