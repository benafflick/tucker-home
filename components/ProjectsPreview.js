export default function ProjectsPreview() {
  const projects = [
    {
      id: 1,
      src: "./modernkitchen.jpg",
      title: "Modern Kitchen",
    },
    {
      id: 2,
      src: "./elegant-living-room.jpg",
      title: "Elegant Living Room",
    },
    {
      id: 3,
      src: "./cozy-bathroom.jpg",
      title: "Cozy Bathroom",
    },
    {
      id: 4,
      src: "./exterior.jpg",
      title: "Exterior Remodel",
    },
    {
      id: 5,
      src: "./luxury-bedroom.jpg",
      title: "Luxury Bedroom Remodel",
    },
    {
      id: 6,
      src: "./outdoor-patches.jpg",
      title: "Outdoor Patio Upgrade",
    },
    {
      id: 7,
      src: "./custom-staircase.jpg",
      title: "Custom Staircase Design",
    },
    {
      id: 8,
      src: "./open-concept.jpg",
      title: "Open Concept Living Space",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-[#f8f7f5]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
          Recent Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="relative group overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={p.src}
                alt={p.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-medium">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
