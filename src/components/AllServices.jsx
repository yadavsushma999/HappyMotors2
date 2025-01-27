import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext'; // Import the theme context
import { oilrepair, enginerepair, tirereplacement, brakerepair,insurance,painting } from '../assets';
import { BrakeService, EngineDiagnostics, OilChangeServices, TireReplacement,Insurance,Painting } from '../components'; // Import components


const AllServices = () => {
    const { darkMode } = useTheme(); // Access the darkMode state from the context

    const services = [
        {
            id: 1,
            title: "Engine Repair",
            shortDescription:
                "Our engine repair service ensures your vehicle's engine runs smoothly. We specialize in diagnosing and repairing engine issues, from minor fixes to major overhauls.",
            image: enginerepair,
            description: <EngineDiagnostics />,
        },
        {
            id: 2,
            title: "Oil Change",
            shortDescription: "Regular oil changes are vital to keeping your engine running at its best.",
            image: oilrepair,
            description: <OilChangeServices />,
        },
        {
            id: 3,
            title: "Brake Services",
            shortDescription: "Ensure your vehicle’s safety with comprehensive brake services.",
            image: brakerepair,
            description: <BrakeService />,
        },
        {
            id: 4,
            title: "Tire Replacement",
            shortDescription: "Offering high-quality tire replacements for better performance and safety.",
            image: tirereplacement,
            description: <TireReplacement />,
        },
        {
            id: 5,
            title: "Insurance",
            shortDescription: "Give your car the protection it deserves. Our comprehensive insurance coverage puts you in the driver's seat, worry-free.",
            image: insurance,
            description: <Insurance />,
        },
        {
            id: 6,
            title: "Painting",
            shortDescription: "Your trusted local destination for top-notch car painting services. We give your car the fresh and attractive look it deserves.",
            image: painting,
            description: <Painting />,
        },
        
    ];

    const [expandedService, setExpandedService] = useState(null); // Track the expanded service ID

    const handleExpand = (id) => {
        setExpandedService((prev) => (prev === id ? null : id)); // Toggle the expanded state
        if (expandedService !== id) {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top when expanding a service
        }
    };

    // Separate the expanded service from the rest
    const expanded = services.find((service) => service.id === expandedService);
    const collapsed = services.filter((service) => service.id !== expandedService);

    return (
        <div
            className={`w-full min-h-screen ${darkMode ? ' text-white' : 'bg-white text-white'
                } p-8 transition-all duration-700`}
        >
            <h2
                className={`text-4xl font-semibold text-center mt-11 py-3 mb-8 ${darkMode ? 'text-white' : 'text-black'
                    }`}
            >
                Our Services
            </h2>

            <div className="flex flex-col gap-8">
                {/* Render the expanded card at the top if any */}
                {expanded && (
                    <div
                        className="group cursor-pointer flex flex-col items-center justify-center gap-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                    >
                        <img
                            src={expanded.image}
                            alt={expanded.title}
                            className="w-full h-auto max-w-[300px] rounded-lg transform transition-all duration-500"
                        />
                        <div className="text-gray-500">{expanded.description}</div>
                        <button
                            onClick={() => handleExpand(expanded.id)} // Collapse on click
                            className={`text-blue-500 mt-2 hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-500'
                                }`}
                        >
                            Read Less
                        </button>
                    </div>
                )}

                {/* Render the remaining cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {collapsed.map((service) => (
                        <div
                            key={service.id}
                            className="group cursor-pointer flex flex-col items-center justify-center gap-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-auto max-w-[250px] rounded-lg transform transition-all duration-500 hover:scale-105"
                            />
                            <h3
                                className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'
                                    }`}
                            >
                                {service.title}
                            </h3>

                            <div className="text-gray-500 text-center">{service.shortDescription}</div>
                            <button
                                onClick={() => handleExpand(service.id)} // Expand on click
                                className={`text-blue-500 mt-2 mb-2 hover:underline ${darkMode ? 'text-blue-300' : 'text-blue-500'
                                    }`}
                            >
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllServices;
