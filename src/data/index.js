import services from "./services.json";
import projects from "./projects.json";
import testimonials from "./testimonials.json";

export { services, projects, testimonials };

export function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}

export function getServicesByCategory(category) {
  if (!category) return services;
  return services.filter((service) => service.category === category);
}

export function getTestimonialsByRating(minRating = 0) {
  return testimonials.filter((testimonial) => (testimonial.rating || 0) >= minRating);
}

