import { Mail, Github, Linkedin, MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "À propos", path: "/apropos" },
    { label: "Projets", path: "/projets" },
    { label: "Certifications", path: "/certifications" },
    { label: "CV", path: "/cv" },
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:judesuriel33@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
    {
      icon: Github,
      href: "https://github.com/",
      label: "GitHub",
      color: "hover:text-gray-200",
      isExternal: true,
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      isExternal: true,
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/33625400546",
      label: "WhatsApp",
      color: "hover:text-green-400",
      isExternal: true,
    },
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-950 to-slate-900 border-t border-slate-800 mt-16 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Contenu du footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AJ
            </div>
            <p className="text-sm text-gray-400">
              Développeur web passionné par la construction de solutions modernes et efficaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 text-sm">Développement Web</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">React & Next.js</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Applications Full-Stack</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Optimisation UX/UI</span>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Connectons-nous</h3>
            <p className="text-sm text-gray-400">
              Intéressé par une collaboration ? N'hésitez pas à me contacter directement.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors duration-200 text-sm group"
            >
              Me contacter
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 py-8 space-y-6">
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.isExternal ? "_blank" : undefined}
                  rel={social.isExternal ? "noopener noreferrer" : undefined}
                  className={`text-gray-400 ${social.color} transition-colors duration-200 hover:scale-110 transform`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-500 space-y-1">
            <p>
              © {currentYear} <span className="font-semibold text-gray-400">Angoran Moyé Judes-Uriel Stéphanas</span>. Tous droits réservés.
            </p>
            <p>Développé avec React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
