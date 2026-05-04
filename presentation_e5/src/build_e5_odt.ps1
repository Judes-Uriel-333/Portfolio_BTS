$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$outputDir = Join-Path $root "output"
$scratchDir = Join-Path $root "scratch"
$odtPath = Join-Path $outputDir "presentation_e5_texte.odt"
$txtPath = Join-Path $scratchDir "presentation_e5_texte_source.txt"

New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
New-Item -ItemType Directory -Force -Path $scratchDir | Out-Null

function Escape-Xml {
    param([AllowNull()][string]$Text)

    if ($null -eq $Text) {
        return ""
    }

    return [System.Security.SecurityElement]::Escape($Text)
}

function Add-Para {
    param(
        [System.Text.StringBuilder]$Builder,
        [string]$Text,
        [string]$Style = "Body"
    )

    [void]$Builder.AppendLine("<text:p text:style-name=""$Style"">$(Escape-Xml $Text)</text:p>")
}

function Add-Heading {
    param(
        [System.Text.StringBuilder]$Builder,
        [string]$Text,
        [int]$Level = 1
    )

    $style = if ($Level -eq 1) { "Heading1" } else { "Heading2" }
    [void]$Builder.AppendLine("<text:h text:style-name=""$style"" text:outline-level=""$Level"">$(Escape-Xml $Text)</text:h>")
}

function Add-BulletList {
    param(
        [System.Text.StringBuilder]$Builder,
        [string[]]$Items
    )

    [void]$Builder.AppendLine("<text:list text:style-name=""BulletList"">")
    foreach ($item in $Items) {
        [void]$Builder.AppendLine("<text:list-item><text:p text:style-name=""ListBody"">$(Escape-Xml $item)</text:p></text:list-item>")
    }
    [void]$Builder.AppendLine("</text:list>")
}

function Section {
    param(
        [System.Text.StringBuilder]$Builder,
        [string]$Title,
        [string]$Duration,
        [string]$Objective,
        [string[]]$Paragraphs,
        [string]$Transition = ""
    )

    Add-Heading -Builder $Builder -Text $Title -Level 1
    Add-Para -Builder $Builder -Text "Durée indicative : $Duration" -Style "Meta"
    Add-Para -Builder $Builder -Text "Objectif : $Objective" -Style "Meta"
    Add-Heading -Builder $Builder -Text "Texte à dire" -Level 2
    foreach ($paragraph in $Paragraphs) {
        Add-Para -Builder $Builder -Text $paragraph
    }
    if ($Transition.Trim().Length -gt 0) {
        Add-Heading -Builder $Builder -Text "Transition" -Level 2
        Add-Para -Builder $Builder -Text $Transition -Style "Transition"
    }
}

$body = [System.Text.StringBuilder]::new()

Add-Para -Builder $body -Text "Présentation orale E5 - BTS SIO SLAM" -Style "Title"
Add-Para -Builder $body -Text "Angoran Moyé Judes-Uriel Stéphanas" -Style "Subtitle"
Add-Para -Builder $body -Text "Institut F2I - Session 2026" -Style "Subtitle"
Add-Para -Builder $body -Text "Durée cible : environ 7 à 8 minutes. Limite haute conseillée : 10 minutes maximum." -Style "Meta"
Add-Para -Builder $body -Text "Objectif du document : disposer d'un texte oral structuré pour présenter le portfolio de compétences, le tableau de synthèse et les réalisations professionnelles de l'épreuve E5." -Style "Meta"

Add-Heading -Builder $body -Text "Plan de la présentation" -Level 1
Add-BulletList -Builder $body -Items @(
    "1. Introduction et annonce du sujet.",
    "2. Profil personnel et positionnement.",
    "3. Ce que l'épreuve E5 doit montrer.",
    "4. Cartographie technique actuelle.",
    "5. Réalisations en formation.",
    "6. Expériences professionnelles.",
    "7. Projets personnels et orientation IA / données.",
    "8. Veille technologique et développement professionnel.",
    "9. Conclusion."
)

