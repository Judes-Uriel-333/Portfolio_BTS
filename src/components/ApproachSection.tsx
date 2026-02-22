import { useEffect, useRef, useState } from "react";
import { Brain, Layers, GitBranch, Code2, ArrowRight } from "lucide-react";

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

type Step = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const steps: Step[] = [
  {
    title: "Comprendre le besoin",
    desc: "Clarifier l’objectif, les contraintes et le résultat attendu avant de toucher au code.",
    Icon: Brain,
  },
  {
    title: "Structurer avant d’implémenter",
    desc: "Découper les responsabilités, poser une structure simple, éviter le code “en vrac”.",
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
];

export default function ApproachSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  const [open, setOpen] = useState(false);

  return (
    <section ref={ref} className="bg-[#0f0f14] border border-[#1b1b24] rounded-md p-6">
      <div
        className={[
          "transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-purple-300">Approche du développement</h2>
            <p className="text-gray-400 mt-2 max-w-2xl">
              Méthode de travail, arbitrages et progression contrôlée.
            </p>
          </div>

          <button
            onClick={() => setOpen((s) => !s)}
            className="shrink-0 px-4 py-2 border border-gray-500/40 rounded-lg text-gray-300 hover:bg-gray-800/40 transition"
            aria-expanded={open}
          >
            {open ? "Réduire" : "Voir le détail"}
          </button>
        </div>

        <div className="mt-6">
          <div className="relative overflow-hidden rounded-lg border border-[#242433] bg-gradient-to-b from-[#10101a] to-[#0f0f14] p-5">
            <div className="absolute -top-20 -left-16 w-72 h-72 bg-purple-700/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -right-16 w-72 h-72 bg-blue-700/10 blur-3xl rounded-full" />

            <p className="relative text-gray-200 leading-relaxed">
              Je pars rarement d’une solution. Je pars d’un problème à comprendre.
            </p>
            <p className="relative text-gray-400 leading-relaxed mt-3">
              Avant d’écrire du code, j’identifie le besoin, les contraintes et les flux logiques.
              Ensuite seulement, je structure et j’implémente progressivement.
            </p>

            <div className="relative mt-4 inline-flex items-center gap-2 text-sm text-gray-300">
              <ArrowRight className="w-4 h-4 text-purple-300" />
              <span>Objectif : lisibilité, séparation, compréhension du fonctionnement.</span>
            </div>
          </div>
        </div>

        <div
          className={[
            "grid gap-4 sm:grid-cols-2 mt-6 transition-all duration-500",
            open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden",
          ].join(" ")}
        >
          {steps.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group rounded-lg border border-[#242433] bg-[#0b0b12] p-4 hover:border-purple-600/60 hover:bg-[#0c0c14] transition"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-md border border-[#242433] bg-[#10101a] p-2 group-hover:border-purple-600/50 transition">
                  <Icon className="w-5 h-5 text-purple-300" />
                </div>

                <div>
                  <p className="text-gray-200 font-medium">{title}</p>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-[#242433] bg-[#0b0b12] p-5">
            <p className="text-gray-200 font-medium">Usage de l’IA</p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              J’utilise l’IA comme outil d’assistance (explorer, comparer, débloquer).
              Elle ne remplace ni l’analyse ni l’apprentissage : je reviens toujours au code pour
              comprendre, modifier et structurer.
            </p>
          </div>

          <div className="rounded-lg border border-[#242433] bg-[#0b0b12] p-5">
            <p className="text-gray-200 font-medium">Progression actuelle</p>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Consolidation React / Next.js, intégration backend et usage d’API.
              Apprentissage client lourd (C# / Visual Studio) et mobile (React Native),
              bases Dart, objectif Flutter.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-[#242433] bg-[#0b0b12] p-5">
          <p className="text-gray-200 font-medium">Arbitrage assumé</p>
          <p className="text-gray-400 mt-2 leading-relaxed">
            Cette démarche crée un écart entre la diversité des projets visibles et mon niveau réel.
            C’est volontaire : je préfère comprendre les fondations avant de viser la complexité.
          </p>
        </div>
      </div>
    </section>
  );
}
