import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './components/landing';
import { initializeApp } from "firebase/app";
import { Signin } from './components/Singin';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userAtom } from './components/store/user';
import { Topbar } from './components/Topbar';
import { Submissions } from './components/Submissions';
import { About } from './components/About';
import { ProblemList } from './components/ProblemList';
import { BlankPage } from './components/BlankPage';
import CoursesPage from './components/CoursesPage';

const firebaseConfig = {
  apiKey: "AIzaSyA621pXulqeiLcAf7ZAHEW3yhUw4dxraVs",
  authDomain: "loogincode.firebaseapp.com",
  projectId: "loogincode",
  storageBucket: "loogincode.appspot.com",
  messagingSenderId: "115444860248",
  appId: "1:115444860248:web:69a2826c61c7aae358912d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




function App() {
 // const [count, setCount] = useState(0);
  return <RecoilRoot>
     <StoreApp />
  </RecoilRoot>
}

 function StoreApp (){
    const [user,setuser] = useRecoilState(userAtom);
  useEffect(()=>{
    onAuthStateChanged( auth ,function(user) {
     
      if (user && user.email) {
        setuser({
          loading  : false,
          user : {
            email : user.email
          }
         })

      } else {
        setuser({
          loading : false,
        })
          // No user is signed in.
          // console.log('There is no logged in user');
      }
  });
  },[])

  if(user.loading){
    return<div>loading...</div>
  }

  if(!user.user){
    return<div><Signin/></div>
  }

return<div className='w-full h-screen no-scrollbar bg-zinc-900 text-white'>

           <Router >
              <Topbar  />
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/activity" element={<Submissions />} />
                  <Route path="/courses" element={<CoursesPage />} />
                  <Route path="/problemlist" element={<ProblemList />} />
                  <Route path="/problems/:id" element={<BlankPage />} />
                </Routes>
            </Router>
              
    </div>
  
}

export default App;