Section -Builder $body `
    -Title "1. Introduction" `
    -Duration "35 à 45 secondes" `
    -Objective "Présenter le contexte de l'oral et annoncer la logique générale de la présentation." `
    -Paragraphs @(
        "Bonjour, je m'appelle Angoran Moyé Judes-Uriel Stéphanas. Je suis étudiant en BTS SIO option SLAM à l'Institut F2I, en session 2026.",
        "Pour cette épreuve E5, je vais présenter mon parcours à travers mon portfolio de compétences, mes réalisations et mon tableau de synthèse.",
        "L'objectif n'est pas simplement de lister tous mes projets. Je veux surtout montrer comment chaque réalisation m'a permis de construire progressivement des compétences en développement, en organisation de projet, en veille et en professionnalisation.",
        "Ma présentation suit donc une logique simple : d'abord mon profil, ensuite les compétences attendues en E5, puis les projets qui servent de preuves concrètes."
    ) `
    -Transition "Je vais commencer par mon profil, car il explique la manière dont j'ai construit mon portfolio."

Section -Builder $body `
    -Title "2. Profil personnel et positionnement" `
    -Duration "50 à 60 secondes" `
    -Objective "Présenter un profil réaliste, en progression, centré sur la compréhension et la structuration." `
    -Paragraphs @(
        "Je me présente comme un profil en construction sérieuse. Je ne cherche pas à me présenter comme un développeur expert, mais comme quelqu'un qui progresse avec méthode et qui cherche à comprendre les fondations avant d'aller vers des sujets plus complexes.",
        "Mon fil conducteur est la compréhension des besoins, la structuration du code et la circulation des données. Avant d'écrire une solution, j'essaie d'abord de comprendre le problème, les contraintes et le résultat attendu.",
        "Mon parcours a commencé par un intérêt autonome pour la programmation, notamment avec Python. Cette première étape m'a permis de découvrir la logique algorithmique et les bases du raisonnement informatique.",
        "Aujourd'hui, avec le BTS SIO option SLAM, je consolide mes bases en développement web, bases de données, conception applicative et travail en mode projet.",
        "Ce positionnement se retrouve dans mon portfolio : je privilégie les projets qui montrent une progression réelle, plutôt qu'une simple accumulation de démonstrations."
    ) `
    -Transition "À partir de ce profil, je vais maintenant expliquer ce que l'épreuve E5 doit mettre en évidence."

Section -Builder $body `
    -Title "3. Ce que l'épreuve E5 doit montrer" `
    -Duration "55 à 65 secondes" `
    -Objective "Relier le portfolio au tableau de synthèse et aux blocs de compétences du BTS SIO." `
    -Paragraphs @(
        "L'épreuve E5 s'appuie sur le portfolio de compétences et sur le tableau de synthèse. Pour moi, ce tableau n'est pas seulement une liste de réalisations : c'est une manière d'organiser des preuves.",
        "Les réalisations que j'ai sélectionnées permettent de couvrir plusieurs blocs de compétences : gérer le patrimoine informatique, répondre aux incidents et demandes, développer la présence en ligne de l'organisation, travailler en mode projet, mettre à disposition un service informatique et organiser son développement professionnel.",
        "Par exemple, certains projets montrent la gestion de données ou de sécurité, d'autres montrent la mise en ligne, la documentation, le travail en mode projet ou encore la veille technologique.",
        "L'objectif pendant l'oral est donc de montrer que mes projets ne sont pas isolés. Ils correspondent à des compétences du référentiel et racontent une progression cohérente.",
        "Je vais donc présenter les compétences principales que j'ai travaillées, puis les illustrer par des projets concrets."
    ) `
    -Transition "Avant de parler des projets, je vais résumer ma cartographie technique actuelle."

Section -Builder $body `
    -Title "4. Cartographie technique actuelle" `
    -Duration "50 à 60 secondes" `
    -Objective "Présenter les technologies travaillées sans survendre le niveau réel." `
    -Paragraphs @(
        "Sur le plan technique, mon socle principal est le développement web et applicatif.",
        "Côté front-end, j'ai travaillé HTML, CSS, JavaScript, React, Next.js et Tailwind CSS. Ces technologies m'ont permis de créer des interfaces, de manipuler des composants et de structurer des pages web.",
        "Côté back-end et données, j'ai travaillé PHP, Python, SQL, Prisma, SQLite et PostgreSQL. Ce qui m'intéresse particulièrement, c'est le lien entre l'interface, les données et la logique métier.",
        "J'utilise également des outils professionnels comme VS Code, Visual Studio, Git, GitHub, Docker, le terminal et la documentation technique.",
        "Je considère que mes bases sont plus solides en Python, HTML/CSS et SQL. Je suis encore en consolidation sur React, Next.js, C# et les architectures plus complètes. C'est une progression assumée, car je préfère être clair sur mon niveau plutôt que de surestimer mes compétences."
    ) `
    -Transition "Cette cartographie technique prend sens à travers les réalisations effectuées en formation."

