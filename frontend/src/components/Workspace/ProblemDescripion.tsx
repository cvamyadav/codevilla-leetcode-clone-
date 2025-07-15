
import { useParams } from "react-router-dom"
import { index } from "../../utils/problems"

import '../../App.css';



export const ProblemDecscription = () =>{
	
	  const { id } = useParams<{ id: string }>();
	
	  const problem = index.find((problem) => problem.id === id);

	  if (!problem) {
		return <div>Problem Upload soon ...</div>;}







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
								{problem?.difficulty}
							</div><div className='text-xs font-bold text-zinc-200 ml-4 '>{problem?.category}</div>
							
						</div>

						
						<div className='text-white text-sm mt-3'>
							<div dangerouslySetInnerHTML={{__html:problem?.problemStatement.html}}/>
						</div>
						
						<div className='mt-4'>
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

