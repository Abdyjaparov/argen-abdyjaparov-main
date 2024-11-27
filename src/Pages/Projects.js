import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJs, faHtml5, faCss3Alt, faReact } from "@fortawesome/free-brands-svg-icons";
import "../Style/Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Python Project",
            description: "A car rental system built with Python.",
            icon: faPython,
            color: "#3776AB",
            link: "https://github.com/Abdyjaparov/CarArgen",
            image: "/Images/python-project.jpg"
        },
        {
            name: "React Native App",
            description: "A mobile app developed with React Native.",
            icon: faReact,
            color: "#61DAFB",
            link: "https://github.com/Abdyjaparov/vlad-project",
            image: "/Images/react-project.jpg"
        },
        {
            name: "JavaScript Project",
            description: "An interactive website created using JavaScript.",
            icon: faJs,
            color: "#F7DF1E",
            link: "https://www.javascript.com",
            image: "/Images/javascript-project.jpg"
        },
        {
            name: "HTML Project",
            description: "A static website built with HTML.",
            icon: faHtml5,
            color: "#E34F26",
            link: "https://github.com/Abdyjaparov/vlad-project",
            image: "/Images/html-project.jpg"
        },
        {
            name: "CSS Project",
            description: "A beautiful design created using CSS.",
            icon: faCss3Alt,
            color: "#1572B6",
            link: "https://github.com/Abdyjaparov/vlad-project",
            image: "/Images/css-project.jpg"
        }
        
    ];

    return (
        <main className="projects-container">
            <h3 className="projects-title">
                These are my projects in JavaScript, Python, CSS, HTML, and React Native.
            </h3>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.name} className="project-image" />
                        <div className="project-content">
                            <FontAwesomeIcon icon={project.icon} size="2x" style={{ color: project.color }} />
                            <h4 className="project-name">{project.name}</h4>
                            <p className="project-description">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-button"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Projects;