Section -Builder $body `
    -Title "5. Réalisations en formation" `
    -Duration "70 à 80 secondes" `
    -Objective "Montrer que les projets académiques servent de preuves concrètes pour les compétences E5." `
    -Paragraphs @(
        "Dans mes réalisations en formation, plusieurs projets ont joué un rôle important dans ma progression.",
        "Le projet GameConnect est un réseau social de gamers développé en PHP et MySQL. Il comprend l'inscription, l'authentification, les publications, les likes, les commentaires et l'édition de profil. Ce projet m'a permis de travailler la logique back-end, la gestion de base de données et la sécurité de base autour des sessions et des données utilisateur.",
        "Le programme de hash en Python m'a permis de travailler la vérification d'intégrité de fichiers avec SHA-256. Ce projet m'a aidé à mieux comprendre la manipulation de fichiers, les empreintes numériques et l'importance de détecter une modification non autorisée.",
        "Le portfolio est aussi une réalisation en soi. Il centralise mon parcours, mes projets, mon CV, mes certifications, ma veille technologique et mon tableau de synthèse. Il répond au bloc de compétences lié à la présence en ligne et au développement professionnel.",
        "J'ai également travaillé des sujets liés à la cybersécurité, comme Broken Access Control. Cela m'a permis de relier le développement applicatif aux risques de sécurité web.",
        "Ces réalisations montrent que j'ai travaillé à la fois la conception, le développement, la documentation, la mise à disposition d'un service et la réflexion sur la sécurité."
    ) `
    -Transition "Ces projets scolaires ont ensuite été complétés par des expériences dans un contexte professionnel réel."

Section -Builder $body `
    -Title "6. Expériences professionnelles" `
    -Duration "70 à 80 secondes" `
    -Objective "Expliquer l'apport des expériences chez A'Numérique dans la professionnalisation." `
    -Paragraphs @(
        "Mon expérience chez A'Numérique a été importante, car elle m'a permis de passer d'un contexte principalement scolaire à un contexte plus réel.",
        "Pendant mon stage de mai à juillet 2025, j'ai participé au développement d'une plateforme web avec React.js et Next.js. J'ai notamment travaillé sur des fonctionnalités front-end, l'organisation du code et la lisibilité des composants.",
        "Cette première expérience m'a montré l'importance du travail collaboratif, de la qualité du code, de la compréhension du besoin et de l'adaptation aux retours.",
        "Ensuite, de décembre 2025 à janvier 2026, j'ai travaillé sur un projet de plateforme d'agrégation pour une page Salons d'emploi. Le besoin était de récupérer, structurer, stocker et afficher des données dans un même flux.",
        "Le flux travaillé peut se résumer ainsi : scraping, stockage, seeding, puis affichage. J'ai utilisé des outils comme Prisma, Docker, SQL et des frameworks web modernes.",
        "Ce projet m'a appris que la difficulté n'est pas seulement d'écrire du code. Il faut aussi rendre les données cohérentes entre les environnements, fiabiliser le pipeline et organiser la logique pour qu'elle reste compréhensible."
    ) `
    -Transition "En parallèle de ces réalisations liées au BTS, j'ai aussi développé des projets personnels qui montrent mon orientation actuelle."

