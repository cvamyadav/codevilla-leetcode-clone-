import assert from "assert"; 
import { problem } from "../types/problem";



export const startercodetwosum =`function twoSum(nums, target) {
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



















































