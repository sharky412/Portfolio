import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/About.css'; // Custom CSS for styling

const About = () => {
  return (
    <section
      id="about"
      className="container about-section" // Removed my-5 and p-4
    >
      <h2 className="d-flex justify-content-center align-items-center mb-4">
        About Me
      </h2>
      <p className="d-flex justify-content-center text-center px-3">
        Hi, I'm Shardul Keer, a passionate software developer. I love building projects that solve real-world problems and exploring new technologies.  
        <br /><br />
        I am a hardworking and passionate individual with strong organizational skills, eager to secure an entry-level position. I’m always ready to contribute to the team and help achieve company goals. Known for being organized and dependable, I excel at managing multiple priorities while maintaining a positive attitude. I’m enthusiastic about taking on additional responsibilities to support the team and meet collective objectives.
      </p>
    </section>
  );
};

export default About;
