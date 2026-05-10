import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";


export default function Checkout() {

    const location = useLocation();
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("formi"));
 

    return (
        <>
            <Navbar />

            <section className="min-h-screen bg-[#0b0b0b] text-white px-6 py-20 flex justify-center">

                <div className="max-w-5xl w-full">

                    <div className="mb-12 text-center">

                        <h1 className="text-5xl font-light mb-4">
                            Checkout Summary
                        </h1>

                        <p className="text-gray-400 text-lg">
                            Review your luxury suit customization.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Suit Details */}
                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">

                            <h2 className="text-3xl mb-8 text-yellow-400">
                                Suit Configuration
                            </h2>

                            <div className="space-y-5 text-gray-300">

                                <p>
                                    <span className="text-white">Suit Type:</span> {data.suitType}
                                </p>

                                <p>
                                    <span className="text-white">Material:</span> {data.material}
                                </p>

                                <p>
                                    <span className="text-white">Design:</span> {data.design}
                                </p>

                                <p>
                                    <span className="text-white">Buttons:</span> {data.buttons}
                                </p>

                                <p>
                                    <span className="text-white">Fit:</span> {data.fitPreference}
                                </p>

                            </div>

                        </div>

                        {/* Measurements */}
                        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">

                            <h2 className="text-3xl mb-8 text-yellow-400">
                                Measurements
                            </h2>

                            <div className="space-y-5 text-gray-300">

                                <p>
                                    <span className="text-white">Height:</span> {data.height} cm
                                </p>

                                <p>
                                    <span className="text-white">Weight:</span> {data.weight} kg
                                </p>

                                <p>
                                    <span className="text-white">Chest:</span> {data.chest} in
                                </p>

                                <p>
                                    <span className="text-white">Waist:</span> {data.waist} in
                                </p>

                                <p>
                                    <span className="text-white">Shoulders:</span> {data.shoulders} in
                                </p>

                                <p>
                                    <span className="text-white">Sleeve:</span> {data.sleeve} in
                                </p>

                                <p>
                                    <span className="text-white">Body Type:</span> {data.bodyType}
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Payment Card */}
                    <div className="mt-10 bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl">

                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                            <div>

                                <h2 className="text-3xl font-light mb-4">
                                    Total Price
                                </h2>

                                <p className="text-5xl text-yellow-400 font-semibold">
                                    $7000
                                </p>

                            </div>

                            <button
                                onClick={() => navigate("/order-success")}
                                className="px-12 py-5 rounded-full bg-yellow-400 text-black font-semibold hover:scale-[1.02] transition"
                            >
                                Place Order
                            </button>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}