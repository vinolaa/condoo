export default function Footer() {
    return (
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto text-center">
          <p className="font-sans">
            &copy; {new Date().getFullYear()} Condoo. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    );
  }