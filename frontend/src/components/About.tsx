
// export const About = () => {


//     return <div className="shadow-lg m-10 ">
//         <h1 className="text-xl font-medium my-2 flex justify-center bold items-center">About</h1>
//         <p>
//             Welcome to Codvilla your go-to platform for honing coding skills and connecting with a vibrant developer community. We provide a diverse set of challenges, real-world relevance, and a user-friendly interface to make your coding journey enjoyable and impactful. Whether you're a beginner or a pro, join us in the pursuit of coding excellence.
//         </p>
//         <p>
//             Unlock your coding potential with CODVILLA where every challenge is an opportunity to grow and every line of code brings us closer together. Happy coding!
//         </p>
//         <p className="italic pt-5">
//               "If coading is not advanture, then what is it ?" - CODVILLA
//         </p>
//     </div>
// }
// export const About = () => {
//     return (
//         <div className="max-w-4xl mx-auto p-6 md:p-8 lg:p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl m-4 sm:m-6 md:m-10">
//             <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
//                 About <span className="text-blue-600 dark:text-blue-400">CODVILLA</span>
//             </h1>
            
//             <div className="space-y-4 text-gray-700 dark:text-gray-300">
//                 <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg transition-all hover:scale-[1.01]">
//                     <p className="text-lg leading-relaxed">
//                         Welcome to <span className="font-semibold text-blue-600 dark:text-blue-400">Codvilla</span>, your go-to platform for honing coding skills and connecting with a vibrant developer community. We provide a diverse set of challenges, real-world relevance, and a user-friendly interface to make your coding journey enjoyable and impactful.
//                     </p>
//                 </div>
                
//                 <div className="p-4 bg-green-50 dark:bg-gray-700 rounded-lg transition-all hover:scale-[1.01]">
//                     <p className="text-lg leading-relaxed">
//                         Whether you're a beginner taking your first steps in programming or an experienced developer looking to sharpen your skills, we have something valuable for everyone. Our carefully curated challenges cover a wide range of topics and difficulty levels.
//                     </p>
//                 </div>
                
//                 <div className="p-4 bg-purple-50 dark:bg-gray-700 rounded-lg transition-all hover:scale-[1.01]">
//                     <p className="text-lg leading-relaxed">
//                         Unlock your coding potential with <span className="font-semibold text-blue-600 dark:text-blue-400">CODVILLA</span> where every challenge is an opportunity to grow and every line of code brings us closer together. Happy coding!
//                     </p>
//                 </div>
//             </div>
            
//             <div className="mt-8 p-4 border-l-4 border-blue-500 bg-gray-50 dark:bg-gray-700 rounded-r-lg">
//                 <p className="text-lg italic text-gray-800 dark:text-gray-200">
//                     "If coding is not an adventure, then what is it?" <br />
//                     <span className="block text-right mt-2 text-blue-600 dark:text-blue-400">- CODVILLA</span>
//                 </p>
//             </div>
            
//             <div className="mt-8 flex justify-center">
//                 <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:-translate-y-1 shadow-md">
//                     Join Our Community
//                 </button>
//             </div>
//         </div>
//     );
// }


export const About = () => {
    return (
        <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header with decorative elements */}
                <div className="text-center mb-12 relative">
                    <div className="absolute -top-2 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-200 rounded-full opacity-20"></div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
                        Welcome to <span className="text-blue-600">Codvilla</span>
                    </h1>
                    <div className="w-24 h-1 bg-blue-400 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Content cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-400">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            To provide a platform where developers of all levels can grow their skills through practical challenges and connect with a supportive community.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-indigo-400">
                        <div className="flex items-center mb-4">
                            <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">What We Offer</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            A diverse collection of coding challenges, real-world projects, and learning resources to help you advance your programming journey.
                        </p>
                    </div>
                </div>

                {/* Main content */}
                <div className="bg-white rounded-xl shadow-sm p-8 mb-12 max-w-4xl mx-auto">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        At <span className="font-semibold text-blue-600">Codvilla</span>, we believe coding should be accessible, enjoyable, and rewarding for everyone. Whether you're taking your first steps in programming or looking to master advanced concepts, our platform is designed to support your growth.
                    </p>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Our community of passionate developers helps create an environment where you can learn, collaborate, and get inspired. We're committed to making your coding journey as smooth and productive as possible.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Join thousands of developers who are improving their skills and building amazing projects through our platform every day.
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
                    <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Start Your Coding Journey
                    </button>
                </div>
            </div>
        </div>
    );
}