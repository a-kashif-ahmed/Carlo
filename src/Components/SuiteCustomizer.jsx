import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import buttonsbg from "../assets/c.jpg";
import clothbg from "../assets/d.jpg";
import suitebg from "../assets/e.jpg";

import chestgif from '../assets/chest.gif'
import waistgif from '../assets/waist.gif'
import sleeve from '../assets/sleeve.jpg'
import shoulder from '../assets/shoulder.jpg'

/* Lottie Animations */
import athleticAnim from "../assets/lottie/athletic.json";
import regularAnim from "../assets/lottie/regular.json";
import heavyAnim from "../assets/lottie/heavy.json";


export default function SuitCustomizer() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [measurementStep, setMeasurementStep] = useState(0);

    
    const stepBackgrounds = {
        1: suitebg,
        2: clothbg,
        3: suitebg,
        4: buttonsbg,
        5: clothbg,
        6: suitebg,
    };

    const [formData, setFormData] = useState({
  suitType: "",
  material: "",
  design: "",
  buttons: "",
  embroidery: "",
  pants: "",

  height: "",
  weight: "",
  bodyType: "",
  fitPreference: "",

  chest: "",
  waist: "",
  shoulders: "",
  sleeve: "",
  inseam: "",
});

    const nextStep = () => {
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    const handleSelect = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });

        nextStep();
    };


    /* BODY ANIMATION LOGIC */

    const getBodyAnimation = () => {

        const weight = Number(formData.weight);
        const height = Number(formData.height);

        if (formData.bodyType === "Athletic") {
            return athleticAnim;
        }

        if (formData.bodyType === "Heavy") {
            return heavyAnim;
        }

        return regularAnim;
    };

    /* RECOMMENDED SIZE */

    const getRecommendedSize = () => {

        const weight = Number(formData.weight);
        const height = Number(formData.height);

        if (height > 185 && weight > 90) {
            return "XL";
        }

        if (weight > 75) {
            return "L";
        }

        if (weight > 60) {
            return "M";
        }

        return "S";
    };
   const handleFormData = () => {
  localStorage.setItem(
    "formi",
    JSON.stringify(formData)
  );

  navigate("/measurement");
};

    return (
        <>
            <Navbar />

            <section className="relative min-h-screen text-white flex items-center justify-center px-6 py-20 overflow-hidden">

                {/* BACKGROUND */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
                    style={{
                        backgroundImage: `url(${stepBackgrounds[step]})`,
                    }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

                {/* GLOW */}
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-500/10 blur-3xl rounded-full" />

                <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-400/5 blur-3xl rounded-full" />

                {/* MAIN */}
                <div className="relative z-10 max-w-5xl w-full">

                    {/* PROGRESS */}
                    <div className="mb-10">

                        <div className="flex justify-between text-sm text-gray-400 mb-3">
                            <span>
                                Step {step} / 6
                            </span>

                            <span>
                                {Math.round((step / 6) * 100)}%
                            </span>
                        </div>

                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">

                            <div
                                className="h-full bg-yellow-400 transition-all duration-500"
                                style={{
                                    width: `${(step / 6) * 100}%`,
                                }}
                            />

                        </div>

                    </div>

                    {/* CARD */}
                    <div className="bg-black/30 border border-white/10 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

                        <AnimatePresence mode="wait">

                            {/* STEP 1 */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -40, scale: 0.98 }}
                                    transition={{ duration: 0.5 }}
                                >

                                    <h2 className="text-4xl font-light mb-8">
                                        Select Suit Type
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">

                                        <button
                                            onClick={() =>
                                                handleSelect("suitType", "Classic Suit")
                                            }
                                            className="p-10 rounded-3xl bg-black/40 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                                        >
                                            Classic Suit
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleSelect("suitType", "Double-Breasted")
                                            }
                                            className="p-10 rounded-3xl bg-black/40 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                                        >
                                            Double-Breasted
                                        </button>

                                    </div>

                                </motion.div>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -40, scale: 0.98 }}
                                    transition={{ duration: 0.5 }}
                                >

                                    <h2 className="text-4xl font-light mb-8">
                                        Select Material
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">

                                        <button
                                            onClick={() =>
                                                handleSelect("material", "Smart Material")
                                            }
                                            className="p-10 rounded-3xl bg-black/40 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                                        >
                                            Smart Material
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleSelect("material", "Premium Material")
                                            }
                                            className="p-10 rounded-3xl bg-black/40 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                                        >
                                            Premium Material
                                        </button>

                                    </div>

                                    <button
                                        onClick={prevStep}
                                        className="mt-8 text-gray-400"
                                    >
                                        Back
                                    </button>

                                </motion.div>
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -40, scale: 0.98 }}
                                    transition={{ duration: 0.5 }}
                                >

                                    <h2 className="text-4xl font-light mb-8">
                                        Choose Design
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">

                                        {[
                                            "Milano",
                                            "Royal Black",
                                            "Executive",
                                            "Vintage Noir",
                                        ].map((design) => (
                                            <button
                                                key={design}
                                                onClick={() =>
                                                    handleSelect("design", design)
                                                }
                                                className="p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                                            >
                                                {design}
                                            </button>
                                        ))}

                                    </div>

                                    <button
                                        onClick={prevStep}
                                        className="mt-8 text-gray-400"
                                    >
                                        Back
                                    </button>

                                </motion.div>
                            )}

                            {/* STEP 4 */}
                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -40, scale: 0.98 }}
                                    transition={{ duration: 0.5 }}
                                >

                                    <h2 className="text-4xl font-light mb-8">
                                        Select Buttons
                                    </h2>

                                    <div className="flex gap-6">

                                        <button
                                            onClick={() =>
                                                handleSelect("buttons", "Metal")
                                            }
                                            className="flex-1 p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                                        >
                                            Metal Buttons
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleSelect("buttons", "Plastic")
                                            }
                                            className="flex-1 p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                                        >
                                            Plastic Buttons
                                        </button>

                                    </div>

                                    <button
                                        onClick={prevStep}
                                        className="mt-8 text-gray-400"
                                    >
                                        Back
                                    </button>

                                </motion.div>
                            )}

                            {/* STEP 5 */}
                            {step === 5 && (
                                <motion.div
                                    key="step5"
                                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -40, scale: 0.98 }}
                                    transition={{ duration: 0.5 }}
                                >

                                    <h2 className="text-4xl font-light mb-8">
                                        Body Measurements
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">

                                        <input
                                            type="number"
                                            placeholder="Height (cm)"
                                            className="p-5 rounded-2xl bg-black/40 border border-white/10 outline-none"
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    height: e.target.value,
                                                })
                                            }
                                        />

                                        <input
                                            type="number"
                                            placeholder="Weight (kg)"
                                            className="p-5 rounded-2xl bg-black/40 border border-white/10 outline-none"
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    weight: e.target.value,
                                                })
                                            }
                                        />

                                        <select
                                            className="p-5 rounded-2xl bg-black/40 border border-white/10 outline-none"
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    bodyType: e.target.value,
                                                })
                                            }
                                        >
                                            <option>Body Type</option>
                                            <option>Athletic</option>
                                            <option>Regular</option>
                                            <option>Heavy</option>
                                        </select>

                                        <select
                                            className="p-5 rounded-2xl bg-black/40 border border-white/10 outline-none"
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    fitPreference: e.target.value,
                                                })
                                            }
                                        >
                                            <option>Fit Preference</option>
                                            <option>Slim Fit</option>
                                            <option>Regular Fit</option>
                                            <option>Relaxed Fit</option>
                                        </select>

                                    </div>

                                    <div className="flex gap-4 mt-10">

                                        <button
                                            onClick={prevStep}
                                            className="px-8 py-4 rounded-full border border-white/10"
                                        >
                                            Back
                                        </button>

                                        <button
                                            onClick={nextStep}
                                            className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold"
                                        >
                                            Continue
                                        </button>

                                    </div>

                                </motion.div>
                            )}

                            {/* STEP 6 */}
                            {step === 6 && (
                                <motion.div
                                    key="step6"
                                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -40, scale: 0.98 }}
                                    transition={{ duration: 0.5 }}
                                >

                                    <h2 className="text-4xl font-light mb-8">
                                        Recommended Fit Preview
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-10 items-center">

                                        {/* LEFT */}
                                        <div>

                                            <h3 className="text-2xl text-yellow-400 mb-6">
                                                Personalized Recommendation
                                            </h3>

                                            <div className="space-y-4 text-gray-300">

                                                <p>
                                                    Height: {formData.height} cm
                                                </p>

                                                <p>
                                                    Weight: {formData.weight} kg
                                                </p>

                                                <p>
                                                    Body Type: {formData.bodyType}
                                                </p>

                                                <p>
                                                    Fit Preference: {formData.fitPreference}
                                                </p>

                                                <p className="text-yellow-400 text-xl pt-4">
                                                    Recommended Fit:
                                                    {" "}
                                                    {formData.fitPreference}
                                                </p>

                                                <p className="text-gray-300">
                                                    Suggested Suit Size:
                                                    {" "}
                                                    <span className="text-yellow-400">
                                                        {getRecommendedSize()}
                                                    </span>
                                                </p>

                                            </div>

                                        </div>

                                        {/* RIGHT */}
                                        <div className="flex justify-center">

                                            <motion.div
                                                key={formData.bodyType}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5 }}
                                                className="w-full max-w-[400px]"
                                            >

                                                {/* <Lottie
                                                    animationData={getBodyAnimation()}
                                                    loop={true}
                                                /> */}

                                            </motion.div>

                                        </div>

                                    </div>

                                    <div className="flex gap-4 mt-10">

                                        <button
                                            onClick={prevStep}
                                            className="px-8 py-4 rounded-full border border-white/10"
                                        >
                                            Back
                                        </button>

                                        <button onClick={()=>handleFormData()}
                                            className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold"
                                        >
                                            Take Measurements
                                        </button>

                                    </div>

                                </motion.div>
                            )}

                        </AnimatePresence>

                    </div>

                </div>

            </section>
        </>
    );
}