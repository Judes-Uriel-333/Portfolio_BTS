import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
    BookOpen,
    Brain,
    CheckCircle2,
    ExternalLink,
    Radar,
    Rss,
    Shield,
    TriangleAlert,
    Workflow,
} from "lucide-react";

type Reference = {
    id: string;
    title: string;
    url: string;
    type: string;
    date: string;
    note: string;
};

const references: Reference[] = [
    {
        id: "1",
        title: "NIST - Draft Cyber AI Profile",
        url: "https://www.nist.gov/news-events/news/2025/12/draft-nist-guidelines-rethink-cybersecurity-ai-era",
        type: "Cadre de reference",
        date: "16 decembre 2025",
        note: "Le NIST organise la cybersecurite liee a l'IA autour de trois axes : securiser l'IA, faire de la defense aidee par l'IA et contrer les attaques rendues possibles par l'IA.",
    },
    {
        id: "2",
        title: "NIST - Generative AI Profile",
        url: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence",
        type: "Gestion des risques",
        date: "26 juillet 2024",
        note: "Le profil GAI du NIST rappelle que les risques doivent etre suivis tout au long du cycle de vie du systeme.",
    },
    {
        id: "3",
        title: "ENISA - Securing Machine Learning Algorithms",
        url: "https://www.enisa.europa.eu/publications/securing-machine-learning-algorithms",
        type: "Rapport technique",
        date: "14 decembre 2021",
        note: "ENISA met en avant le data poisoning, les attaques adversariales et l'exfiltration de donnees comme risques majeurs.",
    },
    {
        id: "4",
        title: "CISA / NSA - Deploying AI Systems Securely",
        url: "https://www.cisa.gov/news-events/alerts/2024/04/15/joint-guidance-deploying-ai-systems-securely",
        type: "Guide operationnel",
        date: "15 avril 2024",
        note: "Le guide insiste sur la confidentialite, l'integrite, la disponibilite et la capacite de proteger, detecter et repondre autour des systemes d'IA.",
    },
    {
        id: "5",
        title: "CISA - AI Cybersecurity Collaboration Playbook",
        url: "https://www.cisa.gov/news-events/news/cisa-jcdc-government-and-industry-partners-publish-ai-cybersecurity-collaboration-playbook",
        type: "Partage d'incidents",
        date: "14 janvier 2025",
        note: "La defense de l'IA repose aussi sur la collaboration entre industriels, autorites et equipes de reponse.",
    },
    {
        id: "6",
        title: "CISA - AI Data Security",
        url: "https://www.cisa.gov/resources-tools/resources/ai-data-security-best-practices-securing-data-used-train-operate-ai-systems",
        type: "Bonnes pratiques",
        date: "22 mai 2025",
        note: "CISA rappelle que la qualite et la securite des donnees conditionnent directement la fiabilite d'un systeme d'IA.",
    },
    {
        id: "7",
        title: "ENISA - Multilayer Framework for AI",
        url: "https://www.enisa.europa.eu/publications/multilayer-framework-for-good-cybersecurity-practices-for-ai",
        type: "Framework",
        date: "7 juin 2023",
        note: "ENISA propose une approche en couches : fondations cyber, securite specifique a l'IA, puis exigences sectorielles.",
    },
    {
        id: "8",
        title: "OWASP - Top 10 for LLM Applications 2025",
        url: "https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/",
        type: "Risques applicatifs",
        date: "17 novembre 2024",
        note: "OWASP formalise les risques applicatifs lies aux LLM, dont la prompt injection et les sorties dangereuses.",
    },
];

const referencesById = references.reduce<Record<string, Reference>>((acc, reference) => {
    acc[reference.id] = reference;
    return acc;
}, {});

const keywords = [
    "SOC",
    "SIEM",
    "Detection d'anomalies",
    "Threat hunting",
    "Prompt injection",
    "Data poisoning",
    "Red teaming",
];

