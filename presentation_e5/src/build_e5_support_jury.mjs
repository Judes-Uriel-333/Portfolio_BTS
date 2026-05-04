import fs from "node:fs/promises";
import path from "node:path";

const {
  Presentation,
  PresentationFile,
  row,
  column,
  grid,
  panel,
  text,
  shape,
  rule,
  fill,
  hug,
  fixed,
  wrap,
  fr,
  auto,
} = await import("@oai/artifact-tool");

const OUT = path.resolve("output");
const SCRATCH = path.resolve("scratch");
const W = 1920;
const H = 1080;
const TOTAL = 10;

const colors = {
  paper: "#F8FAFC",
  ink: "#0F172A",
  muted: "#475569",
  quiet: "#64748B",
  line: "#CBD5E1",
  pale: "#E0F2FE",
  cyan: "#0891B2",
  navy: "#1E293B",
  green: "#047857",
  amber: "#B45309",
};

const fonts = {
  display: "Bahnschrift",
  body: "Aptos",
  mono: "Cascadia Code",
};

const deck = Presentation.create({
  slideSize: { width: W, height: H },
});

function t(value, opts = {}) {
  return text(value, {
    name: opts.name,
    width: opts.width ?? fill,
    height: opts.height ?? hug,
    style: {
      typeface: opts.font ?? fonts.body,
      fontSize: opts.size ?? 30,
      color: opts.color ?? colors.ink,
      bold: opts.bold ?? false,
      italic: opts.italic ?? false,
      alignment: opts.align ?? "left",
      lineSpacing: opts.lineSpacing,
    },
  });
}

function setLightBackground(slide, accent = colors.cyan) {
  slide.background.fill = { type: "solid", color: colors.paper };

  const side = slide.shapes.add({
    geometry: "rect",
    position: { left: 0, top: 0, width: 34, height: H },
    fill: { type: "solid", color: accent },
    line: { style: "solid", fill: accent, width: 0 },
  });
  side.name = "print-accent-side";

  const top = slide.shapes.add({
    geometry: "rect",
    position: { left: 0, top: 0, width: W, height: 12 },
    fill: { type: "solid", color: colors.navy },
    line: { style: "solid", fill: colors.navy, width: 0 },
  });
  top.name = "print-top-rule";
}

function footer(slideNo) {
  return row(
    { name: `footer-${slideNo}`, width: fill, height: hug, justify: "between", align: "center" },
    [
      t("Support jury - Épreuve E5 | Angoran Moyé Judes-Uriel Stéphanas", {
        name: "footer-left",
        width: wrap(1060),
        size: 16,
        color: colors.quiet,
        font: fonts.mono,
      }),
      t(`${String(slideNo).padStart(2, "0")} / ${String(TOTAL).padStart(2, "0")}`, {
        name: "footer-right",
        width: wrap(140),
        size: 16,
        color: colors.quiet,
        font: fonts.mono,
        align: "right",
      }),
    ],
  );
}

function titleStack(slideNo, title, subtitle, accent = colors.cyan) {
  return column(
    { name: `title-stack-${slideNo}`, width: fill, height: hug, gap: 16 },
    [
      t("Présentation E5 - BTS SIO SLAM", {
        name: "eyebrow",
        width: fill,
        size: 18,
        color: accent,
        bold: true,
        font: fonts.mono,
      }),
      t(title, {
        name: "slide-title",
        width: fill,
        size: 58,
        bold: true,
        color: colors.ink,
        font: fonts.display,
        lineSpacing: 0.96,
      }),
      subtitle
        ? t(subtitle, {
            name: "slide-subtitle",
            width: wrap(1360),
            size: 25,
            color: colors.muted,
            lineSpacing: 1.12,
          })
        : rule({ name: "title-rule", width: fixed(230), stroke: accent, weight: 5 }),
    ],
  );
}

