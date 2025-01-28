"use client"
import { useEffect, useState } from "react"
import { User } from "@supabase/supabase-js"
import { useRouter } from "next/navigation"
import { supabase } from "@/app/lib/supabaseClient"
import Sidebar from "../components/Sidebar"
import { Users, FileText, Calendar, DollarSign, AlertTriangle } from "lucide-react"

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) {
        router.push("/login")
      } else {
        setUser(user)
      }
      setLoading(false)
    }

    checkUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard icon={<Users size={24} />} title="Total de Moradores" value="120" />
          <DashboardCard icon={<FileText size={24} />} title="Documentos Pendentes" value="3" />
          <DashboardCard icon={<Calendar size={24} />} title="Reservas Hoje" value="2" />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Avisos Importantes</h2>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 flex items-center">
            <AlertTriangle size={24} className="mr-2" />
            <p>Reunião de condomínio marcada para o próximo sábado às 10h.</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-8 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Sair
        </button>
      </div>
    </div>
  )
}

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

const DashboardCard = ({ icon, title, value }: DashboardCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="ml-2 text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-3xl font-bold">{value}</p>
  </div>
)
