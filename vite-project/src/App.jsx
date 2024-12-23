import React, { useState, useEffect } from "react";
import { getAll } from "@divyanshu013/inspirational-quotes";
import "./App.css";

export default function App() {
    const [quotes, setQuotes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
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

    return (
        <div className="content">
            <div className="quote-container">
                <h1>Inspirational Quote Generator</h1>
                {currentQuote && (
                    <blockquote className="quote">
                        <p>"{currentQuote.quote}"</p>
                    </blockquote>
                )}
                {currentQuote && <h2 className="author">{currentQuote.author}</h2>}
                {currentQuote && <h3 className="source">{currentQuote.source}</h3>}
            </div>
            <div className="button-container">
                <button className="prev" onClick={handlePreviousClick}>
                    Previous
                </button>
                <button className="next" onClick={handleNextClick}>
                    Next
                </button>
            </div>
        </div>
    );
}