const useCases = [
    {
        title: "Detection et priorisation",
        text: "L'IA aide a faire ressortir des comportements inhabituels dans de grands volumes de logs.",
    },
    {
        title: "Investigation assistee",
        text: "Elle accelere la lecture d'incidents, la synthese d'evenements et la formulation de requetes d'analyse.",
    },
    {
        title: "Automatisation controlee",
        text: "Elle peut proposer un premier triage sur des taches repetitives avant validation humaine.",
    },
    {
        title: "Aide a la decision",
        text: "Elle devient vraiment utile lorsqu'elle explique son resultat et laisse une trace exploitable.",
    },
];

const workflow = [
    "Collecter la telemetrie reseau, endpoint, cloud, messagerie et identite.",
    "Correler et scorer les signaux pour faire ressortir les incidents prioritaires.",
    "Faire qualifier les hypotheses par un analyste ou un administrateur.",
    "Repondre de maniere tracable, avec validation humaine sur les actions critiques.",
];

const projectSteps = [
    "Centraliser des logs Windows, Linux et reseau dans un socle de supervision.",
    "Definir quelques cas d'usage : phishing, connexion anormale, elevation suspecte.",
    "Ajouter une couche IA pour resumer une alerte et proposer une priorite.",
    "Mesurer le gain sur le temps de triage sans automatiser a l'aveugle la reponse.",
];

const strengths = [
    "Absorbe mieux le volume d'alertes.",
    "Aide a detecter des signaux faibles.",
    "Accelere l'investigation et le threat hunting.",
    "Apporte un gain reel si la supervision reste humaine.",
];

const vigilance = [
    "Une IA mal alimentee peut produire de mauvaises decisions a grande echelle.",
    "Les risques specifiques existent : prompt injection, poisoning, exfiltration, sorties trompeuses.",
    "Un bon resultat de demonstration ne garantit pas un bon resultat en production.",
    "Les actions critiques ne doivent pas etre laissees a une automatisation opaque.",
];

