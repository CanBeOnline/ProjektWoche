import { Link } from "react-router-dom";
import { projects } from "../data/index.js";
import { useTranslation } from "../hooks/useTranslation.js";
import ProjectCard from "../components/cards/ProjectCard.jsx";

// IDs der 5 Projekte für das Bento-Grid
const FEATURED_IDS = ["coffee-rebrand", "saas-launch", "fashion-social", "b2b-leadgen", "d2c-launch"];

function getKpisForProject(project, t) {
  const presets = {
    "saas-launch": [
      { label: t("kpis.roas", "ROAS"), value: "3.1x" },
      { label: t("kpis.ctr", "CTR"), value: "+29%" },
      { label: t("kpis.leads", "Leads"), value: "+1.2k" },
    ],
    "coffee-rebrand": [
      { label: t("kpis.storeVisits", "Store Visits"), value: "+52%" },
      { label: t("kpis.brandRecall", "Brand Recall"), value: "+31%" },
      { label: t("kpis.socialFollower", "Follower"), value: "+8.4k" },
    ],
    "fashion-social": [
      { label: t("kpis.reach", "Reach"), value: "+220%" },
      { label: t("kpis.engagement", "Engagement"), value: "+74%" },
      { label: t("kpis.ctr", "CTR"), value: "+29%" },
    ],
    "b2b-leadgen": [
      { label: "MQLs", value: "+450" },
      { label: "SQL Rate", value: "+28%" },
      { label: "CAC", value: "-42%" },
    ],
    "d2c-launch": [
      { label: "Revenue", value: "+180%" },
      { label: "AOV", value: "+35%" },
      { label: "CAC Payback", value: "2.1x" },
    ],
    "restaurant-local": [
      { label: "Foot Traffic", value: "+68%" },
      { label: "Online Orders", value: "+145%" },
      { label: "Local Searches", value: "+92%" },
    ],
    "employer-branding": [
      { label: "Applications", value: "+320%" },
      { label: "Quality Score", value: "+45%" },
      { label: "Time to Hire", value: "-28%" },
    ],
  };

  return presets[project.id] || [
    { label: t("kpis.reach", "Reach"), value: "+120%" },
    { label: t("kpis.ctr", "CTR"), value: "+24%" },
    { label: t("kpis.leads", "Leads"), value: "+600" },
  ];
}

function selectBentoProjects() {
  const curated = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(Boolean);
  if (curated.length >= 5) return curated.slice(0, 5);
  return [...curated, ...projects.filter((p) => !FEATURED_IDS.includes(p.id))].slice(0, 5);
}

export default function ProjectsSection() {
  const { t } = useTranslation();
  const bentoProjects = selectBentoProjects();

  // Bento-Grid Layout Positionen:
  // [0] = Featured (groß, links)
  // [1] = Small Visual (rechts oben)
  // [2] = KPI Card (rechts mitte)
  // [3] = Bottom Left
  // [4] = Bottom Right

  const featuredProject = bentoProjects[0];
  const smallVisualProject = bentoProjects[1];
  const kpiProject = bentoProjects[2];
  const bottomLeftProject = bentoProjects[3];
  const bottomRightProject = bentoProjects[4];

  return (
    <section id="projects" className="section projects">
      <header className="section-header">
        <p className="section-label">{t("projects.label")}</p>
        <h2 className="section-title">{t("projects.title")}</h2>
        <p className="section-description">
          {t("projects.description")}
        </p>
      </header>

      <div className="projects-bento-grid">
        {/* Featured Project - Groß mit allen KPIs */}
        {featuredProject && (
          <article
            className="project-card project-card--featured"
            aria-label={`${t("projects.caseStudy")} ${t(`projects.items.${featuredProject.id}.title`, featuredProject.title)}`}
          >
            <div className="project-thumb-wrapper project-thumb-wrapper--featured">
              <img
                src={featuredProject.thumbnail}
                alt={t(`projects.items.${featuredProject.id}.title`, featuredProject.title)}
                className="project-thumb project-thumb--hero"
                loading="lazy"
              />
              <span className="project-pill">{t("projects.caseStudy")}</span>
            </div>
            <div className="project-card-body">
              <div>
                <p className="project-eyebrow">{t("projects.featured", "Featured Case Study")}</p>
                <h3>{t(`projects.items.${featuredProject.id}.title`, featuredProject.title)}</h3>
                <p className="project-text project-text--muted">
                  {t(`projects.items.${featuredProject.id}.description`, featuredProject.description)}
                </p>
                {featuredProject.tags && featuredProject.tags.length > 0 && (
                  <div className="tag-list" style={{ marginTop: 'var(--space-2)' }}>
                    {featuredProject.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {t(`projects.tags.${tag}`, tag)}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="project-kpi-pills project-kpi-pills--featured">
                {getKpisForProject(featuredProject, t).map((kpi) => (
                  <div key={kpi.label} className="project-kpi-pill">
                    <span className="project-kpi-pill-value">{kpi.value}</span>
                    <span className="project-kpi-pill-label">{kpi.label}</span>
                  </div>
                ))}
              </div>
              <div className="project-actions" style={{ marginTop: 'auto' }}>
                <Link className="btn btn-primary" to={`/projects/${featuredProject.id}`}>
                  {t("projects.viewDetails")}
                </Link>
                {featuredProject.liveLink && (
                  <a
                    className="project-link"
                    href={featuredProject.liveLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t("projects.openLive")}
                  </a>
                )}
              </div>
            </div>
          </article>
        )}

        {/* Small Visual Card - Rechts oben */}
        {smallVisualProject && (
          <ProjectCard
            project={smallVisualProject}
            variant="visual"
            t={t}
            className="project-card--small-visual"
          />
        )}

        {/* KPI Card - Rechts mitte */}
        {kpiProject && (
          <ProjectCard
            project={kpiProject}
            variant="kpi"
            kpis={getKpisForProject(kpiProject, t)}
            t={t}
            className="project-card--kpi-card"
          />
        )}

        {/* Bottom Left */}
        {bottomLeftProject && (
          <ProjectCard
            project={bottomLeftProject}
            variant="story"
            t={t}
            className="project-card--bottom-left"
          />
        )}

        {/* Bottom Right */}
        {bottomRightProject && (
          <ProjectCard
            project={bottomRightProject}
            variant="story"
            t={t}
            className="project-card--bottom-right"
          />
        )}
      </div>

      <div className="section-cta">
        <Link className="btn btn-primary" to="/projects">
          {t("projects.viewAll")}
        </Link>
      </div>
    </section>
  );
}