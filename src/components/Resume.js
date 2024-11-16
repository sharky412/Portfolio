import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resume.css';

const Resume = () => {
  return (
    
    <section id="resume" className="container resume-section">
      <h2 className="text-center mb-4">Resume</h2>
      <p className="text-center">
        check out my <a href="/ShardulKeerResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary">
          <a href="/ShardulKeerResume.pdf" download className="text-white text-decoration-none">
            Download Resume
          </a>
        </button>
      </div>
    </section>
  );
};

export default Resume;
