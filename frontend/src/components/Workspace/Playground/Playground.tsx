import CodeMirror from "@uiw/react-codemirror"
import { Prefrencenav } from "./Prefrencenav/Prefrencenav"
import Split from "react-split"
import { vscodeLight } from "@uiw/codemirror-theme-vscode"
import { javascript } from "@codemirror/lang-javascript"

export const Playground = () =>{
    return(
        <div className="flex flex-col relatve">
            <Prefrencenav/>
        
            <Split className=" h-[calc(100vh-96px)]" direction="vertical" sizes={[60,40]}>
                <div className="w-full overflow-auto">
                   <CodeMirror
                   value="const a=1;"
                   theme={vscodeLight}
                   extensions={[javascript()]}
                   style={{fontSize:16}}
                   
                   />
                </div>
                <div>
                    testcases
                </div>
            </Split>


        </div>
    )
}