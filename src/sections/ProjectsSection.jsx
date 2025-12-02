// src/sections/ProjectsSection.jsx

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects">
      <header className="section-header">
        <p className="section-label">Our work</p>
        <h2 className="section-title">Selected projects</h2>
        <p className="section-description">
          Ein Blick in Kampagnen, Websites und Social-Media-Projekte, die wir
          für unsere Kunden umgesetzt haben.
        </p>
      </header>

      <div className=" projects-grid">
        {/* Platzhalter – später mit projects.json füllen */}
        <article className="project-card">
          <h3>Launch Campaign – SaaS Startup</h3>
          <p>Landing Page, Paid Social, Content-Produktion.</p>
        </article>

        <article className="project-card">
          <h3>Rebrand – Local Coffee Chain</h3>
          <p>Neue Website, Brand Design, Social Templates.</p>
        </article>

        <article className="project-card">
          <h3>Always-on Social – Fashion Brand</h3>
          <p>Content-Plan, Reels-Produktion, Influencer-Kooperation.</p>
        </article>
      </div>
    </section>
  );
}