import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navigation() {
    const location = useLocation();
    const [showProjetsMenu, setShowProjetsMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    ];

    return (
        <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all"
                    >
                        AJ
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            if (item.subItems) {
                                return (
                                    <div key={item.path} className="relative">
                                        <button
                                            onClick={() => setShowProjetsMenu(!showProjetsMenu)}
                                            className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                                                location.pathname.startsWith("/projets")
                                                    ? "bg-blue-600/20 border border-blue-500 text-blue-300"
                                                    : "border border-transparent text-gray-300 hover:bg-slate-800/50 hover:text-white"
                                            }`}
                                        >
                                            {item.label}
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                        {showProjetsMenu && (
                                            <div className="absolute top-full mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-10 min-w-[200px] overflow-hidden">
                                                {item.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.path}
                                                        to={subItem.path}
                                                        onClick={() => setShowProjetsMenu(false)}
                                                        className="block px-4 py-3 text-sm text-gray-300 hover:bg-blue-600/20 hover:text-blue-300 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-slate-700 last:border-b-0"
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
                                    className={`px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                                        isActive(item.path)
                                            ? "bg-blue-600/20 border border-blue-500 text-blue-300"
                                            : "border border-transparent text-gray-300 hover:bg-slate-800/50 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Menu Mobile */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white transition-colors"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 space-y-2 pb-4">
                        {navItems.map((item) => (
                            <div key={item.path}>
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() => setShowProjetsMenu(!showProjetsMenu)}
                                            className="w-full text-left px-4 py-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-gray-300 hover:text-white transition-colors flex items-center justify-between"
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`w-4 h-4 transition-transform ${showProjetsMenu ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        {showProjetsMenu && (
                                            <div className="ml-4 space-y-1 mt-1">
                                                {item.subItems.map((subItem) => (
                                                    <Link
                                                        key={subItem.path}
                                                        to={subItem.path}
                                                        onClick={() => {
                                                            setShowProjetsMenu(false);
                                                            setMobileMenuOpen(false);
                                                        }}
                                                        className="block px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-blue-600/20 text-gray-300 hover:text-blue-300 transition-colors"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        to={item.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                                            isActive(item.path)
                                                ? "bg-blue-600/20 border border-blue-500 text-blue-300"
                                                : "bg-slate-800/50 hover:bg-slate-800 text-gray-300 hover:text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg text-white font-bold transition-all duration-300 text-center mt-2"
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
