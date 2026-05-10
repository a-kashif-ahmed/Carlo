export default function MeasurementAssistant() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-black to-[#111]">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-light mb-10">
          Intelligent Measurement Assistant
        </h2>

        <p className="text-gray-400 text-lg mb-12">
          Provide a few details and receive estimated
          measurements tailored to your physique.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <input
            type="number"
            placeholder="Age"
            className="bg-white/5 border border-white/10 rounded-2xl p-5 outline-none"
          />

          <input
            type="number"
            placeholder="Height (cm)"
            className="bg-white/5 border border-white/10 rounded-2xl p-5 outline-none"
          />

          <input
            type="number"
            placeholder="Weight (kg)"
            className="bg-white/5 border border-white/10 rounded-2xl p-5 outline-none"
          />

        </div>

        <button className="mt-10 px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold">
          Generate Measurements
        </button>

      </div>
    </section>
  );
}