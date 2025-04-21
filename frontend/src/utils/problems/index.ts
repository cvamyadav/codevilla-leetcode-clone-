

// import { problem } from "../types/problem";
// import { jumpGame } from "./jump-game";
// import { reverseLinkedList } from "./reverse-link-list";
// import { search2DMatrix } from "./search-a-2d-matrix";
// import { twoSum } from "./two-sum";
// import { validParentheses } from "./valid-parentheses";

// interface  ProblemMap{
//     [key :string] :problem
// }

// const problems: ProblemMap = {
//     "two-sum": twoSum,
//     "reverse-linked-list": reverseLinkedList,
//     "jump-game": jumpGame,
//     "valid-parentheses": validParentheses,
//     "search-a-2d-matrix": search2DMatrix,
// };

// export default problems;


export const index =[
    {
        id : 'two-sum',
        title : "1. Two Sum",
        problemStatement:`<p className='mt-3'>
                                    Given an array of integers <code>nums</code> and an integer <code>target</code>, return
                                    <em>indices of the two numbers such that they add up to</em> <code>target</code>.
                                </p>
                                <p className='mt-3'>
                                    You may assume that each input would have <strong>exactly one solution</strong>, and you
                                    may not use thesame element twice.
                                </p>
                                <p className='mt-3'>You can return the answer in any order.</p>`,
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
    // starterCode: startercodetwosum,
    order:1,
    // handlerFunction : hanlerTwoSum,
    starterFunctionName :"function twosum (",},



    {
        id: 'reverse-linked-list',
        title: "206. Reverse Linked List",
        problemStatement: `<p class='mt-3'>
            Given the <code>head</code> of a singly linked list, reverse the list, and return the reversed list.
        </p>`,
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
        // starterCode: starterCodeReverseLinkedList,
        order: 2,
        // handlerFunction: handlerReverseLinkedList,
        starterFunctionName: "function reverseList(",
    },
    ];
