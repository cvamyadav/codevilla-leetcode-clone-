// import { Link } from 'react-router-dom';

// export const Topbar = () => {
//     return (
//         <div className="font-bold flex items-center gap-1 px-12 py-4 border-white" >
//             <div className="size-12">
//                 {/* <img src="fox.png" alt="fox" className="background-opacity-0" /> */}
//             </div>
//             <div className="">CODVILLA</div>
//             <div className="px-80 font-medium">
//                 <Navbar/>
//             </div>
//         </div>
//     );
// };

// const TopbarItem = [
//     {
//         title:"About",
//         route:"/about"
//     },
//     {
//         title:"Activity",
//         route:"/activity"
//     },
//     {
//         title:"Leaderboad",
//         route:"/leaderboad"
//     },
//     {
//         title:"Problems",
//         route:"/problemlist"
//     },
// ]

// function Navbar(){
//     return<div className="flex gap-10">
//         {TopbarItem.map(item=><Navbaritem route={item.route} title={item.title}/>)}
//     </div>
// }
// function Navbaritem ({title,route}:{

//         title : string,
//         route : string,
// })
// {
//     return<Link to={route}>
//         <div className="hover:text-zinc-600">
//         {title}
//     </div>
//     </Link>
    
// }


import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react'; // You can use any icons you prefer

export const Topbar = () => {
    return (
        <div className="font-bold flex items-center gap-1 px-12 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="size-12">
                <img src="fox.png" alt="fox" className="background-opacity-0" />
            </div>
            <div className="text-blue-600 dark:text-blue-400">CODVILLA</div>
            <div className="px-80 font-medium">
                <Navbar/>
            </div>
            <ThemeToggle/>
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
    return <div className="flex gap-10">
        {TopbarItem.map((item, index) => 
            <Navbaritem key={index} route={item.route} title={item.title}/>
        )}
    </div>
}

function Navbaritem({title, route}: {title: string, route: string}) {
    return <Link to={route}>
        <div className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-800 dark:text-gray-200 transition-colors">
            {title}
        </div>
    </Link>
}

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or system preference
        const isDark = localStorage.getItem('theme') === 'dark' || 
                      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', newMode);
    };

    return (
        <button 
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
            {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
        </button>
    );
}