Section -Builder $body `
    -Title "7. Projets personnels et orientation IA / données" `
    -Duration "50 à 60 secondes" `
    -Objective "Présenter les projets personnels sans les survendre, en montrant leur rôle dans la progression." `
    -Paragraphs @(
        "En parallèle des projets directement liés au BTS, j'ai développé deux projets personnels récents : AIAuditOps et MailGuardAI.",
        "AIAuditOps est une application web autour de la gouvernance et de l'audit des systèmes d'intelligence artificielle. L'idée est de pouvoir inventorier des systèmes IA, suivre des analyses de risque, gérer des contrôles et collecter des preuves d'audit.",
        "Je reste volontairement prudent dans la manière de le présenter : le cœur du projet est fonctionnel, mais certains modules avancés sont encore en cours ou préparés pour plus tard. Ce projet m'a surtout permis de travailler l'architecture d'une application multi-modules, l'authentification, Prisma, PostgreSQL, NestJS, Next.js et Docker.",
        "MailGuardAI est un MVP local connecté à Gmail. Il analyse des emails, les classe selon leur intention ou leur niveau de risque, et affiche des statistiques et des filtres dans un dashboard.",
        "Ce projet m'a permis de travailler les intégrations API, OAuth Google, Flask, SQLite, React, et l'utilisation d'un modèle d'IA dans un workflow applicatif.",
        "Ces deux projets montrent mon intérêt pour les données, l'automatisation, l'IA appliquée et la fiabilité des décisions. Ils ne remplacent pas mes projets BTS, mais ils montrent la direction vers laquelle je souhaite évoluer."
    ) `
    -Transition "Cette orientation vers l'IA et la sécurité se retrouve aussi dans ma veille technologique."

Section -Builder $body `
    -Title "8. Veille technologique et développement professionnel" `
    -Duration "45 à 55 secondes" `
    -Objective "Présenter le thème de veille et les éléments de développement professionnel." `
    -Paragraphs @(
        "Ma veille technologique actuelle porte sur l'IA orientée vers la défense des systèmes informatiques.",
        "Ce thème m'intéresse parce qu'il relie plusieurs sujets : la cybersécurité, l'analyse de données, l'automatisation, l'aide à la décision et les limites des systèmes intelligents.",
        "Dans cette veille, je m'intéresse notamment à la manière dont l'IA peut aider les équipes de sécurité à détecter des anomalies, prioriser des alertes, synthétiser des incidents ou assister l'investigation.",
        "Mais je retiens aussi un point important : une IA utile en cyberdéfense n'est pas celle qui décide seule. Elle doit accélérer l'analyse, laisser des traces vérifiables et rester sous contrôle humain.",
        "Les sources que j'ai utilisées incluent notamment le NIST, l'ENISA, la CISA/NSA et l'OWASP Top 10 pour les applications LLM.",
        "Sur le plan du développement professionnel, j'ai également validé SecNumacadémie de l'ANSSI et un cours OpenClassrooms sur les bases du langage Python. Ces éléments complètent mes bases en cybersécurité et en programmation."
    ) `
    -Transition "Je peux maintenant conclure en résumant ce que mon portfolio démontre."

Section -Builder $body `
    -Title "9. Conclusion" `
    -Duration "40 à 50 secondes" `
    -Objective "Résumer la progression et ouvrir sur la suite du parcours professionnel." `
    -Paragraphs @(
        "Pour conclure, mon portfolio montre une progression construite par des projets concrets.",
        "Le point commun de mes réalisations est la recherche de structure : comprendre le besoin, organiser le code, faire circuler les données et rendre le résultat exploitable.",
        "J'ai travaillé des compétences variées : développement web, bases de données, sécurité, documentation, mise à disposition de services, veille technologique et identité professionnelle.",
        "Je veux continuer à progresser dans un environnement professionnel structuré, sur des applications réelles, maintenables et utiles.",
        "Mon objectif est d'évoluer progressivement vers des systèmes plus fiables, orientés données, sécurité et intelligence artificielle appliquée à des problématiques concrètes.",
        "Merci pour votre attention."
    )

