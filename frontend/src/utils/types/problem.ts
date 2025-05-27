// export type Example ={
//     id:number ;
//     inputText : string;
//     outputText : string;
//     explanation ?: string;
//     img ?: string;
// };

// export type problem = {
//     id : string;
//     title : string ;
//     problemStatement : string;
//     examples : Example[];
//     constraints : string;
//     order : number;
//     starterCode : string;
//     handlerFunction : ((fn:any)=>boolean)| string;
//     starterFunctionName :string;
// };

export type Example = {
    id:number ;
    inputText : string;
    outputText : string;
    explanation ?: string;
    img ?: string;
};

export type problem = [{
    id : string;
    title : string ;
    problemStatement? :{
        html: string;
        text: string;
    } ;
    examples : Example[];
    constraints : string;
    order : number;
    starterCode : string;
    handlerFunction : ((fn:any)=>boolean)| string;
    starterFunctionName :string;
}];

