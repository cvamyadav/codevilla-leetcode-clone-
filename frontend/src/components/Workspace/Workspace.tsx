// import Split from "react-split"
// import { Playground } from "./Playground/Playground"
// import ProblemDecscription from "./ProblemDescripion"
// import { useEffect, useState } from "react";


// export const Workspace  = () =>{

//      const [isVertical, setIsVertical] = useState(window.innerWidth < 550);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsVertical(window.innerWidth < 550);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);



//     return<div className="flex flex-col h-screen w-full bg-zinc-900 ml-0">
//            <Split className="split  "        
//            direction={isVertical ? "vertical" : "horizontal"}
//             sizes={[50, 50]}
//             minSize={100}
//             gutterSize={5}  >
//         < ProblemDecscription/>

//         <div className=""> <Playground/></div>

//        </Split>
//     </div>
// }

import Split from "react-split";
import { Playground } from "./Playground/Playground";
import ProblemDecscription from "./ProblemDescripion";

export const Workspace = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-zinc-900 ml-0 overflow-hidden">
      
      {/* This layout is shown on screens md and above (768px+) */}
      <div className="hidden md:flex h-full">
        <Split
          className="flex w-full"
          sizes={[50, 50]}
          minSize={200}
          gutterSize={5}
        >
          <ProblemDecscription />
          <Playground />
        </Split>
      </div>

      {/* This layout is shown on small screens (below 768px) */}
      <div className="flex flex-col md:hidden h-full">
        <Split>
          <ProblemDecscription />
          <Playground />
        </Split>
      </div>
    </div>
  );
};
