import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../data/index.js";
import { useTranslation } from "../hooks/useTranslation.js";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = getProjectById(projectId);
    const { t } = useTranslation();

    if (!project) {
        return (
            <section className="section project-detail">
                <div className="section-header">
                    <p className="section-label">{t("projects.caseStudy")}</p>
                    <h1 className="section-title">{t("projects.notFound")}</h1>
                    <p className="section-description">
                        {t("projects.notFoundDescription")}
                    </p>
                </div>
                <Link className="btn btn-primary" to="/projects">
                    {t("projects.backToOverview")}
                </Link>
            </section>
        );
    }

    // Übersetzungen für Projekt-Daten
    const projectTitle = t(`projects.items.${project.id}.title`, project.title);
    const projectDescription = t(`projects.items.${project.id}.description`, project.description);

    return (
        <section className="section project-detail">
            <div className="project-detail-header">
                <div>
                    <p className="section-label">{t("projects.caseStudy")}</p>
                    <h1 className="section-title">{projectTitle}</h1>
                    <p className="section-description">{projectDescription}</p>
                </div>
                <Link className="btn" to="/projects">
                    ← {t("projects.backToOverview")}
                </Link>
            </div>

            <div className="tag-list">
                {project.tags?.map((tag) => (
                    <span key={tag} className="tag">
                        {t(`projects.tags.${tag}`, tag)}
                    </span>
                ))}
            </div>

            {project.images?.length > 0 && (
                <div className="detail-gallery">
                    {project.images.map((image) => (
                        <img key={image} src={image} alt={projectTitle} loading="lazy" />
                    ))}
                </div>
            )}

            {project.liveLink && (
                <a className="btn btn-primary" href={project.liveLink} target="_blank" rel="noreferrer">
                    {t("projects.viewLiveProject")}
                </a>
            )}
        </section>
    );
}

