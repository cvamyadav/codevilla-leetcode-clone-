import { Workspace } from "../../components/Workspace/Workspace";
import { Topbar } from "../../components/Topbar";
import { Problems } from "../../components/Problem";
import { ProblemList } from "../../components/ProblemList";
import ProblemDecscription from "../../components/Workspace/ProblemDescripion";

// interface ProblemProps {
//     problem: problem
// }

const Problempage= () => {
    return (
        <div className="text-100px">
            <Topbar />
            <Workspace />
        </div>
    );
};

export default Problempage;
 
export async function getStaticpaths() {
    const path = Object.keys(Problems).map((key)=>({
        params: {pid:key}
    }))
    
    return{
        path,
        fallback:false,
    }
}

export async function getStaticprop({params}:{params:{pid:string}}) {
    const {pid} = params;
    const problem = Problems[pid];  
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
