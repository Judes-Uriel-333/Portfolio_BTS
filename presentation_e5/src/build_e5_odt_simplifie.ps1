$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$outputDir = Join-Path $root "output"
$scratchDir = Join-Path $root "scratch"
$odtPath = Join-Path $outputDir "presentation_e5_texte_simplifie.odt"
$txtPath = Join-Path $scratchDir "presentation_e5_texte_simplifie_source.txt"

New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
New-Item -ItemType Directory -Force -Path $scratchDir | Out-Null

$speech = @'
Bonjour, je m'appelle Angoran Moyé Judes-Uriel Stéphanas. Je suis étudiant en BTS SIO option SLAM à l'Institut F2I, pour la session 2026. Aujourd'hui, je vais vous présenter mon parcours à travers mon portfolio de compétences, mon tableau de synthèse et les réalisations que j'ai menées pendant ma formation et en milieu professionnel.

L'idée de cette présentation n'est pas simplement de réciter une liste de projets. Ce que je veux montrer, c'est plutôt la manière dont ces projets m'ont aidé à construire progressivement mes compétences. Mon portfolio a été pensé comme un fil conducteur : il rassemble mon profil, mon CV, mes projets, mes certifications, ma veille technologique et mon tableau de synthèse. Il me permet donc de présenter mon évolution de façon claire et organisée.

Pour commencer, je me définis comme un profil encore en construction, mais avec une progression sérieuse. Je ne cherche pas à me présenter comme un développeur expert. Je préfère être honnête sur mon niveau et montrer ce que je suis en train de consolider. Ce qui m'intéresse vraiment dans le développement, ce n'est pas seulement le résultat visible à l'écran, mais aussi la logique derrière : comprendre le besoin, organiser le code, faire circuler les données correctement et rendre une application maintenable.

Mon intérêt pour l'informatique a commencé avec la programmation, notamment avec Python. Cela m'a permis de découvrir la logique algorithmique et la manière de résoudre un problème étape par étape. Ensuite, avec le BTS SIO option SLAM, j'ai pu structurer cet apprentissage autour du développement web, des bases de données, de la conception applicative et du travail en mode projet.

Dans le cadre de l'épreuve E5, mon tableau de synthèse joue un rôle important. Pour moi, ce tableau n'est pas seulement un document administratif. C'est une manière de relier mes réalisations aux compétences attendues dans le BTS SIO. Les projets que j'ai sélectionnés montrent différentes compétences : gérer le patrimoine informatique, répondre à des demandes, développer la présence en ligne d'une organisation, travailler en mode projet, mettre à disposition un service et organiser mon développement professionnel.

Sur le plan technique, mon socle principal se situe autour du développement web et applicatif. Côté front-end, j'ai travaillé HTML, CSS, JavaScript, React, Next.js et Tailwind CSS. Ces technologies m'ont permis de créer des interfaces, de structurer des composants et de mieux comprendre l'organisation d'une application web moderne. Côté back-end et données, j'ai travaillé PHP, Python, SQL, Prisma, SQLite et PostgreSQL. Ce qui m'intéresse particulièrement, c'est le lien entre l'interface, la logique métier et les données.

J'utilise aussi des outils comme VS Code, Visual Studio, Git, GitHub, Docker et le terminal. Je considère que mes bases sont plus solides en Python, HTML/CSS et SQL. Je suis encore en consolidation sur React, Next.js, C# et les architectures plus complètes. C'est une progression que j'assume, parce que je préfère comprendre correctement les bases plutôt que de donner l'impression de maîtriser trop vite des technologies complexes.

Parmi mes réalisations en formation, le projet GameConnect est un bon exemple. Il s'agit d'un réseau social de gamers développé en PHP et MySQL. Le projet comprend l'inscription, l'authentification, les publications, les likes, les commentaires et l'édition de profil. Il m'a permis de travailler la logique back-end, la gestion de base de données, les sessions utilisateur et certains réflexes liés à la sécurité web.

J'ai aussi réalisé un programme de hash en Python. Ce projet permet de vérifier l'intégrité de fichiers avec SHA-256. Il m'a aidé à comprendre l'intérêt des empreintes numériques et l'importance de pouvoir détecter une modification non autorisée sur un fichier. Même si le projet est plus simple visuellement, il est intéressant parce qu'il relie la programmation à une problématique de sécurité.

Le portfolio lui-même est également une réalisation importante. Il ne sert pas seulement à me présenter : il centralise mes compétences, mon CV, mes projets, mes certifications, ma veille et mon tableau de synthèse. Il montre donc aussi ma capacité à organiser mon identité professionnelle en ligne et à rendre mes livrables accessibles. J'ai également travaillé sur des sujets de cybersécurité, comme Broken Access Control, ce qui m'a permis de mieux comprendre les risques liés aux accès non autorisés dans une application web.

Ces projets en formation ont ensuite été complétés par mes expériences chez A'Numérique. Cette expérience professionnelle a été importante, parce qu'elle m'a permis de passer d'un cadre scolaire à un contexte plus réel. Pendant mon stage, de mai à juillet 2025, j'ai participé au développement d'une plateforme web avec React.js et Next.js. J'ai travaillé sur des fonctionnalités front-end, mais aussi sur l'organisation du code et la lisibilité des composants.

