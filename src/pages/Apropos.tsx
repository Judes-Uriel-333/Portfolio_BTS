// src/pages/Apropos.tsx
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Brain,
  Layers,
  GitBranch,
  Code2,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Circle,
  Dot,
  Target,
  GraduationCap,
  User,
  Briefcase,
  MapPin,
  Sparkles,
} from "lucide-react";

type NavItem = { label: string; path: string };
type RevealOpts = { threshold?: number; rootMargin?: string };

function useReveal<T extends HTMLElement>(opts: RevealOpts = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = opts;
  const ref = useRef<T | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return { ref, show };
}

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

function Node({
  side,
  title,
  Icon,
  children,
}: {
  side: "left" | "right" | "full";
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  const { ref, show } = useReveal<HTMLDivElement>({ threshold: 0.14 });

  const sideClass =
    side === "full"
      ? "md:col-span-12"
      : side === "left"
      ? "md:col-span-5 md:col-start-1"
      : "md:col-span-5 md:col-start-8";

  const railClass =
    side === "left"
      ? "md:col-span-2 md:col-start-6"
      : side === "right"
      ? "md:col-span-2 md:col-start-6"
      : "md:col-span-2 md:col-start-6";

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 relative">
      <div className={cx(sideClass, "relative")}>
        <div
          ref={ref}
          className={cx(
            "relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm",
            "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
            "transition-all duration-700",
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="absolute -inset-px rounded-2xl pointer-events-none opacity-70 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent" />
          <div className="relative p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04]">
                <Icon className="w-5 h-5 text-purple-200/90" />
              </span>
              <div className="min-w-0">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-100">
                  {title}
                </h2>
                <div className="h-[2px] w-16 mt-2 rounded-full bg-gradient-to-r from-purple-400/60 to-blue-400/60" />
              </div>
            </div>
            <div className="text-gray-300/90 leading-relaxed">{children}</div>
          </div>
        </div>

        <div
          className={cx(
            "hidden md:block absolute top-8",
            side === "left" ? "right-[-28px]" : side === "right" ? "left-[-28px]" : "hidden"
          )}
        >
          <div className="w-7 h-7 rounded-full border border-white/10 bg-[#0b0b14] flex items-center justify-center shadow-sm">
            <Dot className="w-5 h-5 text-purple-300/80" />
          </div>
          <div
            className={cx(
              "absolute top-1/2 -translate-y-1/2 h-[2px] w-7 bg-gradient-to-r",
              side === "left"
                ? "right-full from-purple-400/50 to-transparent"
                : "left-full from-transparent to-blue-400/50"
            )}
          />
        </div>
      </div>

      <div className={cx(railClass, "hidden md:flex items-stretch justify-center")}>
        <div className="relative w-[2px] bg-gradient-to-b from-transparent via-white/15 to-transparent">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-600/10 blur-2xl rounded-full" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-600/10 blur-2xl rounded-full" />
        </div>
      </div>
    </div>
  );
}

function ApproachSchema() {
  const steps = useMemo(
    () => [
      {
        title: "Comprendre le besoin",
        desc: "Clarifier l’objectif, les contraintes et le résultat attendu avant de toucher au code.",
        Icon: Brain,
      },
      {
        title: "Structurer avant d’implémenter",
        desc: "Découper les responsabilités, poser une structure simple, éviter le code en vrac.",
        Icon: Layers,
      },
      {
        title: "Itérer court, améliorer",
        desc: "Fonctionnalités petites et testables. Si ça marche mais que c’est flou, je reviens dessus.",
        Icon: GitBranch,
      },
      {
        title: "Stabiliser la logique",
        desc: "Rendre le flux lisible : interface, données, traitements. Puis seulement optimiser.",
        Icon: Code2,
      },
    ],
    []
  );

  const { ref, show } = useReveal<HTMLDivElement>({ threshold: 0.12 });
  const [active, setActive] = useState(0);

  return (
    <div ref={ref} className="relative">
      <div
        className={cx(
          "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden",
          "transition-all duration-700",
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <div className="relative p-6 sm:p-7">
          <div className="absolute -inset-px pointer-events-none bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-transparent" />
          <div className="relative">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">
                  Approche du développement
                </h2>
                <p className="mt-2 text-gray-300/85 max-w-2xl">
                  Je pars rarement d’une solution. Je pars d’un problème à comprendre.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-300/80">
                <Sparkles className="w-4 h-4 text-purple-300/80" />
                <span>Schéma de travail</span>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-[#0b0b14] p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute -top-16 -left-20 w-72 h-72 bg-purple-700/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-16 -right-20 w-72 h-72 bg-blue-700/10 blur-3xl rounded-full" />
              <p className="relative text-gray-200 leading-relaxed">
                Avant d’écrire du code, j’identifie le besoin, les contraintes et les flux logiques.
                Ensuite seulement, je structure et j’implémente progressivement.
              </p>
              <div className="relative mt-4 inline-flex items-center gap-2 text-sm text-gray-300/90">
                <ArrowRight className="w-4 h-4 text-purple-300/90" />
                <span>Objectif : lisibilité, séparation, compréhension du fonctionnement.</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="lg:col-span-7">
                <div className="relative">
                  <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-400/40 via-white/10 to-blue-400/40" />
                  <div className="space-y-4 pl-10">
                    {steps.map(({ title, desc, Icon }, idx) => {
                      const on = idx === active;
                      return (
                        <button
                          key={title}
                          type="button"
                          onClick={() => setActive(idx)}
                          className={cx(
                            "w-full text-left rounded-xl border transition-all",
                            "bg-[#0b0b14]",
                            on
                              ? "border-purple-500/40 shadow-[0_0_0_1px_rgba(168,85,247,0.15)]"
                              : "border-white/10 hover:border-white/20"
                          )}
                        >
                          <div className="p-4 sm:p-5 flex items-start gap-3">
                            <span
                              className={cx(
                                "inline-flex w-10 h-10 rounded-xl items-center justify-center border",
                                on ? "border-purple-500/30 bg-purple-500/10" : "border-white/10 bg-white/[0.02]"
                              )}
                            >
                              <Icon className={cx("w-5 h-5", on ? "text-purple-200" : "text-gray-300/80")} />
                            </span>
                            <div className="min-w-0">
                              <p className={cx("font-semibold", on ? "text-gray-100" : "text-gray-200")}>
                                {title}
                              </p>
                              <p className="mt-1 text-sm text-gray-300/85 leading-relaxed">{desc}</p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-xl border border-white/10 bg-[#0b0b14] p-5">
                  <p className="text-gray-100 font-semibold">Usage de l’IA</p>
                  <p className="mt-2 text-gray-300/85 leading-relaxed">
                    J’utilise l’IA comme outil d’assistance (explorer, comparer, débloquer).
                    Elle ne remplace ni l’analyse ni l’apprentissage : je reviens toujours au code pour
                    comprendre, modifier et structurer.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0b0b14] p-5">
                  <p className="text-gray-100 font-semibold">Progression actuelle</p>
                  <p className="mt-2 text-gray-300/85 leading-relaxed">
                    Consolidation React / Next.js, intégration backend et usage d’API.
                    Apprentissage client lourd (C# / Visual Studio) et mobile (React Native),
                    bases Dart, objectif Flutter.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0b0b14] p-5">
                  <p className="text-gray-100 font-semibold">Arbitrage assumé</p>
                  <p className="mt-2 text-gray-300/85 leading-relaxed">
                    Cette démarche crée un écart entre la diversité des projets visibles et mon niveau réel.
                    C’est volontaire : je préfère comprendre les fondations avant de viser la complexité.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center text-gray-300/70">
              <ArrowDown className="w-4 h-4 mr-2" />
              <span className="text-sm">Dérouler le raisonnement</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Roadmap() {
  const items = useMemo(
    () => [
      { label: "Fondations logiques", state: "done" as const },
      { label: "Web structuré (front)", state: "doing" as const },
      { label: "Intégration backend / API", state: "doing" as const },
      { label: "Client lourd (C#)", state: "doing" as const },
      { label: "Mobile (React Native)", state: "doing" as const },
      { label: "Dart / Flutter", state: "goal" as const },
      { label: "Systèmes data / IA", state: "goal" as const },
    ],
    []
  );

  const { ref, show } = useReveal<HTMLDivElement>({ threshold: 0.12 });

  const IconFor = (state: "done" | "doing" | "goal") => {
    if (state === "done") return <CheckCircle2 className="w-5 h-5 text-emerald-300/90" />;
    if (state === "doing") return <Circle className="w-5 h-5 text-purple-300/90" />;
    return <Target className="w-5 h-5 text-blue-300/90" />;
  };

  return (
    <div
      ref={ref}
      className={cx(
        "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm",
        "transition-all duration-700",
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <div className="p-6 sm:p-7">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">Progression</h2>
        <p className="mt-2 text-gray-300/85 max-w-2xl">
          Une échelle de progression, pas une promesse de niveau.
        </p>

        <div className="mt-6 overflow-x-auto">
          <div className="min-w-[780px]">
            <div className="relative">
              <div className="h-[3px] rounded-full bg-gradient-to-r from-purple-400/30 via-white/10 to-blue-400/30" />
              <div className="mt-6 grid grid-cols-7 gap-4">
                {items.map((it) => (
                  <div key={it.label} className="rounded-xl border border-white/10 bg-[#0b0b14] p-4">
                    <div className="flex items-center gap-2">
                      {IconFor(it.state)}
                      <p className="text-gray-200 font-semibold text-sm">{it.label}</p>
                    </div>
                    <p className="mt-2 text-xs text-gray-300/75">
                      {it.state === "done"
                        ? "Stabilisé"
                        : it.state === "doing"
                        ? "En consolidation"
                        : "Objectif"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-xs text-gray-300/70">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-300/90" />
            Stabilisé
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
            <Circle className="w-4 h-4 text-purple-300/90" />
            En consolidation
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1">
            <Target className="w-4 h-4 text-blue-300/90" />
            Objectif
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Apropos() {
  const nav: NavItem[] = [
    { label: "ACCUEIL", path: "/" },
    { label: "À PROPOS", path: "/apropos" },
    { label: "PROJETS", path: "/projets" },
    { label: "COMPÉTENCES", path: "/competences" },
    { label: "VEILLE", path: "/veille" },
    { label: "CERTIFICATIONS", path: "/certifications" },
    { label: "CV", path: "/cv" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <main className="min-h-screen bg-[#07060a] text-gray-200 font-sans flex flex-col">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 left-[-120px] w-[520px] h-[520px] bg-purple-700/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-[-140px] w-[560px] h-[560px] bg-blue-700/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.10),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:36px_36px]" />
        </div>

        <div className="relative px-6 py-10 sm:py-12">
          <div className="max-w-6xl mx-auto">
            <nav className="flex flex-wrap justify-center gap-4 mb-10">
              {nav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-5 py-2 border border-gray-500/40 rounded-lg text-gray-200/90 hover:bg-gray-800/40 transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <header className="text-center mb-10 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                À propos
              </h1>
              <p className="mt-3 text-gray-300/80 max-w-2xl mx-auto">
                Un schéma de raisonnement : profil, parcours, méthode, progression et objectifs.
              </p>
            </header>

            <div className="space-y-7 sm:space-y-9">
              <Node side="left" title="Profil" Icon={User}>
                <p>
                  Étudiant en <span className="text-gray-100 font-semibold">BTS SIO option SLAM</span>,
                  je me forme au développement applicatif avec une approche centrée sur la{" "}
                  <span className="text-gray-100 font-semibold">logique</span>, la{" "}
                  <span className="text-gray-100 font-semibold">structuration du code</span> et la{" "}
                  <span className="text-gray-100 font-semibold">compréhension des flux</span> plutôt
                  que sur l’apparence ou la simple exécution.
                </p>
                <p className="mt-4">
                  Mon objectif n’est pas de multiplier les projets vitrine, mais de comprendre comment
                  une application fonctionne réellement : séparation front-end / back-end, circulation
                  des données, responsabilités des composants et évolution d’une base de code dans le temps.
                </p>
              </Node>

              <Node side="right" title="Parcours" Icon={GraduationCap}>
                <p>
                  Après un <span className="text-gray-100 font-semibold">baccalauréat scientifique</span>,
                  j’ai commencé à m’intéresser à la programmation de manière autonome, notamment avec Python.
                  Cette phase m’a permis de découvrir la logique algorithmique et les bases de la programmation
                  avant d’intégrer un cursus orienté développement applicatif.
                </p>
                <p className="mt-4">
                  Je suis actuellement en{" "}
                  <span className="text-gray-100 font-semibold">BTS SIO SLAM (2024–2026)</span>,{" "}
                  <span className="text-gray-100 font-semibold">en dernière année</span>, où je consolide mes bases
                  en développement web, bases de données et conception applicative.
                </p>
              </Node>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-12">
                  <ApproachSchema />
                </div>
              </div>

              <Node side="left" title="Compétences en construction" Icon={Code2}>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="text-gray-100 font-semibold">React</span> et{" "}
                    <span className="text-gray-100 font-semibold">Next.js</span> : structuration de projets,
                    composants, routing, intégration API.
                  </li>
                  <li>
                    Bases <span className="text-gray-100 font-semibold">full-stack</span> : compréhension du lien
                    entre interface, données et logique serveur.
                  </li>
                  <li>
                    <span className="text-gray-100 font-semibold">C# / Visual Studio</span> : découverte du
                    développement applicatif client lourd.
                  </li>
                  <li>
                    <span className="text-gray-100 font-semibold">Python</span> : logique, scripts utilitaires,
                    bases backend.
                  </li>
                  <li>
                    Développement mobile : apprentissage progressif avec{" "}
                    <span className="text-gray-100 font-semibold">React Native</span>, bases de{" "}
                    <span className="text-gray-100 font-semibold">Dart</span>, et objectif de prise en main de{" "}
                    <span className="text-gray-100 font-semibold">Flutter</span>.
                  </li>
                </ul>
                <p className="mt-4 text-gray-300/85">
                  L’accent est mis sur la compréhension progressive plutôt que sur la maîtrise immédiate.
                </p>
              </Node>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-12">
                  <Roadmap />
                </div>
              </div>

              <Node side="right" title="Expérience professionnelle" Icon={Briefcase}>
                <p>
                  <span className="text-gray-100 font-semibold">Stagiaire Développeur Web — A’Numérique</span>{" "}
                  (mai 2025 – juillet 2025). Participation au développement d’une plateforme web en{" "}
                  <span className="text-gray-100 font-semibold">React.js</span> et{" "}
                  <span className="text-gray-100 font-semibold">Next.js</span>.
                </p>
                <ul className="mt-4 list-disc list-inside space-y-2">
                  <li>Implémentation de fonctionnalités front-end.</li>
                  <li>Amélioration de l’organisation du code.</li>
                  <li>Collaboration autour de la qualité et de la lisibilité.</li>
                </ul>
                <p className="mt-4 text-gray-300/85">
                  Ce stage a confirmé mon intérêt pour les frameworks modernes et la structuration de projets réels,
                  même à échelle modeste.
                </p>
              </Node>

              <Node side="left" title="Objectifs" Icon={Target}>
                <div className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-[#0b0b14] p-5">
                    <p className="text-gray-100 font-semibold">Court terme</p>
                    <p className="mt-2 text-gray-300/85 leading-relaxed">
                      Approfondir mes bases techniques et intégrer une alternance ou un environnement de travail
                      structuré pour progresser sur des projets concrets.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#0b0b14] p-5">
                    <p className="text-gray-100 font-semibold">Long terme</p>
                    <p className="mt-2 text-gray-300/85 leading-relaxed">
                      Évoluer vers des systèmes plus complexes, orientés données, logique applicative avancée et,
                      à terme, intelligence artificielle appliquée à des problématiques réelles.
                    </p>
                  </div>
                </div>
              </Node>

              <Node side="right" title="Localisation" Icon={MapPin}>
                <p className="text-gray-300/90">Basé à Eaubonne (Île-de-France). Mobilité régionale possible.</p>
              </Node>

              <div className="rounded-2xl border border-white/10 bg-[#06060c] p-7 sm:p-8 relative overflow-hidden">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-purple-700/10 blur-3xl rounded-full" />
                <div className="relative">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-100">Positionnement</h2>
                  <p className="mt-3 text-gray-300/85 leading-relaxed max-w-3xl">
                    Je ne me présente pas comme un développeur expert, mais comme un profil en construction sérieuse,
                    conscient de ses limites, avec une volonté claire de comprendre les fondations avant de viser la complexité.
                  </p>
                  <div className="mt-6 flex items-center justify-center text-gray-300/70">
                    <ArrowDown className="w-4 h-4 mr-2" />
                    <span className="text-sm">Fin du schéma</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
