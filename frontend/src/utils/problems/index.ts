import { problem } from "../types/problem";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-link-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";


interface ProblemMap{
    [key:string]:problem
}

export const problems: ProblemMap ={
    "two-sum": twoSum,
    "reverse-linked-list": reverseLinkedList,
    "jump-game" : jumpGame,
    "valid-paraentheses" : validParentheses,
    "search-a-2d-matrix" : search2DMatrix,
}