// src/data/constants.ts
import { Project, Certification, VeilleItem, CompetenceBTS } from "../types/types";

export const projects: Project[] = [
    // PROFESSIONNELS
    {
        id: "anumerique-stage",
        title: "Stagiaire Développeur Web — A'Numérique",
        category: "professionnel",
        period: "Mai 2025 – Juillet 2025",
        description:
            "Développement d'une plateforme web en React.js et Next.js. Implémentation de fonctionnalités front-end, optimisation des performances et travail collaboratif sur la qualité du code.",
        problemStatement:
            "L'entreprise avait besoin d'une plateforme web moderne pour présenter ses services numériques de manière attractive et performante.",
        solution:
            "Conception et développement d'un site vitrine avec React et Next.js, intégration de composants réutilisables, optimisation SEO et performance.",
        technicalStack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
        challenges:
            "Premier projet professionnel en environnement réel. Apprentissage du workflow Git en équipe, respect des délais, adaptation aux retours clients.",
        learnings:
            "Compréhension du cycle de vie d'un projet web professionnel, méthodologie Agile, communication avec le client, importance des tests et de la documentation.",
        links: {
            demo: "#",
        },
    },

    // ACADÉMIQUES
    {
        id: "hash-python",
        title: "Hash (Python)",
        category: "academique",
        description:
            "Programme de hachage et de vérification d'intégrité de fichiers avec SHA-256, comparaison de fichiers et gestion d'historique de hash.",
        problemStatement:
            "Besoin d'un outil pour vérifier l'intégrité de fichiers et détecter les modifications non autorisées.",
        solution:
            "Développement d'une application Python utilisant l'algorithme SHA-256 pour générer des empreintes uniques et comparer les fichiers.",
        technicalStack: ["Python", "SHA-256", "hashlib", "os", "json"],
        challenges:
            "Compréhension des algorithmes de hachage, gestion des fichiers binaires, optimisation pour les gros fichiers.",
        learnings:
            "Cryptographie de base, manipulation de fichiers en Python, importance de l'intégrité des données.",
        links: {
            github: "#",
        },
    },
    {
        id: "gameconnect-php",
        title: "GameConnect (PHP)",
        category: "academique",
        description:
            "Réseau social de gamers : inscription, authentification, publications, likes, commentaires et édition de profil.",
        problemStatement:
            "Création d'une plateforme sociale permettant aux joueurs de partager leur expérience gaming.",
        solution:
            "Développement d'un réseau social complet avec système d'authentification sécurisé, base de données relationnelle, et interface utilisateur responsive.",
        technicalStack: ["PHP", "MySQL", "HTML/CSS", "JavaScript", "PDO"],
        challenges:
            "Sécurisation des données utilisateur (SQL injection, XSS), gestion des sessions, architecture MVC basique.",
        learnings:
            "Développement back-end PHP, requêtes SQL complexes, sécurité web, gestion d'état utilisateur.",
        links: {
            github: "#",
        },
    },

    // PERSONNELS
    {
        id: "task-manager-react",
        title: "Gestionnaire de tâches (React)",
        category: "personnel",
        description:
            "Application web pour créer, modifier et suivre ses tâches avec gestion d'état en React.",
        problemStatement:
            "Besoin d'un outil simple et efficace pour organiser mes tâches quotidiennes et projets personnels.",
        solution:
            "Création d'une application React avec hooks (useState, useEffect), localStorage pour la persistance, et interface intuitive.",
        technicalStack: ["React", "JavaScript", "CSS", "localStorage"],
        challenges:
            "Gestion d'état complexe avec plusieurs composants, persistance des données en local, drag & drop.",
        learnings:
            "Maîtrise des hooks React, gestion d'état avancée, concept de composants contrôlés vs non-contrôlés.",
        links: {
            demo: "#",
        },
    },
    {
        id: "ecommerce-vanilla",
        title: "Site vitrine — Boutique en ligne (HTML/CSS/JS)",
        category: "personnel",
        description:
            "Version front pure, responsive et optimisée pour l'expérience utilisateur.",
        problemStatement:
            "Apprendre les fondamentaux du développement web sans framework.",
        solution:
            "Site vitrine responsive avec JavaScript vanilla, animations CSS, et optimisation des performances.",
        technicalStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        challenges:
            "Gestion du responsive sans framework CSS, compatibilité cross-browser, animations fluides.",
        learnings:
            "Maîtrise des fondamentaux HTML/CSS/JS, importance du design responsive, optimisation du chargement.",
    },
    {
        id: "ecommerce-react",
        title: "Site vitrine — Boutique en ligne (React/Next.js/Tailwind)",
        category: "personnel",
        description:
            "Version moderne avec composants dynamiques et architecture optimisée.",
        problemStatement:
            "Moderniser le site vitrine précédent avec des technologies actuelles.",
        solution:
            "Refonte complète avec Next.js, composants React réutilisables, Tailwind pour le design system.",
        technicalStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        challenges:
            "Apprentissage de Tailwind CSS, optimisation SSR avec Next.js, gestion des images.",
        learnings:
            "Next.js et SSR/SSG, utility-first CSS avec Tailwind, amélioration des performances.",
        links: {
            demo: "#",
        },
    },
    {
        id: "portfolio-nextjs",
        title: "Portfolio personnel (React/Next.js/Tailwind)",
        category: "personnel",
        description:
            "Présentation du parcours et des projets. Design minimaliste et performant.",
        technicalStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        learnings:
            "Mise en pratique de toutes les compétences acquises, importance du personal branding.",
    },
    {
        id: "cv-generator",
        title: "Générateur de CV (Web)",
        category: "personnel",
        description:
            "Stack : HTML, CSS, JS. Objectif : outil modulaire pour CV en ligne.",
        technicalStack: ["HTML", "CSS", "JavaScript"],
        learnings:
            "Génération dynamique de contenu, export PDF avec JavaScript.",
    },
];

