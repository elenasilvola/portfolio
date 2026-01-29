import projects from "../data/projects.json";
import ProjectItem from "./ProjectItem.jsx";

function Projects() {
    return (
        <div className ="projects-section">
            <div className="project-grid" aria-hidden="true">
                <span className="grid-column" />
                <span className="grid-column" />
                <span className="grid-column" />
                <span className="grid-column" />
                <span className="grid-column" />
            </div>

            <div className="projects-rows">
                {projects.map((p) => (
                <div className="project-row" key={p.id}>
                    <ProjectItem project={p} />
                    <div className="project-image" aria-hidden="true">
                          {p.image && (
                            <img
                            src={p.image}
                            alt={p.title}
                            />
                    )}
                </div>
                
            </div>
                ))}
        </div>
     </div>
    );
}

export default Projects;