Add-Heading -Builder $body -Text "Repères de rythme" -Level 1
Add-Para -Builder $body -Text "Le texte complet est prévu pour environ 7 à 8 minutes si chaque partie est présentée calmement. Pour rester sous 10 minutes, il faut éviter d'ajouter trop d'exemples non prévus et garder les transitions courtes." -Style "Body"
Add-BulletList -Builder $body -Items @(
    "Si le temps est court : réduire la partie sur les projets personnels.",
    "Si le jury demande des précisions : détailler GameConnect, le projet d'agrégation ou la veille IA/cyberdéfense.",
    "Si une question porte sur le niveau technique : rester transparent sur les compétences en consolidation.",
    "Si une question porte sur l'E5 : revenir au tableau de synthèse et aux preuves de compétences."
)

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
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.35cm" fo:text-align="center"/>
      <style:text-properties style:font-name="Bahnschrift" fo:font-size="24pt" fo:font-weight="bold" fo:color="#0F172A"/>
    </style:style>
    <style:style style:name="Subtitle" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.18cm" fo:text-align="center"/>
      <style:text-properties style:font-name="Aptos" fo:font-size="12pt" fo:color="#334155"/>
    </style:style>
    <style:style style:name="Heading1" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0.65cm" fo:margin-bottom="0.22cm" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Bahnschrift" fo:font-size="17pt" fo:font-weight="bold" fo:color="#0F172A"/>
    </style:style>
    <style:style style:name="Heading2" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0.25cm" fo:margin-bottom="0.12cm" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Bahnschrift" fo:font-size="12.5pt" fo:font-weight="bold" fo:color="#0369A1"/>
    </style:style>
    <style:style style:name="Body" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.18cm" fo:line-height="145%" fo:text-align="justify"/>
      <style:text-properties style:font-name="Aptos" fo:font-size="11pt" fo:color="#111827"/>
    </style:style>
    <style:style style:name="Meta" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.12cm"/>
      <style:text-properties style:font-name="Aptos" fo:font-size="10pt" fo:font-style="italic" fo:color="#475569"/>
    </style:style>
    <style:style style:name="Transition" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.2cm" fo:margin-left="0.4cm" fo:border-left="0.08cm solid #22D3EE" fo:padding-left="0.25cm"/>
      <style:text-properties style:font-name="Aptos" fo:font-size="10.5pt" fo:font-style="italic" fo:color="#0F172A"/>
    </style:style>
    <style:style style:name="ListBody" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.08cm"/>
      <style:text-properties style:font-name="Aptos" fo:font-size="10.8pt" fo:color="#111827"/>
    </style:style>
    <text:list-style style:name="BulletList">
      <text:list-level-style-bullet text:level="1" text:bullet-char="•">
        <style:list-level-properties text:min-label-width="0.6cm"/>
      </text:list-level-style-bullet>
    </text:list-style>
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
      <style:page-layout-properties fo:page-width="21cm" fo:page-height="29.7cm" style:print-orientation="portrait" fo:margin-top="1.7cm" fo:margin-bottom="1.7cm" fo:margin-left="1.8cm" fo:margin-right="1.8cm"/>
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
    <meta:title>Présentation orale E5 - BTS SIO SLAM</meta:title>
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

$sourceText = @"
Présentation orale E5 - BTS SIO SLAM
Angoran Moyé Judes-Uriel Stéphanas
Institut F2I - Session 2026

Ce fichier source reprend le contenu présent dans le document ODT.
"@
[System.IO.File]::WriteAllText($txtPath, $sourceText + [Environment]::NewLine + [Environment]::NewLine + ($body.ToString() -replace '<[^>]+>', ''), [System.Text.UTF8Encoding]::new($false))

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
