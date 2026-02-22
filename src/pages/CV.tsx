// src/pages/CV.tsx
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Download, FileText } from "lucide-react";

export default function CV() {
    const cvPath = "/cv/CV_Angoran_Judes_Uriel.pdf";

    return (
        <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
            <div className="max-w-6xl mx-auto w-full">
                {/* Navigation */}
                <Navigation />

                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        Curriculum Vitae
                    </h1>
                    <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
                        Téléchargez mon CV ou consultez-le directement en ligne
                    </p>
                </header>

                {/* Actions */}
                <div className="flex justify-center gap-4 mb-8">
                    <a
                        href={cvPath}
                        download="CV_Angoran_Judes_Uriel.pdf"
                        className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-800/50"
                    >
                        <Download className="w-5 h-5" />
                        Télécharger le CV
                    </a>
                    <a
                        href={cvPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-violet-500 text-violet-300 rounded-lg hover:bg-violet-700 hover:text-white transition-all duration-200"
                    >
                        <FileText className="w-5 h-5" />
                        Ouvrir dans un nouvel onglet
                    </a>
                </div>

                {/* CV Viewer */}
                <div className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg overflow-hidden shadow-xl">
                    <div className="aspect-[1/1.4] w-full">
                        <iframe
                            src={cvPath}
                            className="w-full h-full"
                            title="Curriculum Vitae"
                        />
                    </div>
                </div>

                {/* Informations supplémentaires */}
                <div className="mt-8 bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-purple-300 mb-4">
                        Informations complémentaires
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">
                        <div>
                            <h3 className="font-medium text-gray-200 mb-2">Formation</h3>
                            <p className="text-sm text-gray-400">
                                BTS SIO option SLAM (2024-2026) — Institut F2I
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Spécialisation : Solutions Logicielles et Applications Métiers
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-200 mb-2">Recherche</h3>
                            <p className="text-sm text-gray-400">
                                Alternance Développeur Web Junior
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Front-End · Full-Stack · Intégration
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-200 mb-2">Localisation</h3>
                            <p className="text-sm text-gray-400">
                                Eaubonne, Île-de-France
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Mobilité régionale possible
                            </p>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-200 mb-2">Contact</h3>
                            <p className="text-sm text-gray-400">
                                Email : judesuriel33@gmail.com
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                Tél : +33 6 25 40 05 46
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
