// Nouveau Footer — à placer à la fin de chaque page
import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#1b1b24] bg-[#0a0a0f] py-8 text-center text-sm text-gray-400 mt-12">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="mailto:judesuriel33@gmail.com"
          className="hover:scale-110 transition-transform"
          aria-label="Email"
        >
          <Mail className="w-5 h-5 text-red-400 hover:text-red-500 transition-colors" />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 text-blue-400 hover:text-blue-500 transition-colors" />
        </a>
        <a
          href="https://wa.me/33625400546"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-green-400 hover:text-green-500 transition-colors" />
        </a>
      </div>

      <p className="text-xs text-gray-500 tracking-wide">
        © {new Date().getFullYear()} Judes-Uriel Angoran  — Tous droits réservés
      </p>
    </footer>
  );
}
