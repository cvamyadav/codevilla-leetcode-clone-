import problems from "../utils/problems";
// import { problem } from "../utils/types/problem";
import { Workspace } from "./Workspace/Workspace";

// type BlankPageProps = {
//     problem: problem
// }

export const BlankPage = () => {
    return (
      <div className="">
        
      <Workspace problem={problems.problem}/>
      </div>
    );
  };
  