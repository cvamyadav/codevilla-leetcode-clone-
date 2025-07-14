// src/pages/CoursesPage.tsx
import React, { useState } from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  launchDate: string;
  tags: string[];
  color: string;
}

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  
  const courses: Course[] = [
    {
      id: 'rust',
      title: 'Rust Programming',
      description: 'Learn systems programming with Rust. Build safe and concurrent software.',
      icon: '🦀',
      progress: 65,
      launchDate: 'Q4 2023',
      tags: ['Systems', 'Memory Safety', 'Concurrency'],
      color: 'bg-orange-500',
    },
    {
      id: 'java',
      title: 'Java Mastery',
      description: 'Master Java for enterprise applications. Learn Spring Boot and microservices.',
      icon: '☕',
      progress: 80,
      launchDate: 'Q1 2024',
      tags: ['Enterprise', 'OOP', 'Spring Boot'],
      color: 'bg-red-600',
    },
    {
      id: 'go',
      title: 'Go Development',
      description: 'Build scalable backend services with Go. Learn concurrency patterns and microservices.',
      icon: '🐹',
      progress: 45,
      launchDate: 'Q2 2024',
      tags: ['Backend', 'Concurrency', 'Microservices'],
      color: 'bg-blue-500',
    },
    {
      id: 'python',
      title: 'Python Data Science',
      description: 'Data analysis and machine learning with Python. Master Pandas, NumPy, and Scikit-learn.',
      icon: '🐍',
      progress: 90,
      launchDate: 'Q1 2024',
      tags: ['Data Science', 'ML', 'Automation'],
      color: 'bg-yellow-500',
    },
    {
      id: 'typescript',
      title: 'TypeScript Fundamentals',
      description: 'Level up your JavaScript with TypeScript. Build robust web applications.',
      icon: '📘',
      progress: 95,
      launchDate: 'Available Now',
      tags: ['Web Development', 'Type Safety', 'React'],
      color: 'bg-blue-600',
    },
    {
      id: 'kotlin',
      title: 'Kotlin for Android',
      description: 'Build modern Android apps with Kotlin. Learn Jetpack Compose and coroutines.',
      icon: '🤖',
      progress: 70,
      launchDate: 'Q3 2024',
      tags: ['Mobile', 'Android', 'Coroutines'],
      color: 'bg-purple-600',
    },
  ];

  // Filter courses based on search term
  React.useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredCourses(courses);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = courses.filter(course => 
      course.title.toLowerCase().includes(term) ||
      course.description.toLowerCase().includes(term) ||
      course.tags.some(tag => tag.toLowerCase().includes(term))
    );
    
    setFilteredCourses(filtered);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-zinc-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Programming <span className="text-blue-500">Courses</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            Master in-demand programming languages with our comprehensive courses. 
            New courses are in development - sign up to get notified when they launch!
          </p>
          
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                className="py-3 block w-full pl-10 pr-3 bg-zinc-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search courses by language, topic, or tag..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="bg-zinc-700 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className={`${course.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-start">
                  <span className="text-4xl mr-4">{course.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                    <p className="text-white mt-2">{course.description}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-white">Development Progress</span>
                    <span className="text-sm font-medium text-white">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {course.launchDate === 'Available Now' ? (
                      <span>Available Now</span>
                    ) : (
                      <span>Coming soon ..</span>
                    )}
                  </span>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-6">
                  <button
                    className={`w-full py-2 px-4 rounded-lg font-medium ${
                      course.launchDate === 'Available Now'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-not-allowed'
                    } transition-colors duration-200`}
                    disabled={course.launchDate !== 'Available Now'}
                  >
                    {course.launchDate === 'Available Now' ? (
                      'Enroll Now'
                    ) : (
                      <span className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        Notify Me
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
              <svg className="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn't find any courses matching "{searchTerm}". Try searching for something else.
            </p>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Want to suggest a course?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're always looking to expand our course offerings. Let us know what programming language
            or technology you'd like us to cover next!
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Suggest a Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;