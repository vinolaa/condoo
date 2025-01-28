"use client"
import { useState, useEffect } from "react"
import Sidebar from "../../components/Sidebar"
import { supabase } from "@/app/lib/supabaseClient"
import { Save } from "lucide-react"

export default function Configuracoes() {
  const [configuracoes, setConfiguracoes] = useState({
    nome_condominio: "",
    endereco: "",
    cnpj: "",
    email_contato: "",
    telefone_contato: "",
    dia_vencimento: "",
    valor_taxa_condominio: "",
    multa_atraso_percentual: "",
  })

  useEffect(() => {
    fetchConfiguracoes()
  }, [])

  async function fetchConfiguracoes() {
    const { data, error } = await supabase.from("configuracoes").select("*").single()

    if (error) console.error("Erro ao buscar configurações:", error)
    else setConfiguracoes(data)
  }

interface Configuracoes {
    nome_condominio: string;
    endereco: string;
    cnpj: string;
    email_contato: string;
    telefone_contato: string;
    dia_vencimento: string;
    valor_taxa_condominio: string;
    multa_atraso_percentual: string;
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfiguracoes((prev) => ({ ...prev, [name]: value }));
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await supabase.from("configuracoes").upsert<Configuracoes>(configuracoes)

    if (error) console.error("Erro ao salvar configurações:", error)
    else alert("Configurações salvas com sucesso!")
}

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Configurações</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nome_condominio" className="block text-sm font-medium text-gray-700 mb-1">
                Nome do Condomínio
              </label>
              <input
                type="text"
                id="nome_condominio"
                name="nome_condominio"
                value={configuracoes.nome_condominio}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="endereco" className="block text-sm font-medium text-gray-700 mb-1">
                Endereço
              </label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={configuracoes.endereco}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-1">
                CNPJ
              </label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                value={configuracoes.cnpj}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email_contato" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail de Contato
              </label>
              <input
                type="email"
                id="email_contato"
                name="email_contato"
                value={configuracoes.email_contato}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="telefone_contato" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone de Contato
              </label>
              <input
                type="tel"
                id="telefone_contato"
                name="telefone_contato"
                value={configuracoes.telefone_contato}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="dia_vencimento" className="block text-sm font-medium text-gray-700 mb-1">
                Dia de Vencimento da Taxa de Condomínio
              </label>
              <input
                type="number"
                id="dia_vencimento"
                name="dia_vencimento"
                min="1"
                max="31"
                value={configuracoes.dia_vencimento}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="valor_taxa_condominio" className="block text-sm font-medium text-gray-700 mb-1">
                Valor da Taxa de Condomínio (R$)
              </label>
              <input
                type="number"
                id="valor_taxa_condominio"
                name="valor_taxa_condominio"
                step="0.01"
                value={configuracoes.valor_taxa_condominio}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="multa_atraso_percentual" className="block text-sm font-medium text-gray-700 mb-1">
                Multa por Atraso (%)
              </label>
              <input
                type="number"
                id="multa_atraso_percentual"
                name="multa_atraso_percentual"
                step="0.01"
                value={configuracoes.multa_atraso_percentual}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Save size={20} className="mr-2" />
              Salvar Configurações
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

