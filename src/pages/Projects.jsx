import { Link } from "react-router-dom";
import { projects } from "../data/index.js";

export default function Projects() {
    return (
        <section id="projects" className="section projects">
            <header className="section-header">
                <p className="section-label">Our work</p>
                <h1 className="section-title">Case Studies & Projekte</h1>
                <p className="section-description">
                    Tiefere Einblicke in Launch-Kampagnen, Rebrands und Social-Playbooks, die wir für Kunden umgesetzt haben.
                </p>
            </header>

            <div className="projects-grid">
                {projects.map((project) => (
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
                            <Link className="btn btn-primary" to={`/projects/${project.id}`}>
                                Projekt ansehen
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

