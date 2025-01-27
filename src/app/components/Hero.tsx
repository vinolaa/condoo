export default function Hero() {
    return (
      <section className="bg-gradient-primary text-white py-20 animate-fadeIn">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold font-sans mb-4">
            Simplify Condominium Management
          </h1>
          <p className="text-xl mb-8">
            A modern solution for managing your condominium efficiently and effortlessly.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg shadow-button hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    );
  }