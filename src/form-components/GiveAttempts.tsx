import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [currAttempts, setCurrAttempts] = useState(3);
    const [requestAttempts, setRequestAttempts] = useState("");

    function loseAttempt() {
        setCurrAttempts(currAttempts - 1);
    }

    function gainAttempts() {
        const numAttempts = parseInt(requestAttempts, 10);
        if (!isNaN(numAttempts)) {
            setCurrAttempts((prevAttempts) => prevAttempts + numAttempts);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {currAttempts}</div>
            <input
                type="number"
                value={requestAttempts}
                onChange={(e) => setRequestAttempts(e.target.value)}
                aria-label="Attempts to be added"
            />
            <button onClick={loseAttempt} disabled={currAttempts <= 0}>
                Use
            </button>
            <button onClick={gainAttempts}>Gain</button>
        </div>
    );
}
