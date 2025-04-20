import React from "react";
import { Workspace } from "../../components/Workspace/Workspace";
import { problems } from "../../utils/problems";
import { problem } from "../../utils/types/problem";



type ProblempageProps = {
        problem : problem
};

const Problempage: React.FC<ProblempageProps> = () => {
    return (
        <div className="text-100px">
            <Topbar problempage/>
            <Workspace/>
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
