import React, { useState, useEffect } from "react";
import { FaUsers, FaVideo, FaChartLine, FaTasks, FaFileAlt, FaShareAlt, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const features = [
    { icon: <FaUsers />, title: "Project Collaboration", description: "Work together seamlessly on projects" },
    { icon: <FaVideo />, title: "Video Conferencing", description: "Connect face-to-face with your team" },
    { icon: <FaChartLine />, title: "Progress Tracker", description: "Monitor project progress in real-time" },
    { icon: <FaTasks />, title: "Task Assignment", description: "Delegate and manage tasks efficiently" },
    { icon: <FaFileAlt />, title: "Shared Docs Editing", description: "Edit documents collaboratively" },
    { icon: <FaShareAlt />, title: "Resource Sharing", description: "Share resources within your team" },
    { icon: <FaComments />, title: "Group Chat", description: "Communicate instantly with team members" },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-base-content"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base">

      <main>
        <section className="relative h-screen flex items-center justify-center text-base-content">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="container mx-auto px-6 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-5xl text-white md:text-6xl font-bold mb-4">Welcome to WebCollab</h1>
              <p className="text-xl text-white md:text-2xl mb-8">Revolutionize your team collaboration with our all-in-one platform</p>
              <button className="bg-base-content text-white px-8 py-3 rounded-full text-lg hover:bg-base-200 transition duration-300 transform hover:scale-105">
                Start Collaborating
              </button>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-20 bg-base-200">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-base rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                >
                  <div className="text-4xl text-base-content mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-base-content mb-2">{feature.title}</h3>
                  <p className="text-base-content">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-base">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaboration"
                  className="rounded-lg shadow-md"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h2 className="text-3xl font-bold text-base-content mb-4">Effortless Team Collaboration</h2>
                  <p className="text-base-content mb-6">WebCollab brings your team together, making collaboration smooth and efficient. With our intuitive platform, you can manage projects, communicate in real-time, and track progress all in one place.</p>
                  <ul className="text-base-content mb-8">
                    <li className="flex items-center mb-2">
                      <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Streamlined project management
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Real-time communication tools
                    </li>
                    <li className="flex items-center">
                      <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      Progress tracking and reporting
                    </li>
                  </ul>
                  <button className="bg-base-content text-white px-6 py-3 rounded-md hover:bg-base-200 transition duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
