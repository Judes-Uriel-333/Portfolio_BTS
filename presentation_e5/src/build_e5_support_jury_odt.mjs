import fs from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";

const OUT = path.resolve("output");
const SCRATCH = path.resolve("scratch");
const BUILD = path.join(SCRATCH, "support-jury-odt-build");
const ODT_PATH = path.join(OUT, "output.odt");

const colors = {
  cyan: "#0891B2",
  green: "#047857",
  amber: "#B45309",
  ink: "#0F172A",
  muted: "#475569",
  quiet: "#64748B",
  line: "#CBD5E1",
};

const slides = [
  {
    type: "cover",
    title: "Présentation E5",
    subtitle: "BTS SIO SLAM",
    meta: [
      "Support de suivi pour le jury",
      "Angoran Moyé Judes-Uriel Stéphanas",
      "Institut F2I - Session 2026",
    ],
  },
  {
    title: "Fil conducteur",
    subtitle: "Une lecture simple du parcours : bases, projets, professionnalisation, orientation.",
    accent: "cyan",
    bullets: [
      "Profil personnel et manière de progresser",
      "Parcours scolaire et méthode de travail",
      "Stages, projets et compétences mobilisées",
      "Certifications, veille technologique et suite du parcours",
    ],
    note: "Objectif : mettre en évidence une progression cohérente.",
  },
  {
    title: "Profil personnel",
    subtitle: "Un profil en construction sérieuse, centré sur la compréhension et la structure.",
    accent: "green",
    bullets: [
      "Comprendre les fondations avant d’aller vers des sujets plus complexes",
      "Relier besoin, code, données et maintenabilité",
      "Construire des solutions utiles, lisibles et évolutives",
      "Présenter les projets avec transparence sur leur maturité",
    ],
  },
  {
    title: "Parcours scolaire",
    subtitle: "De la logique scientifique aux bases du développement applicatif.",
    accent: "amber",
    sections: [
      {
        label: "Étapes",
        bullets: [
          "Baccalauréat scientifique",
          "Découverte autonome de Python",
          "BTS SIO option SLAM à l’Institut F2I",
        ],
      },
      {
        label: "Méthode travaillée",
        bullets: [
          "Identifier le besoin",
          "Choisir une solution",
          "Développer, tester et documenter",
          "Présenter un résultat exploitable",
        ],
      },
    ],
  },
  {
    title: "Stages et expériences",
    subtitle: "L’apport principal : passer d’un cadre scolaire à un contexte plus concret.",
    accent: "cyan",
    bullets: [
      "A’Numérique : développement web avec React.js et Next.js",
      "Travail sur les fonctionnalités front-end et la lisibilité du code",
      "Projet d’agrégation : scraping → stockage → seeding → affichage",
      "Compétence clé : fiabiliser les données entre les environnements",
    ],
  },
  {
    title: "Projets principaux",
    subtitle: "Des projets choisis comme preuves de compétences, avec un niveau de maturité assumé.",
    accent: "green",
    sections: [
      {
        label: "Formation / BTS",
        bullets: [
          "GameConnect : réseau social PHP / MySQL",
          "Hash Python : intégrité de fichiers SHA-256",
          "Portfolio : CV, projets, veille et tableau de synthèse",
        ],
      },
      {
        label: "Orientation personnelle",
        bullets: [
          "AIAuditOps : gouvernance et audit de systèmes IA",
          "MailGuardAI : analyse d’emails et niveau de risque",
          "Projets IA / données présentés sans les survendre",
        ],
      },
    ],
  },
  {
    title: "Certifications et apprentissages",
    subtitle: "Un complément au portfolio, orienté cybersécurité, développement et IA appliquée.",
    accent: "amber",
    sections: [
      {
        label: "Validé",
        bullets: [
          "SecNumacadémie - ANSSI",
          "OpenClassrooms : bases du langage Python",
        ],
      },
      {
        label: "Prévu / visé",
        bullets: [
          "React.js et Next.js",
          "Fondamentaux cybersécurité",
          "Docker, cloud et déploiement",
          "Intelligence artificielle appliquée",
        ],
      },
    ],
  },
  {
    title: "Veille technologique",
    subtitle: "Thème : l’IA orientée vers la défense des systèmes informatiques.",
    accent: "cyan",
    bullets: [
      "Détection d’anomalies et priorisation des alertes",
      "Synthèse d’incidents et aide à l’investigation",
      "Automatisation utile, mais avec contrôle humain",
      "Principe retenu : l’IA assiste, l’humain décide",
    ],
  },
  {
    title: "Orientation après le BTS",
    subtitle: "Construire une suite logique entre études, professionnalisation et ambition entrepreneuriale.",
    accent: "green",
    bullets: [
      "Poursuite visée : Bac+3, Bachelor ou Licence professionnelle",
      "Axes : full-stack, data / IA, cybersécurité applicative",
      "Objectif moyen terme : développeur full-stack orienté produit",
      "Ambition long terme : monter une startup",
    ],
  },
  {
    title: "Conclusion",
    subtitle: "Ce que le portfolio doit faire ressortir devant le jury.",
    accent: "cyan",
    bullets: [
      "Une progression construite par les projets",
      "Des compétences techniques en consolidation",
      "Une orientation claire : données, IA et sécurité",
      "Une finalité : créer des solutions utiles et solides",
    ],
    note: "Merci pour votre attention.",
  },
];

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function p(style, value) {
  return `<text:p text:style-name="${style}">${escapeXml(value)}</text:p>`;
}

