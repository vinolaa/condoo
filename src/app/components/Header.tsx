import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-sans">
          CondoManager
        </Link>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li>
              <Link href="/features" className="hover:text-gray-100 transition duration-300">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-gray-100 transition duration-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-100 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
          {/* Botão de Login */}
          <Link
            href="/login"
            className="bg-white text-primary px-6 py-2 rounded-lg shadow-button hover:bg-gray-100 transition duration-300 font-sans font-semibold"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}