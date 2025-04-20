import Split from "react-split"
import { Playground } from "./Playground/Playground"
import { ProblemDecscription } from "./ProblemDescripion"
import { problem } from "../../utils/types/problem"

type   WorkspaceProps={
    problem : problem,
};

export const Workspace = ({problem}) =>{
    return(
       <Split className="split">
        <ProblemDecscription problem={problem}/>
        <div className="h-screen"> <Playground/></div>

       </Split>

    )
}

