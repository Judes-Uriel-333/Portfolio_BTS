import type { KeyboardEvent, ReactNode } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  CheckCircle,
  Clock,
  Target,
  ExternalLink,
  Download,
  FileText,
} from "lucide-react";
import { certifications } from "../data/constants";
import { Certification } from "../types/types";

function openCertification(cert: Certification) {
  const target = cert.filePath ?? cert.credentialUrl;
  if (!target) return;
  window.open(target, "_blank", "noopener,noreferrer");
}

function handleCertificationKeyDown(
  event: KeyboardEvent<HTMLDivElement>,
  cert: Certification
) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openCertification(cert);
  }
}

function CertificationCard({
  cert,
  icon,
  accentClass,
}: {
  cert: Certification;
  icon: ReactNode;
  accentClass: string;
}) {
  const target = cert.filePath ?? cert.credentialUrl;
  const isClickable = Boolean(target);
  const kindLabel =
    cert.kind === "course"
      ? "Cours"
      : cert.kind === "attestation"
      ? "Attestation"
      : "Certification";

  return (
    <div
      role={isClickable ? "link" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={isClickable ? () => openCertification(cert) : undefined}
      onKeyDown={
        isClickable
          ? (event) => handleCertificationKeyDown(event, cert)
          : undefined
      }
      className={[
        "bg-[#0f0f14] border border-[#1b1b24] p-5 rounded-xl transition-all duration-200",
        isClickable
          ? "cursor-pointer hover:border-purple-600 hover:shadow-lg hover:shadow-purple-800/20"
          : "",
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1">{icon}</div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">{cert.title}</h3>
              <p className={`text-sm mt-1 ${accentClass}`}>{cert.organization}</p>
              {cert.date && <p className="text-xs text-gray-500 mt-1">{cert.date}</p>}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.04] text-gray-300">
                {kindLabel}
              </span>
              {cert.result && (
                <span className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/[0.04] text-gray-300">
                  {cert.result}
                </span>
              )}
              {cert.filePath && (
                <span className="px-3 py-1 text-xs rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
                  PDF disponible
                </span>
              )}
            </div>
          </div>

          {cert.description && (
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">{cert.description}</p>
          )}

          {cert.highlights && cert.highlights.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {cert.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-purple-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {cert.tags && cert.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {cert.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-[#0a0a0f] border border-[#1b1b24] rounded text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {(cert.filePath || cert.credentialUrl) && (
            <div className="mt-5 flex flex-wrap gap-3">
              {cert.filePath && (
                <>
                  <a
                    href={cert.filePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-violet-500 text-violet-300 rounded-lg hover:bg-violet-700 hover:text-white transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    Voir le PDF
                  </a>
                  <a
                    href={cert.filePath}
                    download={cert.downloadName}
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Télécharger
                  </a>
                </>
              )}

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-blue-500 text-blue-300 rounded-lg hover:bg-blue-700 hover:text-white transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Voir le lien
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CertificationSection({
  title,
  items,
  icon,
  headingClass,
  accentClass,
}: {
  title: string;
  items: Certification[];
  icon: ReactNode;
  headingClass: string;
  accentClass: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className={`text-2xl font-semibold ${headingClass}`}>{title}</h2>
      </div>
      <div className="grid gap-4">
        {items.map((cert) => (
          <CertificationCard
            key={cert.id}
            cert={cert}
            icon={icon}
            accentClass={accentClass}
          />
        ))}
      </div>
    </section>
  );
}

export default function Certifications() {
  const obtained = certifications.filter((c) => c.status === "obtained");
  const inProgress = certifications.filter((c) => c.status === "in-progress");
  const planned = certifications.filter((c) => c.status === "planned");

  return (
    <div className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full">
        <Navigation />

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Certifications & Formations
          </h1>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Attestations, certifications et cours valid&eacute;s en lien avec mon parcours.
            Lorsqu'un justificatif est disponible, il peut &ecirc;tre consult&eacute; directement.
          </p>
        </header>

        <CertificationSection
          title="Éléments validés"
          items={obtained}
          icon={<CheckCircle className="text-green-400 w-6 h-6" />}
          headingClass="text-purple-300"
          accentClass="text-purple-300"
        />

        <CertificationSection
          title="Formations en cours"
          items={inProgress}
          icon={<Clock className="text-blue-400 w-6 h-6" />}
          headingClass="text-purple-300"
          accentClass="text-blue-300"
        />

        <CertificationSection
          title="Certifications pr&eacute;vues"
          items={planned}
          icon={<Target className="text-orange-400 w-6 h-6" />}
          headingClass="text-purple-300"
          accentClass="text-orange-300"
        />

      </div>

      <Footer />
    </div>
  );
}
