// src/pages/BTSE6.tsx
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { GraduationCap, Code, CheckCircle, ExternalLink } from "lucide-react";
import { projects, competencesBTS } from "../data/constants";

export default function BTSE6() {
    const btsProjects = projects.filter((p) => p.category === "bts-e6");

    // Projets académiques qui peuvent aussi compter pour E6
    const academicProjects = projects.filter((p) => p.category === "academique");

    return (
        <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
            <div className="max-w-6xl mx-auto w-full">
                {/* Navigation */}
                <Navigation />

                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        Projets BTS E6
                    </h1>
                    <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
                        Épreuve E6 : Conception et développement d'applications
                    </p>
                </header>

                {/* Introduction E6 */}
                <section className="mb-12 bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <GraduationCap className="text-purple-400 w-6 h-6 mt-1" />
                        <div>
                            <h2 className="text-xl font-semibold text-purple-300 mb-3">
                                À propos de l'épreuve E6
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-3">
                                L'épreuve E6 du BTS SIO SLAM évalue la capacité à concevoir, développer
                                et maintenir des applications en s'appuyant sur le référentiel de
                                compétences. Les projets présentés ici couvrent différentes compétences
                                du référentiel SLAM.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                                <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-3">
                                    <h3 className="font-medium text-gray-200 mb-2">Format</h3>
                                    <p className="text-gray-400">
                                        Portfolio de compétences + présentation orale + soutenance
                                    </p>
                                </div>
                                <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-3">
                                    <h3 className="font-medium text-gray-200 mb-2">Durée</h3>
                                    <p className="text-gray-400">
                                        40 minutes (présentation + questions)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projets académiques (utilisables pour E6) */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-purple-300 mb-6">
                        Projets Académiques
                    </h2>
                    <div className="grid gap-6">
                        {academicProjects.map((project) => (
                            <article
                                key={project.id}
                                className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-6 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-800/20 transition-all"
                            >
                                {/* En-tête du projet */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold text-gray-100">
                                            {project.title}
                                        </h3>
                                        {project.period && (
                                            <p className="text-sm text-gray-500 mt-1">{project.period}</p>
                                        )}
                                    </div>
                                    <Code className="text-purple-400 w-6 h-6" />
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                {/* Contexte et objectifs */}
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    {project.problemStatement && (
                                        <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-4">
                                            <h4 className="text-sm font-medium text-purple-300 mb-2">
                                                Contexte / Problématique
                                            </h4>
                                            <p className="text-sm text-gray-400">{project.problemStatement}</p>
                                        </div>
                                    )}
                                    {project.solution && (
                                        <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-4">
                                            <h4 className="text-sm font-medium text-purple-300 mb-2">
                                                Solution proposée
                                            </h4>
                                            <p className="text-sm text-gray-400">{project.solution}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Stack technique */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-300 mb-2">
                                        Environnement technique
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technicalStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs bg-purple-900/30 border border-purple-600 rounded-full text-purple-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Difficultés et apprentissages */}
                                {(project.challenges || project.learnings) && (
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        {project.challenges && (
                                            <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-4">
                                                <h4 className="text-sm font-medium text-orange-300 mb-2">
                                                    Difficultés rencontrées
                                                </h4>
                                                <p className="text-sm text-gray-400">{project.challenges}</p>
                                            </div>
                                        )}
                                        {project.learnings && (
                                            <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-4">
                                                <h4 className="text-sm font-medium text-green-300 mb-2">
                                                    Apports techniques
                                                </h4>
                                                <p className="text-sm text-gray-400">{project.learnings}</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Compétences BTS */}
                                {project.competencesBTS && project.competencesBTS.length > 0 && (
                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                            Compétences BTS couvertes
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.competencesBTS.map((code) => {
                                                const competence = competencesBTS.find((c) => c.code === code);
                                                return (
                                                    <span
                                                        key={code}
                                                        className="px-2 py-1 text-xs bg-green-900/20 border border-green-600 rounded text-green-300"
                                                        title={competence?.title}
                                                    >
                                                        {code}
                                                    </span>
                                                );
                                            })}
                                        </div>
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
                                                className="flex items-center gap-2 px-4 py-2 text-sm border border-violet-500 text-violet-300 rounded-lg hover:bg-violet-700 hover:text-white transition-all"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                GitHub
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 text-sm border border-violet-500 text-violet-300 rounded-lg hover:bg-violet-700 hover:text-white transition-all"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Démo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </section>

                {/* Référentiel de compétences */}
                <section className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-purple-300 mb-4">
                        Référentiel de compétences BTS SIO SLAM
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {competencesBTS.slice(0, 6).map((comp) => (
                            <div
                                key={comp.code}
                                className="bg-[#0a0a0f] border border-[#1b1b24] rounded p-4"
                            >
                                <div className="flex items-start gap-3">
                                    <span className="text-xs font-mono bg-purple-900/30 border border-purple-600 rounded px-2 py-1 text-purple-300">
                                        {comp.code}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-medium text-gray-200">
                                            {comp.title}
                                        </h3>
                                        <p className="text-xs text-gray-400 mt-1">{comp.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-4 text-center">
                        Liste non exhaustive — Référentiel complet disponible sur demande
                    </p>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
