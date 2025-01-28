"use client"; // Marque o componente como Client Component
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import Header from "../../components/Header";
import Loader from "../../components/Loader"; // Importe o Loader

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Estado para "Esqueci minha senha"
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Mensagem de sucesso
  const [isLoading, setIsLoading] = useState(false); // Estado para mostrar o carregamento
  const router = useRouter();

  const translateError = (error: any) => {
    switch (error.message) {
      case "Invalid login credentials":
        return "Credenciais inválidas. Verifique seu email e senha.";
      case "Email not confirmed":
        return "Email não confirmado. Verifique sua caixa de entrada.";
      case "User already registered":
        return "Usuário já registrado. Faça login ou recupere sua senha.";
      case "Password should be at least 6 characters":
        return "A senha deve ter pelo menos 6 caracteres.";
      case "To signup, please provide your email":
        return "Para se registrar, forneça um email válido.";
      default:
        return "Ocorreu um erro. Tente novamente mais tarde.";
    }
  };

  const handleAuth = async () => {
    setIsLoading(true); // Ativa o carregamento
    setError(null); // Limpa erros anteriores
    setSuccessMessage(null);

    try {
      // Login com email/senha
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push("/redirect"); // Redireciona após autenticação
    } catch (error: any) {
      setError(translateError(error)); // Exibe o erro
    } finally {
      setIsLoading(false); // Desativa o carregamento
    }
  };

  const handleForgotPassword = async () => {
    setError(null); // Limpa erros anteriores
    setSuccessMessage(null);

    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) throw error;

      setSuccessMessage(
        "Um email com instruções para redefinir sua senha foi enviado!"
      );
    } catch (error: any) {
      setError(
        "Não foi possível enviar o email. Verifique se o endereço está correto."
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-card text-center w-96">
          <h1 className="text-2xl font-bold text-primary mb-4">
            {isForgotPassword ? "Recuperar Senha" : "Login"}
          </h1>
          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
              {error}
            </div>
          )}
          {successMessage && (
            <div className="bg-green-100 text-green-700 p-2 rounded mb-4">
              {successMessage}
            </div>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          {!isForgotPassword && (
            <>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <button
                onClick={handleAuth}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300 w-full mb-4"
              >
                {isLoading ? (
                  <Loader /> // Exibe o Loader enquanto está carregando
                ) : (
                  "Entrar"
                )}
              </button>
            </>
          )}
          {isForgotPassword ? (
            <button
              onClick={handleForgotPassword}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300 w-full mb-4"
            >
              Enviar Instruções
            </button>
          ) : (
            <button
              onClick={() => setIsForgotPassword(true)}
              className="text-blue-500 hover:underline mb-4"
            >
              Esqueci minha senha
            </button>
          )}
          <p className="text-gray-600">
            {!isForgotPassword ? (
              <>
                Não tem uma conta?{" "}
                <button
                  onClick={() => router.push("/register")}
                  className="text-blue-500 hover:underline"
                >
                  Registre-se
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsForgotPassword(false)}
                className="text-blue-500 hover:underline"
              >
                Voltar ao login
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
