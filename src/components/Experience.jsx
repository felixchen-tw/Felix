import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Company",
            position: "Position",
            duration: "Sep 2024 - now",
            descriptions: [
                "description 1",
                "description 2"
            ],
            logo: "/placeholder-company-1.png"
        },
        {
            company: "Company",
            position: "Position", 
            duration: "Sep 2024 - now",
            descriptions: [
                "description 1",
                "description 2"
            ],
            logo: "/placeholder-company-2.png"
        }
    ];

    return (
        <section id="experience" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center md:text-left">
                    Experiences
                </h2>
                
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            {/* Company Logo Placeholder */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                                    <img 
                                        src={exp.logo} 
                                        alt={`${exp.company} Logo`} 
                                        className="w-full h-full object-cover rounded-lg"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                                        <span className="text-gray-400 text-xs">Logo</span>
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                {exp.company}
                                            </h3>
                                            <p className="text-gray-600 mb-2">{exp.position}</p>
                                        </div>
                                        <span className="text-sm text-gray-500 whitespace-nowrap">
                                            {exp.duration}
                                        </span>
                                    </div>
                                    
                                    <ul className="text-gray-700 space-y-1">
                                        {exp.descriptions.map((desc, descIndex) => (
                                            <li key={descIndex} className="flex items-start">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;