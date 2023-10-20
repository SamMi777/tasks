import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface fullDHValue {
    updateDHValue: () => void;
}

function Halver({ updateDHValue }: fullDHValue): JSX.Element {
    return <Button onClick={updateDHValue}>Halve</Button>;
}
function Doubler({ updateDHValue }: fullDHValue): JSX.Element {
    return <Button onClick={updateDHValue}>Double</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const halver = () => setDhValue(dhValue * 0.5);
    const doubler = () => setDhValue(dhValue * 2);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler updateDHValue={doubler}></Doubler>
            <Halver updateDHValue={halver}></Halver>
        </div>
    );
}
