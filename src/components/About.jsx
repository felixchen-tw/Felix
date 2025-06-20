import React from 'react';

const About = () => {
    return (
        <section id="about" className="pt-20 pb-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden bg-gray-200">
                            <img 
                                src="Felix_MacBook.JPG" 
                                alt="Felix Profile" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                                <span className="text-gray-400 text-lg">Profile Image</span>
                            </div>
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Felix</h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-6">Software Engineer</p>

                        {/* Skills or additional info can be added here */}
                        <div className="text-gray-700 leading-relaxed">
                            <p className="mb-4">
                                I am a CS student in Taiwan.
                                I am interested in web development, especially frontend technologies and DevOps.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;