import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState(options[0]);
    const changeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setChoice(e.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={choice} onChange={changeOption} role="combobox">
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {choice === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
