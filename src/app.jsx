import "bootstrap";
import "./style.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = ["♥", "♦", "♠", "♣"];
    const suitClasses = ["heart", "diamond", "spade", "club"];

    const [card, setCard] = useState({ value: "A", suit: "♠", className: "spade" });
    const [size, setSize] = useState({ width: 150, height: 200 });

    const generateCard = () => {
        let randomValue = values[Math.floor(Math.random() * values.length)];
        let randomIndex = Math.floor(Math.random() * suits.length);
        let randomSuit = suits[randomIndex];
        let randomClass = suitClasses[randomIndex];

        setCard({ value: randomValue, suit: randomSuit, className: randomClass });
    };

    const handleSizeChange = (e) => {
        const { name, value } = e.target;
        setSize({ ...size, [name]: value });
    };

    useEffect(() => {
        generateCard();
    }, []);

    return (
        <div className="container">
            <div className={`card ${card.className}`} style={{ width: `${size.width}px`, height: `${size.height}px` }}>
                <span className="suit top">{card.suit}</span>
                <span className="number">{card.value}</span>
                <span className="suit bottom">{card.suit}</span>
            </div>
            <button className="btn" onClick={generateCard}>Nueva Carta</button>
            <div className="resize-controls">
                <label>Ancho: <input type="number" name="width" value={size.width} onChange={handleSizeChange} /></label>
                <label>Alto: <input type="number" name="height" value={size.height} onChange={handleSizeChange} /></label>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
