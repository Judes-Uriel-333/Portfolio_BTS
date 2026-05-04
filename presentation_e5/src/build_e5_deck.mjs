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
  image,
  shape,
  rule,
  fill,
  hug,
  fixed,
  wrap,
  fr,
  auto,
} = await import("@oai/artifact-tool");

const ROOT = path.resolve("..");
const OUT = path.resolve("output");
const SCRATCH = path.resolve("scratch");
const ASSETS = {
  portrait: path.join(ROOT, "src", "components", "image.jfif"),
  aiauditops: path.join(ROOT, "public", "projects", "aiauditops", "02_dashboard.png"),
  mailguardai: path.join(ROOT, "public", "projects", "mailguardai", "dashboard_all_messages.png"),
};

const W = 1920;
const H = 1080;
const TOTAL = 9;

const colors = {
  bg: "#07060A",
  bg2: "#0B1020",
  surface: "#0F172A",
  surface2: "#111827",
  line: "#263247",
  ink: "#F8FAFC",
  muted: "#B6C2D4",
  quiet: "#7B8798",
  cyan: "#22D3EE",
  blue: "#3B82F6",
  violet: "#A78BFA",
  pink: "#F472B6",
  emerald: "#34D399",
  amber: "#FBBF24",
};

const fonts = {
  display: "Bahnschrift",
  body: "Aptos",
  mono: "Cascadia Code",
};

const deck = Presentation.create({
  slideSize: { width: W, height: H },
});

function bg(slide, accent = colors.cyan) {
  slide.background.fill = { type: "solid", color: colors.bg };
  const a = slide.shapes.add({
    geometry: "rect",
    position: { left: -80, top: 0, width: 260, height: H },
    fill: { type: "solid", color: colors.bg2 },
    line: { style: "solid", fill: colors.bg2, width: 0 },
  });
  a.name = "background-left-depth";
  const b = slide.shapes.add({
    geometry: "ellipse",
    position: { left: 1320, top: -220, width: 760, height: 760 },
    fill: { type: "solid", color: "#0D2231" },
    line: { style: "solid", fill: "#0D2231", width: 0 },
  });
  b.name = "background-orbit";
  const c = slide.shapes.add({
    geometry: "rect",
    position: { left: 82, top: 64, width: 8, height: 120 },
    fill: { type: "solid", color: accent },
    line: { style: "solid", fill: accent, width: 0 },
  });
  c.name = "accent-rhythm-mark";
}

function t(value, opts = {}) {
  return text(value, {
    width: opts.width ?? fill,
    height: opts.height ?? hug,
    name: opts.name,
    style: {
      typeface: opts.font ?? fonts.body,
      fontSize: opts.size ?? 28,
      color: opts.color ?? colors.ink,
      bold: opts.bold ?? false,
      italic: opts.italic ?? false,
      alignment: opts.align ?? "left",
      lineSpacing: opts.lineSpacing,
    },
  });
}

function eyebrow(value, accent = colors.cyan) {
  return t(value.toUpperCase(), {
    name: "eyebrow",
    width: fill,
    size: 18,
    color: accent,
    bold: true,
    font: fonts.mono,
  });
}

function footer(slideNo) {
  return row(
    { name: `footer-${slideNo}`, width: fill, height: hug, justify: "between", align: "center" },
    [
      t("Épreuve E5 · BTS SIO SLAM · Angoran Moyé Judes-Uriel Stéphanas", {
        name: "footer-left",
        width: wrap(900),
        size: 16,
        color: colors.quiet,
        font: fonts.mono,
      }),
      t(`${String(slideNo).padStart(2, "0")} / ${String(TOTAL).padStart(2, "0")}`, {
        name: "footer-right",
        width: wrap(120),
        size: 16,
        color: colors.quiet,
        font: fonts.mono,
        align: "right",
      }),
    ],
  );
}

