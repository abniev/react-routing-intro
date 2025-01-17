// App.jsx

import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import ErrorPage from './pages/ErrorPage';
import HomePageWithNavigate from './pages/HomePageWithNavigate';
import projectsData from "./assets/projects-data.json";
import ProjectDetails from "./pages/ProjectDetails";
import QueryStringExample from './pages/QueryStringExample';



function App() {
  
  return (
    <div className="App">
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<HomePageWithNavigate />} />
      <Route path="/about" element={<AboutPage />} />
      <Route 
        path="/projects" 
        element={<ProjectsPage projects={projectsData} />} 
      />
      <Route 
        path="/projects/:projectId" 
        element={<ProjectDetails projects={projectsData} />}
       />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/search-example" element={<QueryStringExample />} />

    </Routes>
    </div>
  );
}
export default App;
