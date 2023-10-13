import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { IndexKind } from "typescript";

interface Holiday {
    emoji: string;
    date: number;
    name: string;
}
const alphabetHolidays: Holiday[] = [
    {
        emoji: "&#127876;",
        date: 12,
        name: "Christmas"
    },
    {
        emoji: "&#128048;",
        date: 4,
        name: "Easter"
    },
    {
        emoji: "&#127878;",
        date: 7,
        name: "Fourth of July"
    },
    {
        emoji: "&#127875;",
        date: 10,
        name: "Halloween"
    },
    {
        emoji: "&#129395;",
        date: 1,
        name: "New Years"
    }
];

const dateHolidays: Holiday[] = [
    {
        emoji: "&#127876;",
        date: 12,
        name: "Christmas"
    },
    {
        emoji: "&#127875;",
        date: 10,
        name: "Halloween"
    },
    {
        emoji: "&#127878;",
        date: 7,
        name: "Fourth of July"
    },
    {
        emoji: "&#128048;",
        date: 4,
        name: "Easter"
    },
    {
        emoji: "&#129395;",
        date: 1,
        name: "New Years"
    }
];

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        dateHolidays[0]
    );
    function Alphabet(): void {
        const index = alphabetHolidays.findIndex(
            (currHol: Holiday): boolean => currHol.name === currentHoliday.name
        );
        const nextIndex = (index + 1) % 5;
        setCurrentHoliday(alphabetHolidays[nextIndex]);
    }
    function Year(): void {
        const index = dateHolidays.findIndex(
            (currHol: Holiday): boolean => currHol.name === currentHoliday.name
        );
        const nextIndex = (index + 1) % 5;
        setCurrentHoliday(dateHolidays[nextIndex]);
    }
    return (
        <div>
            <span>
                <Button onClick={Alphabet}>Advance By Alphabet</Button>
                <Button onClick={Year}>Advance By Year</Button>
                {<div>Holiday: {currentHoliday.emoji}</div>}
            </span>
        </div>
    );
}
