
import { hanlerTwoSum, startercodetwosum } from "./two-sum";
import { handlerReverseLinkedList, starterCodeReverseLinkedList } from "./reverse-link-list";
import { handlerJumpGame, starterCodeJumpGame } from "./jump-game";
import { handlerSearch2DMatrix, starterCodeSearch2DMatrix } from "./search-a-2d-matrix";
import { handlerValidParentheses, starterCodeValidParentheses } from "./valid-parentheses";




export const index =[
    {
        id : 'two-sum',
        title : "1. Two Sum",
        problemStatement:{html:`<p className='mt-3'>
                                    Given an array of integers <code>nums</code> and an integer <code>target</code>, return
                                    <em>indices of the two numbers such that they add up to</em> <code>target</code>.
                                </p>
                                <p className='mt-3'>
                                    You may assume that each input would have <strong>exactly one solution</strong>, and you
                                    may not use thesame element twice.
                                </p>
                                <p className='mt-3'>You can return the answer in any order.</p>`,
                                text :`Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
                                You may assume that each input would have exactly one solution, and you may not use the same element twice.
                                You can return the answer in any order.`},
        examples:[
            {
                id : 1,
                inputText : "nums=[2,7,11,15], target=9",
                outputText : '[0,1]',
                explanation : "Because nums[0] + nums[1] == 9, we return [0,1].",
    
            },
            {
                id : 2,
                inputText : "nums = [3,2,4] target = 6",
                outputText : "[1,2]",
                explanation : "Because nums[1] + nums[2] == 6 , we return [1,2]",
            },{
                id : 3,
                inputText : "nums = [3,3], target = 6",
                outputText : "[0,1]",
                explanation : "Because nums[0] + nums[2] == 6 , we return [0,1]",
            },
        ],
    
    constraints :`<li className='mt-2'>
                                        <code>2 ≤ nums.length ≤ 10</code>
                                    </li>
    
                                    <li className='mt-2'>
                                        <code>-10 ≤ nums[i] ≤ 10</code>
                                    </li>
                                    <li className='mt-2'>
                                        <code>-10 ≤ target ≤ 10</code>
                                    </li>
                                    <li className='mt-2 text-sm'>
                                        <strong>Only one valid answer exists.</strong>
                                    </li>`,
                starterCode:  startercodetwosum,
    order:1,
    handlerFunction :hanlerTwoSum,
    starterFunctionName :"function twosum (",
    },



    {
        id: 'reverse-linked-list',
        title: "2. Reverse Linked List",
        problemStatement:{html : `<p class='mt-3'>
            Given the <code>head</code> of a singly linked list, reverse the list, and return the reversed list.
        </p>`,
        text :`Given the head of a singly linked list, reverse the list, and return the reversed list.`},
        examples: [
            {
                id: 1,
                inputText: "head = [1,2,3,4,5]",
                outputText: "[5,4,3,2,1]",
                explanation: "The linked list is reversed from 1→2→3→4→5 to 5→4→3→2→1.",
                
            },
            {
                id: 2,
                inputText: "head = [1,2]",
                outputText: "[2,1]",
                explanation: "The linked list is reversed from 1→2 to 2→1."
            },
            {
                id: 3,
                inputText: "head = []",
                outputText: "[]",
                explanation: "An empty linked list remains empty after reversal."
            }
        ],
        constraints: `<li class='mt-2'>
            The number of nodes in the list is the range <code>[0, 5000]</code>.
        </li>
        <li class='mt-2'>
            <code>-5000 <= Node.val <= 5000</code>
        </li>`,
        starterCode: starterCodeReverseLinkedList,
        order: 2,
        handlerFunction: handlerReverseLinkedList,
        starterFunctionName: "function reverseList(",
    },
    
    {
        
                id: 'jump-game',
                title: "3. Jump Game",
                problemStatement:{html: `<p class='mt-3'>
                    You are given an integer array <code>nums</code>. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
                </p>
                <p class='mt-3'>
                    Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise.
                </p>`
            
                , text :`You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
                Return true if you can reach the last index, or false otherwise.`},
                examples: [
                    {
                        id: 1,
                        inputText: "nums = [2,3,1,1,4]",
                        outputText: "true",
                        explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index."
                    },
                    {
                        id: 2,
                        inputText: "nums = [3,2,1,0,4]",
                        outputText: "false",
                        explanation: "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index."
                    },
                    {
                        id: 3,
                        inputText: "nums = [0]",
                        outputText: "true",
                        explanation: "You're already at the last index."
                    }
                ],
                constraints: `<li class='mt-2'>
                    <code>1 <= nums.length <= 10<sup>4</sup></code>
                </li>
                <li class='mt-2'>
                    <code>0 <= nums[i] <= 10<sup>5</sup></code>
                </li>`,
                starterCode: starterCodeJumpGame,
                order: 3,
                handlerFunction: handlerJumpGame,
                starterFunctionName: "function canJump(",
    },{
        id: 'search-a-2d-matrix',
        title: "5. Search a 2D Matrix",
        problemStatement:{html: `<p class='mt-3'>
            Write an efficient algorithm that searches for a value <code>target</code> in an <code>m x n</code> integer matrix <code>matrix</code>. This matrix has the following properties:
        </p>
        <ol class='mt-3'>
            <li>Integers in each row are sorted from left to right.</li>
            <li>The first integer of each row is greater than the last integer of the previous row.</li>
        </ol>`
        , text :`Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
        1. Integers in each row are sorted from left to right.  
        2. The first integer of each row is greater than the last integer of the previous row.`
    
    },
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
    },
    {   
    id: 'valid-parentheses',
    title: "4. Valid Parentheses",
    problemStatement:{html:
         `<p class='mt-3'>
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
        text :
        `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.   
        An input string is valid if:
        1. Open brackets must be closed by the same type of brackets.
        2. Open brackets must be closed in the correct order.
        3. Every close bracket has a corresponding open bracket of the same type.
        `


            },
    examples: [
        {
            id: 1,
            inputText: 's = "()"',
            outputText: "true",
            explanation: "The input string is valid because all brackets are closed in the correct order."
        },
        {
            id: 2,
            inputText: 's = "()[]{}"',
            outputText: "true",
            explanation: "The input string is valid because all brackets are closed in the correct order."
        },
        {
            id: 3,
            inputText: 's = "(]"',
            outputText: "false",
            explanation: "The input string is invalid because the brackets are not closed in the correct order."
        },
        {
            id: 4,
            inputText: 's = "([)]"',
            outputText: "false",
            explanation: "The input string is invalid because the brackets are not closed in the correct order."
        },
        {
            id: 5,
            inputText: 's = "{[]}"',
            outputText: "true",
            explanation: "The input string is valid because all brackets are closed in the correct order."
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
