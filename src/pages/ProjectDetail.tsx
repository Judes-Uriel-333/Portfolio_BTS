import { Link, useParams } from "react-router-dom";
import {
    ArrowLeft,
    CheckCircle,
    Code,
    ExternalLink,
    Images,
    Layers,
    Target,
    Wrench,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { projects } from "../data/constants";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = projects.find((item) => item.id === projectId);
    const heroImage = project?.gallery?.[0];

    if (!project) {
        return (
            <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
                <div className="max-w-6xl mx-auto w-full">
                    <Navigation />
                    <section className="py-20 text-center">
                        <h1 className="text-3xl font-bold text-gray-100">Projet introuvable</h1>
                        <p className="mt-3 text-gray-400">
                            La page demandée ne correspond à aucun projet disponible.
                        </p>
                        <Link
                            to="/projets"
                            className="inline-flex items-center gap-2 mt-6 px-4 py-2 text-sm border border-cyan-500 text-cyan-300 rounded-lg hover:bg-cyan-700 hover:text-white transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Retour aux projets
                        </Link>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
            <div className="max-w-6xl mx-auto w-full">
                <Navigation />

                <div className="mt-8 mb-8">
                    <Link
                        to="/projets"
                        className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-100 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour aux projets
                    </Link>
                </div>

                <header className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center mb-10">
                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="px-3 py-1 text-xs bg-purple-900/30 border border-purple-600 rounded-full text-purple-300">
                                {project.category}
                            </span>
                            {project.status && (
                                <span className="px-3 py-1 text-xs bg-cyan-900/30 border border-cyan-600 rounded-full text-cyan-300">
                                    {project.status}
                                </span>
                            )}
                            {project.period && (
                                <span className="px-3 py-1 text-xs bg-slate-900 border border-slate-700 rounded-full text-gray-300">
                                    {project.period}
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 leading-tight">
                            {project.title}
                        </h1>
                        <p className="mt-5 text-gray-400 leading-relaxed text-base md:text-lg">
                            {project.description}
                        </p>
                    </div>

                    {heroImage && (
                        <figure className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg overflow-hidden shadow-lg shadow-cyan-950/20">
                            <img
                                src={heroImage.src}
                                alt={heroImage.alt}
                                className="w-full aspect-video object-cover"
                            />
                            <figcaption className="px-4 py-3 text-sm text-gray-400 border-t border-[#1b1b24]">
                                {heroImage.caption}
                            </figcaption>
                        </figure>
                    )}
                </header>

                <section className="grid lg:grid-cols-2 gap-6 mb-10">
                    {project.problemStatement && (
                        <div className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-5">
                            <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300 mb-3">
                                <Target className="w-5 h-5" />
                                Besoin
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {project.problemStatement}
                            </p>
                        </div>
                    )}

                    {project.solution && (
                        <div className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-5">
                            <h2 className="flex items-center gap-2 text-lg font-semibold text-green-300 mb-3">
                                <Layers className="w-5 h-5" />
                                Solution
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">{project.solution}</p>
                        </div>
                    )}
                </section>

                <section className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 mb-10">
                    <div className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-5">
                        <h2 className="flex items-center gap-2 text-lg font-semibold text-purple-300 mb-4">
                            <Code className="w-5 h-5" />
                            Technologies
                        </h2>
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

                    {project.highlights && project.highlights.length > 0 && (
                        <div className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-5">
                            <h2 className="flex items-center gap-2 text-lg font-semibold text-cyan-300 mb-4">
                                <CheckCircle className="w-5 h-5" />
                                Points visibles
                            </h2>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {project.highlights.map((highlight) => (
                                    <li key={highlight} className="flex gap-2">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>

                {(project.challenges || project.learnings) && (
                    <section className="grid lg:grid-cols-2 gap-6 mb-10">
                        {project.challenges && (
                            <div className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-5">
                                <h2 className="flex items-center gap-2 text-lg font-semibold text-red-300 mb-3">
                                    <Wrench className="w-5 h-5" />
                                    Difficultés
                                </h2>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {project.challenges}
                                </p>
                            </div>
                        )}
                        {project.learnings && (
                            <div className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-5">
                                <h2 className="text-lg font-semibold text-blue-300 mb-3">
                                    Apports techniques
                                </h2>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {project.learnings}
                                </p>
                            </div>
                        )}
                    </section>
                )}

                {project.gallery && project.gallery.length > 0 && (
                    <section className="mb-12">
                        <h2 className="flex items-center gap-2 text-2xl font-semibold text-cyan-300 mb-6">
                            <Images className="w-6 h-6" />
                            Captures du projet
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.gallery.map((image) => (
                                <figure
                                    key={image.src}
                                    className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg overflow-hidden hover:border-cyan-700 transition-colors"
                                >
                                    <a href={image.src} target="_blank" rel="noreferrer">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            loading="lazy"
                                            className="w-full aspect-video object-cover"
                                        />
                                    </a>
                                    <figcaption className="px-4 py-3 text-sm text-gray-400 border-t border-[#1b1b24]">
                                        {image.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </section>
                )}

                {project.links?.github && (
                    <div className="mb-12">
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-violet-500 text-violet-300 rounded-lg hover:bg-violet-700 hover:text-white transition-all"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Voir GitHub
                        </a>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
