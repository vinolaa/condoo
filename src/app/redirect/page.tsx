"use client"; // Marque o componente como Client Component
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";

export default function Redirect() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login"); // Redireciona para o login se não houver usuário
      } else {
        setLoading(false); // Exibe a tela de seleção se o usuário estiver autenticado
      }
    };

    checkUser();
  }, [router]);

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  const handleGoToPlanos = () => {
    router.push("/planos");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-card text-center w-96">
        <h1 className="text-2xl font-bold text-primary mb-4">Bem-vindo!</h1>
        <p className="text-gray-700 mb-8">
          Escolha uma das opções abaixo para continuar:
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={handleGoToPlanos}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Ver Planos
          </button>
          <button
            onClick={handleGoToDashboard}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Já sou assinante
          </button>
        </div>
      </div>
    </div>
  );
}
