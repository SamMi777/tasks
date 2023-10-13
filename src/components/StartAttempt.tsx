import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { start } from "repl";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attemptNumber, setattemptNumber] = useState<number>(4);
    function startQuiz(): void {
        if (attemptNumber > 0) {
            setInProgress(true);
            setattemptNumber(attemptNumber - 1);
        }
    }
    function stopQuiz(): void {
        setInProgress(false);
    }
    function mulligan(): void {
        setattemptNumber(attemptNumber + 1);
    }
    return (
        <div>
            <span>
                {<div>{attemptNumber}</div>}
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attemptNumber <= 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={stopQuiz} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={mulligan} disabled={inProgress}>
                    Mulligan
                </Button>
            </span>
        </div>
    );
}
