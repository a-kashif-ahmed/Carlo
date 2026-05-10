const steps = [
  {
    title: "Step 1 — Suit Type",
    options: ["Classic Suit", "Double-Breasted Suit"],
  },
  {
    title: "Step 2 — Material Quality",
    options: ["Smart Material", "Premium Material"],
  },
  {
    title: "Step 3 — Suit Design",
    options: [
      "Milano",
      "Royal Black",
      "Modern Elite",
      "Executive Gold",
      "Vintage Noir",
    ],
  },
  {
    title: "Step 4 — Buttons",
    options: ["Metal Buttons", "Plastic Buttons"],
  },
  {
    title: "Step 5 — Embroidery",
    options: ["Add Initials", "No Embroidery"],
  },
  {
    title: "Step 6 — Pants Customization",
    options: [
      "Classic Fit",
      "Side Belts with Buckles",
      "Slim Fit",
    ],
  },
];

export default function CustomizationStepper() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-light mb-16">
          Customize Your Suit
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-500/40 transition"
            >
              <h3 className="text-2xl mb-8 text-yellow-400">
                {step.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {step.options.map((option, idx) => (
                  <button
                    key={idx}
                    className="px-6 py-4 rounded-xl bg-black/40 border border-white/10 hover:bg-yellow-500 hover:text-black transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}