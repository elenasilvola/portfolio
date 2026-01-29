import React from 'react';
import Projects from "./components/Projects.jsx";

function App() {

  return (
    <div className="page-container">
     { /*
      <header className="top-bar">
        <a href="#">resume</a>
          <details className="info-menu">
            <summary className="info-summry">
              <button type="button">contact</button>
            </summary>

          <div className="contact-panel">
            <p>elena.silvola@aalto.fi</p>
          <p>+358 40 013 2771</p>
          
     </div>

      </details>
      </header>
    */}
    <main>
      <section className="hero-section">
        <h1>ELENA SILVOLA</h1>
        <div className="h2-heading">
        <h2>i want to design systems, products and services that help users find beauty in their <span className="accent">experience.</span></h2>
        <h2> i believe technology should be humane and made for <span className="accent2">humans.</span> </h2>
        </div>
        <h5>i am a master's student in user, data & design at aalto university.
      minoring in acoustics and audio technology.
        many of my projects explore user experience across digital products,
        services and information systems.
        </h5>
        <div className="project-heading">
          <h3>PROJECTS</h3>
        </div>
        <div className="project-line"></div>
      </section>

      <section className="projects-part">
          <Projects />
    </section>
    </main>
    </div>
  );
}

export default App