export const certifications: Certification[] = [
    {
        id: "openclassrooms-html-css",
        title: "Créez votre site web avec HTML5 et CSS3",
        organization: "OpenClassrooms",
        status: "obtained",
        date: "2023",
        description: "Maîtrise des fondamentaux HTML5 et CSS3",
    },
    {
        id: "openclassrooms-js",
        title: "Apprenez à programmer avec JavaScript",
        organization: "OpenClassrooms",
        status: "obtained",
        date: "2023",
        description: "Bases de la programmation JavaScript",
    },
    {
        id: "bts-sio-slam",
        title: "BTS SIO option SLAM",
        organization: "Institut F2I",
        status: "in-progress",
        date: "2024-2026",
        description:
            "Formation en Solutions Logicielles et Applications Métiers",
    },
    {
        id: "react-advanced",
        title: "React Avancé",
        organization: "À définir",
        status: "planned",
        description: "Approfondissement React, Context API, Redux, hooks avancés",
    },
    {
        id: "cybersecurity-basics",
        title: "Fondamentaux de la Cybersécurité",
        organization: "À définir",
        status: "planned",
        description: "Introduction à la sécurité informatique et aux bonnes pratiques",
    },
];

export const veilleItems: VeilleItem[] = [
    {
        id: "veille-ia-dev",
        theme: "Intelligence Artificielle",
        title: "L'IA générative dans le développement web",
        date: "2025-12",
        sources: [
            "OpenAI Blog",
            "GitHub Copilot Documentation",
            "Medium - AI Development",
        ],
        personalSynthesis:
            "L'IA générative transforme le développement web. Des outils comme GitHub Copilot et ChatGPT permettent d'accélérer le codage, mais posent des questions sur la qualité et la compréhension du code généré. J'ai testé Copilot : utile pour le boilerplate, mais nécessite validation systématique. L'IA est un assistant, pas un remplacement du développeur.",
        tags: ["IA", "Développement", "GitHub Copilot"],
    },
    {
        id: "veille-react-19",
        theme: "Frameworks Web",
        title: "React 19 et les nouveautés",
        date: "2025-11",
        sources: [
            "React Official Blog",
            "Dev.to - React Community",
            "YouTube - Fireship",
        ],
        personalSynthesis:
            "React 19 introduit des Server Components et améliore les performances. Les Server Components permettent de réduire le JavaScript côté client. Changement important : nécessite de repenser l'architecture des applications. J'ai expérimenté sur un petit projet : gain de performance notable, mais courbe d'apprentissage.",
        tags: ["React", "Web", "Performance"],
    },
    {
        id: "veille-cybersec-2025",
        theme: "Cybersécurité",
        title: "Tendances cybersécurité 2025",
        date: "2025-10",
        sources: [
            "ANSSI",
            "Kaspersky Blog",
            "Le Monde Informatique",
        ],
        personalSynthesis:
            "Les attaques par ransomware augmentent, ciblant aussi les PME. L'authentification multi-facteurs devient obligatoire dans beaucoup de secteurs. Importance croissante du DevSecOps : intégrer la sécurité dès le développement. À appliquer : validation des entrées utilisateur, chiffrement des données sensibles, audits réguliers.",
        tags: ["Cybersécurité", "Ransomware", "DevSecOps"],
    },
    {
        id: "veille-typescript",
        theme: "Langages",
        title: "TypeScript : pourquoi l'adopter ?",
        date: "2025-09",
        sources: [
            "TypeScript Documentation",
            "Stack Overflow Developer Survey",
            "freeCodeCamp",
        ],
        personalSynthesis:
            "TypeScript ajoute un système de types à JavaScript, réduisant les bugs en production. Adoption massive dans l'industrie (80%+ des nouveaux projets React). Courbe d'apprentissage modérée mais ROI élevé. Je l'utilise maintenant par défaut : les erreurs sont détectées avant l'exécution, meilleure auto-complétion, code plus maintenable.",
        tags: ["TypeScript", "JavaScript", "Qualité Code"],
    },
];

