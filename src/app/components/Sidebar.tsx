import Link from "next/link"
import { Home, Users, FileText, Calendar, DollarSign, Settings, LogOut } from "lucide-react"

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Gestão de Condomínio</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
              <Home size={20} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/moradores" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
              <Users size={20} />
              <span>Moradores</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/documentos" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
              <FileText size={20} />
              <span>Documentos</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/reservas" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
              <Calendar size={20} />
              <span>Reservas</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/financeiro" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
              <DollarSign size={20} />
              <span>Financeiro</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/configuracoes" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
              <Settings size={20} />
              <span>Configurações</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

