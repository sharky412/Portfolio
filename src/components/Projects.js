import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      name: 'Online Medical Store',
      description: 
        'Spearheaded the development of an advanced online medical store application utilizing ' +
        'Spring Boot with Java 17. The project features a robust monolithic architecture and RESTful APIs, ensuring seamless ' +
        'integration and scalability. Key functionalities include JWT-based secure user authentication, dynamic search capabilities, ' +
        'and role-based access control. The frontend, crafted with React, ensures a responsive user experience. Future enhancements ' +
        'will focus on secure payment integration, real-time order tracking, and advanced inventory management.',
      link: 'https://github.com/sharky412/OnlineMedicalStore'
    },
    {
      name: 'Online Store MVC',
      description: 
        'An Online Store using ASP.NET Core MVC allows users to browse products, add them to a shopping cart, and place orders. ' +
        'Administrators manage inventory and orders. The project follows the MVC architecture with Entity Framework Core (EF Core) handling ' +
        'database operations. Users can register, log in, and view order history, while admins manage products and categories. ' +
        'The store uses SQL Server for data, Bootstrap for design, and integrates with Stripe or PayPal for payments.',
      link: 'https://github.com/sharky412/OnlineStoreMVC'
    }
  ];

  return (
    <section id="projects" className="container my-5">
      <h2 className="text-center mb-5">Projects</h2>
      <div className="row">
        {projectList.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="project-card h-100">
              <h3 className="text-center">{project.name}</h3>
              <p className="mt-3">{project.description}</p>
              <div className="d-flex justify-content-center mt-auto">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