export const competencesBTS: CompetenceBTS[] = [
    {
        code: "A1.1.1",
        title: "Analyse du cahier des charges d'un service à produire",
        description:
            "Analyser les besoins du client et rédiger les spécifications fonctionnelles",
    },
    {
        code: "A1.1.2",
        title: "Étude de l'impact de l'intégration d'un service sur le SI",
        description:
            "Évaluer les conséquences de l'ajout d'un nouveau service",
    },
    {
        code: "A1.2.1",
        title: "Élaboration et présentation d'un dossier de choix de solution technique",
        description:
            "Comparer différentes solutions techniques et justifier le choix",
    },
    {
        code: "A1.3.1",
        title: "Mise en place d'un espace de travail collaboratif",
        description:
            "Configurer des outils de travail en équipe (Git, Trello, etc.)",
    },
    {
        code: "A2.1.1",
        title: "Analyse et définition des besoins",
        description:
            "Recueillir et formaliser les besoins utilisateurs",
    },
    {
        code: "A2.2.1",
        title: "Conception et développement d'une solution applicative",
        description:
            "Développer une application en respectant les spécifications",
    },
    {
        code: "A2.3.1",
        title: "Réalisation des tests nécessaires à la validation d'une solution",
        description:
            "Tests unitaires, d'intégration et fonctionnels",
    },
    {
        code: "A4.1.1",
        title: "Proposition d'une solution d'évolution",
        description:
            "Maintenir et faire évoluer une application existante",
    },
    {
        code: "A4.1.8",
        title: "Réalisation d'une veille technologique",
        description:
            "Se tenir informé des évolutions technologiques du domaine",
    },
];
