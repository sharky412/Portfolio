import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is available
import './App.css'; // Custom styles for the app
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume'; // Import the Resume component

function App() {
  return (
    <div className="App">
      <header className="d-flex justify-content-center align-items-center flex-column">
        <h1>SHARDUL's Portfolio</h1>
        <p>My one-stop portfolio showcasing skills and projects.</p>
      </header>
      <main>
        <About />
        <br/>
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2024 Shardul. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
