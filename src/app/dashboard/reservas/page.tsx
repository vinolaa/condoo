"use client";
import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { Calendar, Clock, User, MapPin } from 'lucide-react';

export default function Reservas() {
  interface Reserva {
    id: number;
    area: string;
    status: string;
    data: string;
    horario: string;
    morador: string;
    apartamento: string;
  }

  const [reservas, setReservas] = useState<Reserva[]>([]);

  useEffect(() => {
    fetchReservas();
  }, []);

  // Substituindo a função fetchReservas por dados estáticos
  function fetchReservas() {
    const reservasTeste: Reserva[] = [
      { id: 1, area: 'Salão de Festas', status: 'Confirmada', data: '2025-02-10', horario: '14:00', morador: 'João Silva', apartamento: '101' },
      { id: 2, area: 'Piscina', status: 'Pendente', data: '2025-02-11', horario: '16:00', morador: 'Maria Oliveira', apartamento: '202' },
      { id: 3, area: 'Churrasqueira', status: 'Confirmada', data: '2025-02-12', horario: '18:00', morador: 'Carlos Pereira', apartamento: '303' },
      { id: 4, area: 'Sala de Jogos', status: 'Confirmada', data: '2025-02-13', horario: '10:00', morador: 'Ana Costa', apartamento: '404' },
      { id: 5, area: 'Salão de Festas', status: 'Pendente', data: '2025-02-14', horario: '15:00', morador: 'Ricardo Almeida', apartamento: '505' },
      { id: 6, area: 'Piscina', status: 'Cancelada', data: '2025-02-15', horario: '08:00', morador: 'Luciana Santos', apartamento: '606' },
      { id: 7, area: 'Churrasqueira', status: 'Confirmada', data: '2025-02-16', horario: '19:00', morador: 'Felipe Martins', apartamento: '707' },
      { id: 8, area: 'Sala de Jogos', status: 'Pendente', data: '2025-02-17', horario: '11:00', morador: 'Juliana Pereira', apartamento: '808' },
      { id: 9, area: 'Salão de Festas', status: 'Confirmada', data: '2025-02-18', horario: '17:00', morador: 'Pedro Lima', apartamento: '909' },
      { id: 10, area: 'Piscina', status: 'Cancelada', data: '2025-02-19', horario: '13:00', morador: 'Fernanda Rocha', apartamento: '1010' }
    ];

    setReservas(reservasTeste);
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Reservas de Áreas Comuns</h1>
        <div className="grid gap-6">
          {reservas.map((reserva) => (
            <div key={reserva.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{reserva.area}</h3>
                <span className={`px-2 py-1 rounded ${
                  reserva.status === 'Confirmada' ? 'bg-green-200 text-green-800' :
                  reserva.status === 'Pendente' ? 'bg-yellow-200 text-yellow-800' : 
                  'bg-red-200 text-red-800'
                }`}>
                  {reserva.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2 text-gray-500" />
                  <span>{new Date(reserva.data).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-gray-500" />
                  <span>{reserva.horario}</span>
                </div>
                <div className="flex items-center">
                  <User size={20} className="mr-2 text-gray-500" />
                  <span>{reserva.morador}</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="mr-2 text-gray-500" />
                  <span>Apto {reserva.apartamento}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
