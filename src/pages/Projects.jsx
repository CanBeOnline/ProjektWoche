import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/index.js";

function getKpisForProject(project) {
    const presets = {
        "saas-launch": [
            { label: "Leads", value: "+1.2k" },
            { label: "ROAS", value: "3.1x" },
            { label: "CPL", value: "-38%" },
        ],
        "coffee-rebrand": [
            { label: "Store Visits", value: "+52%" },
            { label: "Brand Recall", value: "+31%" },
            { label: "Social Follower", value: "+8.4k" },
        ],
        "fashion-social": [
            { label: "Reach", value: "+220%" },
            { label: "Engagement", value: "+74%" },
            { label: "CTR", value: "+29%" },
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
        { label: "Reach", value: "+120%" },
        { label: "CTR", value: "+24%" },
        { label: "Leads", value: "+600" },
    ];
}

function getVariant(index) {
    const variants = ["story", "visual", "kpi"];
    return variants[index % variants.length];
}

export default function Projects() {
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
                <p className="section-label">Our work</p>
                <h1 className="section-title">Case Studies & Projekte</h1>
                <p className="section-description">
                    Tiefere Einblicke in Launch-Kampagnen, Rebrands und Social-Playbooks, die wir für Kunden umgesetzt haben.
                    Jede Karte zeigt dir auf einen Blick, welche Art von Projekt wir umgesetzt haben – von Branding über Performance
                    bis Always-on Social.
                </p>
                <p className="projects-meta">
                    {projects.length} ausgewählte Projekte · laufend aktualisiert · echte Beispiele aus Markenarbeit & Kampagnen.
                </p>
            </header>

            <div className="projects-toolbar d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
                <div className="projects-filters d-flex flex-wrap gap-2">
                    <button
                        type="button"
                        className={`btn btn-sm ${selectedTag === "all" ? "btn-primary" : "btn-outline-secondary"}`}
                        onClick={() => setSelectedTag("all")}
                    >
                        Alle
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
                        Sortieren:
                    </label>
                    <select
                        id="project-sort"
                        className="projects-sort-select form-select form-select-sm"
                        value={sortBy}
                        onChange={(event) => setSortBy(event.target.value)}
                    >
                        <option value="recommended">Empfohlen</option>
                        <option value="title">Titel A–Z</option>
                    </select>
                </div>
            </div>

            <div className="projects-grid">
                {visibleProjects.map((project, index) => {
                    const forceVisual = project.id === "fashion-social" || project.id === "restaurant-local";
                    const variant = forceVisual ? "visual" : getVariant(index);
                    const kpis = getKpisForProject(project);

                    if (variant === "visual") {
                        return (
                            <article
                                key={project.id}
                                className="project-card project-card--visual"
                                aria-label={`Projekt ${project.title}`}
                            >
                                <div className="project-thumb-wrapper">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="project-thumb"
                                        loading="lazy"
                                    />
                                    <span className="project-pill">Brand Experience</span>
                                </div>
                                <div className="project-card-body">
                                    <p className="project-meta">{project.tags?.join(" · ")}</p>
                                    <h3>{project.title}</h3>
                                    <p className="project-text">{project.description}</p>
                                    <div className="tag-list">
                                        {project.tags?.map((tag) => (
                                            <span key={tag} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="project-actions">
                                        <Link className="btn btn-primary" to={`/projects/${project.id}`}>
                                            Case Study ansehen
                                        </Link>
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="project-link"
                                            >
                                                Live-Projekt öffnen
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
                                aria-label={`Projekt ${project.title}`}
                            >
                                <div className="project-card-body project-card-body--kpi">
                                    <span className="project-badge">Performance</span>
                                    <div className="project-meta-row">
                                        <span className="project-meta">{project.tags?.join(" · ")}</span>
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p className="project-text">{project.description}</p>
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
                                            Setup & Learnings
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
                            aria-label={`Projekt ${project.title}`}
                        >
                            <div className="project-thumb-wrapper">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="project-thumb"
                                    loading="lazy"
                                />
                                <span className="project-pill">Case Study</span>
                            </div>
                            <div className="project-card-body">
                                <p className="project-meta">{project.tags?.join(" · ")}</p>
                                <h3>{project.title}</h3>
                                <p className="project-text">
                                    {project.description} Wir zeigen dir die Ausgangssituation, unseren Ansatz und die
                                    Ergebnisse in einer kompakten Case Study.
                                </p>
                                <div className="tag-list">
                                    {project.tags?.map((tag) => (
                                        <span key={tag} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-actions">
                                    <Link className="btn btn-primary" to={`/projects/${project.id}`}>
                                        Projekt ansehen
                                    </Link>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className="section-cta">
                <Link className="btn btn-primary" to="/contact">
                    Eigenes Projekt mit uns planen
                </Link>
            </div>
        </section>
    );
}

