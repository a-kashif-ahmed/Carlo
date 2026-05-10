import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1600')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gold Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 blur-3xl rounded-full" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        <div className="w-28 h-[2px] bg-yellow-400 mx-auto mb-8" />

        <h1 className="text-5xl md:text-7xl font-light leading-tight">
          Welcome to a{" "}
          <span className="text-yellow-400">
            tailored experience
          </span>{" "}
          of timeless elegance.
        </h1>

        <p className="mt-8 text-gray-300 text-lg max-w-2xl mx-auto">
          Luxury craftsmanship meets modern personalization.
          Design your perfect suit with premium materials,
          refined styling, and intelligent measurements.
        </p>

        <a href="/customize"><button  className="mt-12 px-10 py-5 rounded-full bg-gradient-to-r from-yellow-700 to-yellow-400 text-black font-semibold hover:scale-105 transition">
          Customize Your Suit
        </button></a>
      </motion.div>
    </section>
  );
}