import React from "react";
import { Vortex } from '../components/ui/vortex.tsx';
import { people } from "../data/developerData.js";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials.tsx";

export const LandingPage = () => {
    return (
        <>
            <div className="w-[calc(100%)] mx-auto h-screen overflow-hidden">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
                >
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                        Replace the text here with your own content
                    </h2>
                    <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
                        Replace here too with the content you want to display on the landing page
                    </p>
                </Vortex>
            </div>
            <div className="bg-black">

            <AnimatedTestimonials testimonials={people} />;
            </div>
        </>
    );
};