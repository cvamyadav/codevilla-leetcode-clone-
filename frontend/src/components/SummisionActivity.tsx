
interface Activity {
  id:number;
  user:string ;
  problem:string;
  status:string;
  date:string;
}
interface SubmissionActivityProps {
  activity: Activity;
}
export const SummisionActivity =({activity}:SubmissionActivityProps)=>{
    return<tr>
        
        <td className="px-6 py-4 whitespace-nowrap">{activity.user}</td>
        <td className="px-6 py-4 whitespace-nowrap">{activity.problem}</td>
        <td className="px-6 py-4 whitespace-nowrap">{activity.status && <span className={`text-${activity.status === 'Passed' ? 'green' : 'red'}-500`}>{activity.status}</span>}</td>
        <td className="px-6 py-4 whitespace-nowrap">{activity.date}</td>

    </tr>
  
}