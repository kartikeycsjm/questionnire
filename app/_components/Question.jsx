'use client'
import React, { useState } from 'react';

const Question = ({ sr, statement, options, rightoption }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setIsCorrect(option === rightoption);
    };

    return (
        <div className='bg-yellow-400 my-3 text-black w-[80%] min-h-[200px]'>
            <p className='m-3 text-blue-800'>{sr}:{statement}</p>
            <div id="options" className='m-3'>
            <div className=''>
                <input className='mr-2'
                    type="radio"
                    id="option-a"
                    value="a"
                    checked={selectedOption === 'a'}
                    onChange={() => handleOptionChange('a')}
                />
                <label htmlFor="option-a">{options.a}</label>
            </div>
            <div className=''>
                <input className='mr-2'
                    type="radio"
                    id="option-b"
                    value="b"
                    checked={selectedOption === 'b'}
                    onChange={() => handleOptionChange('b')}
                />
                <label htmlFor="option-b">{options.b}</label>
            </div>
            <div className=''>
                <input className='mr-2'
                    type="radio"
                    id="option-c"
                    value="c"
                    checked={selectedOption === 'c'}
                    onChange={() => handleOptionChange('c')}
                />
                <label htmlFor="option-c">{options.c}</label>
            </div>
            <div className=''>
                <input className='mr-2'
                    type="radio"
                    id="option-d"
                    value="d"
                    checked={selectedOption === 'd'}
                    onChange={() => handleOptionChange('d')}
                />
                <label htmlFor="option-d">{options.d}</label>
            </div>
            </div>
            {selectedOption && (
                <p>{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
            )}
        </div>
    );
};

export default Question;
