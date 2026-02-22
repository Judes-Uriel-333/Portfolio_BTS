// src/pages/Veille.tsx
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Rss, Calendar, Tag, ExternalLink } from "lucide-react";
import { veilleItems } from "../data/constants";

export default function Veille() {
    const themes = Array.from(new Set(veilleItems.map((item) => item.theme)));

    return (
        <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
            <div className="max-w-5xl mx-auto w-full">
                {/* Navigation */}
                <Navigation />

                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        Veille Technologique
                    </h1>
                    <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
                        Synthèses personnelles sur les évolutions technologiques que je suis
                    </p>
                </header>

                {/* Introduction */}
                <section className="mb-12 bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <Rss className="text-purple-400 w-6 h-6 mt-1" />
                        <div>
                            <h2 className="text-xl font-semibold text-purple-300 mb-3">
                                Ma démarche de veille
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-3">
                                Dans le domaine du développement web et de l'informatique, la veille
                                technologique est essentielle pour rester à jour. Je consacre du temps
                                chaque semaine à la lecture d'articles, de documentation technique et
                                au visionnage de contenus éducatifs.
                            </p>
                            <div className="mt-4">
                                <h3 className="text-sm font-medium text-gray-200 mb-2">
                                    Thématiques suivies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {themes.map((theme) => (
                                        <span
                                            key={theme}
                                            className="px-3 py-1 text-xs bg-purple-900/30 border border-purple-600 rounded-full text-purple-300"
                                        >
                                            {theme}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Articles de veille */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-purple-300 mb-6">
                        Synthèses récentes
                    </h2>
                    <div className="space-y-6">
                        {veilleItems.map((item) => (
                            <article
                                key={item.id}
                                className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-6 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-800/20 transition-all"
                            >
                                {/* En-tête */}
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex-1">
                                        <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">
                                            {item.theme}
                                        </span>
                                        <h3 className="text-xl font-semibold text-gray-100 mt-1">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Calendar className="w-4 h-4" />
                                        {item.date}
                                    </div>
                                </div>

                                {/* Synthèse personnelle */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-300 mb-2">
                                        Ma synthèse personnelle
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {item.personalSynthesis}
                                    </p>
                                </div>

                                {/* Sources */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                                        <ExternalLink className="w-4 h-4" />
                                        Sources consultées
                                    </h4>
                                    <ul className="text-sm text-gray-400 space-y-1">
                                        {item.sources.map((source, index) => (
                                            <li key={index}>• {source}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tags */}
                                <div className="flex items-center gap-2 flex-wrap">
                                    <Tag className="w-4 h-4 text-gray-500" />
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs bg-[#0a0a0f] border border-[#1b1b24] rounded text-gray-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Méthodologie */}
                <section className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-purple-300 mb-4">
                        Méthodologie et sources
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-400">
                        <div>
                            <h3 className="font-medium text-gray-200 mb-2">
                                Sources principales
                            </h3>
                            <ul className="text-sm space-y-1">
                                <li>• Documentation officielle (React, TypeScript, etc.)</li>
                                <li>• Medium, Dev.to, freeCodeCamp</li>
                                <li>• YouTube (Fireship, Web Dev Simplified)</li>
                                <li>• GitHub Trending</li>
                                <li>• Stack Overflow Developer Survey</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-200 mb-2">
                                Méthode de travail
                            </h3>
                            <ul className="text-sm space-y-1">
                                <li>• Lecture quotidienne d'articles techniques</li>
                                <li>• Tests pratiques sur projets perso</li>
                                <li>• Synthèse écrite pour mieux retenir</li>
                                <li>• Partage avec la communauté dev</li>
                                <li>• Mise à jour régulière de mes connaissances</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
