import { Link } from "react-router-dom";
import { projects } from "../data/index.js";

const FEATURED = projects.slice(0, 3);

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects">
      <header className="section-header">
        <p className="section-label">Our work</p>
        <h2 className="section-title">Selected projects</h2>
        <p className="section-description">
          Ein Blick in Kampagnen, Websites und Social-Media-Projekte, die wir für unsere Kunden umgesetzt haben.
        </p>
      </header>

      <div className="projects-grid">
        {FEATURED.map((project) => (
          <article key={project.id} className="project-card">
            <img src={project.thumbnail} alt={project.title} className="project-thumb" loading="lazy" />
            <div className="project-card-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags?.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={`/projects/${project.id}`} className="btn">
                Details ansehen
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="section-cta">
        <Link className="btn btn-primary" to="/projects">
          Alle Projekte ansehen
        </Link>
      </div>
    </section>
  );
}