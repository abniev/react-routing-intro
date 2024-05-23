// src/pages/ProjectDetailsPage.jsx

import { useParams, Link } from 'react-router-dom';
// import { useState } from 'react';

function ProjectDetails({ projects }) {
  const { projectId } = useParams();
  // console.log('projectId -->', projectId);

  const oneProject = projects.find((project) => project._id === projectId);

  return (
    <div>
    <h1>Project Details</h1>
    {!oneProject && <h3>Project not found!</h3>} 

    {oneProject && (
      <>
        <h2>{oneProject.name}</h2>
        <h3>Tech Stack: {oneProject.technologies}</h3>
        <p>{oneProject.description}</p>
        <Link to="/projects">Back</Link>
      </>
    )}
  </div>
  );
}

export default ProjectDetails;
