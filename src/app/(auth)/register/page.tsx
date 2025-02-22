"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabaseClient";
import Header from "../../components/Header";

export default function Register() {
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });
  const router = useRouter();

  const validatePasswordRules = (password: string) => ({
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  });

  const handlePasswordChange = (password: string) => {
    setPassword(password);
    setPasswordStrength(validatePasswordRules(password));
  };

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleRegister = async () => {
    setError(null);

    if (email !== confirmEmail) {
      setError("Os emails não coincidem.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma minúscula, um número e um caractere especial."
      );
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            phone,
          },
        },
      });

      if (error) throw error;

      alert("Verifique seu email para confirmar o registro!");
      router.push("/login");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-card text-center w-96">
          <h1 className="text-2xl font-bold text-primary mb-4">Registro</h1>
          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
              {error}
            </div>
          )}
          <input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <input
            type="email"
            placeholder="Confirmar Email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <div className="text-left mb-4">
            <p className="text-gray-600 text-sm font-medium mb-2">Progresso da senha:</p>
            <ul>
              <li
                className={`${
                  passwordStrength.minLength ? "text-green-500" : "text-gray-400"
                }`}
              >
                {passwordStrength.minLength ? "✅" : "❌"} Pelo menos 8 caracteres
              </li>
              <li
                className={`${
                  passwordStrength.hasUpperCase ? "text-green-500" : "text-gray-400"
                }`}
              >
                {passwordStrength.hasUpperCase ? "✅" : "❌"} Uma letra maiúscula
              </li>
              <li
                className={`${
                  passwordStrength.hasLowerCase ? "text-green-500" : "text-gray-400"
                }`}
              >
                {passwordStrength.hasLowerCase ? "✅" : "❌"} Uma letra minúscula
              </li>
              <li
                className={`${
                  passwordStrength.hasNumber ? "text-green-500" : "text-gray-400"
                }`}
              >
                {passwordStrength.hasNumber ? "✅" : "❌"} Um número
              </li>
              <li
                className={`${
                  passwordStrength.hasSpecialChar ? "text-green-500" : "text-gray-400"
                }`}
              >
                {passwordStrength.hasSpecialChar ? "✅" : "❌"} Um caractere especial
              </li>
            </ul>
          </div>
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleRegister}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition duration-300 w-full mb-4"
          >
            Registrar
          </button>
          <p className="text-gray-600">
            Já tem uma conta?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
