import { Download, FileText, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const pdfPath = "/documents/tableau-de-synthese.pdf";

const competencies = [
    "Gérer le patrimoine informatique",
    "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    "Développer la présence en ligne de l'organisation",
    "Travailler en mode projet",
    "Mettre à disposition des utilisateurs un service informatique",
    "Organiser son développement professionnel",
];

const activityDetails = [
    {
        title: "Gérer le patrimoine informatique",
        items: [
            "Recenser et identifier les ressources numériques",
            "Exploiter des référentiels, normes et standards",
            "Mettre en place et vérifier les niveaux d'habilitation",
            "Vérifier la continuité d'un service informatique",
            "Gérer des sauvegardes",
            "Vérifier le respect des règles d'utilisation",
        ],
    },
    {
        title: "Répondre aux incidents et demandes",
        items: [
            "Collecter, suivre et orienter des demandes",
            "Traiter des demandes réseau, système et applicatives",
            "Traiter des demandes concernant les applications",
        ],
    },
    {
        title: "Développer la présence en ligne",
        items: [
            "Valoriser l'image de l'organisation sur les médias numériques",
            "Référencer les services en ligne et mesurer leur visibilité",
            "Participer à l'évolution d'un site Web exploitant les données de l'organisation",
        ],
    },
    {
        title: "Travailler en mode projet",
        items: [
            "Analyser les objectifs et modalités d'organisation d'un projet",
            "Planifier les activités",
            "Évaluer les indicateurs de suivi et analyser les écarts",
        ],
    },
    {
        title: "Mettre à disposition un service",
        items: [
            "Réaliser les tests d'intégration et d'acceptation",
            "Déployer un service",
            "Accompagner les utilisateurs dans la mise en place d'un service",
        ],
    },
    {
        title: "Développement professionnel",
        items: [
            "Mettre en place son environnement d'apprentissage personnel",
            "Mettre en œuvre des outils et stratégies de veille informationnelle",
            "Gérer son identité professionnelle",
            "Développer son projet professionnel",
        ],
    },
];

const rows = [
    {
        group: "Réalisation en cours de formation",
        title: "Livre d'Or",
        description:
            "Application web permettant d'écrire un message enregistré en base de données puis affiché.",
        period: "2024-2025",
        checked: [false, true, true, true, true, false],
    },
    {
        group: "Réalisation en cours de formation",
        title: "Gestionnaire de Tâches",
        description: "Application CRUD pour gérer des tâches.",
        period: "2024-2025",
        checked: [false, true, false, true, true, true],
    },
    {
        group: "Réalisation en cours de formation",
        title: "GameConnect",
        description: "Réseau social.",
        period: "2025-2026",
        checked: [true, true, true, true, true, false],
    },
    {
        group: "Réalisation en cours de formation",
        title: "Programme de hash Python",
        description: "Programme de hachage et de vérification d'intégrité de fichiers.",
        period: "2024-2025",
        checked: [true, true, false, true, true, false],
    },
    {
        group: "Réalisation en cours de formation",
        title: "TP Rclone",
        description:
            "Utilisation de Rclone pour synchroniser et sauvegarder des fichiers vers un stockage distant.",
        period: "2024-2025",
        checked: [true, true, false, true, true, false],
    },
    {
        group: "Réalisation en cours de formation",
        title: "Broken Access Control",
        description:
            "Analyse d'une faille de sécurité web permettant d'accéder à des ressources sans autorisation.",
        period: "2025-2026",
        checked: [true, true, true, true, false, true],
    },
    {
        group: "Réalisation en cours de formation",
        title: "Dispositif de veille",
        description: "Application permettant de suivre des informations technologiques.",
        period: "2025-2026",
        checked: [false, false, true, true, true, true],
    },
    {
        group: "Réalisation en cours de formation",
        title: "Portfolio",
        description: "Site personnel présentant compétences et projets.",
        period: "2025-2026",
        checked: [true, false, true, true, true, true],
    },
    {
        group: "Réalisations en milieu professionnel en cours de première année",
        title: "Site A'Numérique",
        description: "Site vitrine pour la branche ivoirienne de mon entreprise.",
        period: "12/05/2025 à 11/07/2025",
        checked: [true, false, true, true, true, true],
    },
    {
        group: "Réalisations en milieu professionnel en cours de seconde année",
        title: "Plateforme d'agrégation web",
        description: "Scraping d'offres / événements + seed base de données.",
        period: "22/12/2025 à 31/01/2026",
        checked: [true, true, true, true, true, true],
    },
];

export default function TableauSynthese() {
    return (
        <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
            <div className="max-w-7xl mx-auto w-full">
                <Navigation />

                <div className="mt-8 mb-8 flex flex-wrap items-center justify-between gap-4">
                    <Link
                        to="/projets"
                        className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-100 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour aux projets
                    </Link>
                    <a
                        href={pdfPath}
                        download="Tableau-de-Synthese-Judes-Uriel.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg transition-all shadow-lg hover:shadow-cyan-800/40"
                    >
                        <Download className="w-4 h-4" />
                        Télécharger le PDF
                    </a>
                </div>

                <header className="mb-8 bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-6">
                    <div className="flex items-start gap-4">
                        <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                            <FileText className="w-6 h-6 text-cyan-300" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">
                                BTS Services Informatiques aux Organisations - Session 2026
                            </p>
                            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gray-100">
                                Tableau de synthèse des réalisations professionnelles
                            </h1>
                            <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-4 gap-3 text-sm">
                                <Info label="Candidat" value="Angoran Moyé Judes-Uriel Stéphanas" />
                                <Info label="Numéro" value="2545812838" />
                                <Info label="Centre de formation" value="Institut F2I" />
                                <Info label="Option" value="SLAM" />
                            </div>
                            <p className="mt-4 text-sm text-gray-400">
                                Portfolio :{" "}
                                <a
                                    href="https://judes-uriel.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-cyan-300 hover:text-cyan-100"
                                >
                                    https://judes-uriel.vercel.app/
                                </a>
                            </p>
                        </div>
                    </div>
                </header>

                <section className="mb-10">
                    <div className="overflow-x-auto rounded-lg border border-[#1b1b24] bg-[#0f0f14]">
                        <table className="min-w-[1180px] w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-slate-900 text-gray-200">
                                    <th className="border border-slate-800 px-4 py-3 text-left w-[260px]">
                                        Réalisations professionnelles
                                    </th>
                                    <th className="border border-slate-800 px-4 py-3 text-left w-[150px]">
                                        Période
                                    </th>
                                    {competencies.map((competence) => (
                                        <th
                                            key={competence}
                                            className="border border-slate-800 px-3 py-3 text-center align-bottom w-[120px]"
                                        >
                                            <span className="block text-[11px] leading-snug text-gray-300">
                                                {competence}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, index) => {
                                    const showGroup = index === 0 || rows[index - 1].group !== row.group;

                                    return (
                                        <tr key={`${row.group}-${row.title}`} className="hover:bg-slate-900/60">
                                            <td className="border border-slate-800 px-4 py-4 align-top">
                                                {showGroup && (
                                                    <div className="mb-3 text-xs uppercase tracking-wide text-cyan-300">
                                                        {row.group}
                                                    </div>
                                                )}
                                                <div className="font-semibold text-gray-100">{row.title}</div>
                                                <div className="mt-1 text-xs leading-relaxed text-gray-400">
                                                    {row.description}
                                                </div>
                                            </td>
                                            <td className="border border-slate-800 px-4 py-4 align-middle text-gray-300">
                                                {row.period}
                                            </td>
                                            {row.checked.map((checked, checkedIndex) => (
                                                <td
                                                    key={`${row.title}-${competencies[checkedIndex]}`}
                                                    className="border border-slate-800 px-3 py-4 text-center align-middle"
                                                >
                                                    {checked && (
                                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-200">
                                                            <Check className="w-4 h-4" />
                                                        </span>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold text-cyan-300 mb-5">
                        Compétences mises en œuvre
                    </h2>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {activityDetails.map((group) => (
                            <article
                                key={group.title}
                                className="bg-[#0f0f14] border border-[#1b1b24] rounded-lg p-5"
                            >
                                <h3 className="font-semibold text-gray-100 mb-3">{group.title}</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    {group.items.map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}

function Info({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-lg border border-slate-800 bg-[#0a0a0f] px-4 py-3">
            <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
            <div className="mt-1 text-gray-200">{value}</div>
        </div>
    );
}
