"use client"
import { useState, useEffect } from "react"
import Sidebar from "../../components/Sidebar"
import { DollarSign, TrendingUp, TrendingDown, Activity } from "lucide-react"

export default function Financeiro() {
  const [resumoFinanceiro, setResumoFinanceiro] = useState({
    saldo_atual: 10000.00,
    receitas_mes: 5000.00,
    despesas_mes: 3000.00,
    taxa_inadimplencia: 5.00
  })

  const [transacoes, setTransacoes] = useState([
    { id: 1, data: "2025-01-20", descricao: "Pagamento condomínio", tipo: "receita", valor: 1000.00 },
    { id: 2, data: "2025-01-18", descricao: "Compra de materiais", tipo: "despesa", valor: 200.00 },
    { id: 3, data: "2025-01-15", descricao: "Pagamento condomínio", tipo: "receita", valor: 1000.00 },
    { id: 4, data: "2025-01-10", descricao: "Reparos elétricos", tipo: "despesa", valor: 500.00 },
    { id: 5, data: "2025-01-05", descricao: "Pagamento condomínio", tipo: "receita", valor: 1000.00 },
    { id: 6, data: "2025-01-02", descricao: "Limpeza do prédio", tipo: "despesa", valor: 300.00 },
    { id: 7, data: "2025-01-01", descricao: "Pagamento condomínio", tipo: "receita", valor: 1000.00 },
    { id: 8, data: "2024-12-30", descricao: "Gastos com energia", tipo: "despesa", valor: 400.00 },
    { id: 9, data: "2024-12-28", descricao: "Pagamento condomínio", tipo: "receita", valor: 1000.00 },
    { id: 10, data: "2024-12-25", descricao: "Reparo hidráulico", tipo: "despesa", valor: 250.00 }
  ])

  useEffect(() => {
    // Dados estáticos, então não há necessidade de fetch
    setResumoFinanceiro(resumoFinanceiro)
    setTransacoes(transacoes)
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Financeiro</h1>

        {resumoFinanceiro && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <FinanceCard
              icon={<DollarSign size={24} className="text-green-500" />}
              title="Saldo Atual"
              value={`R$ ${resumoFinanceiro.saldo_atual.toFixed(2)}`}
            />
            <FinanceCard
              icon={<TrendingUp size={24} className="text-blue-500" />}
              title="Receitas (Mês Atual)"
              value={`R$ ${resumoFinanceiro.receitas_mes.toFixed(2)}`}
            />
            <FinanceCard
              icon={<TrendingDown size={24} className="text-red-500" />}
              title="Despesas (Mês Atual)"
              value={`R$ ${resumoFinanceiro.despesas_mes.toFixed(2)}`}
            />
            <FinanceCard
              icon={<Activity size={24} className="text-yellow-500" />}
              title="Taxa de Inadimplência"
              value={`${resumoFinanceiro.taxa_inadimplencia.toFixed(2)}%`}
            />
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-4">Últimas Transações</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descrição
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transacoes.map((transacao) => (
                <tr key={transacao.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(transacao.data).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{transacao.descricao}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded ${
                        transacao.tipo === "receita" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                      }`}
                    >
                      {transacao.tipo === "receita" ? "Receita" : "Despesa"}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={transacao.tipo === "receita" ? "text-green-600" : "text-red-600"}>
                      R$ {transacao.valor.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

interface FinanceCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const FinanceCard = ({ icon, title, value }: FinanceCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="ml-2 text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-3xl font-bold">{value}</p>
  </div>
)
