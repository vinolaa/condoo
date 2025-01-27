export default function Features() {
    const features = [
      {
        title: 'Easy Payments',
        description: 'Streamline rent and fee collection with automated reminders.',
        icon: '💳',
      },
      {
        title: 'Maintenance Tracking',
        description: 'Track and manage maintenance requests seamlessly.',
        icon: '🔧',
      },
      {
        title: 'Community Communication',
        description: 'Keep residents informed with announcements and updates.',
        icon: '📢',
      },
    ];
  
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-12 font-sans">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-card rounded-lg animate-slideUp"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2 font-sans">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }