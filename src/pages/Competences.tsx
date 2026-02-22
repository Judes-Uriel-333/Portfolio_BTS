// src/pages/Competences.tsx
import Navigation from "../components/Navigation";
import { Code, Wrench, Brain } from "lucide-react";
import Footer from "../components/Footer";

export default function Competences() {
  const skills = [
    { name: "HTML / CSS", level: 85 },
    { name: "JavaScript", level: 70 },
    { name: "PHP", level: 70 },
    { name: "SQL", level: 75 },
    { name: "Python", level: 90 },
    { name: "C#", level: 20 },
    { name: "React", level: 50 },
    { name: "Next.js", level: 40 },
    { name: "Tailwind CSS", level: 15 },
    { name: "Git", level: 65 },
  ];

  const outils = [
    "VS Code",
    "Visual Studio",
    "phpMyAdmin / MySQL",
    "Git / GitHub",
    "Terminal (bash / cmd)",
  ];

  const softSkills = [
    "Autonomie et capacité d'auto-apprentissage",
    "Curiosité technique et veille technologique régulière",
    "Rigueur et sens du détail dans le code",
    "Esprit d'équipe et communication efficace",
    "Gestion du temps et priorisation des tâches",
    "Persévérance face aux problèmes complexes",
  ];

  return (
    <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full">
        {/* Navigation */}
        <Navigation />

        {/* Titre */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Compétences
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Langages, outils et qualités humaines au service du développement.
          </p>
        </header>

        {/* Langages */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-purple-400 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-purple-300">
              Langages & Frameworks
            </h2>
          </div>
          <div className="bg-[#0f0f14] p-5 rounded-md border border-[#1b1b24] space-y-4">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="w-full bg-[#0a0a0f] h-2 rounded">
                  <div
                    className="h-2 rounded bg-gradient-to-r from-purple-500 to-blue-500"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Outils */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="text-purple-400 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-purple-300">
              Outils & Environnements
            </h2>
          </div>
          <div className="bg-[#0f0f14] p-5 rounded-md border border-[#1b1b24] text-gray-300 space-y-2">
            {outils.map((outil) => (
              <p key={outil}>• {outil}</p>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="text-purple-400 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-purple-300">
              Soft Skills
            </h2>
          </div>
          <div className="bg-[#0f0f14] p-5 rounded-md border border-[#1b1b24] text-gray-300 space-y-2">
            {softSkills.map((skill) => (
              <p key={skill}>• {skill}</p>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