function bulletList(items, accent = colors.cyan, size = 34) {
  return column(
    { name: "bullet-list", width: fill, height: hug, gap: 22 },
    items.map((item, idx) =>
      row(
        { name: `bullet-${idx}`, width: fill, height: hug, gap: 18, align: "start" },
        [
          shape({
            name: `bullet-dot-${idx}`,
            geometry: "ellipse",
            width: fixed(14),
            height: fixed(14),
            fill: { type: "solid", color: accent },
            line: { style: "solid", fill: accent, width: 0 },
          }),
          t(item, {
            name: `bullet-text-${idx}`,
            width: fill,
            size,
            color: colors.navy,
            lineSpacing: 1.08,
          }),
        ],
      ),
    ),
  );
}

function sectionLabel(value, accent = colors.cyan) {
  return row(
    { name: `section-${value}`, width: fill, height: hug, gap: 14, align: "center" },
    [
      rule({ name: "section-rule", width: fixed(58), stroke: accent, weight: 5 }),
      t(value, {
        name: "section-label",
        width: fill,
        size: 20,
        color: colors.quiet,
        bold: true,
        font: fonts.mono,
      }),
    ],
  );
}

function lightPanel(name, children, accent = colors.cyan) {
  return panel(
    {
      name,
      width: fill,
      height: fill,
      padding: { x: 34, y: 30 },
      fill: { type: "solid", color: "#FFFFFF" },
      line: { style: "solid", fill: colors.line, width: 1 },
      borderRadius: "rounded-2xl",
    },
    column({ width: fill, height: fill, gap: 18 }, [
      rule({ name: `${name}-accent`, width: fixed(92), stroke: accent, weight: 5 }),
      ...children,
    ]),
  );
}

