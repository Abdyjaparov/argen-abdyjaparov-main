import React from "react";
import '../Style/About.css';




const About = () => {
    return (
        <main className="retelling">
            <div className="about-my">
                <img src="/Images/myphoto.png" alt="myphoto" className="image1 shadow" />

                <div className="about-me">
                    <h3>
                        My name is <strong>Abdyzhaparov Argen Nurbekovich</strong>. I was born in the village of <strong>Ala-Buka</strong> in Jalal-Abad. I studied at <strong>School No.1</strong> named after T. Baltagulov. After finishing the 9th grade, I enrolled in <strong>Salumbekova College</strong>.In addition to college classes, I am diligently studying programming languages such as React Native, JavaScript, and Python on my own. I am also working hard to improve my English skills. I always put in effort, and I am doing very well.
                    </h3>
                    <h1>Interesting Facts About Me:</h1>
                    <ul className="fun-facts">
                        <li>
                            <span className="emoji">💰</span> I love money (who doesn’t?).
                        </li>
                        <li>
                            <span className="emoji">🍔</span> I enjoy eating delicious food.
                        </li>
                        <li>
                            <span className="emoji">🛌</span> Sleeping is one of my favorite hobbies.
                        </li>
                        <li>
                            <span className="emoji">🎮</span> I love playing games and hanging out with friends.
                        </li>
                        <li>
                            <span className="emoji">📖</span> I enjoy reading books and writing code.
                        </li>
                        <li>
                            <span className="emoji">🤼‍♂️</span> From 1st to 9th grade, I practiced Greco-Roman wrestling and excelled in school.
                        </li>
                        <li>
                            <span className="emoji">😊</span> I enjoy interacting with people and, overall, I am a cheerful person.
                        </li>
                    </ul>
                </div>
            </div>    
        </main>
    )
}


export default About;