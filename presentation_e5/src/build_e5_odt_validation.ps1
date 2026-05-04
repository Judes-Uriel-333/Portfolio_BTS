$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$outputDir = Join-Path $root "output"
$scratchDir = Join-Path $root "scratch"
$odtPath = Join-Path $outputDir "presentation_e5_document_validation.odt"
$txtPath = Join-Path $scratchDir "presentation_e5_document_validation_source.txt"

New-Item -ItemType Directory -Force -Path $outputDir | Out-Null
New-Item -ItemType Directory -Force -Path $scratchDir | Out-Null

$sections = @(
    @{
        Title = "Introduction"
        Paragraphs = @(
            "Bonjour, je m'appelle Angoran Moye Judes-Uriel Stephanas. Je suis etudiant en BTS SIO option SLAM a l'Institut F2I, pour la session 2026. Aujourd'hui, je vais vous presenter mon parcours, mes competences et la logique de mon projet professionnel.",
            "Mon objectif n'est pas simplement de montrer des projets les uns apres les autres. Je veux surtout montrer comment mon parcours s'est construit progressivement : d'abord par l'apprentissage des bases, ensuite par les projets en formation, puis par les experiences professionnelles, la veille technologique et enfin mon orientation apres le BTS."
        )
    },
    @{
        Title = "Profil personnel"
        Paragraphs = @(
            "Je me presente comme un profil en construction serieuse. Je ne cherche pas a me presenter comme un expert, mais comme quelqu'un qui progresse avec methode et qui veut comprendre les fondations avant d'aller vers des sujets plus complexes.",
            "Ce qui m'interesse dans le developpement, ce n'est pas seulement l'apparence d'une application. C'est surtout la logique derriere : comprendre un besoin, organiser le code, faire circuler les donnees correctement et construire quelque chose de maintenable."
        )
    },
    @{
        Title = "Parcours scolaire"
        Paragraphs = @(
            "Avant le BTS, j'ai obtenu un baccalaureat scientifique. C'est ensuite que j'ai commence a m'interesser plus serieusement a la programmation, notamment avec Python. Cette phase m'a permis de decouvrir la logique algorithmique et la resolution de problemes.",
            "J'ai ensuite integre le BTS SIO option SLAM, qui correspond bien a mon profil parce qu'il est oriente vers le developpement d'applications, les bases de donnees, la conception de solutions et le travail en mode projet.",
            "Pendant cette formation, j'ai appris a mieux structurer mon raisonnement : partir d'un besoin, choisir une solution, developper, tester, documenter et presenter le resultat."
        )
    },
    @{
        Title = "Stages et experiences professionnelles"
        Paragraphs = @(
            "Mon experience chez A'Numerique a ete une etape importante, parce qu'elle m'a permis de passer d'un cadre scolaire a un contexte plus concret.",
            "Pendant mon stage de mai a juillet 2025, j'ai participe au developpement d'une plateforme web avec React.js et Next.js. J'ai travaille sur des fonctionnalites front-end, mais aussi sur l'organisation du code et la lisibilite des composants.",
            "Ensuite, de decembre 2025 a janvier 2026, j'ai travaille sur un projet de plateforme d'agregation autour d'une page Salons d'emploi. Le besoin etait de recuperer, structurer, stocker et afficher des donnees dans un meme flux.",
            "Ce projet m'a marque parce qu'il m'a fait travailler une chaine complete : scraping, stockage, seeding puis affichage. Il m'a surtout appris qu'un projet reel ne depend pas seulement du code visible, mais aussi de la fiabilite des donnees et de la coherence entre les environnements."
        )
    },
    @{
        Title = "Projets principaux"
        Paragraphs = @(
            "Dans mes projets en formation, GameConnect est l'un des plus representatifs. C'est un reseau social de gamers developpe en PHP et MySQL, avec inscription, authentification, publications, likes, commentaires et edition de profil. Il m'a permis de travailler la logique back-end, les bases de donnees et les sessions utilisateur.",
            "J'ai aussi realise un programme de hash en Python pour verifier l'integrite de fichiers avec SHA-256. Ce projet est plus simple visuellement, mais il m'a aide a comprendre une notion importante en securite : detecter si un fichier a ete modifie.",
            "Le portfolio est egalement un projet important, parce qu'il centralise mon profil, mon CV, mes projets, mes certifications, ma veille et mon tableau de synthese. Il montre aussi ma capacite a organiser mon identite professionnelle en ligne.",
            "Enfin, j'ai commence a travailler sur des projets personnels plus orientes donnees et intelligence artificielle, comme AIAuditOps et MailGuardAI. AIAuditOps concerne la gouvernance et l'audit de systemes IA. MailGuardAI est un MVP qui analyse des emails et les classe selon leur intention ou leur niveau de risque. Je les presente avec prudence : ils montrent surtout mon orientation et ma progression, sans pretendre que tout est finalise."
        )
    },
    @{
        Title = "Certifications et apprentissages prevus"
        Paragraphs = @(
            "Cote certifications, j'ai valide SecNumacademie de l'ANSSI, ce qui m'a permis de consolider mes bases en cybersecurite. J'ai aussi valide un cours OpenClassrooms sur les bases du langage Python.",
            "Pour la suite, je souhaite continuer a obtenir des certifications ou attestations dans les domaines qui correspondent a mon projet : React et Next.js pour consolider le developpement front-end, les fondamentaux de la cybersecurite, Docker et les bases du cloud, ainsi que des contenus autour de l'intelligence artificielle appliquee.",
            "L'objectif n'est pas d'accumuler des certificats pour remplir un CV, mais de choisir des apprentissages coherents avec mon orientation : developper des applications utiles, fiables et capables d'exploiter les donnees."
        )
    },
    @{
        Title = "Veille technologique"
        Paragraphs = @(
            "Ma veille technologique porte sur l'IA orientee vers la defense des systemes informatiques. Ce sujet m'interesse parce qu'il relie plusieurs domaines : la cybersecurite, l'analyse de donnees, l'automatisation et l'aide a la decision.",
            "Dans cette veille, je m'interesse a la maniere dont l'IA peut aider les equipes de securite a detecter des anomalies, prioriser des alertes, synthetiser des incidents ou assister l'investigation.",
            "Mais je retiens aussi une limite importante : une IA utile en cyberdefense ne doit pas decider seule. Elle doit aider l'humain, accelerer l'analyse, laisser des traces verifiables et rester sous controle.",
            "Cette veille est directement liee a mon orientation, car elle me permet de mieux comprendre les enjeux de l'IA appliquee a des problemes reels, notamment dans la securite et la fiabilite des systemes."
        )
    },
    @{
        Title = "Orientation apres le BTS"
        Paragraphs = @(
            "Apres le BTS, je souhaite poursuivre mes etudes vers un diplome de niveau Bac+3, de type Bachelor ou Licence professionnelle, dans une filiere orientee developpement logiciel, full-stack, data, intelligence artificielle ou cybersecurite applicative.",
            "A court terme, mon objectif est de renforcer mes competences techniques dans un cadre plus professionnel, idealement avec de l'alternance ou des projets concrets. Je veux continuer a progresser sur des applications reelles, avec une meilleure maitrise de l'architecture, des API, des donnees et de la securite.",
            "A moyen terme, je vise un profil de developpeur full-stack capable de comprendre un produit dans son ensemble : l'interface, le back-end, les donnees, les utilisateurs et les contraintes metier.",
            "A long terme, mon ambition est de monter une startup. Je ne vois pas cette ambition comme quelque chose d'immediat ou d'improvise. Je la vois plutot comme un objectif a construire progressivement, en apprenant a developper des solutions utiles, a comprendre les besoins reels et a transformer une idee en produit solide.",
            "L'orientation qui m'attire le plus aujourd'hui se situe autour des solutions numeriques utiles, de l'automatisation, de la donnee, de l'IA appliquee et de la securite. C'est dans cette direction que je souhaite continuer a avancer apres le BTS."
        )
    },
    @{
        Title = "Conclusion"
        Paragraphs = @(
            "Pour conclure, mon parcours montre une progression construite par les projets. J'ai commence par les bases, puis j'ai avance vers des projets plus structures, des experiences professionnelles et une reflexion plus claire sur mon avenir.",
            "Ce que je veux faire ressortir devant le jury, c'est que mon portfolio n'est pas seulement une vitrine. C'est un outil qui montre mon evolution, mes competences, mes limites actuelles et mon orientation.",
            "Aujourd'hui, je veux continuer a progresser dans le developpement applicatif, avec une ouverture forte vers les donnees, l'intelligence artificielle et la securite. Mon objectif final est de construire, a terme, des solutions utiles et solides, jusqu'a pouvoir porter mon propre projet entrepreneurial."
        )
    }
)

