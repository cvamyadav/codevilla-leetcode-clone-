

// Define the ListNode type
 export interface ListNode {
    val: number;
    next: ListNode | null;
}

export const starterCodeReverseLinkedList = `/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
function reverseLinkedList(head) {
  // Write your code here
};`;

export const handlerReverseLinkedList = (fn: any) => {
    try {
        // Helper function to create linked list from array
        const createLinkedList = (arr: number[]): ListNode | null => {
            if (arr.length === 0) return null;
            const head: ListNode = { val: arr[0], next: null };
            let current = head;
            for (let i = 1; i < arr.length; i++) {
                current.next = { val: arr[i], next: null };
                current = current.next;
            }
            return head;
        };

        // Helper function to convert linked list to array
        const linkedListToArray = (head: ListNode | null): number[] => {
            const arr: number[] = [];
            let current = head;
            while (current) {
                arr.push(current.val);
                current = current.next;
            }
            return arr;
        };

        const testCases = [
            { input: [1, 2, 3, 4, 5], output: [5, 4, 3, 2, 1] },
            { input: [1, 2], output: [2, 1] },
            { input: [], output: [] },
            { input: [1], output: [1] }
        ];

        for (const testCase of testCases) {
            const inputList = createLinkedList(testCase.input);
            const result = fn(inputList);
            const resultArray = linkedListToArray(result);
            
            // Manual deep equality check
            if (JSON.stringify(resultArray) !== JSON.stringify(testCase.output)) {
                throw new Error(
                    `Test failed for input ${JSON.stringify(testCase.input)}\n` +
                    `Expected: ${JSON.stringify(testCase.output)}\n` +
                    `Received: ${JSON.stringify(resultArray)}`
                );
            }
        }

        return true;
    } catch (error: any) {
        console.error("Error from handlerReverseLinkedList:", error);
        throw new Error(error.message);
    }
};

export const reverseLinkedList = [{
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
    starterCode: starterCodeReverseLinkedList,
    order: 2,
    handlerFunction: handlerReverseLinkedList,
    starterFunctionName: "function reverseLinkedList(",
}];