// src/data/constants.ts
import { Project, Certification, VeilleItem, CompetenceBTS } from "../types/types";

export const projects: Project[] = [
    // PROFESSIONNELS
    {
        id: "anumerique-aggregation",
        title: "Développeur Web — Projet Plateforme d'Agrégation",
        category: "professionnel",
        period: "Décembre 2025 – Janvier 2026",
        description:
            "Conception d'un flux de données complet pour la page Salons d'emploi : scraping, stockage, seeding et affichage dans une interface web.",
        problemStatement:
            "Le besoin était de fiabiliser la récupération, la structuration et l'affichage de données de salons d'emploi dans une même chaîne de traitement.",
        solution:
            "Mise en place d'un pipeline scraping → stockage → affichage, avec service de seeding, gestion des données via Prisma et Docker, puis intégration dans l'application.",
        technicalStack: ["React.js", "Next.js", "Prisma", "Docker", "SQL", "Scraping"],
        challenges:
            "Assurer la cohérence des données entre environnements, structurer le pipeline et rendre le flux fiable pour l'application.",
        learnings:
            "Approfondissement des flux de données, de Prisma, de Docker et de l'intégration de logiques data dans un projet web réel.",
        links: {
            github: "https://github.com/Judes-Uriel-333",
        },
    },
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
    },

    // ACADÉMIQUES
    {
        id: "fix-info-csharp",
        title: "Fix-Info — Application Windows de gestion des incidents",
        category: "academique",
        isBtsE6: true,
        period: "01/2026 – 03/2026",
        description:
            "Application Windows client lourd graphique développée en C# .NET Framework pour gérer les incidents et les réparations du matériel informatique d'un parc interne.",
        problemStatement:
            "L'objectif était de proposer un logiciel interne permettant de centraliser le suivi des pannes et la gestion des réparations du matériel informatique.",
        solution:
            "Réalisation d'une application Windows avec interface graphique, gestion des données en SQL Server et environnement de développement Visual Studio 2022.",
        technicalStack: ["C#", ".NET Framework", "Visual Studio 2022", "SQL Server Express", "SSMS"],
        challenges:
            "Concevoir une application client lourd graphique, structurer les données et assurer la maintenance corrective ou évolutive de la solution.",
        learnings:
            "Renforcement de mes bases en C#, développement client lourd, gestion des données et conception d'une solution applicative dans un cadre BTS E6.",
        competencesBTS: ["A2.1.1", "A2.2.1", "A4.1.1"],
        links: {
            github: "https://github.com/Judes-Uriel-333/Fix-Info",
        },
    },
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
            github: "https://github.com/Judes-Uriel-333",
        },
    },
    {
        id: "gameconnect-php",
        title: "GameConnect (PHP)",
        category: "academique",
        isBtsE6: true,
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
        competencesBTS: ["A2.1.1", "A2.2.1", "A4.1.1"],
        links: {
            github: "https://github.com/Judes-Uriel-333",
        },
    },

    // PERSONNELS
    {
        id: "aiauditops",
        title: "AIAuditOps - Gouvernance et audit des systèmes IA",
        category: "personnel",
        detailPath: "/projets/aiauditops",
        status: "Core fonctionnel, modules avancés encore en cours",
        period: "2026",
        description:
            "Application web de gouvernance IA permettant d'inventorier des systèmes IA, suivre des analyses de risque, gérer des contrôles et collecter des preuves d'audit.",
        problemStatement:
            "Le projet répond au besoin de centraliser les informations liées aux systèmes IA : inventaire, risques, preuves, contrôles et préparation d'audit.",
        solution:
            "Mise en place d'un monorepo avec frontend Next.js, API NestJS, Prisma et PostgreSQL. Le cœur produit couvre l'authentification, le dashboard, les systèmes IA, les analyses de risque, les projets, les preuves et les paramètres d'organisation.",
        technicalStack: ["Next.js", "React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Docker", "Tailwind CSS"],
        challenges:
            "Structurer une application multi-modules sans présenter les parties avancées comme terminées. Certains modules sont visibles mais restent en attente de backend complet.",
        learnings:
            "Consolidation de l'architecture monorepo, des API NestJS, de Prisma, des flux d'authentification et de la conception d'une interface orientée audit.",
        highlights: [
            "Authentification et dashboard connectés à de vraies données",
            "Inventaire des systèmes IA et suivi des analyses de risque",
            "Gestion de preuves avec logique de hash côté serveur",
            "Modules avancés préparés mais encore limités ou masqués selon leur maturité",
        ],
        gallery: [
            { src: "/projects/aiauditops/01_login.png", alt: "Page de connexion AIAuditOps", caption: "Connexion à l'application." },
            { src: "/projects/aiauditops/02_dashboard.png", alt: "Dashboard AIAuditOps", caption: "Vue d'ensemble des systèmes IA, risques et contrôles." },
            { src: "/projects/aiauditops/03_systemes_liste.png", alt: "Liste des systèmes IA", caption: "Inventaire des systèmes IA avec niveau de risque." },
            { src: "/projects/aiauditops/04_systeme_detail.png", alt: "Détail d'un système IA", caption: "Détail d'un système IA avec score et actions." },
            { src: "/projects/aiauditops/05_risk_analysis.png", alt: "Analyses de risque AIAuditOps", caption: "Liste des analyses de risque." },
            { src: "/projects/aiauditops/07_evidence_list.png", alt: "Liste des preuves AIAuditOps", caption: "Espace de suivi des preuves." },
            { src: "/projects/aiauditops/08_upload_evidence.png", alt: "Upload de preuve AIAuditOps", caption: "Formulaire d'ajout de preuve." },
            { src: "/projects/aiauditops/09_members.png", alt: "Gestion des membres AIAuditOps", caption: "Gestion des membres de l'organisation." },
            { src: "/projects/aiauditops/10_settings.png", alt: "Paramètres organisation AIAuditOps", caption: "Paramètres de l'organisation." },
        ],
    },
    {
        id: "mailguardai",
        title: "MailGuardAI - Agent IA d'analyse d'emails",
        category: "personnel",
        detailPath: "/projets/mailguardai",
        status: "MVP local fonctionnel",
        period: "2026",
        description:
            "MVP d'agent IA connecté à Gmail pour analyser des emails, les classer par intention business et faire ressortir les messages importants ou suspects.",
        problemStatement:
            "L'objectif est d'aider une petite structure à trier ses emails entre opportunités, factures, réclamations, urgences, marketing, administratif et menaces potentielles.",
        solution:
            "Création d'un backend Flask avec OAuth Gmail, analyse via OpenAI, stockage SQLite et worker de polling. Le frontend React/Vite affiche les statistiques, les filtres et les messages analysés.",
        technicalStack: ["React", "Vite", "Tailwind CSS", "Python", "Flask", "Gmail API", "OpenAI API", "SQLite", "APScheduler"],
        challenges:
            "Gérer le flux OAuth, la session, la classification IA et les actions Gmail tout en restant prudent sur la fiabilité des décisions automatiques.",
        learnings:
            "Approfondissement des intégrations API, de l'authentification OAuth, du traitement asynchrone et de l'usage d'un modèle IA dans un workflow applicatif.",
        highlights: [
            "Connexion Google OAuth et lecture Gmail via API",
            "Classification IA par intention business et niveau d'urgence",
            "Dashboard avec statistiques et filtres par catégorie",
            "Backend Flask avec worker de polling et stockage SQLite",
        ],
        gallery: [
            { src: "/projects/mailguardai/splash_screen.png", alt: "Écran de démarrage MailGuardAI", caption: "Écran de démarrage de l'application." },
            { src: "/projects/mailguardai/login_page.png", alt: "Page de connexion MailGuardAI", caption: "Connexion via Google OAuth." },
            { src: "/projects/mailguardai/dashboard_all_messages.png", alt: "Dashboard MailGuardAI avec tous les messages", caption: "Dashboard listant les emails analyses." },
            { src: "/projects/mailguardai/dashboard_menaces_filter.png", alt: "Filtre menaces MailGuardAI", caption: "Filtre des messages classés comme menaces." },
            { src: "/projects/mailguardai/dashboard_opportunites_filter.png", alt: "Filtre opportunités MailGuardAI", caption: "Filtre des opportunités business détectées." },
        ],
    },
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
        id: "secnumacademie",
        title: "SecNumacadémie",
        organization: "ANSSI / SecNumacadémie",
        status: "obtained",
        kind: "attestation",
        date: "25/02/2026",
        description:
            "Attestation de suivi obtenue après validation des quatre modules du MOOC SecNumacadémie consacré aux fondamentaux de la cybersécurité.",
        filePath: "/certifications/certification-secnum.pdf",
        downloadName: "Certification-SecNum.pdf",
        result: "Validation des 4 modules",
        highlights: [
            "Panorama de la SSI : 92%",
            "Sécurité de l'authentification : 100%",
            "Sécurité sur Internet : 100%",
            "Sécurité du poste de travail et nomadisme : 100%",
        ],
        tags: ["Cybersécurité", "ANSSI", "MOOC", "SSI"],
    },
    {
        id: "openclassrooms-python",
        title: "Apprenez les bases du langage Python",
        organization: "OpenClassrooms",
        status: "obtained",
        kind: "course",
        date: "2023",
        description:
            "Cours OpenClassrooms validé autour des bases du langage Python et des premiers réflexes de programmation.",
        result: "Progression 100%",
        highlights: ["Objectifs pédagogiques validés : 3/3"],
        tags: ["Python", "Programmation", "OpenClassrooms"],
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
