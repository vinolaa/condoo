'use client'

import { redirect } from "next/navigation";

export default function Hero() {
    return (
      <section className="bg-gradient-primary text-white py-20 animate-fadeIn">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold font-sans mb-4">
            Simplifique e otimize a gestão do seu condomínio
          </h1>
          <p className="text-xl">
            Uma solução que entrega tudo em um só lugar
          </p>
          <p className="text-xl mb-8">
            e que cabe no seu bolso!
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg shadow-button hover:bg-gray-100 transition duration-300" onClick={() => redirect("/login")}>
            Seja um CondoManager
          </button>
        </div>
      </section>
    );
  }