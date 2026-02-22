// src/pages/Contact.tsx
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "❌ Désolé, le service d'envoi de message est actuellement indisponible.\\nMerci de me contacter directement par email ou WhatsApp."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[#07060a] text-gray-200 font-sans px-6 py-12 flex flex-col justify-between">
      {/* Navigation */}
      <Navigation />

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto flex-grow">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
            Me contacter
          </h1>
          <p className="text-gray-400 mt-3">
            Discutons d'un projet, d'une opportunité ou d'une collaboration.
          </p>
        </header>

        {/* Coordonnées */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:judesuriel33@gmail.com"
            className="flex flex-col items-center bg-[#0f0f14] p-6 rounded-md border border-[#1b1b24] text-center hover:border-purple-600 transition-all"
          >
            <Mail className="text-purple-400 w-6 h-6 mb-2" />
            <h3 className="text-lg font-semibold text-purple-300">Email</h3>
            <p className="text-gray-400 mt-1">judesuriel33@gmail.com</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/33625400546"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-[#0f0f14] p-6 rounded-md border border-[#1b1b24] text-center hover:border-green-600 transition-all"
          >
            <MessageCircle className="text-green-400 w-6 h-6 mb-2" />
            <h3 className="text-lg font-semibold text-green-400">WhatsApp</h3>
            <p className="text-gray-400 mt-1">+33 6 25 40 05 46</p>
          </a>

          {/* Localisation */}
          <div className="flex flex-col items-center bg-[#0f0f14] p-6 rounded-md border border-[#1b1b24] text-center hover:border-purple-600 transition-all">
            <MapPin className="text-purple-400 w-6 h-6 mb-2" />
            <h3 className="text-lg font-semibold text-purple-300">Localisation</h3>
            <p className="text-gray-400 mt-1">Eaubonne, Île-de-France</p>
          </div>
        </section>

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f0f14] p-8 rounded-md border border-[#1b1b24] shadow-md shadow-violet-900/10 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Nom complet
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0a0a0f] border border-[#1b1b24] rounded-md text-gray-200 focus:outline-none focus:border-purple-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Adresse e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0a0a0f] border border-[#1b1b24] rounded-md text-gray-200 focus:outline-none focus:border-purple-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#0a0a0f] border border-[#1b1b24] rounded-md text-gray-200 focus:outline-none focus:border-purple-600 resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-md hover:opacity-90 transition-all"
          >
            <Send className="w-4 h-4" />
            Envoyer le message
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
