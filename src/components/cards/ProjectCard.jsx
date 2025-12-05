import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Wiederverwendbare ProjectCard-Komponente mit drei Varianten:
 * - visual: Bild-fokussiert, zeigt Tags
 * - kpi: Zeigt Performance-Metriken
 * - story: Standard-Card mit Beschreibung und Tags
 */
export default function ProjectCard({
  project,
  variant = "story",
  kpis = [],
  t,
  className = ""
}) {
  const projectTitle = t(`projects.items.${project.id}.title`, project.title);
  const projectDescription = t(`projects.items.${project.id}.description`, project.description);
  const translatedTags = project.tags?.map(tag => t(`projects.tags.${tag}`, tag));

  // Visual Variant - Bild-fokussiert
  if (variant === "visual") {
    return (
      <article
        className={`project-card project-card--visual ${className}`}
        aria-label={`${t("projects.caseStudy")} ${projectTitle}`}
      >
        <div className="project-thumb-wrapper">
          <img
            src={project.thumbnail}
            alt={projectTitle}
            className="project-thumb"
            loading="lazy"
          />
          <span className="project-pill">{t("projects.brandExperience")}</span>
        </div>
        <div className="project-card-body">
          <p className="project-meta">{translatedTags?.join(" · ")}</p>
          <h3>{projectTitle}</h3>
          <p className="project-text">{projectDescription}</p>
          <div className="tag-list">
            {project.tags?.map((tag) => (
              <span key={tag} className="tag">
                {t(`projects.tags.${tag}`, tag)}
              </span>
            ))}
          </div>
          <div className="project-actions">
            <Link className="btn btn-primary" to={`/projects/${project.id}`}>
              {t("projects.viewCaseStudy")}
            </Link>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                {t("projects.openLive")}
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  // KPI Variant - Performance-fokussiert
  if (variant === "kpi") {
    return (
      <article
        className={`project-card project-card--kpi ${className}`}
        aria-label={`${t("projects.caseStudy")} ${projectTitle}`}
      >
        <div className="project-card-body project-card-body--kpi">
          <span className="project-badge">{t("projects.performance")}</span>
          <div className="project-meta-row">
            <span className="project-meta">{translatedTags?.join(" · ")}</span>
          </div>
          <h3>{projectTitle}</h3>
          <p className="project-text">{projectDescription}</p>
          <div className="project-kpi-row">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="project-kpi">
                <span className="project-kpi-value">{kpi.value}</span>
                <span className="project-kpi-label">{kpi.label}</span>
              </div>
            ))}
          </div>
          <div className="project-actions">
            <Link className="btn btn-primary" to={`/projects/${project.id}`}>
              {t("projects.viewDetails")}
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Story Variant (Default) - Standard Card mit Bild + Text
  return (
    <article
      className={`project-card project-card--story ${className}`}
      aria-label={`${t("projects.caseStudy")} ${projectTitle}`}
    >
      <div className="project-thumb-wrapper">
        <img
          src={project.thumbnail}
          alt={projectTitle}
          className="project-thumb"
          loading="lazy"
        />
        <span className="project-pill">{t("projects.caseStudy")}</span>
      </div>
      <div className="project-card-body">
        <p className="project-meta">{translatedTags?.join(" · ")}</p>
        <h3>{projectTitle}</h3>
        <p className="project-text">{projectDescription}</p>
        <div className="tag-list">
          {project.tags?.map((tag) => (
            <span key={tag} className="tag">
              {t(`projects.tags.${tag}`, tag)}
            </span>
          ))}
        </div>
        <div className="project-actions">
          <Link className="btn btn-primary" to={`/projects/${project.id}`}>
            {t("projects.viewProject")}
          </Link>
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    liveLink: PropTypes.string,
  }).isRequired,
  variant: PropTypes.oneOf(["visual", "kpi", "story"]),
  kpis: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
};
