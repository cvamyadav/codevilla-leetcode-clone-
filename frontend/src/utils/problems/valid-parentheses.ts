import assert from "assert";
import { problem } from "../types/problem";

const starterCodeValidParentheses = `function isValid(s) {
  // Write your code here
};`;

const handlerValidParentheses = (fn: any) => {
    try {
        const testCases = [
            { input: "()", output: true },
            { input: "()[]{}", output: true },
            { input: "(]", output: false },
            { input: "([)]", output: false },
            { input: "{[]}", output: true },
            { input: "", output: true },
            { input: "[", output: false },
            { input: "]", output: false },
        ];

        for (const testCase of testCases) {
            const result = fn(testCase.input);
            assert.strictEqual(result, testCase.output);
        }

        return true;
    } catch (error: any) {
        console.error("Error from handlerValidParentheses:", error);
        throw new Error(error);
    }
};

export const validParentheses: problem[] = [
{
    id: 'valid-parentheses',
    title: "20. Valid Parentheses",
    problemStatement: `<p class='mt-3'>
        Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.
    </p>
    <p class='mt-3'>
        An input string is valid if:
    </p>
    <ol class='mt-3'>
        <li>Open brackets must be closed by the same type of brackets.</li>
        <li>Open brackets must be closed in the correct order.</li>
        <li>Every close bracket has a corresponding open bracket of the same type.</li>
    </ol>`,
    examples: [
        {
            id: 1,
            inputText: 's = "()"',
            outputText: "true",
        },
        {
            id: 2,
            inputText: 's = "()[]{}"',
            outputText: "true",
        },
        {
            id: 3,
            inputText: 's = "(]"',
            outputText: "false",
        },
        {
            id: 4,
            inputText: 's = "([)]"',
            outputText: "false",
        },
        {
            id: 5,
            inputText: 's = "{[]}"',
            outputText: "true",
        },
    ],
    constraints: `<li class='mt-2'>
        <code>1 <= s.length <= 10<sup>4</sup></code>
    </li>
    <li class='mt-2'>
        <code>s</code> consists of parentheses only <code>'()[]{}'</code>.
    </li>`,
    starterCode: starterCodeValidParentheses,
    order: 4,
    handlerFunction: handlerValidParentheses,
    starterFunctionName: "function isValid(",
}
];