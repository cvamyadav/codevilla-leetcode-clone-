import React from "react";
import { Workspace } from "../../components/Workspace/Workspace";
import { Topbar } from "../../components/Topbar";
import problems from "../../utils/problems";
import { problem } from "../../utils/types/problem";

type ProblemProps = {
    problem: problem
}

const Problempage:React.FC<ProblemProps>= (problem) => {
    return (
        <div className="text-100px">
            <Topbar />
            <Workspace problem={problem.problem}/>
        </div>
    );
};

export default Problempage;
 
export async function getStaticpaths() {
    const path = Object.keys(problems).map((key)=>({
        params: {pid:key}
    }))
    
    return{
        path,
        fallback:false,
    }
}

export async function getStaticprop({params}:{params:{pid:string}}) {
    const {pid} = params;
    const problem = problems[pid];
    
    if(!problem){
        return{
            notfound : true,
        }

    }
    problem.handlerFunction = problem.handlerFunction.toString();
    return{
        props:{
            problem,
        }
    }
}
 export async function getServerSideProps(context:any) {
    const {params} = context;
    const {pid} = params;
    const problem = problems[pid];

    if(!problem){
        return{
            notfound : true,
        }

    }
    problem.handlerFunction = problem.handlerFunction.toString();
    return{
        props:{
            problem,
        }
    }
}