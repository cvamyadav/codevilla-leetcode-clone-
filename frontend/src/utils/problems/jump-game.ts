
export const starterCodeJumpGame = `function canJump(nums) {
 // Write your code here
};`;

export const handlerJumpGame = (fn: any) => {
    try {
        const testCases = [
            { input: [2,3,1,1,4], output: true },
            { input: [3,2,1,0,4], output: false },
            { input: [0], output: true },
            { input: [1,0,1,0], output: false },
            { input: [2,0,0], output: true },
        ];

        for (const testCase of testCases) {
            const result = fn(testCase.input);
            if (result !== testCase.output) {
                throw new Error(
                    `Test failed for input [${testCase.input}]\n` +
                    `Expected: ${testCase.output}\n` +
                    `Received: ${result}`
                );
            }
        }

        return true;
    } catch (error: any) {
        console.error("Error from handlerJumpGame:", error);
        throw new Error(error.message);
    }
};

export const jumpGame = [
    {
    id: 'jump-game',
    title: " Jump Game",
    problemStatement: `<p class='mt-3'>
        You are given an integer array <code>nums</code>. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
    </p>
    <p class='mt-3'>
        Return <code>true</code> if you can reach the last index, or <code>false</code> otherwise.
    </p>`,
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
}
];