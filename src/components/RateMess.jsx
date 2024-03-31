import React, { useState, useEffect } from 'react';

const RateMess = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already rated today (You can use localStorage or cookies for persistent storage)
    const hasRatedToday = localStorage.getItem('ratedToday');
    if (hasRatedToday) {
      setSubmitted(true);
    }
  }, []);

  const handleRating = (star) => {
    if (!submitted) {
      setRating(star);
      setSubmitted(true);
      // Save rating status to prevent rating multiple times in a day
      localStorage.setItem('ratedToday', true);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="mb-2 text-lg font-semibold">Rate Your Mess</h2>
      <p>Mess Name: XYZ</p>
      {!submitted ? (
        <div className="flex items-center mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className="focus:outline-none"
              onMouseEnter={() => setRating(star)}
              onMouseLeave={() => setRating(null)}
            >
              {star <= (rating || 0) ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.34 7.15H22L15.72 13l2.34 7.15L12 17.72 6.94 20.15 9.28 13 3 9.15h7.66z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 hover:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              )}
            </button>
          ))}
        </div>
      ) : (
        <p className="mt-4">Thank you for your feedback!</p>
      )}
    </div>
  );
};

export default RateMess;
