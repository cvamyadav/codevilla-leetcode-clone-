import { Link } from "react-router-dom";
export const Landing =()=>{

    return(
        <div className="min-h-screen bg-zinc-900 flex flex-col items-center text-white no-scrollbar">
          
    
          <main className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-4xl font-bold text-white text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Welcome to <span className="text-blue-500">Codvilla</span></h2>
            <p className="text-white font-bold mb-8">
              Your ultimate destination to solve programming challenges and enhance your coding skills.
            </p>
            <Link
              to="/about"
              className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
    
            <section id="features" className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-4">Features</h3>
              <ul className="space-y-2 text-white">
                <li>- Hundreds of coding challenges</li>
                <li>- Real-time coding editor</li>
                <li>- Compete with other coders</li>
                <li>- Track your progress</li>
              </ul>
            </section>
    
            <section id="how-it-works" className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-4">How It Works</h3>
              <p className="text-white">
                Sign up, choose a challenge, and start coding! Get immediate feedback and improve with each attempt.
              </p>
            </section>
    
            <section id="about" className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-4">About Us</h3>
              <p className="text-white">
                Codvilla is built by coders, for coders. Our mission is to provide an engaging platform for programmers to
                learn, practice, and grow.
              </p>
            </section>
          </main>
    
          <footer className="w-full bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
              <p>&copy; {new Date().getFullYear()} Codvilla. All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      );

}

