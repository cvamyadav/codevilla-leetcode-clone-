import Split from "react-split"
import { ProblemDecscription } from "./ProblemDescripion"
import { Playground } from "./Playground/Playground"

export const Workspace = () =>{
    return(
       <Split className="split">
        <ProblemDecscription />
        <div className="h-screen"> <Playground/></div>

       </Split>

    )
}