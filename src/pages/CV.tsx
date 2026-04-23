import { useEffect } from "react";
import { Download, ExternalLink } from "lucide-react";

export default function CV() {
  const cvPagePath = "/cv/index.html";
  const cvPdfPath = "/cv/CV_Judes.pdf";

  useEffect(() => {
    window.location.replace(cvPagePath);
  }, [cvPagePath]);

  return (
    <main className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-[#0f0f14] border border-[#1b1b24] rounded-2xl p-8 text-center shadow-xl">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          Redirection vers le CV
        </h1>
        <p className="mt-4 text-gray-400 leading-relaxed">
          La page CV du portfolio ouvre maintenant ton fichier HTML dedie.
          Si la redirection ne se lance pas automatiquement, utilise l'un des liens ci-dessous.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={cvPagePath}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-purple-800/50"
          >
            <ExternalLink className="w-5 h-5" />
            Ouvrir le CV HTML
          </a>
          <a
            href={cvPdfPath}
            download="CV_Judes.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-violet-500 text-violet-300 rounded-lg hover:bg-violet-700 hover:text-white transition-all duration-200"
          >
            <Download className="w-5 h-5" />
            Telecharger le PDF
          </a>
        </div>
      </div>
    </main>
  );
}
