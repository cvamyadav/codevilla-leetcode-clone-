import { Link } from "react-router-dom";
export const About = () => {
    return (
        <div className="w-full bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
            
                <div className="text-center mb-12 relative">
                    <div className="absolute -top-2 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-200 rounded-full opacity-20"></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 text-4xl md:text-5xl font-extrabold text-zinc-100">
                        Welcome to <span className="text-blue-600">Codvilla</span>
                    </h1>
                    <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
                </div>

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Card 1 */}
                    <div className="bg-zinc-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-400">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-white">Our Mission</h2>
                        </div>
                        <p className="text-white leading-relaxed">
                            To provide a platform where developers of all levels can grow their skills through practical challenges and connect with a supportive community.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-zinc-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-indigo-400">
                        <div className="flex items-center mb-4">
                            <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-white">What We Offer</h2>
                        </div>
                        <p className="text-white leading-relaxed">
                            A diverse collection of coding challenges, real-world projects, and learning resources to help you advance your programming journey.
                        </p>
                    </div>
                </div>

                {/* Main content */}
                <div className="bg-zinc-800 rounded-xl shadow-sm p-8 mb-12 max-w-4xl mx-auto">
                    <p className="text-lg text-white mb-6 leading-relaxed">
                        At <span className="font-semibold text-blue-600">Codvilla</span>, we believe coding should be accessible, enjoyable, and rewarding for everyone. Whether you're taking your first steps in programming or looking to master advanced concepts, our platform is designed to support your growth.
                    </p>
                    <p className="text-lg text-white mb-6 leading-relaxed">
                        Our community of passionate developers helps create an environment where you can learn, collaborate, and get inspired. We're committed to making your coding journey as smooth and productive as possible.
                    </p>
                    <p className="text-lg text-green-700 leading-relaxed">
                        Join by the developers who are improving their skills and building amazing <span className="font-semibold text-white">projects</span> through our platform every day.
                    </p>
                </div>

                {/* Quote section */}
                <div className="text-center max-w-3xl mx-auto relative">
                    <svg className="w-10 h-10 mx-auto text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-xl italic text-gray-700 mb-4">
                        "If coding is not an adventure, then what is it?"
                    </p>
                    <p className="text-blue-600 font-medium">— CODVILLA TEAM</p>
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-100 rounded-full opacity-30"></div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <Link to="/problemlist" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Start Your Coding Journey
                    </Link>
                </div>
            </div>
        </div>
    );
}


{/* <a
              href="/problemlist"
              className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a> */}