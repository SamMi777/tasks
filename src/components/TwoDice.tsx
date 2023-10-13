import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);
    const [winVisible, setWinVisible] = useState<boolean>(false);
    const [loseVisible, setLoseVisible] = useState<boolean>(false);
    function leftDieChange(): void {
        const dieRoll = d6();
        if (dieRoll === rightDie) {
            setWinVisible(true);
            setLoseVisible(false);
        } else {
            setWinVisible(false);
            setLoseVisible(false);
        }

        if (dieRoll === 1 && rightDie === 1) {
            setWinVisible(false);
            setLoseVisible(true);
        }

        setLeftDie(dieRoll);
    }
    function rightDieChange(): void {
        const dieRoll = d6();
        if (dieRoll === leftDie) {
            setWinVisible(true);
            setLoseVisible(false);
        } else {
            setWinVisible(false);
            setLoseVisible(false);
        }

        if (dieRoll === 1 && leftDie === 1) {
            setWinVisible(false);
            setLoseVisible(true);
        }

        setRightDie(dieRoll);
    }
    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <span>
                <Button onClick={leftDieChange}>Roll Left</Button>
                <Button onClick={rightDieChange}>Roll Right</Button>
            </span>
            {winVisible && <div>Win</div>}
            {loseVisible && <div>Lose</div>}
        </div>
    );
}
