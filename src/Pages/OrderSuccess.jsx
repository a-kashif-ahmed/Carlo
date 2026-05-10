import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
    const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full text-center bg-white/5 border border-white/10 rounded-[40px] p-16 backdrop-blur-2xl"
        >

          <div className="w-24 h-24 mx-auto rounded-full bg-yellow-400 flex items-center justify-center text-black text-5xl mb-8">
            ✓
          </div>

          <h1 className="text-5xl font-light mb-6">
            Order Placed Successfully
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Your luxury tailored suit order has been received.
            Our tailoring specialists will begin crafting
            your personalized experience shortly.
          </p>

          <div className="mt-12">

            <button onClick={()=>navigate('/')}
              className="px-10 py-5 rounded-full bg-yellow-400 text-black font-semibold"
            >
              Back to Home
            </button>

          </div>

        </motion.div>

      </section>
    </>
  );
}