function Escape-Xml {
    param([AllowNull()][string]$Text)
    if ($null -eq $Text) { return "" }
    return [System.Security.SecurityElement]::Escape($Text)
}

$body = [System.Text.StringBuilder]::new()
[void]$body.AppendLine('<text:p text:style-name="Title">Présentation E5 - Document de validation</text:p>')
[void]$body.AppendLine('<text:p text:style-name="Subtitle">Angoran Moyé Judes-Uriel Stéphanas - BTS SIO SLAM - Institut F2I</text:p>')
[void]$body.AppendLine('<text:p text:style-name="Meta">Base courte et structurée pour préparer le futur diaporama PowerPoint.</text:p>')

foreach ($section in $sections) {
    [void]$body.AppendLine("<text:h text:style-name=""Heading1"" text:outline-level=""1"">$(Escape-Xml $section.Title)</text:h>")
    foreach ($paragraph in $section.Paragraphs) {
        [void]$body.AppendLine("<text:p text:style-name=""Body"">$(Escape-Xml $paragraph)</text:p>")
    }
}

$plain = [System.Text.StringBuilder]::new()
[void]$plain.AppendLine("Présentation E5 - Document de validation")
[void]$plain.AppendLine("Angoran Moyé Judes-Uriel Stéphanas - BTS SIO SLAM - Institut F2I")
[void]$plain.AppendLine()
foreach ($section in $sections) {
    [void]$plain.AppendLine($section.Title)
    foreach ($paragraph in $section.Paragraphs) {
        [void]$plain.AppendLine($paragraph)
        [void]$plain.AppendLine()
    }
}
[System.IO.File]::WriteAllText($txtPath, $plain.ToString(), [System.Text.UTF8Encoding]::new($false))

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
    <style:style style:name="Heading1" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0.48cm" fo:margin-bottom="0.16cm" fo:keep-with-next="always"/>
      <style:text-properties style:font-name="Bahnschrift" fo:font-size="15.5pt" fo:font-weight="bold" fo:color="#0F172A"/>
    </style:style>
    <style:style style:name="Body" style:family="paragraph">
      <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.18cm" fo:line-height="145%" fo:text-align="justify"/>
      <style:text-properties style:font-name="Aptos" fo:font-size="11pt" fo:color="#111827"/>
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
    <meta:title>Présentation E5 - Document de validation</meta:title>
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
