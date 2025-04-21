import Split from "react-split"
import { Playground } from "./Playground/Playground"
import { problem } from "../../utils/types/problem"
import ProblemDecscription from "./ProblemDescripion"



export const Workspace  = () =>{
    return(
       <Split className="split">
        < ProblemDecscription/>
        
        <div className="h-screen"> <Playground/></div>

       </Split>

    )
}

