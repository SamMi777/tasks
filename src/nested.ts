import { idText } from "typescript";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const clone = [...questions];
    const pubQuestion = clone.filter(
        (Quest: Question): boolean => Quest.published
    );
    return pubQuestion;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */

//fix

export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const clone = [...questions];
    const res = clone.reduce(
        (myArray: Array<string>, Quest: Question) => 
            (Quest.body !== "" &&
            Quest.expected !== "" &&
            Quest.options.length > 0 &&
            !Array.isArray(Quest.options))
            ?
            myArray, 
            [...myArray, Quest.name],
        []
    );
    const nonEmpt = questions.filter(
        (Quest: Question): boolean =>
            Quest.body !== "" &&
            Quest.expected !== "" &&
            Quest.options.length > 0 &&
            !Array.isArray(Quest.options)
    );
    return nonEmpt;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const retval = questions.find((val: Question): boolean => val.id === id);
    if (retval === null || retval === undefined) {
        return null;
    } else {
        return retval as Question;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const clonedQuests = [...questions];
    const remQ = clonedQuests.filter(
        (theQuestion: Question): boolean => theQuestion.id !== id
    );
    return remQ;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */

export function getNames(questions: Question[]): string[] {
    const clone = [...questions];
    const res = clone.reduce(
        (myArray: Array<string>, Quest: Question) => [...myArray, Quest.name],
        []
    );

    return res;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (currentTotal: number, val: Question) => currentTotal + val.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const clone = [...questions];
    const sum = clone.reduce(
        (currentTotal: number, val: Question) =>
            null !== val && val.published
                ? currentTotal + val.points
                : currentTotal,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const clone = [...questions];
    const CSV = clone.reduce(
        (retval: string, val: Question) =>
            (retval =
                retval +
                "\n" +
                val.id.toString() +
                "," +
                val.name +
                "," +
                val.options.length.toString() +
                "," +
                val.points.toString() +
                "," +
                val.published +
                ""),
        "id,name,options,points,published"
    );
    return CSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 *questionId: 1, correct: false, text: "", submitted: false
 **/

export function makeAnswers(questions: Question[]): Answer[] {
    return [];
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const vals = { ...questions };
    const pubAll = vals.map((val: Question): Question => {
        val.published = true;
        return val;
    });
    return pubAll;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */

//fix

export function sameType(questions: Question[]): boolean {
    const clone = [...questions];
    const mytyp = clone[0].type as QuestionType;
    const allsameType = clone.reduce(
        (Quest: Question): boolean => (Quest.type as QuestionType) === mytyp
    );
    return allsameType;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuest = [...questions, makeBlankQuestion(id, name, type)];
    return newQuest;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const newQuest = [...questions];
    const retval = newQuest.findIndex(
        (val: Question): boolean => val.id === targetId
    ) as number;
    if (retval >= 0) {
        const newval = { ...newQuest[retval] };
        newval.name = newName;
        newQuest.splice(retval, 1, newval);
    }
    return newQuest;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const newQuest = [...questions];
    const retval = newQuest.findIndex(
        (val: Question): boolean => val.id === targetId
    ) as number;
    if (retval >= 0) {
        const newval = {
            ...newQuest[retval]
        };
        if (newQuestionType !== "multiple_choice_question") {
            newval.options = [];
        }
        newval.type = newQuestionType;
        newQuest.splice(retval, 1, newval);
    }
    return newQuest;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const newQuest = [...questions];
    const retval = newQuest.findIndex(
        (val: Question): boolean => val.id === targetId
    ) as number;
    if (retval >= 0) {
        const newval = {
            ...newQuest[retval],
            options: [...newQuest[retval].options]
        };
        if (targetOptionIndex === -1) {
            newval.options.splice(newval.options.length, 0, newOption);
        } else {
            newval.options.splice(targetOptionIndex, 1, newOption);
            console.log(newOption);
        }
        newQuest.splice(retval, 1, newval);
    }
    return newQuest;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const newQuest = [...questions];
    const retval = newQuest.findIndex(
        (val: Question): boolean => val.id === targetId
    ) as number;
    if (retval >= 0) {
        const newval = duplicateQuestion(newId, newQuest[retval]);
        newQuest.splice(retval + 1, 0, newval);
    }
    return newQuest;
}
