import { Link } from "react-router-dom";
import { projects } from "../data/index.js";
import { useTranslation } from "../hooks/useTranslation.js";

const FEATURED = projects.slice(0, 3);

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section projects">
      <header className="section-header">
        <p className="section-label">{t("projects.label")}</p>
        <h2 className="section-title">{t("projects.title")}</h2>
        <p className="section-description">
          {t("projects.description")}
        </p>
      </header>

      <div className="projects-grid">
        {FEATURED.map((project) => {
          const projectTitle = t(`projects.items.${project.id}.title`, project.title);
          const projectDescription = t(`projects.items.${project.id}.description`, project.description);
          
          return (
            <article key={project.id} className="project-card">
              <img src={project.thumbnail} alt={projectTitle} className="project-thumb" loading="lazy" />
              <div className="project-card-body">
                <h3>{projectTitle}</h3>
                <p>{projectDescription}</p>
                <div className="tag-list">
                  {project.tags?.map((tag) => (
                    <span key={tag} className="tag">
                      {t(`projects.tags.${tag}`, tag)}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`} className="btn">
                  {t("projects.viewDetails")}
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="section-cta">
        <Link className="btn btn-primary" to="/projects">
          {t("projects.viewAll")}
        </Link>
      </div>
    </section>
  );
}