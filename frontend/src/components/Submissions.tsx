import { useEffect,useState } from "react";
import supabase from "../../../backend/SupabaseClient/supabaseClient";
import { SummisionActivity } from "./SummisionActivity";
interface Submission {
    id:number;
    user:string;
    problem:string;
    status:string;
    date:string;

}

export const Submissions=()=>{
   const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {

                      
                const { data, error: supabaseError } = await supabase
                    .from('Submissions') 
                    .select('*')

                if (supabaseError) {
                    throw supabaseError;
                }

                if (data) {
                    setSubmissions(data);
                } else {
                    setSubmissions([]);
                    setError('No data found');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch submissions');
                setSubmissions([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [])

     if (isLoading) {
        return <div className="flex justify-center">Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

     

    return(
    <div className="w-full bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-8 ">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Submissions till now!
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl font-bold mx-auto">Here you can see your past submissions.</p>
        </div>
        
        <div className="bg-zinc-800 shadow-md rounded-lg p-6 mt-8">
            <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Submission ID</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Problem</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider">Date</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 bg-zinc-800 text-white">                      


                   {error && (
                        <tr>
                            <td colSpan={4} className="px-6 py-4 text-red-500 capitalize text-center">
                                {error}
                            </td>
                        </tr>
                    )}
                    {submissions.length > 0 ? (
                        submissions.map((data) => (
                            <SummisionActivity key={data.id} activity={data} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="px-6 py-4 text-sm text-gray-500 text-center capitalize">
                                No submissions found
                            </td>
                        </tr>
                    )}


               
                </tbody>
            </table>                            
       
    </div>
    </div>
    )
}