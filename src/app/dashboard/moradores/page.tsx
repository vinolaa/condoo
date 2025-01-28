"use client"
import { useState, useEffect } from "react"
import Sidebar from "../../components/Sidebar"
import { supabase } from "@/app/lib/supabaseClient"

export default function Moradores() {
  interface Morador {
    id: number;
    nome: string;
    apartamento: string;
    bloco: string;
    contato: string;
  }

  const [moradores, setMoradores] = useState<Morador[]>([])

  useEffect(() => {
    // Gerar moradores genéricos
    const moradoresGerados: Morador[] = Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      nome: `Morador ${index + 1}`,
      apartamento: `Apt. ${Math.floor(Math.random() * 100 + 1)}`,
      bloco: `Bloco ${String.fromCharCode(65 + Math.floor(Math.random() * 5))}`, // Bloco A, B, C, etc.
      contato: `(11) 9${Math.floor(Math.random() * 90000000 + 10000000)}`,
    }))
    
    setMoradores(moradoresGerados)
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Moradores</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Apartamento
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Bloco
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Contato
              </th>
            </tr>
          </thead>
          <tbody>
            {moradores.map((morador) => (
              <tr key={morador.id}>
                <td className="px-6 py-4 whitespace-nowrap">{morador.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap">{morador.apartamento}</td>
                <td className="px-6 py-4 whitespace-nowrap">{morador.bloco}</td>
                <td className="px-6 py-4 whitespace-nowrap">{morador.contato}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
