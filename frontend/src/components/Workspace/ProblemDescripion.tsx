import { AiFillDislike, AiFillLike } from "react-icons/ai"
import { BsCheck2Circle } from "react-icons/bs"
import { TiStarOutline } from "react-icons/ti"
import { useParams } from "react-router-dom"
import { index } from "../../utils/problems"

import '../../App.css';



export const ProblemDecscription = () =>{
	
	  const { id } = useParams<{ id: string }>();
	
	  const problem = index.find((problem) => problem.id === id);

	  if (!problem) {
		return <div>Problem Upload soon ...</div>;}

	 	    // Safely handle problemStatement which could be string or { html: string, text: string }






    return(
        <div className=' min-h-screen w-fit bg-zinc-900 dark:bg-dark-layer-1 no-scrollbar border-2 rounded border-zinc-700 m-0.5'>
			{/* TAB */}
			<div className=' ml-4 flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-black overflow-auto'>
				<div className={"bg-zinc-700 rounded-[5px] px-5 py-[10px] text-xs cursor-pointer font-extrabold text-white hover:bg-zinc-300 transition-colors duration-200"}>
					Description
				</div><hr className="color-green-900"/>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-x-auto mt-2  no-scrollbar'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-bold ml-1'>{problem?.title}</div>
						</div>
						<div className='flex items-center mt-3'>
							<div
								className={`text-white bg-green-500 inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
							>
								medium
							</div>
							<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-500 text-dark-green-500'>
								<BsCheck2Circle />
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-gray-600'>
								<AiFillLike />
								<span className='text-xs'></span>
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-zinc-500 text-gray-600'>
								<AiFillDislike />
								<span className='text-xs'></span>
							</div>
							<div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-zinc-500 text-gray-600'>
								<TiStarOutline />
							</div>
						</div>

						{/* Problem Statement(paragraphs) */}
						<div className='text-white text-sm mt-3'>
							{/* <p className='mt-3'>
								Given an array of integers <code>nums</code> and an integer <code>target</code>, return
								<em>indices of the two numbers such that they add up to</em> <code>target</code>.
							</p>
							<p className='mt-3'>
								You may assume that each input would have <strong>exactly one solution</strong>, and you
								may not use thesame element twice.
							</p>
							<p className='mt-3'>You can return the answer in any order.</p> */}
							 <div dangerouslySetInnerHTML={{__html:problem?.problemStatement.html}}/>			
									</div>
						{/* Examples */}
						<div className='mt-4'>
							{/* Example 1 */}
							 {/* <div>
								<p className='font-medium text-black '>Example 1: </p>
								<div className='example-card'>
									<pre>
										<strong className='text-black'>Input: </strong> nums = [2,7,11,15], target = 9{" "}
										<br />
										<strong>Output:</strong> [0,1] <br />
										<strong>Explanation:</strong>Because nums[0] + nums[1] == 9, we return [0, 1].
									</pre>
								</div>
							</div> */}

						
						<div>
								
							{problem?.examples.map((example,index) => (
								<div key={index} className='example-card text-white'>
									<p className='font-bold text-white mb-4 mt-2'>Example {index+1}: </p>
									<pre>
										<strong className='text-white font-medium'>Input: </strong > {example.inputText}{" "}
										<br />
										<strong className='text-white font-medium'>Output:</strong> {example.outputText} <br />
										{example.explanation && (
											<>
												<strong className='text-white font-medium'>Explanation:</strong>
												{example.explanation}
													</>
													)
										}
									</pre>
								</div>
							))}

						</div>

						
						<div className='my-5'>
							Constraints:
							<div dangerouslySetInnerHTML={{__html:problem?.constraints.html}}/>
							
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}

export default ProblemDecscription;

