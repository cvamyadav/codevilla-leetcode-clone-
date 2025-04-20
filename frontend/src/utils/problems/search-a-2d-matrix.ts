import assert from "assert";
import { Problem } from "../types/problem";

const starterCodeSearch2DMatrix = `function searchMatrix(matrix, target) {
  // Write your code here
};`;

const handlerSearch2DMatrix = (fn: any) => {
    try {
        const testCases = [
            { 
                input: {
                    matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
                    target: 3
                }, 
                output: true 
            },
            { 
                input: {
                    matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
                    target: 13
                }, 
                output: false 
            },
            { 
                input: {
                    matrix: [[1]],
                    target: 1
                }, 
                output: true 
            },
            { 
                input: {
                    matrix: [[1,3]],
                    target: 3
                }, 
                output: true 
            },
            { 
                input: {
                    matrix: [[1],[3]],
                    target: 3
                }, 
                output: true 
            },
            { 
                input: {
                    matrix: [[]],
                    target: 1
                }, 
                output: false 
            },
        ];

        for (const testCase of testCases) {
            const result = fn(testCase.input.matrix, testCase.input.target);
            assert.strictEqual(result, testCase.output);
        }

        return true;
    } catch (error: any) {
        console.error("Error from handlerSearch2DMatrix:", error);
        throw new Error(error);
    }
};

export const search2DMatrix: Problem = {
    id: 'search-a-2d-matrix',
    title: "74. Search a 2D Matrix",
    problemStatement: `<p class='mt-3'>
        Write an efficient algorithm that searches for a value <code>target</code> in an <code>m x n</code> integer matrix <code>matrix</code>. This matrix has the following properties:
    </p>
    <ol class='mt-3'>
        <li>Integers in each row are sorted from left to right.</li>
        <li>The first integer of each row is greater than the last integer of the previous row.</li>
    </ol>`,
    examples: [
        {
            id: 1,
            inputText: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',
            outputText: "true",
            explanation: "The target 3 exists in the matrix."
        },
        {
            id: 2,
            inputText: 'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13',
            outputText: "false",
            explanation: "The target 13 does not exist in the matrix."
        },
        {
            id: 3,
            inputText: 'matrix = [[1]], target = 1',
            outputText: "true",
            explanation: "The matrix contains the single element which is the target."
        },
    ],
    constraints: `<li class='mt-2'>
        <code>m == matrix.length</code>
    </li>
    <li class='mt-2'>
        <code>n == matrix[i].length</code>
    </li>
    <li class='mt-2'>
        <code>1 <= m, n <= 100</code>
    </li>
    <li class='mt-2'>
        <code>-10<sup>4</sup> <= matrix[i][j], target <= 10<sup>4</sup></code>
    </li>`,
    starterCode: starterCodeSearch2DMatrix,
    order: 5,
    handlerFunction: handlerSearch2DMatrix,
    starterFunctionName: "function searchMatrix(",
};