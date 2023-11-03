import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <label>
                    Edit Mode
                    <input
                        className="mode-switch"
                        type="checkbox"
                        onChange={updateEdit}
                        checked={edit}
                        aria-label="Edit mode switch"
                    />
                </label>
            </div>

            {edit ? (
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            onChange={updateName}
                            value={name}
                            role="textbox"
                        />
                    </label>
                    <label>
                        Is a student?
                        <input
                            type="checkbox"
                            onChange={updateStudent}
                            checked={student}
                        />
                    </label>
                </div>
            ) : (
                <div>
                    {name} is {student ? "" : "not "}student.
                </div>
            )}
        </div>
    );
}
