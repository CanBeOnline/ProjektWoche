import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../data/index.js";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = getProjectById(projectId);

    if (!project) {
        return (
            <section className="section project-detail">
                <div className="section-header">
                    <p className="section-label">Case Study</p>
                    <h1 className="section-title">Projekt nicht gefunden</h1>
                    <p className="section-description">
                        Das angefragte Projekt existiert nicht oder wurde entfernt. Bitte wähle eines unserer anderen Projekte aus.
                    </p>
                </div>
                <Link className="btn btn-primary" to="/projects">
                    Zurück zur Übersicht
                </Link>
            </section>
        );
    }

    return (
        <section className="section project-detail">
            <div className="project-detail-header">
                <div>
                    <p className="section-label">Case Study</p>
                    <h1 className="section-title">{project.title}</h1>
                    <p className="section-description">{project.description}</p>
                </div>
                <Link className="btn" to="/projects">
                    ← Zurück zur Übersicht
                </Link>
            </div>

            <div className="tag-list">
                {project.tags?.map((tag) => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>

            {project.images?.length > 0 && (
                <div className="detail-gallery">
                    {project.images.map((image) => (
                        <img key={image} src={image} alt={project.title} loading="lazy" />
                    ))}
                </div>
            )}

            {project.liveLink && (
                <a className="btn btn-primary" href={project.liveLink} target="_blank" rel="noreferrer">
                    Live-Projekt ansehen
                </a>
            )}
        </section>
    );
}

