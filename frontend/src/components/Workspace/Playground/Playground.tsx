import CodeMirror from "@uiw/react-codemirror"
import Split from "react-split"
import { vscodeLight } from "@uiw/codemirror-theme-vscode"
import { javascript } from "@codemirror/lang-javascript"
import { Prefrencenav } from "./Prefrencenav/Prefrencenav"
import { useParams } from "react-router-dom"
import { index } from "../../../utils/problems"
import { useState } from "react"
import { BsChevronUp } from "react-icons/bs"


export const Playground = () =>{
    const [activetastecase, setActiveTestcase] = useState<number>(0);
    
    const {id} = useParams<{ id: string }>();
    const problem = index.find((problem) => problem.id === id);
    const boilerPlate = problem?.starterCode;


   
        
    

    return(
        <div className="flex flex-col relatve border-2px-solid-black rounded ">
            <Prefrencenav/>
        
            <Split className=" h-[calc(100vh-96px)]" direction="vertical" sizes={[60,40]}>
                <div className="w-full overflow-auto">
                   <CodeMirror 
                   value={boilerPlate}
                   theme={vscodeLight}
                   extensions={[javascript()]}
                   style={{fontSize:16}}
                   
                   />
                </div>
                <div className="w-full px-4 overflow-auto ">
                    <div className="flex h-10 item-center space-x-6">
                        <div className="relative flex h-full flex-col justify-center cursor-pointer  ">
                            <div className="text-sm font-bold leading-5 text bg-zinc-200 p-1 px-4 py-1 rounded">Testecase</div>
                            <hr className="absolute bottom-0 h-0.5 w-15 rounded-full border bg-zinc-900"  ></hr>
                        </div>
                    </div>
                  <div className="flex">
                   
                     {problem?.examples.map((example, index) => (
                        
                   <div className="mr-2 items-start mt-2 "key={example.id}
                      onClick={()=>setActiveTestcase(index)} >
                    <div className="flex flex-wrap items-center gap-y-4">
                        <button className={`font-medium items-center transition-all foucus:outline-none inline flex bg-zinc-200
                         hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor=pointer whitespace-nowrap ${activetastecase===index?"text-blue-500":""}`}>Case {index+1}</button>
                    </div>

                   </div>
                     ))}

                  
                   
                   
                    </div>



                   <div className="font-semibold my-4">
                    <p className="text-sm font-medium mt-4 text white ">Input:</p>
                    <div className="w-full curser-text text-sm rounded-lg border px-3 py-[10x] bg-dark-fill-3 border-transparent text-black mt-2">
                       {problem?.examples[activetastecase].inputText}
                    </div>
                    <p className="text-sm font-medium mt-4 text white ">Output:</p>
                    <div className="w-full curser-text rounded-lg border px-3 py-[10x] bg-dark-fill-3 border-transparent text-black mt-2">
                          {problem?.examples[activetastecase].outputText}
                    </div>
                   </div>
                     <div className="flex items-center justify-between mt-4 font-semibold">
                       <div className="flex items-center space-x-2 bg-gray-200 rounded-lg px-3 py-2">
                            Console<BsChevronUp className="fill-gray-6 mx-1 fill-dark-gray-6" />
                        </div><div>
                            <button className="  bg-gray-200 rounded-lg px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-black bg-green-s hover:bg-green-3 rounded-lg">
                                Run
                            </button>
                            <button className="  bg-green-600 rounded-lg px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-black bg-green-s hover:bg-green-3 rounded-lg ml-2">
                                Submit
                            </button>
                        </div>
                     </div>
                  
                </div>
            </Split>
          
          
    </div>                                                                                
        
    )


}

