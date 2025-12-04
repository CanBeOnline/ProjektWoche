import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation.js";

export default function NotFound() {
    const { t } = useTranslation();

    return (
        <section className="section not-found">
            <header className="section-header">
                <p className="section-label">{t("notFound.label")}</p>
                <h1 className="section-title">{t("notFound.title")}</h1>
                <p className="section-description">
                    {t("notFound.description")}
                </p>
            </header>
            <Link className="btn btn-primary" to="/">
                {t("notFound.backToHome")}
            </Link>
        </section>
    );
}