function bullet(value, accent) {
  const dotStyle = `Dot${capitalize(accent)}`;
  return `<text:p text:style-name="Bullet"><text:span text:style-name="${dotStyle}">•</text:span><text:s/>${escapeXml(value)}</text:p>`;
}

function sectionTitle(value, accent) {
  return `<text:p text:style-name="BlockTitle${capitalize(accent)}">${escapeXml(value)}</text:p>`;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function slidePage(slide, index) {
  const accent = slide.accent ?? "cyan";
  const eyebrowStyle = index === 0 ? `Eyebrow${capitalize(accent)}` : `Eyebrow${capitalize(accent)}Break`;
  const parts = [
    p(eyebrowStyle, "Présentation E5 - BTS SIO SLAM"),
    p("SlideTitle", slide.title),
    p("SlideSubtitle", slide.subtitle),
  ];

  if (slide.sections) {
    for (const section of slide.sections) {
      parts.push(sectionTitle(section.label, accent));
      for (const item of section.bullets) {
        parts.push(bullet(item, accent));
      }
    }
  } else {
    for (const item of slide.bullets) {
      parts.push(bullet(item, accent));
    }
  }

  if (slide.note) {
    parts.push(p("SmallNote", slide.note));
  }

  return parts.join("\n");
}

function coverPage(slide) {
  return [
    p("CoverEyebrow", slide.meta[0]),
    p("CoverTitle", slide.title),
    p("CoverSubtitle", slide.subtitle),
    p("CoverRule", "━━━━━━"),
    p("CoverMeta", slide.meta[1]),
    p("CoverMeta", slide.meta[2]),
  ].join("\n");
}

const body = slides
  .map((slide, index) => (slide.type === "cover" ? coverPage(slide) : slidePage(slide, index)))
  .join("\n");

const contentXml = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-content
  xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
  xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0"
  xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"
  xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0"
  xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0"
  office:version="1.3">
  <office:font-face-decls>
    <style:font-face style:name="Aptos" svg:font-family="Aptos"/>
    <style:font-face style:name="Bahnschrift" svg:font-family="Bahnschrift"/>
    <style:font-face style:name="Cascadia Code" svg:font-family="Cascadia Code"/>
  </office:font-face-decls>
  <office:body>
    <office:text>
${body}
    </office:text>
  </office:body>
</office:document-content>
`;

function paragraphStyle(name, properties, textProps) {
  return `<style:style style:name="${name}" style:family="paragraph">
    <style:paragraph-properties ${properties}/>
    <style:text-properties ${textProps}/>
  </style:style>`;
}

function textStyle(name, color, extra = "") {
  return `<style:style style:name="${name}" style:family="text">
    <style:text-properties fo:color="${color}" ${extra}/>
  </style:style>`;
}

const stylesXml = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-styles
  xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
  xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0"
  xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"
  xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0"
  xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0"
  office:version="1.3">
  <office:font-face-decls>
    <style:font-face style:name="Aptos" svg:font-family="Aptos"/>
    <style:font-face style:name="Bahnschrift" svg:font-family="Bahnschrift"/>
    <style:font-face style:name="Cascadia Code" svg:font-family="Cascadia Code"/>
  </office:font-face-decls>
  <office:styles>
    ${paragraphStyle("CoverEyebrow", 'fo:margin-top="7.2cm" fo:margin-bottom="0.25cm" fo:text-align="center"', `style:font-name="Cascadia Code" fo:font-size="10pt" fo:font-weight="bold" fo:color="${colors.cyan}"`)}
    ${paragraphStyle("CoverTitle", 'fo:margin-top="0cm" fo:margin-bottom="0.08cm" fo:text-align="center"', `style:font-name="Bahnschrift" fo:font-size="30pt" fo:font-weight="bold" fo:color="${colors.ink}"`)}
    ${paragraphStyle("CoverSubtitle", 'fo:margin-top="0cm" fo:margin-bottom="0.25cm" fo:text-align="center"', `style:font-name="Bahnschrift" fo:font-size="22pt" fo:font-weight="bold" fo:color="${colors.ink}"`)}
    ${paragraphStyle("CoverRule", 'fo:margin-top="0cm" fo:margin-bottom="0.45cm" fo:text-align="center"', `style:font-name="Bahnschrift" fo:font-size="12pt" fo:font-weight="bold" fo:color="${colors.cyan}"`)}
    ${paragraphStyle("CoverMeta", 'fo:margin-top="0cm" fo:margin-bottom="0.14cm" fo:text-align="center"', `style:font-name="Aptos" fo:font-size="11pt" fo:color="${colors.muted}"`)}

    ${paragraphStyle("EyebrowCyan", 'fo:margin-top="0.2cm" fo:margin-bottom="0.18cm"', `style:font-name="Cascadia Code" fo:font-size="10pt" fo:font-weight="bold" fo:color="${colors.cyan}"`)}
    ${paragraphStyle("EyebrowGreen", 'fo:margin-top="0.2cm" fo:margin-bottom="0.18cm"', `style:font-name="Cascadia Code" fo:font-size="10pt" fo:font-weight="bold" fo:color="${colors.green}"`)}
    ${paragraphStyle("EyebrowAmber", 'fo:margin-top="0.2cm" fo:margin-bottom="0.18cm"', `style:font-name="Cascadia Code" fo:font-size="10pt" fo:font-weight="bold" fo:color="${colors.amber}"`)}
    ${paragraphStyle("EyebrowCyanBreak", 'fo:break-before="page" fo:margin-top="0.2cm" fo:margin-bottom="0.18cm"', `style:font-name="Cascadia Code" fo:font-size="10pt" fo:font-weight="bold" fo:color="${colors.cyan}"`)}
    ${paragraphStyle("EyebrowGreenBreak", 'fo:break-before="page" fo:margin-top="0.2cm" fo:margin-bottom="0.18cm"', `style:font-name="Cascadia Code" fo:font-size="10pt" fo:font-weight="bold" fo:color="${colors.green}"`)}
    ${paragraphStyle("EyebrowAmberBreak", 'fo:break-before="page" fo:margin-top="0.2cm" fo:margin-bottom="0.18cm"', `style:font-name="Cascadia Code" fo:font-size="10pt" fo:font-weight="bold" fo:color="${colors.amber}"`)}

    ${paragraphStyle("SlideTitle", 'fo:margin-top="0cm" fo:margin-bottom="0.25cm" fo:keep-with-next="always"', `style:font-name="Bahnschrift" fo:font-size="24pt" fo:font-weight="bold" fo:color="${colors.ink}"`)}
    ${paragraphStyle("SlideSubtitle", 'fo:margin-top="0cm" fo:margin-bottom="1.05cm" fo:line-height="130%"', `style:font-name="Aptos" fo:font-size="11.5pt" fo:color="${colors.muted}"`)}
    ${paragraphStyle("Bullet", 'fo:margin-left="0.35cm" fo:margin-top="0cm" fo:margin-bottom="0.42cm" fo:line-height="135%"', `style:font-name="Aptos" fo:font-size="13.4pt" fo:color="${colors.ink}"`)}
    ${paragraphStyle("SmallNote", 'fo:margin-left="0.35cm" fo:margin-top="0.45cm" fo:margin-bottom="0.2cm" fo:line-height="130%"', `style:font-name="Aptos" fo:font-size="11.5pt" fo:font-style="italic" fo:color="${colors.quiet}"`)}
    ${paragraphStyle("BlockTitleCyan", 'fo:margin-top="0.15cm" fo:margin-bottom="0.28cm"', `style:font-name="Cascadia Code" fo:font-size="10.5pt" fo:font-weight="bold" fo:color="${colors.quiet}"`)}
    ${paragraphStyle("BlockTitleGreen", 'fo:margin-top="0.15cm" fo:margin-bottom="0.28cm"', `style:font-name="Cascadia Code" fo:font-size="10.5pt" fo:font-weight="bold" fo:color="${colors.quiet}"`)}
    ${paragraphStyle("BlockTitleAmber", 'fo:margin-top="0.15cm" fo:margin-bottom="0.28cm"', `style:font-name="Cascadia Code" fo:font-size="10.5pt" fo:font-weight="bold" fo:color="${colors.quiet}"`)}
    ${paragraphStyle("Footer", 'fo:margin-top="0cm" fo:margin-bottom="0cm" fo:text-align="center"', `style:font-name="Cascadia Code" fo:font-size="7.5pt" fo:color="${colors.quiet}"`)}

    ${textStyle("DotCyan", colors.cyan, 'fo:font-weight="bold"')}
    ${textStyle("DotGreen", colors.green, 'fo:font-weight="bold"')}
    ${textStyle("DotAmber", colors.amber, 'fo:font-weight="bold"')}
  </office:styles>
  <office:automatic-styles>
    <style:page-layout style:name="A4Portrait">
      <style:page-layout-properties fo:page-width="21cm" fo:page-height="29.7cm" style:print-orientation="portrait" fo:margin-top="1.45cm" fo:margin-bottom="1.45cm" fo:margin-left="1.65cm" fo:margin-right="1.65cm"/>
    </style:page-layout>
  </office:automatic-styles>
  <office:master-styles>
    <style:master-page style:name="Standard" style:page-layout-name="A4Portrait">
      <style:footer>
        <text:p text:style-name="Footer">Support jury - Épreuve E5 | Angoran Moyé Judes-Uriel Stéphanas | Page <text:page-number text:select-page="current">1</text:page-number> / <text:page-count>10</text:page-count></text:p>
      </style:footer>
    </style:master-page>
  </office:master-styles>
</office:document-styles>
`;

const metaXml = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-meta
  xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
  xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0"
  office:version="1.3">
  <office:meta>
    <meta:generator>Codex</meta:generator>
    <meta:title>Support jury E5 - Portrait</meta:title>
  </office:meta>
</office:document-meta>
`;

const settingsXml = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-settings
  xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
  office:version="1.3">
  <office:settings/>
</office:document-settings>
`;

const manifestXml = `<?xml version="1.0" encoding="UTF-8"?>
<manifest:manifest
  xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"
  manifest:version="1.3">
  <manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.oasis.opendocument.text"/>
  <manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/>
  <manifest:file-entry manifest:full-path="styles.xml" manifest:media-type="text/xml"/>
  <manifest:file-entry manifest:full-path="meta.xml" manifest:media-type="text/xml"/>
  <manifest:file-entry manifest:full-path="settings.xml" manifest:media-type="text/xml"/>
</manifest:manifest>
`;

await fs.mkdir(OUT, { recursive: true });
await fs.rm(BUILD, { recursive: true, force: true });
await fs.mkdir(path.join(BUILD, "META-INF"), { recursive: true });

await fs.writeFile(path.join(BUILD, "mimetype"), "application/vnd.oasis.opendocument.text", "utf8");
await fs.writeFile(path.join(BUILD, "content.xml"), contentXml, "utf8");
await fs.writeFile(path.join(BUILD, "styles.xml"), stylesXml, "utf8");
await fs.writeFile(path.join(BUILD, "meta.xml"), metaXml, "utf8");
await fs.writeFile(path.join(BUILD, "settings.xml"), settingsXml, "utf8");
await fs.writeFile(path.join(BUILD, "META-INF", "manifest.xml"), manifestXml, "utf8");

await fs.rm(ODT_PATH, { force: true });

const zipScript = `
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$base = $env:ODT_BUILD_DIR
$out = $env:ODT_PATH
$zip = [System.IO.Compression.ZipFile]::Open($out, [System.IO.Compression.ZipArchiveMode]::Create)
try {
  function AddFile([string]$entryName, [string]$fileName, [System.IO.Compression.CompressionLevel]$level) {
    $entry = $zip.CreateEntry($entryName, $level)
    $stream = $entry.Open()
    try {
      $bytes = [System.IO.File]::ReadAllBytes((Join-Path $base $fileName))
      $stream.Write($bytes, 0, $bytes.Length)
    } finally {
      $stream.Dispose()
    }
  }
  AddFile 'mimetype' 'mimetype' ([System.IO.Compression.CompressionLevel]::NoCompression)
  AddFile 'content.xml' 'content.xml' ([System.IO.Compression.CompressionLevel]::Optimal)
  AddFile 'styles.xml' 'styles.xml' ([System.IO.Compression.CompressionLevel]::Optimal)
  AddFile 'meta.xml' 'meta.xml' ([System.IO.Compression.CompressionLevel]::Optimal)
  AddFile 'settings.xml' 'settings.xml' ([System.IO.Compression.CompressionLevel]::Optimal)
  AddFile 'META-INF/manifest.xml' 'META-INF\\manifest.xml' ([System.IO.Compression.CompressionLevel]::Optimal)
} finally {
  $zip.Dispose()
}
`;

execFileSync("powershell.exe", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", zipScript], {
  env: {
    ...process.env,
    ODT_BUILD_DIR: BUILD,
    ODT_PATH,
  },
  stdio: "inherit",
});

console.log(JSON.stringify({
  odt: ODT_PATH,
  build: BUILD,
  pages: slides.length,
}, null, 2));
