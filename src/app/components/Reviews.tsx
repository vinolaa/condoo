export default function Reviews() {
    const testimonials = [
        {
          name: "Ana Paula",
          role: "Síndica do Condomínio Nova Vida",
          feedback:
            "Desde que começamos a usar o CondoManager, nossa gestão ficou mais eficiente e transparente. Os moradores adoram os relatórios!",
          avatar: "/review_avatar/avatar-m-1.jpg",
        },
        {
          name: "Carlos Eduardo",
          role: "Administrador do Edifício Central",
          feedback:
            "Com o CondoManager economizamos tempo e recursos. Agora consigo focar no que realmente importa: o bem-estar dos moradores.",
          avatar: "/review_avatar/avatar-h-1.jpg",
        },
        {
          name: "Mariana Lopes",
          role: "Síndica Profissional",
          feedback:
            "A plataforma é intuitiva e prática. Recomendo para todos os síndicos que buscam otimizar suas tarefas!",
          avatar: "/review_avatar/avatar-m-2.png",
        },
      ];
  
    return (
      <section className="bg-gray-300 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-12 font-sans">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white shadow-card rounded-lg">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-bold text-primary mb-2">{testimonial.name}</h3>
                <p className="text-sm text-gray-500 italic">{testimonial.role}</p>
                <p className="text-gray-700 mt-4">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  