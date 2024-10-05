import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDashboard from './components/ProjectDashoard';
import Teams from './components/Teams';
import LandingPage from './components/Landingpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="teams" element={<Teams />} /> */}
        <Route path="" element={ <LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="teams" element={<Teams />} /> 
        <Route path="project" element={<ProjectDashboard />} /> 
      </Route>
    </Routes>
  );
}

export default App;
