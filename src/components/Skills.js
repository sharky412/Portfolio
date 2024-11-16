import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skills.css'; // Import custom CSS for styling

const Skills = () => {
  const skills = ['JavaScript', 'CSS', 'HTML', 'Java', 'C++', 'C#', 'MySQL'];
  const frameworks = ['React.js', 'Node.js', 'Express.js', '.NET', 'Bootstrap', 'Spring'];
  const editors = ['Eclipse', 'VS Studio', 'VS Code', 'STS'];
  const databases = ['MySQL', 'MongoDB'];

  return (
    <section id="skills" className="container my-5">
      <h2 className="text-center mb-4" style={{color: 'GrayText'}}>Technical Skills</h2>
      <div className="row">
        <div className="col-12 col-md-3 text-center mb-4">
          <h3 className="skill-category">Languages</h3>
          <ul className="list-unstyled">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-3 text-center mb-4">
          <h3 className="skill-category">Frameworks</h3>
          <ul className="list-unstyled">
            {frameworks.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-3 text-center mb-4">
          <h3 className="skill-category">Editors</h3>
          <ul className="list-unstyled">
            {editors.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-3 text-center mb-4">
          <h3 className="skill-category">Databases</h3>
          <ul className="list-unstyled">
            {databases.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
