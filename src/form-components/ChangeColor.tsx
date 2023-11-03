import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "blue",
        "green",
        "red",
        "yellow",
        "orange",
        "purple",
        "black",
        "white"
    ];
    const [changeColor, setChangeColor] = useState(colors[0]);
    const colorChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChangeColor(event.target.value);
    };
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label key={color}>
                    <input
                        className="form-check-input"
                        type="radio"
                        value={color}
                        checked={changeColor === color}
                        onChange={colorChanger}
                    />
                    {color}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: changeColor }}
            >
                {changeColor}
            </div>
        </div>
    );
}
