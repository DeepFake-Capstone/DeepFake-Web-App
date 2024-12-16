import React from "react";
import { Vortex } from '../components/ui/vortex.tsx';
import { people } from "../data/developerData.js";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials.tsx";
import { modelEfficiency } from "../data/modelEfficiency.js";
import { BsCheck } from "react-icons/bs";
import { MagicCard } from "../components/ui/accuracyGraphBox.tsx";

export const LandingPage = () => {
    return (
        <>
            {/* Landing page introduction section */}
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

                {/* Developers card section */}
                <AnimatedTestimonials testimonials={people} />;
            </div>

            {/* section talking about the accuracy and efficency of the model */}
            <div className="w-[calc(100%)] bg-black overflow-hidden">

                <div className="w-[calc(100%)] w-3/4 mx-auto bg-green-500  overflow-hidden">
                    <h1 className="text-white">Experimental Results</h1>

                    {/* We need to replace the text here */}
                    <p className="text-white">
                        We have performed extensive training and hyperparameter tuning, such as comparing different EfficientNet models, number of convolution layers, weights, data augmentations, dropout rates, and regularizers. In the end, the following settings give us the best results:
                    </p>
                    <div className="text-white">
                        <ul>
                            {modelEfficiency.map((item, index) => (
                                <li key={index}> <BsCheck style={{ display: "inline" }} /> {item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Accuracy Graphs */}

                    <div className="flex flex-row">
                        {/* Images ki css set krni hai */}

                        <MagicCard className=" w-1/4 mx-auto h-96">
                            <img
                                src="src\assets\model_metrices\Training_Val_loss.jpg"

                                className="h-full w-full rounded-3xl object-cover object-center"
                                draggable={false}
                            />
                        </MagicCard>
                        <MagicCard className=" w-1/4 mx-auto h-96">
                            <img
                                src="src\assets\model_metrices\Training_val_Accuracy.jpg"
                                className="h-full w-full rounded-3xl object-cover object-fit"
                                draggable={false}
                            />
                        </MagicCard>
                    </div>

                </div>
            </div>
        </>
    );
};