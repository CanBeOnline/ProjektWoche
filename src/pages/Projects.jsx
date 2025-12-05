import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/index.js";
import { useTranslation } from "../hooks/useTranslation.js";

function getKpisForProject(project, t) {
    const presets = {
        "saas-launch": [
            { label: t("kpis.leads"), value: "+1.2k" },
            { label: t("kpis.roas"), value: "3.1x" },
            { label: t("kpis.cpl"), value: "-38%" },
        ],
        "coffee-rebrand": [
            { label: t("kpis.storeVisits"), value: "+52%" },
            { label: t("kpis.brandRecall"), value: "+31%" },
            { label: t("kpis.socialFollower"), value: "+8.4k" },
        ],
        "fashion-social": [
            { label: t("kpis.reach"), value: "+220%" },
            { label: t("kpis.engagement"), value: "+74%" },
            { label: t("kpis.ctr"), value: "+29%" },
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
        { label: t("kpis.reach"), value: "+120%" },
        { label: t("kpis.ctr"), value: "+24%" },
        { label: t("kpis.leads"), value: "+600" },
    ];
}

function getVariant(index) {
    const variants = ["story", "visual", "kpi"];
    return variants[index % variants.length];
}

export default function Projects() {
    const { t } = useTranslation();
    const [selectedTag, setSelectedTag] = useState("all");
    const [sortBy, setSortBy] = useState("recommended");

    const allTags = useMemo(() => {
        const tagSet = new Set();
        projects.forEach((project) => {
            project.tags?.forEach((tag) => tagSet.add(tag));
        });
        return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
    }, []);

    const visibleProjects = useMemo(() => {
        let list = [...projects];

        if (selectedTag !== "all") {
            list = list.filter((project) => project.tags?.includes(selectedTag));
        }

        if (sortBy === "title") {
            list.sort((a, b) => a.title.localeCompare(b.title));
        }

        return list;
    }, [selectedTag, sortBy]);

    return (
        <section id="projects" className="section projects">
            <header className="section-header projects-intro">
                <p className="section-label">{t("projects.label")}</p>
                <h1 className="section-title">{t("projects.pageTitle")}</h1>
                <p className="section-description">
                    {t("projects.pageDescription")}
                </p>
                <p className="projects-meta">
                    {projects.length} {t("projects.meta")}
                </p>
            </header>

            <div className="projects-toolbar d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
                <div className="projects-filters d-flex flex-wrap gap-2">
                    <button
                        type="button"
                        className={`btn btn-sm ${selectedTag === "all" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setSelectedTag("all")}
                    >
                        {t("projects.filterAll")}
                    </button>
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            className={`btn btn-sm ${selectedTag === tag ? "btn-primary" : "btn-outline-secondary"}`}
                            onClick={() => setSelectedTag(tag)}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="projects-sort d-flex align-items-center gap-2">
                    <label htmlFor="project-sort" className="projects-sort-label">
                        {t("projects.sortLabel")}
                    </label>
                    <select
                        id="project-sort"
                        className="projects-sort-select form-select form-select-sm"
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}
                    >
                        <option value="recommended">{t("projects.sortRecommended")}</option>
                        <option value="title">{t("projects.sortTitle")}</option>
                    </select>
                </div>
            </div>

            <div className="projects-grid">
                {visibleProjects.map((project, index) => {
                    const forceVisual = project.id === "fashion-social" || project.id === "restaurant-local";
                    const variant = forceVisual ? "visual" : getVariant(index);
                    const kpis = getKpisForProject(project, t);
                    
                    // Übersetzungen für Projekt-Daten
                    const projectTitle = t(`projects.items.${project.id}.title`, project.title);
                    const projectDescription = t(`projects.items.${project.id}.description`, project.description);
                    const translatedTags = project.tags?.map(tag => t(`projects.tags.${tag}`, tag));

                    if (variant === "visual") {
                        return (
                            <article
                                key={project.id}
                                className="project-card project-card--visual"
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

                    if (variant === "kpi") {
                        return (
                            <article
                                key={project.id}
                                className="project-card project-card--kpi"
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
                                            {t("projects.setupLearnings")}
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        );
                    }

                    return (
                        <article
                            key={project.id}
                            className="project-card project-card--story"
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
                                <p className="project-text">
                                    {projectDescription} {t("projects.projectDescriptionSuffix")}
                                </p>
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
                })}
            </div>

            <div className="section-cta">
                <Link className="btn btn-primary" to="/contact">
                    {t("projects.planProject")}
                </Link>
            </div>
        </section>
    );
}

