export default function Sobre() {
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-primary mb-6 font-sans">Quem Somos</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos uma empresa focada em simplificar a gestão de condomínios no Brasil. Nossa missão é oferecer soluções inovadoras e acessíveis que realmente façam a diferença no dia a dia dos síndicos e moradores.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Nosso compromisso é com a eficiência, transparência e acessibilidade, sempre ouvindo as necessidades dos nossos clientes.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/fallout.png"
              alt="Sobre Nós"
              className="rounded-lg shadow-card max-h-[200px] object-contain ml-auto"
            />
          </div>
        </div>
      </section>
    );
  }
  