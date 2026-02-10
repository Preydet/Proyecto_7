import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    },[slides.length]);

    if (!slides.length) return null;

    return(
        <div className="relative w-full max-w-6xl mx-auto h-96 overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`transition-opacity duration-700 ${
                        index === current ? "opacity-100" : "opacity-0 absolute inset-0"
                    }`}
                    >
                        <img 
                            src={slide.img}
                            alt={slide.name}
                            className="w-full h-96 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-end">
                            <div calssName="m-6 bg-black/60 backdrop-blur-sm p-5 rounded-lg max-w-lg">
                            <h2 className="text-white text 2xl font-bold leading-tight">
                                {slide.name}
                            </h2>
                            <p className="mt-2 text-gray-200 text-sm">
                                {slide.description}
                            </p>
                            </div>
                        </div>
                </div>                
            ))}

            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
                onClick={() =>
                    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
                }
            >
                <ChevronLeftIcon className="w-6 h-6 text-slate-900"/>
            </button>

            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
                onClick={() =>
                    setCurrent((prev) => (prev + 1 + slides.length) % slides.length)
                }
            >
                <ChevronRightIcon className="w-6 h-6 text-slate-900"/>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                    className={`w-3 h-3 rounded-full ${
                        index === current ? "bg-white" : "bg-gray-400"
                    }`}
                    onClick={() => setCurrent(index)}                    
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel;