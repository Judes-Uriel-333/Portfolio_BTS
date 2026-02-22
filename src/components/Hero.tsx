import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#0a0a0f] via-[#0e0e1a] to-[#0a0a0f] text-gray-200 relative overflow-hidden">
      {/* Fond */}
      <div className="absolute inset-0">
        <div className="w-[520px] h-[520px] bg-purple-800/20 rounded-full blur-3xl absolute top-[-160px] left-[-120px]" />
        <div className="w-[420px] h-[420px] bg-blue-800/20 rounded-full blur-3xl absolute bottom-[-160px] right-[-120px]" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow px-6 pt-24 text-center">
        {/* Photo */}
        <div className="w-40 h-40 mb-8 rounded-full overflow-hidden border border-gray-600/40 bg-[#1c1c27]">
          <img
            src="/src/components/image.jfif"
            alt="Angoran Judes-Uriel"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nom */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Angoran Moyé Judes-Uriel Stéphanas
        </h1>

        {/* Titre */}
        <h2 className="text-lg sm:text-xl text-gray-400 mb-8">
          Développeur web orienté logique et structuration applicative
        </h2>

        {/* Texte structuré */}
        <div className="max-w-3xl text-gray-400 space-y-5 leading-relaxed">
          <p>
            Étudiant en <span className="text-purple-300">BTS SIO SLAM</span> —
            développement front-end structuré et bases full-stack.
            Progression vers des systèmes orientés data et backend.
          </p>

          <p>
            Je développe des applications web à partir d’idées concrètes,
            en utilisant React et Next.js comme terrain d’apprentissage.
            J’apprends à relier interfaces, données et logique applicative.
          </p>

          <p>
            En parallèle, je monte en compétence sur le backend,
            le développement client lourd (C#)
            et le mobile (React Native, bases Dart, futur Flutter).
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            { label: "À PROPOS", path: "/apropos" },
            { label: "PROJETS", path: "/projets" },
            { label: "COMPÉTENCES", path: "/competences" },
            { label: "VEILLE", path: "/veille" },
            { label: "CERTIFICATIONS", path: "/certifications" },
            { label: "CV", path: "/cv" },
            { label: "CONTACT", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="px-6 py-3 border border-gray-500/40 rounded-lg text-gray-300 hover:bg-gray-800/40 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Hero;