function shell({ slideNo, title, subtitle, accent = colors.cyan, body, notes = "" }) {
  const slide = deck.slides.add();
  setLightBackground(slide, accent);
  slide.compose(
    grid(
      {
        name: `slide-root-${slideNo}`,
        width: fill,
        height: fill,
        columns: [fr(1)],
        rows: [auto, fr(1), auto],
        rowGap: 38,
        padding: { x: 110, y: 68 },
      },
      [titleStack(slideNo, title, subtitle, accent), body, footer(slideNo)],
    ),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
  if (notes) {
    slide.speakerNotes.setText(notes);
  }
  return slide;
}

function cover() {
  const slide = deck.slides.add();
  slide.background.fill = { type: "solid", color: colors.paper };

  const top = slide.shapes.add({
    geometry: "rect",
    position: { left: 0, top: 0, width: W, height: 18 },
    fill: { type: "solid", color: colors.navy },
    line: { style: "solid", fill: colors.navy, width: 0 },
  });
  top.name = "cover-top-rule";

  const side = slide.shapes.add({
    geometry: "rect",
    position: { left: 0, top: 0, width: 58, height: H },
    fill: { type: "solid", color: colors.cyan },
    line: { style: "solid", fill: colors.cyan, width: 0 },
  });
  side.name = "cover-side-accent";

  slide.compose(
    grid(
      {
        name: "cover-root",
        width: fill,
        height: fill,
        rows: [fr(1), auto],
        columns: [fr(1)],
        rowGap: 40,
        padding: { x: 132, y: 82 },
      },
      [
        column(
          { name: "cover-title-stack", width: fill, height: fill, gap: 26, justify: "center" },
          [
            t("Support de suivi pour le jury", {
              name: "cover-eyebrow",
              width: fill,
              size: 22,
              color: colors.cyan,
              bold: true,
              font: fonts.mono,
            }),
            t("Présentation E5\nBTS SIO SLAM", {
              name: "cover-title",
              width: wrap(1220),
              size: 88,
              bold: true,
              color: colors.ink,
              font: fonts.display,
              lineSpacing: 0.9,
            }),
            rule({ name: "cover-rule", width: fixed(310), stroke: colors.cyan, weight: 6 }),
            t("Angoran Moyé Judes-Uriel Stéphanas\nInstitut F2I - Session 2026", {
              name: "cover-identity",
              width: wrap(920),
              size: 30,
              color: colors.muted,
              lineSpacing: 1.22,
            }),
          ],
        ),
        footer(1),
      ],
    ),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
}

cover();

shell({
  slideNo: 2,
  title: "Fil conducteur",
  subtitle: "Une lecture simple du parcours : bases, projets, professionnalisation, orientation.",
  accent: colors.cyan,
  body: column(
    { name: "flow-body", width: fill, height: fill, gap: 30, justify: "center" },
    [
      bulletList(
        [
          "Profil personnel et manière de progresser",
          "Parcours scolaire et méthode de travail",
          "Stages, projets et compétences mobilisées",
          "Certifications, veille technologique et suite du parcours",
        ],
        colors.cyan,
        36,
      ),
      t("Objectif : mettre en évidence une progression cohérente.", {
        name: "flow-bottom-note",
        width: wrap(1280),
        size: 28,
        color: colors.quiet,
        italic: true,
      }),
    ],
  ),
});

shell({
  slideNo: 3,
  title: "Profil personnel",
  subtitle: "Un profil en construction sérieuse, centré sur la compréhension et la structure.",
  accent: colors.green,
  body: bulletList(
    [
      "Comprendre les fondations avant d’aller vers des sujets plus complexes",
      "Relier besoin, code, données et maintenabilité",
      "Construire des solutions utiles, lisibles et évolutives",
      "Présenter les projets avec transparence sur leur maturité",
    ],
    colors.green,
    35,
  ),
});

shell({
  slideNo: 4,
  title: "Parcours scolaire",
  subtitle: "De la logique scientifique aux bases du développement applicatif.",
  accent: colors.amber,
  body: grid(
    {
      name: "school-grid",
      width: fill,
      height: fill,
      columns: [fr(1), fr(1)],
      rows: [fr(1)],
      columnGap: 34,
    },
    [
      lightPanel("school-left", [
        sectionLabel("Étapes", colors.amber),
        bulletList(
          [
            "Baccalauréat scientifique",
            "Découverte autonome de Python",
            "BTS SIO option SLAM à l’Institut F2I",
          ],
          colors.amber,
          30,
        ),
      ], colors.amber),
      lightPanel("school-right", [
        sectionLabel("Méthode travaillée", colors.amber),
        bulletList(
          [
            "Identifier le besoin",
            "Choisir une solution",
            "Développer, tester et documenter",
            "Présenter un résultat exploitable",
          ],
          colors.amber,
          30,
        ),
      ], colors.amber),
    ],
  ),
});

shell({
  slideNo: 5,
  title: "Stages et expériences",
  subtitle: "L’apport principal : passer d’un cadre scolaire à un contexte plus concret.",
  accent: colors.cyan,
  body: bulletList(
    [
      "A’Numérique : développement web avec React.js et Next.js",
      "Travail sur les fonctionnalités front-end et la lisibilité du code",
      "Projet d’agrégation : scraping → stockage → seeding → affichage",
      "Compétence clé : fiabiliser les données entre les environnements",
    ],
    colors.cyan,
    34,
  ),
});

shell({
  slideNo: 6,
  title: "Projets principaux",
  subtitle: "Des projets choisis comme preuves de compétences, avec un niveau de maturité assumé.",
  accent: colors.green,
  body: grid(
    {
      name: "projects-grid",
      width: fill,
      height: fill,
      columns: [fr(1), fr(1)],
      rows: [fr(1)],
      columnGap: 34,
    },
    [
      lightPanel("training-projects", [
        sectionLabel("Formation / BTS", colors.green),
        bulletList(
          [
            "GameConnect : réseau social PHP / MySQL",
            "Hash Python : intégrité de fichiers SHA-256",
            "Portfolio : CV, projets, veille et tableau de synthèse",
          ],
          colors.green,
          29,
        ),
      ], colors.green),
      lightPanel("personal-projects", [
        sectionLabel("Orientation personnelle", colors.green),
        bulletList(
          [
            "AIAuditOps : gouvernance et audit de systèmes IA",
            "MailGuardAI : analyse d’emails et niveau de risque",
            "Projets IA / données présentés sans les survendre",
          ],
          colors.green,
          29,
        ),
      ], colors.green),
    ],
  ),
});

shell({
  slideNo: 7,
  title: "Certifications et apprentissages",
  subtitle: "Un complément au portfolio, orienté cybersécurité, développement et IA appliquée.",
  accent: colors.amber,
  body: grid(
    {
      name: "cert-grid",
      width: fill,
      height: fill,
      columns: [fr(0.9), fr(1.1)],
      rows: [fr(1)],
      columnGap: 34,
    },
    [
      lightPanel("cert-done", [
        sectionLabel("Validé", colors.amber),
        bulletList(
          [
            "SecNumacadémie - ANSSI",
            "OpenClassrooms : bases du langage Python",
          ],
          colors.amber,
          31,
        ),
      ], colors.amber),
      lightPanel("cert-next", [
        sectionLabel("Prévu / visé", colors.amber),
        bulletList(
          [
            "React.js et Next.js",
            "Fondamentaux cybersécurité",
            "Docker, cloud et déploiement",
            "Intelligence artificielle appliquée",
          ],
          colors.amber,
          31,
        ),
      ], colors.amber),
    ],
  ),
});

shell({
  slideNo: 8,
  title: "Veille technologique",
  subtitle: "Thème : l’IA orientée vers la défense des systèmes informatiques.",
  accent: colors.cyan,
  body: bulletList(
    [
      "Détection d’anomalies et priorisation des alertes",
      "Synthèse d’incidents et aide à l’investigation",
      "Automatisation utile, mais avec contrôle humain",
      "Principe retenu : l’IA assiste, l’humain décide",
    ],
    colors.cyan,
    35,
  ),
});

shell({
  slideNo: 9,
  title: "Orientation après le BTS",
  subtitle: "Construire une suite logique entre études, professionnalisation et ambition entrepreneuriale.",
  accent: colors.green,
  body: bulletList(
    [
      "Poursuite visée : Bac+3, Bachelor ou Licence professionnelle",
      "Axes : full-stack, data / IA, cybersécurité applicative",
      "Objectif moyen terme : développeur full-stack orienté produit",
      "Ambition long terme : monter une startup",
    ],
    colors.green,
    35,
  ),
});

shell({
  slideNo: 10,
  title: "Conclusion",
  subtitle: "Ce que le portfolio doit faire ressortir devant le jury.",
  accent: colors.cyan,
  body: column(
    { name: "conclusion-body", width: fill, height: fill, gap: 30, justify: "center" },
    [
      bulletList(
        [
          "Une progression construite par les projets",
          "Des compétences techniques en consolidation",
          "Une orientation claire : données, IA et sécurité",
          "Une finalité : créer des solutions utiles et solides",
        ],
        colors.cyan,
        36,
      ),
      t("Merci pour votre attention.", {
        name: "thanks",
        width: fill,
        size: 34,
        color: colors.ink,
        bold: true,
        font: fonts.display,
      }),
    ],
  ),
});

await fs.mkdir(OUT, { recursive: true });
await fs.mkdir(SCRATCH, { recursive: true });

const pptx = await PresentationFile.exportPptx(deck);
await pptx.save(path.join(OUT, "output.pptx"));

for (let i = 0; i < deck.slides.items.length; i += 1) {
  const slide = deck.slides.items[i];
  const png = await slide.export({ format: "png", scale: 1 });
  const buffer = Buffer.from(await png.arrayBuffer());
  await fs.writeFile(path.join(SCRATCH, `support-jury-slide-${String(i + 1).padStart(2, "0")}.png`), buffer);
}

const saved = await fs.readFile(path.join(OUT, "output.pptx"));
const imported = await PresentationFile.importPptx(saved);
for (let i = 0; i < imported.slides.items.length; i += 1) {
  const slide = imported.slides.items[i];
  const png = await slide.export({ format: "png", scale: 1 });
  const buffer = Buffer.from(await png.arrayBuffer());
  await fs.writeFile(path.join(SCRATCH, `support-jury-pptx-parity-${String(i + 1).padStart(2, "0")}.png`), buffer);
}

console.log(JSON.stringify({
  pptx: path.join(OUT, "output.pptx"),
  previews: SCRATCH,
  slides: deck.slides.items.length,
}, null, 2));
