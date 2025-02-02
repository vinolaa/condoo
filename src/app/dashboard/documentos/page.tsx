"use client"
import { useState, useEffect } from "react"
import Sidebar from "../../components/Sidebar"
import { FileText, Download } from "lucide-react"

export default function Documentos() {
  // Adapte a interface para suportar o retorno do S3
  interface Documento {
    id: string;
    name: string;
    bucket_id: string;
    owner: string;
    created_at: string;
    updated_at: string;
    last_accessed_at: string;
    metadata: Record<string, any>;
    url?: string;  // URL do arquivo gerada via S3
  }

  const [documentos, setDocumentos] = useState<Documento[]>([])

  useEffect(() => {
    fetchDocumentos()
  }, [])

  // Substituindo a função fetchDocumentos por dados estáticos
  function fetchDocumentos() {
    const documentosTeste: Documento[] = [
      {
        id: "1",
        name: "Regulamento Interno.pdf",
        bucket_id: "documentos",
        owner: "admin",
        created_at: "2025-01-01T10:00:00Z",
        updated_at: "2025-01-02T15:00:00Z",
        last_accessed_at: "2025-01-15T12:00:00Z",
        metadata: { descricao: "Regulamento interno do condomínio" },
        url: "https://exlbbddxndzhqqrmspci.supabase.co/storage/v1/object/sign/documentos/Proposta%20TCC%20-%20Vinicius%20Oliveira%20-%20Correcao%20Vinicius.odt?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudG9zL1Byb3Bvc3RhIFRDQyAtIFZpbmljaXVzIE9saXZlaXJhIC0gQ29ycmVjYW8gVmluaWNpdXMub2R0IiwiaWF0IjoxNzM4MTQ1ODg5LCJleHAiOjE3Mzg3NTA2ODl9.es-b4c-neaaccyzol9QbZQnABZFBvQImlgiKmYuW42I"
      },
      {
        id: "2",
        name: "Manual de Uso da Piscina.pdf",
        bucket_id: "documentos",
        owner: "admin",
        created_at: "2025-01-05T11:00:00Z",
        updated_at: "2025-01-06T16:00:00Z",
        last_accessed_at: "2025-01-20T09:00:00Z",
        metadata: { descricao: "Manual de uso da piscina e áreas comuns" },
        url: "https://exlbbddxndzhqqrmspci.supabase.co/storage/v1/object/sign/documentos/PlotSquared-Bukkit-3.823.jar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkb2N1bWVudG9zL1Bsb3RTcXVhcmVkLUJ1a2tpdC0zLjgyMy5qYXIiLCJpYXQiOjE3MzgxNDU5NDgsImV4cCI6MTczODc1MDc0OH0.uwau8TzixTBSwsdj2QIaeHviYLVwkKu2TBoPZn8QQgk"
      },
      {
        id: "3",
        name: "Contrato de Locação.pdf",
        bucket_id: "documentos",
        owner: "admin",
        created_at: "2025-01-07T14:00:00Z",
        updated_at: "2025-01-08T17:00:00Z",
        last_accessed_at: "2025-01-20T18:00:00Z",
        metadata: { descricao: "Contrato de locação de unidade no condomínio" },
        url: "https://exlbbddxndzhqqrmspci.supabase.co/storage/v1/object/public/documentos/Contrato%20de%20Locação.pdf"
      },
      {
        id: "4",
        name: "Planta Baixa.pdf",
        bucket_id: "documentos",
        owner: "admin",
        created_at: "2025-01-10T09:30:00Z",
        updated_at: "2025-01-11T10:30:00Z",
        last_accessed_at: "2025-01-20T14:30:00Z",
        metadata: { descricao: "Planta baixa do prédio" },
        url: "https://exlbbddxndzhqqrmspci.supabase.co/storage/v1/object/public/documentos/Planta%20Baixa.pdf"
      },
      {
        id: "5",
        name: "Relatório de Manutenção.pdf",
        bucket_id: "documentos",
        owner: "admin",
        created_at: "2025-01-12T12:00:00Z",
        updated_at: "2025-01-13T13:30:00Z",
        last_accessed_at: "2025-01-19T16:00:00Z",
        metadata: { descricao: "Relatório mensal de manutenção das áreas comuns" },
        url: "https://exlbbddxndzhqqrmspci.supabase.co/storage/v1/object/public/documentos/Relatório%20de%20Manutenção.pdf"
      },
      {
        id: "6",
        name: "Aviso de Reunião.pdf",
        bucket_id: "documentos",
        owner: "admin",
        created_at: "2025-01-15T10:15:00Z",
        updated_at: "2025-01-16T11:15:00Z",
        last_accessed_at: "2025-01-19T12:15:00Z",
        metadata: { descricao: "Aviso de reunião para todos os moradores" },
        url: "https://exlbbddxndzhqqrmspci.supabase.co/storage/v1/object/public/documentos/Aviso%20de%20Reunião.pdf"
      },
      {
        id: "7",
        name: "Manual do Morador.pdf",
        bucket_id: "documentos",
        owner: "admin",
        created_at: "2025-01-18T13:00:00Z",
        updated_at: "2025-01-19T14:00:00Z",
        last_accessed_at: "2025-01-20T15:30:00Z",
        metadata: { descricao: "Manual de boas práticas para moradores" },
        url: "https://exlbbddxndzhqqrmspci.supabase.co/storage/v1/object/public/documentos/Manual%20do%20Morador.pdf"
      },
      {
        id: "8",
        name: "Formulário de Solicitação.pdf",
        bucket_id: "documentos",
        owner: "admin",
        created_at: "2025-01-19T15:00:00Z",
        updated_at: "2025-01-20T16:00:00Z",
        last_accessed_at: "2025-01-20T17:00:00Z",
        metadata: { descricao: "Formulário para solicitação de melhorias no prédio" },
        url: "https://exlbbddxndzhqqrmspci.supabase.co/storage/v1/object/public/documentos/Formulário%20de%20Solicitação.pdf"
      },
      {
        id: "9",
        name: "Regulamento de Estacionamento.pdf",
        bucket_id: "documentos",
        owner: "admin",
        created_at: "2025-01-20T16:30:00Z",
        updated_at: "2025-01-21T17:00:00Z",
        last_accessed_at: "2025-01-22T09:30:00Z",
        metadata: { descricao: "Regulamento de uso das vagas de estacionamento" },
        url: "https://exlbbddxndzhqqrmspci.supabase.co/storage/v1/object/public/documentos/Regulamento%20de%20Estacionamento.pdf"
      },
      {
        id: "10",
        name: "Relatório de Segurança.pdf",
        bucket_id: "documentos",
        owner: "admin",
        created_at: "2025-01-22T17:00:00Z",
        updated_at: "2025-01-23T18:30:00Z",
        last_accessed_at: "2025-01-24T20:00:00Z",
        metadata: { descricao: "Relatório de segurança do condomínio" },
        url: "https://exlbbddxndzhqqrmspci.supabase.co/storage/v1/object/public/documentos/Relatório%20de%20Segurança.pdf"
      },
    ];

    setDocumentos(documentosTeste);
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">Documentos do Condomínio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentos.map((documento) => (
            <div key={documento.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FileText size={24} className="text-blue-500 mr-2" />
                <h3 className="text-lg font-semibold">{documento.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{documento.metadata?.descricao || "Descrição do documento"}</p>
              {documento.url && (
                <a href={documento.url} download className="flex items-center text-blue-500 hover:text-blue-600">
                  <Download size={20} className="mr-2" />
                  Download
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
