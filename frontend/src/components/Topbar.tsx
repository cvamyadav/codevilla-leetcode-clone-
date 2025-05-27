import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Sun, Moon, LogOut } from 'lucide-react'; // You can use any icons you prefer

export const Topbar = () => {
    const auth = getAuth();


    function logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("User signed out");
    })
    .catch((error) => {
      // An error happened.
      console.error("Error signing out:", error);
    });
}


    return (
        <div className="font-bold flex items-center gap-1 px-12 py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="size-12">
                {/* <img src="fox.png" alt="fox" className="background-opacity-0" /> */}
            </div>
            <div className="text-blue-600 dark:text-blue-400">CODVILLA</div>
            <div className="px-80 font-medium">
                <Navbar/>
            </div>
            {/* <ThemeToggle/> */}<div className="ml-auto flex items-center"><button className='hover:bg-red-600  rounded p-2 text-white' onClick={logout}>Logout</button></div>
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
     const savedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const initialMode = savedTheme 
            ? savedTheme === 'dark' 
            : systemDark;
            
        setDarkMode(initialMode);
        document.documentElement.classList.toggle('dark', initialMode);
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