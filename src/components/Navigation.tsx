// src/components/Navigation.tsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navigation() {
    const location = useLocation();
    const [showProjetsMenu, setShowProjetsMenu] = useState(false);

    const isActive = (path: string) => location.pathname === path;

    const navItems = [
        { label: "Accueil", path: "/" },
        { label: "À propos", path: "/apropos" },
        { label: "Compétences", path: "/competences" },
        {
            label: "Projets",
            path: "/projets",
            subItems: [
                { label: "Tous les projets", path: "/projets" },
                { label: "Projets BTS E6", path: "/projets/bts-e6" },
            ],
        },
        { label: "Veille", path: "/veille" },
        { label: "Certifications", path: "/certifications" },
        { label: "CV", path: "/cv" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <nav className="flex flex-wrap justify-center gap-3 mb-10 px-4">
            {navItems.map((item) => {
                if (item.subItems) {
                    return (
                        <div key={item.path} className="relative">
                            <button
                                onClick={() => setShowProjetsMenu(!showProjetsMenu)}
                                className={`flex items-center gap-1 border px-4 py-2 rounded-lg transition-all duration-200 text-sm ${location.pathname.startsWith("/projets")
                                        ? "border-purple-500 bg-purple-700 text-white"
                                        : "border-violet-500 text-violet-300 hover:bg-violet-700 hover:text-white"
                                    }`}
                            >
                                {item.label}
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            {showProjetsMenu && (
                                <div className="absolute top-full mt-1 bg-[#0f0f14] border border-[#1b1b24] rounded-lg shadow-lg z-10 min-w-[180px]">
                                    {item.subItems.map((subItem) => (
                                        <Link
                                            key={subItem.path}
                                            to={subItem.path}
                                            onClick={() => setShowProjetsMenu(false)}
                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-700/40 hover:text-white transition-colors first:rounded-t-lg last:rounded-b-lg"
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                }

                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`border px-4 py-2 rounded-lg transition-all duration-200 text-sm ${isActive(item.path)
                                ? "border-purple-500 bg-purple-700 text-white"
                                : "border-violet-500 text-violet-300 hover:bg-violet-700 hover:text-white"
                            }`}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}
