import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [exAnswer, setExAnswer] = useState<string>("");

    function newAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setExAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                value={exAnswer}
                onChange={newAnswer}
                placeholder="Enter Answer"
            />
            {exAnswer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
