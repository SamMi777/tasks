import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface changeColors {
    changeMethod: () => void;
}

interface changePreview {
    changeNumber: number;
}

function ChangeColor({ changeMethod }: changeColors): JSX.Element {
    return <Button onClick={changeMethod}>Next Color</Button>;
}

function ColorPreview({ changeNumber }: changePreview): JSX.Element {
    const cIndex = changeNumber;
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[cIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const changeColor = () => setColorIndex((1 + colorIndex) % COLORS.length);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor changeMethod={changeColor}></ChangeColor>
                <ColorPreview changeNumber={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
