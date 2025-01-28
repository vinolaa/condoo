"use client"; // Marque o componente como Client Component
import React from "react";
import Header from "@/app/components/Header";
import Link from "next/link";

const Plans = () => {
  const plans = [
    {
      name: "Free",
      description: "Plano básico sem custos. Acesso limitado a funcionalidades.",
      price: "Grátis",
      features: [
        "Acesso limitado",
        "Funcionalidades básicas",
        "Suporte básico",
      ],
    },
    {
      name: "Plus",
      description: "Plano intermediário com mais recursos e suporte.",
      price: "R$ 29,99/mês",
      features: [
        "Acesso completo",
        "Funcionalidades avançadas",
        "Suporte prioritário",
      ],
    },
    {
      name: "Ultra",
      description: "Plano premium com todos os recursos e suporte personalizado.",
      price: "R$ 99,99/mês",
      features: [
        "Acesso completo",
        "Funcionalidades premium",
        "Suporte dedicado 24/7",
        "Acesso a novas funcionalidades",
      ],
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl p-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">{plan.name}</h2>
              <p className="text-gray-700 mb-4">{plan.description}</p>
              <p className="text-3xl font-bold text-primary mb-4">{plan.price}</p>
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    - {feature}
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300 w-full">
                  Escolher {plan.name}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
