import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="section not-found">
            <header className="section-header">
                <p className="section-label">404</p>
                <h1 className="section-title">Seite nicht gefunden</h1>
                <p className="section-description">
                    Die gesuchte Seite existiert nicht. Nutze die Navigation oder spring direkt zurück zur Startseite.
                </p>
            </header>
            <Link className="btn btn-primary" to="/">
                Zurück zur Startseite
            </Link>
        </section>
    );
}

