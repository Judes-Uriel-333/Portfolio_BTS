// src/pages/Projets.tsx
import Navigation from "../components/Navigation";
import { Briefcase, Code, Laptop, ExternalLink } from "lucide-react";
import Footer from "../components/Footer";
import { projects } from "../data/constants";
import { useState } from "react";

export default function Projets() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Tous", icon: Code },
    { id: "professionnel", label: "Professionnels", icon: Briefcase },
    { id: "academique", label: "Académiques", icon: Code },
    { id: "personnel", label: "Personnels", icon: Laptop },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects.filter((p) => p.category !== "bts-e6")
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full">
        {/* Navigation */}
        <Navigation />

        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Projets & Expériences
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Réalisations concrètes issues de projets académiques, personnels et
            professionnels
          </p>
        </header>

        {/* Filtres par catégorie */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm ${activeCategory === cat.id
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-800/50"
                    : "border border-violet-500 text-violet-300 hover:bg-violet-700 hover:text-white"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Lien vers BTS E6 */}
        <div className="mb-8 text-center">
          <a
            href="/projets/bts-e6"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-purple-800/50"
          >
            <Code className="w-5 h-5" />
            Voir les projets BTS E6
          </a>
        </div>

        {/* Projets */}
        <section className="grid gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-[#0f0f14] border border-[#1b1b24] p-6 rounded-md hover:border-purple-600 hover:shadow-lg hover:shadow-purple-800/20 transition-all"
            >
              {/* En-tête */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-sm text-gray-500 mt-1">{project.period}</p>
                  )}
                </div>
                <span className="px-3 py-1 text-xs bg-purple-900/30 border border-purple-600 rounded-full text-purple-300">
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Problème et Solution */}
              {(project.problemStatement || project.solution) && (
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {project.problemStatement && (
                    <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-3">
                      <h4 className="text-sm font-medium text-orange-300 mb-2">
                        Problème / Besoin
                      </h4>
                      <p className="text-xs text-gray-400">
                        {project.problemStatement}
                      </p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-3">
                      <h4 className="text-sm font-medium text-green-300 mb-2">
                        Solution apportée
                      </h4>
                      <p className="text-xs text-gray-400">{project.solution}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Stack technique */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technicalStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-purple-900/30 border border-purple-600 rounded-md text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Difficultés et Apports */}
              {(project.challenges || project.learnings) && (
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {project.challenges && (
                    <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-3">
                      <h4 className="text-sm font-medium text-red-300 mb-2">
                        Difficultés rencontrées
                      </h4>
                      <p className="text-xs text-gray-400">{project.challenges}</p>
                    </div>
                  )}
                  {project.learnings && (
                    <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-3">
                      <h4 className="text-sm font-medium text-blue-300 mb-2">
                        Apports techniques
                      </h4>
                      <p className="text-xs text-gray-400">{project.learnings}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Liens */}
              {project.links && (
                <div className="flex gap-3 flex-wrap">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-xs border border-violet-500 text-violet-300 rounded-lg hover:bg-violet-700 hover:text-white transition-all"
                    >
                      <ExternalLink className="w-3 h-3" />
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-xs border border-violet-500 text-violet-300 rounded-lg hover:bg-violet-700 hover:text-white transition-all"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Démo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </section>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            Aucun projet dans cette catégorie pour le moment.
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
