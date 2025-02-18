import { Link } from 'react-router-dom';

export const Topbar = () => {
    return (
        <div className="font-bold flex items-center gap-1 px-12 py-4 border-white" >
            <div className="size-12">
                {/* <img src="fox.png" alt="fox" className="background-opacity-0" /> */}
            </div>
            <div className="">CODVILLA</div>
            <div className="px-80 font-medium">
                <Navbar/>
            </div>
        </div>
    );
};

const TopbarItem = [
    {
        title:"About",
        route:"/about"
    },
    {
        title:"Activity",
        route:"/activity"
    },
    {
        title:"Leaderboad",
        route:"/leaderboad"
    },
    {
        title:"Problems",
        route:"/problemlist"
    },
]

function Navbar(){
    return<div className="flex gap-10">
        {TopbarItem.map(item=><Navbaritem route={item.route} title={item.title}/>)}
    </div>
}
function Navbaritem ({title,route}:{

        title : string,
        route : string,
})
{
    return<Link to={route}>
        <div className="hover:text-zinc-600">
        {title}
    </div>
    </Link>
    
}