Cette première expérience m'a montré que le développement ne consiste pas seulement à écrire du code. Il faut aussi comprendre un besoin, travailler avec méthode, accepter les retours et améliorer progressivement ce qui est produit. Ensuite, de décembre 2025 à janvier 2026, j'ai travaillé sur un projet de plateforme d'agrégation pour une page Salons d'emploi. Le besoin était de récupérer, structurer, stocker et afficher des données dans un même flux.

Ce projet m'a particulièrement marqué parce qu'il m'a fait travailler une chaîne complète : scraping, stockage, seeding, puis affichage. J'ai utilisé des outils comme Prisma, Docker, SQL et des frameworks web modernes. La difficulté principale était de garder des données cohérentes entre les environnements et de fiabiliser le pipeline. Cela a renforcé mon intérêt pour les flux de données et pour les projets où l'interface dépend d'une logique data bien structurée.

En parallèle des projets liés directement au BTS, j'ai aussi développé deux projets personnels récents : AIAuditOps et MailGuardAI. AIAuditOps est une application web autour de la gouvernance et de l'audit des systèmes d'intelligence artificielle. L'objectif est d'inventorier des systèmes IA, de suivre des analyses de risque, de gérer des contrôles et de collecter des preuves d'audit. Je reste prudent dans ma manière de le présenter : le cœur du projet est fonctionnel, mais certains modules avancés sont encore en cours ou préparés pour plus tard.

MailGuardAI est un MVP local connecté à Gmail. Il analyse des emails, les classe selon leur intention ou leur niveau de risque, puis affiche les résultats dans un tableau de bord. Ce projet m'a permis de travailler les intégrations API, OAuth Google, Flask, SQLite, React et l'utilisation d'un modèle d'IA dans un workflow applicatif. Ces deux projets montrent surtout une orientation qui m'intéresse de plus en plus : les données, l'automatisation, l'IA appliquée et la fiabilité des décisions.

Cette orientation se retrouve aussi dans ma veille technologique. Mon thème de veille porte sur l'IA orientée vers la défense des systèmes informatiques. Ce sujet m'intéresse parce qu'il relie la cybersécurité, l'analyse de données, l'automatisation et l'aide à la décision. Dans cette veille, je m'intéresse à la manière dont l'IA peut aider les équipes de sécurité à détecter des anomalies, prioriser des alertes, synthétiser des incidents ou assister l'investigation.

Mais je retiens aussi une limite importante : une IA utile en cyberdéfense n'est pas une IA qui décide seule. Elle doit plutôt aider l'humain, accélérer l'analyse, laisser des traces vérifiables et rester sous contrôle. Pour construire cette veille, je me suis appuyé sur des sources comme le NIST, l'ENISA, la CISA/NSA et l'OWASP Top 10 pour les applications LLM. En parallèle, j'ai aussi validé SecNumacadémie de l'ANSSI et un cours OpenClassrooms sur les bases du langage Python.

Pour conclure, je dirais que mon portfolio montre une progression construite par des projets concrets. Le point commun entre mes réalisations, c'est la recherche de structure : comprendre le besoin, organiser le code, gérer les données et rendre le résultat exploitable. J'ai travaillé des compétences variées, allant du développement web aux bases de données, en passant par la sécurité, la documentation, la veille et l'identité professionnelle.

Aujourd'hui, je souhaite continuer à progresser dans un environnement professionnel structuré, sur des applications réelles, maintenables et utiles. Mon objectif est d'évoluer progressivement vers des systèmes plus fiables, orientés données, sécurité et intelligence artificielle appliquée à des problématiques concrètes. Merci pour votre attention.
'@

function Escape-Xml {
    param([AllowNull()][string]$Text)
    if ($null -eq $Text) { return "" }
    return [System.Security.SecurityElement]::Escape($Text)
}

$body = [System.Text.StringBuilder]::new()
[void]$body.AppendLine('<text:p text:style-name="Title">Présentation orale E5 - Texte simplifié</text:p>')
[void]$body.AppendLine('<text:p text:style-name="Subtitle">Angoran Moyé Judes-Uriel Stéphanas - BTS SIO SLAM - Institut F2I</text:p>')
[void]$body.AppendLine("<text:p text:style-name=""Meta"">Version fluide à dire à l'oral, sans découpage en parties.</text:p>")

$paragraphs = $speech -split "(\r?\n){2,}" | Where-Object { $_.Trim().Length -gt 0 }
foreach ($paragraph in $paragraphs) {
    [void]$body.AppendLine("<text:p text:style-name=""Body"">$(Escape-Xml $paragraph.Trim())</text:p>")
}

