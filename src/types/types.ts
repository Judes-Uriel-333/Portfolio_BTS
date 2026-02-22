// src/types/types.ts
export interface Project {
    id: string;
    title: string;
    category: "professionnel" | "academique" | "personnel" | "bts-e6";
    period?: string;
    description: string;
    problemStatement?: string;
    solution?: string;
    technicalStack: string[];
    challenges?: string;
    learnings?: string;
    links?: {
        github?: string;
        demo?: string;
        documentation?: string;
    };
    images?: string[];
    competencesBTS?: string[];
}

export interface Certification {
    id: string;
    title: string;
    organization: string;
    status: "obtained" | "in-progress" | "planned";
    date?: string;
    description?: string;
    credentialUrl?: string;
    image?: string;
}

export interface VeilleItem {
    id: string;
    theme: string;
    title: string;
    date: string;
    sources: string[];
    personalSynthesis: string;
    tags: string[];
}

export interface CompetenceBTS {
    code: string;
    title: string;
    description: string;
    level?: number;
    projectsAssociated?: string[];
}

export interface NavItem {
    label: string;
    path: string;
    subItems?: NavItem[];
}
