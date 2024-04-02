import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [rollNumber, setRollNumber] = useState('');

    const handleSearch = () => {
        onSearch(rollNumber);
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Enter Roll Number"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
                onClick={handleSearch}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