$contentXml = @"
<?xml version="1.0" encoding="UTF-8"?>
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
  </office:font-face-decls>
  <office:automatic-styles>
    <style:style style:name="Title" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.28cm" fo:text-align="center"/>
      <style:text-properties style:font-name="Bahnschrift" fo:font-size="22pt" fo:font-weight="bold" fo:color="#0F172A"/>
    </style:style>
    <style:style style:name="Subtitle" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.18cm" fo:text-align="center"/>
      <style:text-properties style:font-name="Aptos" fo:font-size="11.5pt" fo:color="#334155"/>
    </style:style>
    <style:style style:name="Meta" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.45cm" fo:text-align="center"/>
      <style:text-properties style:font-name="Aptos" fo:font-size="10pt" fo:font-style="italic" fo:color="#64748B"/>
    </style:style>
    <style:style style:name="Body" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.24cm" fo:line-height="150%" fo:text-align="justify"/>
      <style:text-properties style:font-name="Aptos" fo:font-size="11.2pt" fo:color="#111827"/>
    </style:style>
  </office:automatic-styles>
  <office:body>
    <office:text>
      <text:sequence-decls>
        <text:sequence-decl text:display-outline-level="0" text:name="Illustration"/>
        <text:sequence-decl text:display-outline-level="0" text:name="Table"/>
        <text:sequence-decl text:display-outline-level="0" text:name="Text"/>
        <text:sequence-decl text:display-outline-level="0" text:name="Drawing"/>
      </text:sequence-decls>
$($body.ToString())
    </office:text>
  </office:body>
</office:document-content>
"@

$stylesXml = @"
<?xml version="1.0" encoding="UTF-8"?>
<office:document-styles
    xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
    xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0"
    xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0"
    xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0"
    xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0"
    office:version="1.3">
  <office:styles/>
  <office:automatic-styles>
    <style:page-layout style:name="pm1">
      <style:page-layout-properties fo:page-width="21cm" fo:page-height="29.7cm" style:print-orientation="portrait" fo:margin-top="1.8cm" fo:margin-bottom="1.8cm" fo:margin-left="1.9cm" fo:margin-right="1.9cm"/>
    </style:page-layout>
  </office:automatic-styles>
  <office:master-styles>
    <style:master-page style:name="Standard" style:page-layout-name="pm1"/>
  </office:master-styles>
</office:document-styles>
"@

$metaXml = @"
<?xml version="1.0" encoding="UTF-8"?>
<office:document-meta
    xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
    xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0"
    office:version="1.3">
  <office:meta>
    <meta:generator>Codex</meta:generator>
    <meta:title>Présentation orale E5 - Texte simplifié</meta:title>
  </office:meta>
</office:document-meta>
"@

$settingsXml = @"
<?xml version="1.0" encoding="UTF-8"?>
<office:document-settings
    xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0"
    office:version="1.3">
  <office:settings/>
</office:document-settings>
"@

$manifestXml = @"
<?xml version="1.0" encoding="UTF-8"?>
<manifest:manifest
    xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0"
    manifest:version="1.3">
  <manifest:file-entry manifest:full-path="/" manifest:media-type="application/vnd.oasis.opendocument.text"/>
  <manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/>
  <manifest:file-entry manifest:full-path="styles.xml" manifest:media-type="text/xml"/>
  <manifest:file-entry manifest:full-path="meta.xml" manifest:media-type="text/xml"/>
  <manifest:file-entry manifest:full-path="settings.xml" manifest:media-type="text/xml"/>
</manifest:manifest>
"@

[System.IO.File]::WriteAllText($txtPath, $speech, [System.Text.UTF8Encoding]::new($false))

if (Test-Path -LiteralPath $odtPath) {
    Remove-Item -LiteralPath $odtPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($odtPath, [System.IO.Compression.ZipArchiveMode]::Create)
$encoding = [System.Text.UTF8Encoding]::new($false)

function Add-ZipTextEntry {
    param(
        [System.IO.Compression.ZipArchive]$Zip,
        [string]$EntryName,
        [string]$Content,
        [System.IO.Compression.CompressionLevel]$CompressionLevel = [System.IO.Compression.CompressionLevel]::Optimal
    )

    $entry = $Zip.CreateEntry($EntryName, $CompressionLevel)
    $stream = $entry.Open()
    try {
        $writer = [System.IO.StreamWriter]::new($stream, $encoding)
        try {
            $writer.Write($Content)
        }
        finally {
            $writer.Dispose()
        }
    }
    finally {
        $stream.Dispose()
    }
}

try {
    Add-ZipTextEntry -Zip $zip -EntryName "mimetype" -Content "application/vnd.oasis.opendocument.text" -CompressionLevel ([System.IO.Compression.CompressionLevel]::NoCompression)
    Add-ZipTextEntry -Zip $zip -EntryName "content.xml" -Content $contentXml
    Add-ZipTextEntry -Zip $zip -EntryName "styles.xml" -Content $stylesXml
    Add-ZipTextEntry -Zip $zip -EntryName "meta.xml" -Content $metaXml
    Add-ZipTextEntry -Zip $zip -EntryName "settings.xml" -Content $settingsXml
    Add-ZipTextEntry -Zip $zip -EntryName "META-INF/manifest.xml" -Content $manifestXml
}
finally {
    $zip.Dispose()
}

Write-Output "ODT créé : $odtPath"
Write-Output "Source texte : $txtPath"
