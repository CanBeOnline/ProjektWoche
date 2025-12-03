// src/sections/ServicesSection.jsx

const SERVICES = [
  {
    id: "webdesign",
    title: "Web Design & Development",
    description:
      "Wir entwickeln hochperformante Websites, die nicht nur überzeugen, sondern auch messbare Ergebnisse liefern. Von responsivem Design bis hin zu komplexen Web-Anwendungen.",
  },
  {
    id: "social",
    title: "Social Media & Content",
    description:
      "Strategische Content-Konzepte, die Ihre Zielgruppe begeistern. Von viralen Videos bis hin zu durchdachten Kampagnen – wir sorgen für Aufmerksamkeit und Engagement.",
  },
  {
    id: "branding",
    title: "Branding & Visual Identity",
    description:
      "Wir entwickeln unverwechselbare Markenidentitäten, die Emotionen wecken und im Gedächtnis bleiben. Von der ersten Idee bis zur vollständigen Brand Guidelines.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 sm:mb-20">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
            Was wir tun
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
            Unsere Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Wir kombinieren strategisches Denken, kreatives Design und moderne Technologie, 
            um digitale Erlebnisse zu schaffen, die Ihre Marke voranbringen.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-poppins group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}