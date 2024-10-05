import React, { useState } from 'react';
import { UserCircle, Video, BookOpen, Edit, MessageSquare, X } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ProjectDashboard = () => {
  const [project, setProject] = useState({
    name: "Project X",
    details: "This is a sample project description.",
    deadline: "2024-12-31",
    status: "ongoing",
    members: [
      { id: 1, name: "John Doe", role: "leader", tasks: { assigned: 5, completed: 3 } },
      { id: 2, name: "Jane Smith", role: "collaborator", tasks: { assigned: 4, completed: 2 } },
      { id: 3, name: "Alice Johnson", role: "collaborator", tasks: { assigned: 3, completed: 1 } },
      { id: 4, name: "Bob Williams", role: "collaborator", tasks: { assigned: 4, completed: 3 } },
      { id: 5, name: "Eva Brown", role: "collaborator", tasks: { assigned: 3, completed: 2 } },
    ],
    progress: {
      design: 80,
      development: 60,
      testing: 40,
      deployment: 20
    },
    todoList: [
      { id: 1, task: "Review design documents", done: false },
      { id: 2, task: "Implement user authentication", done: true },
      { id: 3, task: "Write unit tests", done: false },
      { id: 4, task: "Prepare presentation for stakeholders", done: false },
    ],
    chats: [
      { id: 1, sender: "John Doe", message: "Hey team, how's the progress on the new feature?" },
      { id: 2, sender: "Jane Smith", message: "I've completed the initial design. Waiting for review." },
      { id: 3, sender: "Alice Johnson", message: "I'm working on the backend implementation. Should be done by tomorrow." },
    ]
  });

  const [showChat, setShowChat] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  const statusColors = {
    ongoing: "bg-yellow-200 text-yellow-800",
    dead: "bg-red-200 text-red-800",
    completed: "bg-green-200 text-green-800"
  };

  const progressData = Object.entries(project.progress).map(([name, value]) => ({ name, value }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const toggleTodoStatus = (id) => {
    setProject(prevProject => ({
      ...prevProject,
      todoList: prevProject.todoList.map(item => 
        item.id === id ? { ...item, done: !item.done } : item
      )
    }));
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setProject(prevProject => ({
        ...prevProject,
        chats: [...prevProject.chats, { id: Date.now(), sender: "You", message: newMessage.trim() }]
      }));
      setNewMessage("");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-base text-base-content rounded-lg shadow-lg relative">
      <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Project Details</h2>
          <p>{project.details}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Deadline</h2>
          <p>{project.deadline}</p>
          <h2 className="text-xl font-semibold mt-4 mb-2">Status</h2>
          <span className={`px-2 py-1 rounded ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Progress Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Task Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={project.members.map(member => ({ name: member.name, value: member.tasks.assigned }))}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {project.members.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {project.members.map((member) => (
          <div key={member.id} className="border border-base-content/20 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <UserCircle className="mr-2" />
              <span className="font-semibold">{member.name}</span>
            </div>
            <p className="text-sm text-base-content/70 mb-2">Role: {member.role}</p>
            <div className="text-sm">
              <p>Assigned tasks: {member.tasks.assigned}</p>
              <p>Completed tasks: {member.tasks.completed}</p>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
      <div className="mb-6">
        {project.todoList.map((item) => (
          <div key={item.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleTodoStatus(item.id)}
              className="mr-2"
            />
            <span className={item.done ? 'line-through text-base-content/50' : ''}>{item.task}</span>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="flex items-center justify-center p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          <Video className="mr-2" />
          <span>Video Conference</span>
        </button>
        <button className="flex items-center justify-center p-2 bg-green-500 text-white rounded hover:bg-green-600">
          <BookOpen className="mr-2" />
          <span>Explore Resources</span>
        </button>
        <button className="flex items-center justify-center p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          <Edit className="mr-2" />
          <span>Edit Document</span>
        </button>
        <button 
          className="flex items-center justify-center p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          onClick={() => setShowChat(true)}
        >
          <MessageSquare className="mr-2" />
          <span>Group Chat</span>
        </button>
      </div>

      {/* Chat Slider */}
      <div className={`fixed inset-y-0 right-0 w-80 bg-base shadow-lg transition-transform duration-300 transform ${showChat ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-base-content/20">
            <h3 className="text-lg font-semibold">Group Chat</h3>
            <button onClick={() => setShowChat(false)} className="text-base-content/70 hover:text-base-content">
              <X size={24} />
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {project.chats.map((chat) => (
              <div key={chat.id} className="mb-4">
                <p className="font-semibold">{chat.sender}</p>
                <p className="bg-base-200 p-2 rounded-lg">{chat.message}</p>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="p-4 border-t border-base-content/20">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full p-2 rounded border border-base-content/20 bg-base"
            />
            <button type="submit" className="mt-2 w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;