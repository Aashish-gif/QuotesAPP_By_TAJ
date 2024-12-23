// FileName: App.js

import React, { useState, useEffect } from "react";
import { getRandom, getAll } from "@divyanshu013/inspirational-quotes";
import "./App.css";

export default function App() {
    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Fetch all quotes and set them in the state
        const quotesData = getAll();
        setQuotes(quotesData);
    }, []);

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    };

    const handlePreviousClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
        );
    };

    const currentQuote = quotes.length > 0 ? quotes[currentIndex] : null;

    const backgroundColors = ["#8cc084", "#b7ebc3", "#ffb37e", "#7fa8d7"];

    const currentBackgroundColor =
        backgroundColors[currentIndex % backgroundColors.length];

    return (
        <div className="content" style={{ background: currentBackgroundColor }}>
           
            <h1>Inspirational Quote Generator</h1>
            {currentQuote && (
                <blockquote>
                    <p>"{currentQuote.quote}"</p>
                </blockquote>
            )}
            {currentQuote && <h2>{currentQuote.author}</h2>}
            {currentQuote && <h3>{currentQuote.source}</h3>}
            <div className="button-container">
                <button onClick={handlePreviousClick}>Previous</button>
                <button onClick={handleNextClick}>Next</button>
                <button
                    onClick={() =>
                        window.open(
`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
                        )
                    }
                >
                    Share on Facebook
                </button>
            </div>
        </div>
    );
}
