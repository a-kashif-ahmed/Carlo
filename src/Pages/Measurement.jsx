import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import chestgif from "../assets/chest.gif";
import waistgif from "../assets/waist.gif";
import sleeveimg from "../assets/sleeve.jpg";
import shoulderimg from "../assets/shoulder.jpg";
import { useNavigate } from "react-router-dom";

export default function MeasurementGuide() {

  const navigate = useNavigate();

  // PREVIOUS DATA
  const storedData =
    JSON.parse(localStorage.getItem("formi")) || {};

  // STEP
  const [step, setStep] = useState(0);

  // MEASUREMENTS
  const [measurementsData, setMeasurementsData] =
    useState({
      chest: storedData.chest || "",
      waist: storedData.waist || "",
      shoulders: storedData.shoulders || "",
      sleeve: storedData.sleeve || "",
      inseam: storedData.inseam || "",
    });

  // MEASUREMENT GUIDE
  const measurements = [
    {
      title: "Chest",
      field: "chest",
      description:
        "Wrap the tape around the fullest part of your chest while keeping it level.",
      image: chestgif,
    },

    {
      title: "Waist",
      field: "waist",
      description:
        "Measure around your natural waistline comfortably.",
      image: waistgif,
    },

    {
      title: "Shoulders",
      field: "shoulders",
      description:
        "Measure shoulder edge to shoulder edge across your back.",
      image: shoulderimg,
    },

    {
      title: "Sleeve Length",
      field: "sleeve",
      description:
        "Measure from shoulder seam to wrist bone.",
      image: sleeveimg,
    },

    {
      title: "Inseam",
      field: "inseam",
      description:
        "Measure from crotch to bottom ankle.",
      image: waistgif,
    },
  ];

  // HANDLE INPUT
  const handleInputChange = (value) => {

    setMeasurementsData({
      ...measurementsData,
      [measurements[step].field]: value,
    });
  };

  // SAVE + CHECKOUT
  const handleMeasurements = () => {

    const updatedData = {
      ...storedData,
      ...measurementsData,
    };

    localStorage.setItem(
      "formi",
      JSON.stringify(updatedData)
    );

    navigate("/checkout");
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0b0b0b] text-white px-6 py-20 flex items-center justify-center">

        <div className="max-w-6xl w-full">

          {/* HEADER */}
          <div className="mb-16 text-center">

            <h1 className="text-5xl md:text-6xl font-light">
              Measurement Guide
            </h1>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
              Follow our step-by-step tailoring guide
              for accurate suit measurements.
            </p>

          </div>

          {/* CARD */}
          <div className="grid md:grid-cols-2 gap-16 items-center bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">

            {/* LEFT */}
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >

              <span className="text-yellow-400 tracking-[0.3em] uppercase text-sm">
                Step {step + 1}
              </span>

              <h2 className="text-4xl font-light mt-4 mb-6">
                {measurements[step].title}
              </h2>

              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                {measurements[step].description}
              </p>

              {/* INPUT */}
              <input
                type="number"
                placeholder={`Enter ${measurements[step].title} (inches)`}
                value={
                  measurementsData[
                    measurements[step].field
                  ]
                }
                onChange={(e) =>
                  handleInputChange(e.target.value)
                }
                className="w-full p-5 rounded-2xl bg-black/40 border border-white/10 outline-none text-white"
              />

              {/* NAVIGATION */}
              <div className="flex gap-4 mt-12">

                {step > 0 && (
                  <button
                    onClick={() =>
                      setStep((prev) => prev - 1)
                    }
                    className="px-8 py-4 rounded-full border border-white/10 hover:border-yellow-400 transition"
                  >
                    Back
                  </button>
                )}

                {step < measurements.length - 1 ? (
                  <button
                    onClick={() =>
                      setStep((prev) => prev + 1)
                    }
                    className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:scale-[1.02] transition"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleMeasurements}
                    className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:scale-[1.02] transition"
                  >
                    Proceed To Checkout
                  </button>
                )}

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              key={measurements[step].image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >

              <img
                src={measurements[step].image}
                alt=""
                className="rounded-[32px] w-full max-w-[250px] object-cover border border-white/10"
              />

            </motion.div>

          </div>

          {/* PROGRESS */}
          <div className="mt-10">

            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

              <div
                className="h-full bg-yellow-400 transition-all duration-500"
                style={{
                  width: `${
                    ((step + 1) / measurements.length) *
                    100
                  }%`,
                }}
              />

            </div>

          </div>

        </div>

      </section>
    </>
  );
}