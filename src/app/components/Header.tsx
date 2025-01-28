import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-sans">
          CondoManager
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="/login"
            className="bg-white text-primary px-6 py-2 rounded-lg shadow-button hover:bg-gray-100 transition duration-300 font-sans font-semibold"
          >
            Entrar
          </Link>
        </nav>
      </div>
    </header>
  );
}