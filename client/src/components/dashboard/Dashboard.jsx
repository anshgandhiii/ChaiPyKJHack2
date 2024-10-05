import React, { useState } from "react";
import { FaSearch, FaBookmark, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projectCategories = ["All", "Ongoing", "Done", "Past Successful", "Temporarily Stopped"];

const projects = [
  { id: 1, name: "Project Alpha", category: "Ongoing", role: "Team Leader", description: "A cutting-edge web application", deadline: "2024-12-31", members: 5, status: "Ongoing" },
  { id: 2, name: "Project Beta", category: "Done", role: "Collaborator", description: "An innovative mobile app", deadline: "2023-10-01", members: 3, status: "Completed" },
  { id: 3, name: "Project Gamma", category: "Past Successful", role: "Team Leader", description: "A successful marketing campaign", deadline: "2022-09-15", members: 7, status: "Completed" },
  { id: 4, name: "Project Delta", category: "Temporarily Stopped", role: "Collaborator", description: "An AI-powered chatbot", deadline: "2024-05-20", members: 4, status: "Dead" },
  // Add more projects as needed
];

const ProjectCard = ({ project, onBookmark, onFavorite }) => {
  return (
    <motion.div
      className="bg-base rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 border border-base-content"
      whileHover={{ scale: 1.03 }}
      layout
    >
      <h3 className="text-xl font-semibold mb-2 text-base-content">{project.name}</h3>
      <p className="text-gray-600 mb-2 text-base-content">{project.description}</p>
      
      {/* Display additional project details */}
      <p className="text-sm mb-2 text-base-content"><strong>Deadline:</strong> {project.deadline}</p>
      <p className="text-sm mb-2 text-base-content"><strong>Members:</strong> {project.members}</p>
      <p className={`text-sm mb-2 ${project.status === "Ongoing" ? "text-blue-500" : project.status === "Completed" ? "text-green-500" : "text-red-500"}`}>
        <strong>Status:</strong> {project.status}
      </p>
      
      <div className="flex justify-between items-center">
        <span className={`px-2 py-1 rounded-full text-sm ${project.role === "Team Leader" ? "bg-blue-100 text-blue-800" : "bg-base text-base-content"}`}>
          {project.role}
        </span>
        <div className="flex space-x-2">
          <button onClick={() => onBookmark(project.id)} className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
            <FaBookmark />
          </button>
          <button onClick={() => onFavorite(project.id)} className="text-gray-400 hover:text-red-500 transition-colors duration-300">
            <FaStar />
          </button>
        </div>
      </div>
    </motion.div>
  );
};


const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term)
    );
    setFilteredProjects(filtered);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const filtered =
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category);
    setFilteredProjects(filtered);
  };

  const handleBookmark = (projectId) => {
    // Implement bookmark functionality
    console.log(`Bookmarked project ${projectId}`);
  };

  const handleFavorite = (projectId) => {
    // Implement favorite functionality
    console.log(`Favorited project ${projectId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-base-content">WebCollab Projects</h1>

      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full p-4 border border-base-content rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content" />
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-4">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full ${activeCategory === category ? "bg-blue-500 text-white" : "bg-base text-base-content"} transition-colors duration-300 border border-base-content`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          layout
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onBookmark={handleBookmark}
              onFavorite={handleFavorite}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <p className="text-center text-base-content mt-8">
          No projects found. Try adjusting your search or category.
        </p>
      )}
    </div>
  );
};

export default Dashboard;