function InlineReferences({ ids }: { ids: string[] }) {
    return (
        <span className="inline-flex flex-wrap gap-2 align-middle ml-2">
            {ids.map((id) => {
                const reference = referencesById[id];

                if (!reference) {
                    return null;
                }

                return (
                    <a
                        key={id}
                        href={reference.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20 transition-colors"
                        title={reference.title}
                    >
                        [{id}]
                        <ExternalLink className="w-3 h-3" />
                    </a>
                );
            })}
        </span>
    );
}

export default function Veille() {
    return (
        <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
            <div className="max-w-6xl mx-auto w-full">
                <Navigation />

                <header className="mt-8 mb-10">
                    <div className="grid lg:grid-cols-[1.4fr_0.9fr] gap-6 items-stretch">
                        <div className="bg-gradient-to-br from-[#101826] via-[#0f1320] to-[#0a0b11] border border-cyan-900/40 rounded-3xl p-8 shadow-[0_20px_60px_rgba(8,145,178,0.08)]">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-200 text-xs uppercase tracking-[0.18em]">
                                <Rss className="w-4 h-4" />
                                Note de synthese
                            </div>
                            <p className="mt-5 text-sm text-cyan-200/80 uppercase tracking-[0.2em]">
                                Veille technologique
                            </p>
                            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-white">
                                L'IA orientee vers la defense des systemes informatiques
                            </h1>
                            <p className="mt-5 text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl">
                                J'aborde ici l'intelligence artificielle comme un outil d'assistance
                                pour les equipes de securite : detection, priorisation, investigation
                                et aide a la reponse, mais aussi comme une nouvelle surface de risque a
                                surveiller.
                            </p>
                        </div>

                        <div className="bg-[#0f0f14] border border-[#1b1b24] rounded-3xl p-6">
                            <h2 className="text-lg font-semibold text-cyan-200 mb-4">
                                Fiche d'identite
                            </h2>
                            <div className="space-y-3 text-sm">
                                <div className="grid grid-cols-[120px_1fr] gap-3 border-b border-slate-800 pb-3">
                                    <span className="text-gray-500 uppercase tracking-wide">Theme</span>
                                    <span className="text-gray-200">
                                        Intelligence artificielle appliquee a la cyberdefense
                                    </span>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-3 border-b border-slate-800 pb-3">
                                    <span className="text-gray-500 uppercase tracking-wide">Date</span>
                                    <span className="text-gray-200">23 avril 2026</span>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-3 border-b border-slate-800 pb-3">
                                    <span className="text-gray-500 uppercase tracking-wide">Niveau</span>
                                    <span className="text-gray-200">Intermediaire</span>
                                </div>
                                <div className="grid grid-cols-[120px_1fr] gap-3">
                                    <span className="text-gray-500 uppercase tracking-wide">Mots-cles</span>
                                    <div className="flex flex-wrap gap-2">
                                        {keywords.map((keyword) => (
                                            <span
                                                key={keyword}
                                                className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-gray-300 text-xs"
                                            >
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="mb-8 bg-[#0f0f14] border border-[#1b1b24] rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-cyan-300 mt-1" />
                        <div>
                            <h2 className="text-2xl font-semibold text-cyan-200 mb-3">
                                1. Contexte et enjeux
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Les equipes de securite doivent traiter des volumes de logs et
                                d'alertes trop importants pour une analyse purement manuelle. Dans ce
                                contexte, l'IA devient surtout interessante comme accelerateur de
                                defense : elle aide a regrouper des evenements, prioriser des
                                incidents et faire ressortir des comportements inhabituels.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Le cadrage qui m'a semble le plus pertinent est celui du NIST : il
                                faut securiser les systemes d'IA, utiliser l'IA pour aider la
                                cyberdefense et rester capable de contrer des attaques elles-memes
                                renforcees par l'IA.
                                <InlineReferences ids={["1", "2"]} />
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-8 bg-[#0f0f14] border border-[#1b1b24] rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                        <Brain className="w-6 h-6 text-violet-300 mt-1" />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold text-violet-200 mb-5">
                                2. Concepts fondamentaux a assimiler
                            </h2>

                            <div className="space-y-5">
                                <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded-2xl p-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                                        2.1 Ce que signifie "IA pour la defense"
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Ici, je ne parle pas seulement de chatbot. J'inclus
                                        l'apprentissage automatique pour la detection ou la
                                        classification, les assistants generatifs pour
                                        l'investigation, et les automatismes guides sur les taches
                                        repetitives de cyberdefense.
                                    </p>
                                </div>

                                <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded-2xl p-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-4">
                                        2.2 Cas d'usage que je trouve les plus concrets
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {useCases.map((useCase) => (
                                            <div
                                                key={useCase.title}
                                                className="rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                                            >
                                                <h4 className="text-sm font-semibold text-cyan-200 mb-2">
                                                    {useCase.title}
                                                </h4>
                                                <p className="text-sm text-gray-400 leading-relaxed">
                                                    {useCase.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-[#0a0a0f] border border-[#1b1b24] rounded-2xl p-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                                        2.3 Limites et menaces specifiques
                                    </h3>
                                    <div className="space-y-3 text-sm text-gray-400 leading-relaxed">
                                        <p>
                                            ENISA montre que le data poisoning, les attaques
                                            adversariales et l'exfiltration de donnees peuvent
                                            fragiliser un systeme de machine learning.
                                            <InlineReferences ids={["3"]} />
                                        </p>
                                        <p>
                                            Pour les LLM, les risques applicatifs changent aussi :
                                            prompt injection, sorties dangereuses, fuite
                                            d'informations et chainage d'outils mal securise.
                                            <InlineReferences ids={["8"]} />
                                        </p>
                                        <p>
                                            Pour moi, la bonne lecture est donc la suivante : une IA
                                            peut aider a defendre un SI, mais elle doit elle-meme
                                            etre traitee comme un composant sensible du SI.
                                            <InlineReferences ids={["4", "7"]} />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 rounded-2xl border border-amber-700/40 bg-amber-500/10 p-5">
                                <div className="flex items-start gap-3">
                                    <TriangleAlert className="w-5 h-5 text-amber-300 mt-0.5" />
                                    <div>
                                        <h3 className="text-sm font-semibold text-amber-200 mb-2">
                                            A retenir
                                        </h3>
                                        <p className="text-sm text-amber-50/90 leading-relaxed">
                                            En cyberdefense, une IA utile n'est pas celle qui decide
                                            seule. C'est celle qui accelere l'analyse, laisse des
                                            traces verifiables et reste sous controle humain.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8 bg-[#0f0f14] border border-[#1b1b24] rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                        <Workflow className="w-6 h-6 text-emerald-300 mt-1" />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold text-emerald-200 mb-5">
                                3. Decoder : comment l'IA defend concretement un SI
                            </h2>

                            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
                                {workflow.map((step) => (
                                    <div
                                        key={step}
                                        className="rounded-2xl border border-slate-800 bg-[#0a0a0f] p-4 text-sm text-gray-400 leading-relaxed"
                                    >
                                        {step}
                                    </div>
                                ))}
                            </div>

                            <div className="grid lg:grid-cols-2 gap-5">
                                <div className="rounded-2xl border border-slate-800 bg-[#0a0a0f] p-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-3">
                                        3.1 Ce qui doit etre protege en premier
                                    </h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li>Les donnees d'entree et leur integrite</li>
                                        <li>Les acces aux modeles, API et connecteurs</li>
                                        <li>Les prompts, sorties et traces d'audit</li>
                                        <li>La supervision humaine et les mecanismes d'arbitrage</li>
                                    </ul>
                                    <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                                        CISA insiste particulierement sur la securite des donnees qui
                                        servent a entrainer et faire fonctionner l'IA.
                                        <InlineReferences ids={["6"]} />
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-[#0a0a0f] p-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-3">
                                        3.2 Approche defensive que je retiens
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-3">
                                        L'approche la plus solide n'est pas de tout miser sur l'IA,
                                        mais de superposer une hygiene cyber classique, des controles
                                        specifiques a l'IA et un cadre adapte au contexte metier.
                                        <InlineReferences ids={["4", "7"]} />
                                    </p>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Cela rejoint bien l'idee de defense en profondeur : l'IA
                                        doit etre pensee comme un composant du SI, pas comme un bloc
                                        magique en dehors du perimetre securite.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8 bg-[#0f0f14] border border-[#1b1b24] rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                        <Radar className="w-6 h-6 text-sky-300 mt-1" />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold text-sky-200 mb-5">
                                4. Explorer : tendances que je surveille
                            </h2>

                            <div className="grid lg:grid-cols-3 gap-4">
                                <div className="rounded-2xl border border-slate-800 bg-[#0a0a0f] p-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-3">
                                        4.1 SOC copilotes
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Les assistants en langage naturel pour l'investigation et le
                                        threat hunting repondent a un vrai besoin de productivite des
                                        analystes.
                                        <InlineReferences ids={["1"]} />
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-[#0a0a0f] p-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-3">
                                        4.2 Defense collective
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        La defense de l'IA progresse aussi grace au partage de cas
                                        reels, d'incidents et de bonnes pratiques entre acteurs.
                                        <InlineReferences ids={["5"]} />
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-[#0a0a0f] p-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-3">
                                        4.3 Gouvernance des donnees
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Plus les usages montent en criticite, plus la provenance, la
                                        qualite des donnees et la tracabilite des sorties deviennent
                                        centrales.
                                        <InlineReferences ids={["2", "6", "7"]} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8 bg-[#0f0f14] border border-[#1b1b24] rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                        <BookOpen className="w-6 h-6 text-pink-300 mt-1" />
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold text-pink-200 mb-5">
                                5. Mission / Projet : application a mon parcours
                            </h2>

                            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
                                <div className="rounded-2xl border border-slate-800 bg-[#0a0a0f] p-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-3">
                                        5.1 Ce que cette veille m'apporte
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-3">
                                        Cette veille renforce mon interet pour la fiabilite des
                                        donnees, l'observabilite, l'automatisation raisonnee et la
                                        securisation des applications. Elle relie developpement,
                                        supervision, cyberdefense et analyse des risques.
                                    </p>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Dans une logique BTS SIO SLAM, je trouve ce sujet pertinent
                                        parce qu'il combine comprehension technique, conception de
                                        solutions utiles et maitrise des limites d'un systeme.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-[#0a0a0f] p-5">
                                    <h3 className="text-lg font-semibold text-gray-100 mb-3">
                                        5.2 Exemple de mini mise en oeuvre
                                    </h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        {projectSteps.map((step) => (
                                            <li key={step}>{step}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-5 rounded-2xl border border-slate-800 bg-[#0a0a0f] p-5">
                                <h3 className="text-lg font-semibold text-gray-100 mb-3">
                                    5.3 Criteres de reussite
                                </h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {[
                                        "Les alertes prioritaires sont expliquees clairement et pas seulement notees par un score opaque.",
                                        "Le temps de qualification d'un incident diminue sans perte de rigueur.",
                                        "Les donnees, prompts, acces API et sorties sont journalises.",
                                        "Les actions sensibles restent validees par un humain.",
                                    ].map((criterion) => (
                                        <div
                                            key={criterion}
                                            className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-gray-400"
                                        >
                                            {criterion}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8 bg-[#0f0f14] border border-[#1b1b24] rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold text-cyan-200 mb-5">
                        6. Ressources de reference
                    </h2>

                    <div className="overflow-x-auto rounded-2xl border border-slate-800">
                        <div className="grid min-w-[840px] grid-cols-[1.2fr_0.9fr_0.8fr] bg-slate-900/90 text-xs uppercase tracking-wide text-slate-400">
                            <div className="px-4 py-3 border-r border-slate-800">Ressource</div>
                            <div className="px-4 py-3 border-r border-slate-800">Type</div>
                            <div className="px-4 py-3">Date</div>
                        </div>
                        {references.map((reference, index) => (
                            <div
                                key={reference.id}
                                className={`grid min-w-[840px] grid-cols-[1.2fr_0.9fr_0.8fr] ${
                                    index % 2 === 0 ? "bg-[#0a0a0f]" : "bg-slate-950/70"
                                } border-t border-slate-800`}
                            >
                                <div className="px-4 py-4 border-r border-slate-800">
                                    <a
                                        href={reference.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100 transition-colors"
                                    >
                                        {reference.title}
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                                        {reference.note}
                                    </p>
                                </div>
                                <div className="px-4 py-4 border-r border-slate-800 text-sm text-gray-400">
                                    {reference.type}
                                </div>
                                <div className="px-4 py-4 text-sm text-gray-400">{reference.date}</div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 rounded-2xl border border-blue-700/30 bg-blue-500/10 p-5">
                        <h3 className="text-sm font-semibold text-blue-200 mb-2">Bonus</h3>
                        <p className="text-sm text-blue-50/90 leading-relaxed">
                            Les pistes que je veux continuer a suivre sont les assistants SOC,
                            l'evaluation securitaire des LLM, la qualite des donnees de training et
                            les methodes de red teaming appliquees aux outils IA relies au SI.
                        </p>
                    </div>
                </section>

                <section className="bg-[#0f0f14] border border-[#1b1b24] rounded-2xl p-6">
                    <h2 className="text-2xl font-semibold text-emerald-200 mb-5">
                        7. Points cles a retenir
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-5">
                        <div className="rounded-2xl border border-emerald-800/40 bg-emerald-500/10 p-5">
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-200 mb-4">
                                <CheckCircle2 className="w-5 h-5" />
                                Points forts
                            </h3>
                            <ul className="space-y-2 text-sm text-emerald-50/90">
                                {strengths.map((strength) => (
                                    <li key={strength}>{strength}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-orange-800/40 bg-orange-500/10 p-5">
                            <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-200 mb-4">
                                <TriangleAlert className="w-5 h-5" />
                                Points de vigilance
                            </h3>
                            <ul className="space-y-2 text-sm text-orange-50/90">
                                {vigilance.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
