
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
