import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import '../Style/Projects.css';


const Projects = () => {
    return (
        <main>
            <div className="h3">
                <h3>These are my projects in JavaScript, Python, CSS, HTML, and React Native.</h3>
            </div>
            <div className="skills">
                    <div className="skill">
                        <a href="https://github.com/Abdyjaparov/CarArgen" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faPython} size="3x" style={{ color: '#3776AB' }} />
                        </a>
                    </div>
                    <div className="skill">
                        <a href="https://www.javascript.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faJs} size="3x" style={{ color: '#F7DF1E' }} />
                        </a>
                    </div>
                    <div className="skill">
                        <a href="https://github.com/Abdyjaparov/vlad-project" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faHtml5} size="3x" style={{ color: '#E34F26' }} />
                        </a>
                    </div>
                    <div className="skill">
                        <a href="https://github.com/Abdyjaparov/vlad-project" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faCss3Alt} size="3x" style={{ color: '#1572B6' }} />
                        </a>
                    </div>
                    <div className="skill">
                        <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faReact} size="3x" style={{ color: '#61DAFB' }} />
                        </a>
                    </div>
            </div>
        </main>
    )
}


export default Projects