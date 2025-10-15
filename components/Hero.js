export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 drop-shadow-lg">
          Transform Your Home with <br />
          <span className="text-[#B48B5E]">Modern Renovations</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
          From concept to completion — we design and craft timeless, elegant
          spaces that elevate everyday living.
        </p>
      </div>
    </section>
  );
}
