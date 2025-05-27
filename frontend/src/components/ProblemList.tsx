import { BsCheck2Circle } from "react-icons/bs";
import { Problems } from "./Problem";
import { Link } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";


export const ProblemList = () => {
  return (
      <div className="flex flex-col items-center   h-full  bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-lg font-extrabold mt-5">
              "Quality over Quantity"
          </div>
          <table className="w-3/4 border-separate border-spacing-0 mt-5">
              <thead>
                  <tr className="text-left border-b-2 pb-2 text-zinc-900">
                      <th className="px-4 py-2">Title</th>
                      <th className="px-4 py-2 text-center">Difficulty</th>
                      <th className="px-4 py-2 text-center">Category</th>
                      <th className="px-4 py-2 text-center">Status</th>
                      <th className="px-4 py-2 text-center">Solution</th>
                  </tr>
              </thead>
              <tbody>
                  {Problems.map((doc, idx) => {
                      const DifficultyColor = 
                          doc.difficulty === "Easy" 
                              ? "text-green-500"  
                              : doc.difficulty === "Hard" 
                              ? "text-red-500" 
                              : "text-yellow-500";
 
                      return (
                          <tr   key={doc.id} className={`border ${idx % 2 === 1 ? "bg-zinc-200 rounded border" : "" } rounded-lg`}>


                              <td className="px-4 py-2">
                                  <Link
                                      className="hover:text-blue-600 text-small cursor-pointer"
                                      to={`/problems/${doc.id}`}
                                  >
                                      {doc.order}.{doc.title}
                                  </Link>
                              </td>


                              <td
                                  className={`px-4 py-2 text-center font-small whitespace-nowrap ${DifficultyColor}`}
                              >
                                  {doc.difficulty}
                              </td>


                              <td className="px-4 py-2 text-center">{doc.category}</td>


                              <td className="px-4 py-2 text-center">
                                  <BsCheck2Circle className="ml-6"
                                      fontSize={"18"}
                                      width={18}
                                      style={{ color: "#0f9d58" }}
                                  />
                              </td>


                              <td className="px-4 py-2 text-center">
                                  {doc.videoId ? (
                                      <AiFillYoutube
                                          fontSize={"24"}
                                          className="hover:text-red-500 ml-12"
                                      />
                                  ) : (
                                      <p className="text-gray-600">Coming Soon...</p>
                                  )}
                              </td>
                          </tr>
                      );
                  })}
              </tbody>
          </table>
      </div>
  );
};
