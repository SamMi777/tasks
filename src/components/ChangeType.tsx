import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [word, setWord] = useState<QuestionType>("multiple_choice_question");
    const [text, prettyText] = useState<string>("Short Answer");
    function makePrettyText(): void {
        if (word === "short_answer_question") {
            prettyText("Short Answer");
        } else {
            prettyText("Multiple Choice");
        }
    }
    function changeQuestionType(): void {
        // Set visible to be the logical opposite of its previous value
        if (word === "short_answer_question") {
            setWord("multiple_choice_question");
        } else {
            setWord("short_answer_question");
        }
        makePrettyText();
    }
    return (
        <div>
            <span>
                <Button onClick={changeQuestionType}>Change Type</Button>
                {<div>{text}</div>}
            </span>
        </div>
    );
}
