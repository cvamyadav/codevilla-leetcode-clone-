
export const Submissions=()=>{
    return(
    <div>
        <h1 className="text-2xl font-bold mb-4">Submissions</h1>
        <p className="text-gray-600 mb-6">Here you can view your past submissions.</p>
        <div className="bg-white shadow-md rounded-lg p-6">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problem</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {/* Example row */}
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">12345</td>
                        <td className="px-6 py-4 whitespace-nowrap">Two Sum</td>
                        <td className="px-6 py-4 whitespace-nowrap">Accepted</td>
                        <td className="px-6 py-4 whitespace-nowrap">2023-10-01</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>                            
       <a> </a>
    </div>
    </div>
    )
}