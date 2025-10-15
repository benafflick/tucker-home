export default function Services() {
  const services = [
    {
      title: "Kitchen Remodeling",
      image: "/service1.jpg",
    },
    {
      title: "Bathroom Renovation",
      image: "/service2.jpg",
    },
    {
      title: "Interior Design",
      image: "/service3.jpg",
    },
    {
      title: "Exterior Facelifts",
      image: "/service4.jpg",
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-gray-800 font-medium">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
