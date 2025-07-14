import Split from "react-split"
import { Playground } from "./Playground/Playground"
import ProblemDecscription from "./ProblemDescripion"



export const Workspace  = () =>{
    return<div className="flex flex-col h-screen w-full bg-zinc-900 ml-0">
           <Split className="split  "  >
        < ProblemDecscription/>

        <div className=""> <Playground/></div>

       </Split>
    </div>
}

