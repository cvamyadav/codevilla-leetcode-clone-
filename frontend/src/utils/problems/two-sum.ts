import assert from "assert"; 
import { problem } from "../types/problem";



export const startercodetwosum =`function twoSum(nums: number[], target: number): number[] {
//Write your code here
} `;

export const hanlerTwoSum  = (fn: any) => {
            try {
                const nums = [
                    [2, 7, 11, 15],
                    [3, 2, 4],
                    [3, 3],
                ];
                const target = [9, 6, 6];
                const answers = [
                    [0, 1],
                    [1, 2],
                    [0, 1],
                ];

                for (let i = 0; i < nums.length; i++) {
                    const result = fn(nums[i], target[i]);
                    if (!Array.isArray(result) || 
                        result.length !== 2 || 
                        result[0] !== answers[i][0] || 
                        result[1] !== answers[i][1]) {
                        throw new Error(`Test case ${i} failed: Expected ${answers[i]}, got ${result}`);
                    }
                }
                return true;
            } catch (error: any) {
                throw new Error(error);
            }
        }



export const twoSum  = [
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
starterCode: startercodetwosum,
order:1,
handlerFunction : hanlerTwoSum,
starterFunctionName :"function twosum (",}
];
