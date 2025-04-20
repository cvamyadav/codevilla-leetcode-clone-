import CodeMirror from "@uiw/react-codemirror"
import { Prefrencenav } from "./Prefrencenav/Prefrencenav"
import Split from "react-split"
import { vscodeLight } from "@uiw/codemirror-theme-vscode"
import { javascript } from "@codemirror/lang-javascript"

export const Playground = () =>{
    const boilerPlate = `function twoSum(nums, target){
    //Write your code here}`;


    return(
        <div className="flex flex-col relatve border-2px-solid-black rounded">
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
                <div className="w-full px-4 overflow-auto">
                    <div className="flex h-10 item-center space-x-6">
                        <div className="relative flex h-full flex-col justify-center cursor-pointer  ">
                            <div className="text-sm font-medium leading-5 text white ">Testecase</div>
                            <hr className="absolute bottom-0 h-0.5 w-15 rounded-full border-none bg-zinc-900"  ></hr>
                        </div>
                    </div>
                  <div className="flex">
                   {/* {testcase 1} */}

                   <div className="mr-2 items-start mt-2 ">
                    <div className="flex flex-wrap items-center gap-y-4">
                        <div className="font-medium items-center transition-all foucus:outline-none inline flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor=pointer whitespace-nowrap">case 1</div>
                    </div>

                   </div>

                   {/* {testcase2} */}

                   
                   <div className="mr-2 items-start mt-2 text-black">
                    <div className="flex flex-wrap items-center gap-y-4">
                        <div className="font-medium items-center transition-all foucus:outline-none inline flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">case 2</div>
                    </div>

                   </div>

                
                   {/* {testcase3} */}

                   
                   <div className="mr-2 items-start mt-2 ">
                    <div className="flex flex-wrap items-center gap-y-4">
                        <div className="font-medium items-center transition-all foucus:outline-none inline flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">case 3</div>
                    </div>

                   </div>
                    </div>



                   <div className="font-semibold my-4">
                    <p className="text-sm font-medium mt-4 text white ">Input:</p>
                    <div className="w-full curser-text text-sm rounded-lg border px-3 py-[10x] bg-dark-fill-3 border-transparent text-black mt-2">
                        Nums: [2,7,11,15],target: 9
                    </div>
                    <p className="text-sm font-medium mt-4 text white ">Output:</p>
                    <div className="w-full curser-text rounded-lg border px-3 py-[10x] bg-dark-fill-3 border-transparent text-black mt-2">
                        [0,1]
                    </div>
                   </div>

                  
                </div>
            </Split>


        </div>
    )
}