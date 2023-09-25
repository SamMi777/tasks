/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const arr = new Array(0);
    if (numbers.length > 1) {
        arr.splice(0, 0, numbers[0]);
        arr.splice(1, 0, numbers[numbers.length - 1]);
    } else if (numbers.length === 1) {
        arr.splice(0, 0, numbers[0]);
        arr.splice(1, 0, numbers[0]);
    }
    return arr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNum = numbers.map((num: number): number => 3 * num);
    return tripledNum;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intarr = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return intarr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const intarr = amounts.map((num: string): number =>
        isNaN(parseInt(num.replace("$", "")))
            ? 0
            : parseInt(num.replace("$", ""))
    );
    return intarr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */

export const shoutIfExclaiming = (messages: string[]): string[] => {
    const updatedmsg = messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    const res = updatedmsg.filter(
        (msg: string): boolean => msg[msg.length - 1] !== "?"
    );
    return res;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const sum = words.reduce(
        (currentTotal: number, val: string) =>
            val.length < 4 ? currentTotal + 1 : currentTotal,
        0
    );
    return sum;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */

export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const sum = colors.reduce(
        (currentTotal: number, val: string) =>
            val === "red" || val === "blue" || val === "green"
                ? currentTotal + 1
                : currentTotal,
        0
    );
    return colors.length === sum;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */

export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, val: number) => currentTotal + val,
        0
    );
    const val = addends.reduce(
        (stringval: string, val: number) => stringval + val.toString() + "+",
        "="
    );
    return sum.toString() + val.slice(0, -1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */

//if the value is not negative, increment negative position

export function injectPositive(values: number[]): number[] {
    const negpos = values.reduce(
        (currentTotal: number, val: number, i: number) =>
            val < 0 && currentTotal === values.length ? i : currentTotal,
        values.length
    );
    const sum = values.reduce(
        (currentTotal: number, val: number, i: number) =>
            negpos > i ? currentTotal + val : currentTotal,
        0
    );
    const arr = [...values];
    arr.splice(negpos + 1, 0, sum);

    return arr;
}
