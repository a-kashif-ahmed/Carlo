export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <a className="" href="/"><h1 className="text-2xl tracking-[0.3em] font-light text-white">
          CARLO MARIOTTI
        </h1></a>

        <div className="flex gap-8 text-gray-300">
          <a className="hover:border-b-2 transition-all hover:translate-y-1" href="/">Home</a>
          <a className="hover:border-b-2 transition-all hover:translate-y-1"href="/customize">Customize</a>
          <a className="hover:border-b-2 transition-all hover:translate-y-1"href="/">Measurements</a>
          <a className="hover:border-b-2 transition-all hover:translate-y-1"href="/contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}