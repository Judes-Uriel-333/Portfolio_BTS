// src/pages/Certifications.tsx
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Award, CheckCircle, Clock, Target } from "lucide-react";
import { certifications } from "../data/constants";

export default function Certifications() {
    const obtained = certifications.filter((c) => c.status === "obtained");
    const inProgress = certifications.filter((c) => c.status === "in-progress");
    const planned = certifications.filter((c) => c.status === "planned");

    const renderCertification = (cert: typeof certifications[0], icon: JSX.Element) => (
        <div
            key={cert.id}
            className="bg-[#0f0f14] border border-[#1b1b24] p-5 rounded-lg hover:border-purple-600 hover:shadow-lg hover:shadow-purple-800/20 transition-all"
        >
            <div className="flex items-start gap-3">
                <div className="mt-1">{icon}</div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-100">{cert.title}</h3>
                    <p className="text-sm text-purple-300 mt-1">{cert.organization}</p>
                    {cert.date && (
                        <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                    )}
                    {cert.description && (
                        <p className="text-sm text-gray-400 mt-2">{cert.description}</p>
                    )}
                    {cert.credentialUrl && (
                        <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-400 hover:text-blue-300 mt-2 inline-block"
                        >
                            Voir la certification →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
            <div className="max-w-5xl mx-auto w-full">
                {/* Navigation */}
                <Navigation />

                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        Certifications & Formations
                    </h1>
                    <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
                        Parcours de formation continue et certifications professionnelles
                    </p>
                </header>

                {/* Certifications obtenues */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="text-green-400 w-6 h-6" />
                        <h2 className="text-2xl font-semibold text-purple-300">
                            Certifications Obtenues
                        </h2>
                    </div>
                    <div className="grid gap-4">
                        {obtained.map((cert) =>
                            renderCertification(
                                cert,
                                <CheckCircle className="text-green-400 w-5 h-5" />
                            )
                        )}
                    </div>
                </section>

                {/* Formations en cours */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Clock className="text-blue-400 w-6 h-6" />
                        <h2 className="text-2xl font-semibold text-purple-300">
                            Formations en Cours
                        </h2>
                    </div>
                    <div className="grid gap-4">
                        {inProgress.map((cert) =>
                            renderCertification(
                                cert,
                                <Clock className="text-blue-400 w-5 h-5" />
                            )
                        )}
                    </div>
                </section>

                {/* Certifications prévues */}
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <Target className="text-orange-400 w-6 h-6" />
                        <h2 className="text-2xl font-semibold text-purple-300">
                            Certifications Prévues
                        </h2>
                    </div>
                    <div className="grid gap-4">
                        {planned.map((cert) =>
                            renderCertification(
                                cert,
                                <Target className="text-orange-400 w-5 h-5" />
                            )
                        )}
                    </div>
                </section>

                {/* Objectif */}
                <section className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-6">
                    <div className="flex items-start gap-3">
                        <Award className="text-purple-400 w-6 h-6 mt-1" />
                        <div>
                            <h2 className="text-xl font-semibold text-purple-300 mb-3">
                                Démarche de formation continue
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                Je reste en veille permanente sur les évolutions technologiques et
                                complète régulièrement mes compétences par des certifications
                                reconnues. Mon objectif est de me spécialiser progressivement en
                                intelligence artificielle appliquée à la cybersécurité, tout en
                                maintenant une base solide en développement web full-stack.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