function titleStack(slideNo, title, subtitle, accent) {
  return column(
    { name: `title-stack-${slideNo}`, width: fill, height: hug, gap: 14 },
    [
      eyebrow("Portfolio de compétences", accent),
      t(title, {
        name: "slide-title",
        size: 58,
        bold: true,
        color: colors.ink,
        font: fonts.display,
        lineSpacing: 0.92,
      }),
      subtitle
        ? t(subtitle, {
            name: "slide-subtitle",
            width: wrap(1340),
            size: 25,
            color: colors.muted,
            lineSpacing: 1.1,
          })
        : rule({ name: "title-rule", width: fixed(240), stroke: accent, weight: 5 }),
    ],
  );
}

function shell({ slideNo, title, subtitle, accent = colors.cyan, body, notes }) {
  const slide = deck.slides.add();
  bg(slide, accent);
  slide.compose(
    grid(
      {
        name: `slide-root-${slideNo}`,
        width: fill,
        height: fill,
        rows: [auto, fr(1), auto],
        columns: [fr(1)],
        rowGap: 34,
        padding: { x: 110, y: 64 },
      },
      [titleStack(slideNo, title, subtitle, accent), body, footer(slideNo)],
    ),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
  slide.speakerNotes.setText(notes);
  return slide;
}

function chip(label, accent = colors.cyan) {
  const chipWidth = Math.max(118, label.length * 14 + 42);
  return panel(
    {
      name: `chip-${label}`,
      width: fixed(chipWidth),
      height: hug,
      padding: { x: 18, y: 9 },
      fill: { type: "solid", color: "#0B1220" },
      line: { style: "solid", fill: accent, width: 1 },
      borderRadius: "rounded-full",
    },
    t(label, { width: fill, size: 18, color: colors.ink, font: fonts.mono, align: "center" }),
  );
}

function bulletList(items, accent = colors.cyan, size = 26) {
  return column(
    { name: "bullet-list", width: fill, height: hug, gap: 18 },
    items.map((item, idx) =>
      row(
        { name: `bullet-${idx}`, width: fill, height: hug, gap: 16, align: "start" },
        [
          shape({
            name: `bullet-dot-${idx}`,
            geometry: "ellipse",
            width: fixed(13),
            height: fixed(13),
            fill: { type: "solid", color: accent },
            line: { style: "solid", fill: accent, width: 0 },
          }),
          t(item, { width: fill, size, color: colors.muted, lineSpacing: 1.1 }),
        ],
      ),
    ),
  );
}

function miniCard(title, body, accent = colors.cyan) {
  return panel(
    {
      name: `mini-card-${title}`,
      width: fill,
      height: hug,
      padding: { x: 24, y: 22 },
      fill: { type: "solid", color: colors.surface },
      line: { style: "solid", fill: colors.line, width: 1 },
      borderRadius: "rounded-2xl",
    },
    column(
      { width: fill, height: hug, gap: 10 },
      [
        rule({ width: fixed(72), stroke: accent, weight: 5 }),
        t(title, { width: fill, size: 26, bold: true, color: colors.ink, font: fonts.display }),
        t(body, { width: fill, size: 20, color: colors.muted, lineSpacing: 1.12 }),
      ],
    ),
  );
}

function projectRow(title, period, detail, accent = colors.cyan) {
  return row(
    { width: fill, height: hug, gap: 22, align: "start" },
    [
      panel(
        {
          width: fixed(150),
          height: hug,
          padding: { x: 16, y: 12 },
          fill: { type: "solid", color: "#0B1220" },
          line: { style: "solid", fill: accent, width: 1 },
          borderRadius: "rounded-full",
          align: "center",
          justify: "center",
        },
        t(period, { width: fill, size: 17, color: colors.ink, font: fonts.mono, align: "center" }),
      ),
      column(
        { width: fill, height: hug, gap: 5 },
        [
          t(title, { width: fill, size: 25, bold: true, color: colors.ink, font: fonts.display }),
          t(detail, { width: fill, size: 20, color: colors.muted, lineSpacing: 1.1 }),
        ],
      ),
    ],
  );
}

function notes(time, lines) {
  return [`Durée cible : ${time}`, "", ...lines].join("\n");
}

function mimeFromPath(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg" || ext === ".jfif") return "image/jpeg";
  if (ext === ".webp") return "image/webp";
  return "application/octet-stream";
}

async function hydrateLocalImages(presentation) {
  const requests = presentation.getPendingImageHydrationRequests();
  const payloads = [];

  for (const request of requests) {
    const filePath = request.uri.startsWith("file:")
      ? new URL(request.uri)
      : request.uri;
    const data = await fs.readFile(filePath);
    payloads.push({
      assetId: request.assetId,
      data: new Uint8Array(data),
      contentType: request.contentType || mimeFromPath(String(request.uri)),
    });
  }

  if (payloads.length > 0) {
    presentation.hydrateImageAssets(payloads);
  }
}

// 1. Cover
{
  const slide = deck.slides.add();
  bg(slide, colors.cyan);
  slide.compose(
    grid(
      {
        name: "cover-root",
        width: fill,
        height: fill,
        columns: [fr(1.08), fr(0.92)],
        rows: [fr(1), auto],
        columnGap: 70,
        rowGap: 30,
        padding: { x: 110, y: 72 },
      },
      [
        column(
          { name: "cover-type", width: fill, height: fill, gap: 28, justify: "center" },
          [
            eyebrow("BTS SIO SLAM · Épreuve E5", colors.cyan),
            t("Présenter un parcours construit par les projets", {
              name: "cover-title",
              width: fill,
              size: 78,
              bold: true,
              color: colors.ink,
              font: fonts.display,
              lineSpacing: 0.9,
            }),
            rule({ name: "cover-rule", width: fixed(320), stroke: colors.cyan, weight: 6 }),
            t("Angoran Moyé Judes-Uriel Stéphanas\nInstitut F2I · Session 2026", {
              name: "cover-subtitle",
              width: wrap(900),
              size: 30,
              color: colors.muted,
              lineSpacing: 1.18,
            }),
            row(
              { width: fill, height: hug, gap: 12 },
              [chip("portfolio"), chip("compétences"), chip("SLAM")],
            ),
          ],
        ),
        panel(
          {
            name: "portrait-frame",
            width: fill,
            height: fixed(760),
            padding: 0,
            fill: { type: "solid", color: colors.surface },
            line: { style: "solid", fill: "#1F3B55", width: 2 },
            borderRadius: "rounded-2xl",
          },
          image({
            name: "portrait",
            path: ASSETS.portrait,
            width: fill,
            height: fill,
            fit: "cover",
            geometry: "roundRect",
            alt: "Portrait de Judes-Uriel",
          }),
        ),
        footer(1),
      ],
    ),
    { frame: { left: 0, top: 0, width: W, height: H }, baseUnit: 8 },
  );
  slide.speakerNotes.setText(
    notes("35 à 45 secondes", [
      "Bonjour, je m’appelle Angoran Moyé Judes-Uriel Stéphanas.",
      "Je suis étudiant en BTS SIO option SLAM à l’Institut F2I.",
      "Pour cette épreuve E5, je vais présenter mon parcours à travers mon portfolio de compétences, mes réalisations et ce qu’elles montrent de ma progression.",
      "L’idée n’est pas de lister tous mes projets, mais d’expliquer comment ils construisent progressivement mon profil de développeur applicatif.",
    ]),
  );
}

// 2. Profile
shell({
  slideNo: 2,
  accent: colors.violet,
  title: "Un profil en construction sérieuse",
  subtitle: "Mon fil conducteur : comprendre les besoins, structurer la logique et faire circuler correctement les données.",
  body: grid(
    { name: "profile-body", width: fill, height: fill, columns: [fr(1), fr(1)], columnGap: 46 },
    [
      column(
        { width: fill, height: fill, gap: 20, justify: "center" },
        [
          t("Je me forme au développement applicatif avec une priorité : comprendre avant d’empiler les technologies.", {
            name: "profile-claim",
            width: fill,
            size: 44,
            bold: true,
            color: colors.ink,
            font: fonts.display,
            lineSpacing: 1,
          }),
          bulletList(
            [
              "BTS SIO option SLAM, promotion 2024-2026.",
              "Intérêt fort pour React, Next.js, Python, PHP, SQL et les architectures web.",
              "Positionnement assumé : profil en progression, lucide sur ses limites, orienté fondations.",
            ],
            colors.violet,
            24,
          ),
        ],
      ),
      panel(
        {
          width: fill,
          height: fill,
          padding: { x: 34, y: 32 },
          fill: { type: "solid", color: colors.surface },
          line: { style: "solid", fill: colors.line, width: 1 },
          borderRadius: "rounded-2xl",
        },
        column(
          { width: fill, height: fill, gap: 22, justify: "center" },
          [
            projectRow("Baccalauréat scientifique", "Avant BTS", "Découverte progressive de la logique algorithmique et de Python.", colors.violet),
            projectRow("BTS SIO SLAM", "2024-2026", "Développement web, bases de données, conception applicative et professionnalisation.", colors.violet),
            projectRow("A’Numérique", "2025-2026", "Premiers projets professionnels autour de React, Next.js et des flux de données.", colors.violet),
            projectRow("Objectif", "Suite", "Progresser dans un environnement structuré, avec des projets concrets et mesurables.", colors.violet),
          ],
        ),
      ),
    ],
  ),
  notes: notes("50 à 60 secondes", [
    "Je commence par mon positionnement, parce qu’il explique la logique de mon portfolio.",
    "Je ne me présente pas comme un développeur expert, mais comme un profil en construction sérieuse.",
    "Ma priorité est de comprendre les bases : le besoin, les données, la séparation front-end/back-end, puis la manière de maintenir une application.",
    "Mon parcours part d’un intérêt autonome pour la programmation, puis se structure avec le BTS SIO SLAM et mes expériences professionnelles.",
  ]),
});

// 3. E5 frame
shell({
  slideNo: 3,
  accent: colors.cyan,
  title: "Ce que l’épreuve E5 doit montrer",
  subtitle: "Le tableau de synthèse n’est pas seulement une liste : c’est une preuve organisée des compétences travaillées.",
  body: grid(
    { name: "e5-grid", width: fill, height: hug, columns: [fr(1), fr(1), fr(1)], rows: [fixed(220), fixed(220)], columnGap: 24, rowGap: 24 },
    [
      miniCard("Gérer le patrimoine informatique", "Hash Python, Rclone, SecNumacadémie, analyse de sécurité.", colors.cyan),
      miniCard("Répondre aux demandes", "Projets CRUD, gestion d’incidents, correction et évolution applicative.", colors.emerald),
      miniCard("Présence en ligne", "Portfolio, CV HTML, projets web et valorisation professionnelle.", colors.violet),
      miniCard("Travailler en mode projet", "Planification, Git/GitHub, organisation, documentation et priorisation.", colors.blue),
      miniCard("Mettre à disposition un service", "Tests, déploiement, parcours utilisateur, accessibilité des livrables.", colors.amber),
      miniCard("Développement professionnel", "Veille IA/cyberdéfense, certifications, identité numérique.", colors.pink),
    ],
  ),
  notes: notes("55 à 65 secondes", [
    "L’épreuve E5 s’appuie sur mon tableau de synthèse et sur mon portfolio.",
    "J’ai organisé mes réalisations autour des grands blocs de compétences : patrimoine informatique, demandes d’assistance, présence en ligne, mode projet, mise à disposition de services et développement professionnel.",
    "Pour chaque compétence, j’ai cherché à avoir des preuves concrètes : un projet, un livrable, une démarche ou une expérience.",
    "Mon objectif pendant l’oral est donc de montrer une progression, pas seulement une accumulation de pages.",
  ]),
});

// 4. Skill map
shell({
  slideNo: 4,
  accent: colors.emerald,
  title: "Ma cartographie technique actuelle",
  subtitle: "Des bases web et applicatives, renforcées par la pratique, la veille et les projets.",
  body: grid(
    { name: "skill-map", width: fill, height: fill, columns: [fr(1.2), fr(0.8)], columnGap: 50 },
    [
      column(
        { width: fill, height: fill, gap: 24, justify: "center" },
        [
          miniCard("Front-end", "HTML/CSS, JavaScript, React, Next.js, Tailwind CSS. Objectif : interfaces claires et composants réutilisables.", colors.cyan),
          miniCard("Back-end et données", "PHP, Python, SQL, Prisma, SQLite, PostgreSQL. Objectif : relier interface, données et logique métier.", colors.emerald),
          miniCard("Outils et méthode", "VS Code, Visual Studio, Git/GitHub, Docker, terminal, documentation et workflow projet.", colors.violet),
        ],
      ),
      column(
        { width: fill, height: fill, gap: 22, justify: "center" },
        [
          t("Progression", { size: 24, color: colors.emerald, bold: true, font: fonts.mono }),
          t("Bases solides", { size: 42, bold: true, color: colors.ink, font: fonts.display }),
          row({ width: fill, height: hug, gap: 12 }, [chip("Python", colors.emerald), chip("HTML/CSS", colors.emerald), chip("SQL", colors.emerald)]),
          t("En consolidation", { size: 42, bold: true, color: colors.ink, font: fonts.display }),
          row({ width: fill, height: hug, gap: 12 }, [chip("React", colors.cyan), chip("Next.js", colors.cyan), chip("C#", colors.cyan)]),
          t("Axes d’évolution", { size: 42, bold: true, color: colors.ink, font: fonts.display }),
          row({ width: fill, height: hug, gap: 12 }, [chip("API", colors.violet), chip("IA appliquée", colors.violet), chip("Sécurité", colors.violet)]),
        ],
      ),
    ],
  ),
  notes: notes("50 à 60 secondes", [
    "Sur le plan technique, mon socle principal est le développement web et applicatif.",
    "J’ai des bases plus solides en Python, HTML/CSS, SQL et PHP, puis une consolidation en React, Next.js et C#.",
    "Ce que je cherche à développer, c’est la cohérence entre l’interface, les données et la logique serveur.",
    "J’utilise aussi des outils professionnels comme Git, GitHub, Visual Studio, VS Code et Docker pour me rapprocher d’un vrai contexte de production.",
  ]),
});

// 5. Academic work
shell({
  slideNo: 5,
  accent: colors.blue,
  title: "Réalisations en formation : des preuves concrètes",
  subtitle: "Chaque projet me sert à travailler une compétence précise du référentiel.",
  body: grid(
    { name: "academic-body", width: fill, height: fill, columns: [fr(1), fr(1)], columnGap: 42 },
    [
      column(
        { width: fill, height: fill, gap: 24, justify: "center" },
        [
          projectRow("GameConnect", "2025-2026", "Réseau social en PHP/MySQL : authentification, publications, likes, commentaires, profil.", colors.blue),
          projectRow("Hash Python", "2024-2025", "Vérification d’intégrité de fichiers avec SHA-256, historique et comparaison.", colors.blue),
          projectRow("Portfolio", "2025-2026", "Présence en ligne, CV, projets, certifications, veille et tableau de synthèse.", colors.blue),
          projectRow("Broken Access Control", "2025-2026", "Analyse d’une faille d’accès non autorisé et sensibilisation sécurité web.", colors.blue),
        ],
      ),
      panel(
        {
          width: fill,
          height: fill,
          padding: { x: 36, y: 34 },
          fill: { type: "solid", color: colors.surface },
          line: { style: "solid", fill: colors.line, width: 1 },
          borderRadius: "rounded-2xl",
        },
        column(
          { width: fill, height: fill, gap: 22, justify: "center" },
          [
            t("Ce que ces projets démontrent", { size: 40, bold: true, color: colors.ink, font: fonts.display }),
            bulletList(
              [
                "Analyser un besoin avant de choisir une solution technique.",
                "Développer, tester et faire évoluer une application.",
                "Relier les compétences du référentiel à des réalisations vérifiables.",
                "Documenter la progression dans un portfolio finalisable.",
              ],
              colors.blue,
              24,
            ),
          ],
        ),
      ),
    ],
  ),
  notes: notes("70 à 80 secondes", [
    "Dans mes réalisations en formation, je peux citer plusieurs exemples.",
    "GameConnect m’a permis de travailler un réseau social en PHP et MySQL avec inscription, authentification, publications et interactions.",
    "Le programme de hash Python m’a fait travailler la notion d’intégrité et la manipulation de fichiers.",
    "Le portfolio est lui-même une réalisation, car il centralise mes compétences, mon CV, mes projets, mes certifications et ma veille.",
    "Enfin, les travaux autour de la sécurité, comme Broken Access Control, m’aident à relier le développement à la cybersécurité.",
  ]),
});

// 6. Professional experience
shell({
  slideNo: 6,
  accent: colors.amber,
  title: "Expériences professionnelles : passer du projet scolaire au contexte réel",
  subtitle: "Chez A’Numérique, j’ai travaillé sur des besoins web concrets et sur un flux de données complet.",
  body: grid(
    { name: "pro-body", width: fill, height: fill, columns: [fr(0.95), fr(1.05)], columnGap: 46 },
    [
      column(
        { width: fill, height: fill, gap: 26, justify: "center" },
        [
          miniCard("Stage développeur web", "Mai à juillet 2025 : participation au développement d’une plateforme web avec React.js et Next.js.", colors.amber),
          miniCard("Plateforme d’agrégation", "Décembre 2025 à janvier 2026 : flux scraping, stockage, seeding et affichage pour une page Salons d’emploi.", colors.amber),
        ],
      ),
      column(
        { width: fill, height: fill, gap: 26, justify: "center" },
        [
          t("Flux travaillé", { size: 28, color: colors.amber, bold: true, font: fonts.mono }),
          row(
            { width: fill, height: hug, gap: 14, align: "center" },
            [
              chip("scraping", colors.amber),
              t("→", { width: hug, size: 34, color: colors.quiet, bold: true }),
              chip("stockage", colors.amber),
              t("→", { width: hug, size: 34, color: colors.quiet, bold: true }),
              chip("seeding", colors.amber),
              t("→", { width: hug, size: 34, color: colors.quiet, bold: true }),
              chip("affichage", colors.amber),
            ],
          ),
          bulletList(
            [
              "Comprendre un besoin en environnement professionnel.",
              "Travailler la cohérence des données entre environnements.",
              "Utiliser Prisma, Docker, SQL et des frameworks modernes.",
              "Améliorer la qualité, la lisibilité et l’organisation du code.",
            ],
            colors.amber,
            25,
          ),
        ],
      ),
    ],
  ),
  notes: notes("70 à 80 secondes", [
    "Mon expérience chez A’Numérique a été importante, car elle m’a fait sortir d’un contexte purement scolaire.",
    "Pendant le stage, j’ai participé au développement d’une plateforme web en React.js et Next.js.",
    "Ensuite, sur la plateforme d’agrégation, j’ai travaillé sur un flux de données complet : récupération, stockage, seeding et affichage.",
    "Cette expérience m’a surtout appris que la difficulté n’est pas seulement d’écrire du code, mais de rendre le flux fiable, compréhensible et cohérent entre les environnements.",
  ]),
});

// 7. Personal direction
shell({
  slideNo: 7,
  accent: colors.pink,
  title: "Projets personnels : orienter ma progression vers les données et l’IA",
  subtitle: "Deux projets récents prolongent mon intérêt pour les systèmes applicatifs, l’automatisation et la sécurité.",
  body: grid(
    { name: "personal-body", width: fill, height: fill, columns: [fr(1), fr(1)], columnGap: 34 },
    [
      panel(
        {
          width: fill,
          height: fill,
          padding: { x: 24, y: 24 },
          fill: { type: "solid", color: colors.surface },
          line: { style: "solid", fill: colors.line, width: 1 },
          borderRadius: "rounded-2xl",
        },
        column(
          { width: fill, height: fill, gap: 16 },
          [
            image({
              path: ASSETS.aiauditops,
              width: fill,
              height: fixed(300),
              fit: "cover",
              geometry: "roundRect",
              alt: "Dashboard AIAuditOps",
            }),
            t("AIAuditOps", { size: 30, bold: true, color: colors.ink, font: fonts.display }),
            t("Application de gouvernance IA : inventaire de systèmes IA, risques, contrôles et preuves d’audit. Core fonctionnel, modules avancés encore en cours.", {
              size: 21,
              color: colors.muted,
              lineSpacing: 1.1,
            }),
          ],
        ),
      ),
      panel(
        {
          width: fill,
          height: fill,
          padding: { x: 24, y: 24 },
          fill: { type: "solid", color: colors.surface },
          line: { style: "solid", fill: colors.line, width: 1 },
          borderRadius: "rounded-2xl",
        },
        column(
          { width: fill, height: fill, gap: 16 },
          [
            image({
              path: ASSETS.mailguardai,
              width: fill,
              height: fixed(300),
              fit: "cover",
              geometry: "roundRect",
              alt: "Dashboard MailGuardAI",
            }),
            t("MailGuardAI", { size: 30, bold: true, color: colors.ink, font: fonts.display }),
            t("MVP local connecté à Gmail : classification IA des emails, filtres, statistiques et prudence sur les décisions automatiques.", {
              size: 21,
              color: colors.muted,
              lineSpacing: 1.1,
            }),
          ],
        ),
      ),
    ],
  ),
  notes: notes("50 à 60 secondes", [
    "En parallèle des projets liés directement au BTS, j’ai aussi deux projets personnels récents.",
    "AIAuditOps est une application autour de la gouvernance et de l’audit des systèmes IA. Je reste prudent : le cœur est fonctionnel, mais certains modules avancés sont encore en construction.",
    "MailGuardAI est un MVP local qui analyse des emails via Gmail et les classe selon leur intention ou leur niveau de risque.",
    "Ces projets montrent surtout une direction : je m’intéresse aux données, à l’IA appliquée, à l’automatisation, mais avec une attention particulière aux limites et à la fiabilité.",
  ]),
});

// 8. Watch and professional development
shell({
  slideNo: 8,
  accent: colors.cyan,
  title: "Veille et développement professionnel",
  subtitle: "Ma veille actuelle porte sur l’IA orientée vers la défense des systèmes informatiques.",
  body: grid(
    { name: "watch-body", width: fill, height: fill, columns: [fr(1.1), fr(0.9)], columnGap: 46 },
    [
      column(
        { width: fill, height: fill, gap: 28, justify: "center" },
        [
          t("Une IA utile en cyberdéfense n’est pas celle qui décide seule.", {
            width: fill,
            size: 54,
            bold: true,
            color: colors.ink,
            font: fonts.display,
            lineSpacing: 0.96,
          }),
          t("Elle doit accélérer l’analyse, laisser des traces vérifiables et rester sous contrôle humain.", {
            width: wrap(900),
            size: 30,
            color: colors.muted,
            lineSpacing: 1.12,
          }),
          row({ width: fill, height: hug, gap: 12 }, [chip("SOC", colors.cyan), chip("SIEM", colors.cyan), chip("prompt injection", colors.cyan), chip("data poisoning", colors.cyan)]),
        ],
      ),
      column(
        { width: fill, height: fill, gap: 22, justify: "center" },
        [
          miniCard("Sources suivies", "NIST, ENISA, CISA/NSA, OWASP Top 10 LLM.", colors.cyan),
          miniCard("Certifications", "SecNumacadémie ANSSI validée, cours OpenClassrooms Python validé.", colors.emerald),
          miniCard("Méthode", "Suivre, synthétiser, relier à mes projets et conserver une posture critique.", colors.violet),
        ],
      ),
    ],
  ),
  notes: notes("45 à 55 secondes", [
    "La partie développement professionnel se voit surtout dans ma veille et mes certifications.",
    "Mon thème de veille est l’IA orientée vers la défense des systèmes informatiques.",
    "Ce qui m’intéresse, c’est l’utilisation de l’IA pour aider la détection, la priorisation et l’investigation, sans oublier les risques propres à l’IA.",
    "J’ai aussi validé SecNumacadémie et un cours Python OpenClassrooms, ce qui complète mes bases en cybersécurité et en programmation.",
  ]),
});

// 9. Conclusion
shell({
  slideNo: 9,
  accent: colors.emerald,
  title: "Bilan : ce que mon portfolio démontre",
  subtitle: "Une progression structurée, appuyée sur des réalisations vérifiables et une orientation professionnelle claire.",
  body: grid(
    { name: "closing-body", width: fill, height: fill, columns: [fr(1), fr(1)], columnGap: 56 },
    [
      column(
        { width: fill, height: fill, gap: 24, justify: "center" },
        [
          t("3 idées à retenir", { size: 28, color: colors.emerald, bold: true, font: fonts.mono }),
          bulletList(
            [
              "Je construis mes compétences par projets, pas seulement par théorie.",
              "Je cherche la lisibilité : besoin, données, logique, maintenance.",
              "Mon évolution vise des systèmes plus fiables, orientés données, sécurité et IA appliquée.",
            ],
            colors.emerald,
            28,
          ),
        ],
      ),
      panel(
        {
          width: fill,
          height: fill,
          padding: { x: 38, y: 36 },
          fill: { type: "solid", color: colors.surface },
          line: { style: "solid", fill: colors.line, width: 1 },
          borderRadius: "rounded-2xl",
        },
        column(
          { width: fill, height: fill, gap: 24, justify: "center" },
          [
            t("Suite logique", { size: 44, bold: true, color: colors.ink, font: fonts.display }),
            t("Intégrer un environnement structuré pour continuer à progresser sur des applications concrètes, maintenables et utiles.", {
              width: fill,
              size: 30,
              color: colors.muted,
              lineSpacing: 1.12,
            }),
            rule({ width: fixed(240), stroke: colors.emerald, weight: 5 }),
            t("Portfolio : judes-uriel.vercel.app", { width: fill, size: 24, color: colors.emerald, font: fonts.mono }),
          ],
        ),
      ),
    ],
  ),
  notes: notes("40 à 50 secondes", [
    "Pour conclure, mon portfolio montre une progression construite par des projets concrets.",
    "Le point commun de mes réalisations est la recherche de structure : comprendre le besoin, organiser le code, faire circuler les données et rendre le résultat exploitable.",
    "Je veux continuer à progresser dans un environnement professionnel structuré, sur des applications réelles, avec une attention particulière aux données, à la sécurité et à l’IA appliquée.",
    "Merci pour votre attention.",
  ]),
});

await fs.mkdir(OUT, { recursive: true });
await fs.mkdir(SCRATCH, { recursive: true });

await hydrateLocalImages(deck);

const pptx = await PresentationFile.exportPptx(deck);
await pptx.save(path.join(OUT, "output.pptx"));

const notesMd = deck.slides.items
  ? deck.slides.items.map((slide, idx) => `## Slide ${idx + 1}\n\n${slide.speakerNotes.text}`).join("\n\n")
  : "";
await fs.writeFile(path.join(SCRATCH, "notes-orales-e5.md"), notesMd, "utf8");

for (let i = 0; i < deck.slides.items.length; i += 1) {
  const slide = deck.slides.items[i];
  const png = await slide.export({ format: "png", scale: 1 });
  const buffer = Buffer.from(await png.arrayBuffer());
  await fs.writeFile(path.join(SCRATCH, `slide-${String(i + 1).padStart(2, "0")}.png`), buffer);
}

const saved = await fs.readFile(path.join(OUT, "output.pptx"));
const imported = await PresentationFile.importPptx(saved);
await hydrateLocalImages(imported);
for (let i = 0; i < imported.slides.items.length; i += 1) {
  const slide = imported.slides.items[i];
  const png = await slide.export({ format: "png", scale: 1 });
  const buffer = Buffer.from(await png.arrayBuffer());
  await fs.writeFile(path.join(SCRATCH, `pptx-parity-${String(i + 1).padStart(2, "0")}.png`), buffer);
}

console.log(JSON.stringify({
  pptx: path.join(OUT, "output.pptx"),
  previews: SCRATCH,
  slides: deck.slides.items.length,
}, null, 2));
