import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { ArrowRight, Code2, Zap, Target } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Fond avec animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-600/30 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" />
        <div className="absolute w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse" style={{animationDelay: "1s"}} />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col justify-center items-center flex-grow px-4 sm:px-6 py-20">
        {/* Section Hero */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Photo et présentation */}
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-blue-500/50 bg-gradient-to-br from-blue-600/20 to-purple-600/20 shadow-2xl hover:border-blue-400/80 transition-all duration-300">
                <img
                  src="/src/components/image.jfif"
                  alt="Angoran Judes-Uriel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Texte principal */}
            <div className="flex-1 text-center sm:text-left space-y-6">
              <div>
                <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-sm font-semibold text-blue-300 mb-4">
                  Développeur Web — BTS SIO SLAM
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Angoran Moyé
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Judes-Uriel Stéphanas
                  </span>
                </h1>
              </div>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Passionné par la <span className="text-cyan-400 font-semibold">structuration applicative</span> et les <span className="text-purple-400 font-semibold">logiques métier</span>. 
                Je créé des solutions web modernes avec React, Next.js et des technologies d'avant-garde.
              </p>

              {/* Boutons CTA */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
                <Link
                  to="/projets"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50"
                >
                  Voir mes projets <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-cyan-500/50 hover:border-cyan-400 rounded-lg font-bold transition-all duration-300"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>

          {/* Statistiques / Points clés */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-800/80">
              <Code2 className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Full-Stack</h3>
              <p className="text-sm text-gray-400">React, Next.js, TypeScript, PHP, Python</p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/80">
              <Zap className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Performance</h3>
              <p className="text-sm text-gray-400">Optimisation, UX/UI, architecture moderne</p>
            </div>
            <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:bg-slate-800/80">
              <Target className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Résultats</h3>
              <p className="text-sm text-gray-400">Projets livrés, solutions éprouvées</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation rapide */}
      <div className="relative z-10 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "À PROPOS", path: "/apropos" },
              { label: "COMPÉTENCES", path: "/competences" },
              { label: "CV", path: "/cv" },
              { label: "CONTACT", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-3 bg-slate-800 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500 rounded-lg text-center text-sm font-semibold transition-all duration-300 hover:text-blue-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Hero;
