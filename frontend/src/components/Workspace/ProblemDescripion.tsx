import { AiFillDislike, AiFillLike } from "react-icons/ai"
import { BsCheck2Circle } from "react-icons/bs"
import { TiStarOutline } from "react-icons/ti"
import { useParams } from "react-router-dom"
import { index } from "../../utils/problems"




export const ProblemDecscription = () =>{
	
	  const { id } = useParams<{ id: string }>();
		console.log (id);
	  const problem = index.find((problem) => problem.id === id);

	  if (!problem) {
		return <div>Problem not found</div>;}

	 	    // Safely handle problemStatement which could be string or { html: string, text: string }
  const problemStatement = typeof problem.problemStatement === 'string' 
    ? { html: problem.problemStatement, text: problem.problemStatement }
    : problem.problemStatement || { html: '', text: '' };





    return(
        <div className='bg-dark-zinc-100 '>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-black overflow-auto'>
				<div className={"bg-zinc-200 rounded-[5px] px-5 py-[10px] text-xs cursor-pointer font-extrabold text-black"}>
					Description
				</div><hr className="color-zinc-900"/>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-x-auto mt-2  '>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-black font-medium'>{problem?.title}</div>
						</div>
						<div className='flex items-center mt-3'>
							<div
								className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
							>
								medium
							</div>
							<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
								<BsCheck2Circle />
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
								<AiFillLike />
								<span className='text-xs'>120</span>
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'>
								<AiFillDislike />
								<span className='text-xs'>2</span>
							</div>
							<div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '>
								<TiStarOutline />
							</div>
						</div>

						{/* Problem Statement(paragraphs) */}
						<div className='text-black text-sm'>
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
								<div key={index} className='example-card'>
									<p className='font-medium text-black '>Example {index+1}: </p>
									<pre>
										<strong className='text-black'>Input: </strong> {example.inputText}{" "}
										<br />
										<strong>Output:</strong> {example.outputText} <br />
										{example.explanation && (
											<>
												<strong>Explanation:</strong>
												{example.explanation}
													</>
													)
										}
									</pre>
								</div>
							))}

						</div>

						
						<div className='my-5'>
							<div className='text-black text-sm font-medium'>Constraints:</div>
							<ul className='text-black ml-5 list-disc'>
								<li className='mt-2'>
									<code>2 ≤ nums.length ≤ 10</code>
								</li>

								<li className='mt-2'>
									<code>-10 ≤ nums[i] ≤ 10</code>
								</li>
								<li className='mt-2'>
									<code>-10 ≤ target ≤ 10</code>
								</li>
								<li className='mt-2 text-sm'>
									<strong>Only one valid answer exists.</strong>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}

export default ProblemDecscription;

