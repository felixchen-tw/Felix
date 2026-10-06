import React from 'react';

const Projects = ({ t }) => {
    const projectList = [
        {
            title: t('Getsuka Fan Page', '玥華粉絲網站'),
            description: t('A fan page for the popular VTuber Getsuka.', '為人氣 VTuber 玥華製作的粉絲網站。'),
            image: '/getsuka.jpg',
            link: 'https://getsuka.felixchen.tw',
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center md:text-left">
                    {t('Projects', '作品')}
                </h2>
                
                <div className="space-y-6">
                    {projectList.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow md:flex">
                            {/* Project Image */}
                            <div className="aspect-video md:aspect-square md:w-64 md:flex-shrink-0 bg-gray-200 flex items-center justify-center">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                                    <span className="text-gray-400">Project Image</span>
                                </div>
                            </div>
                            
                            {/* Project Info */}
                            <div className="p-6 flex flex-col justify-center">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-700 mb-4">
                                    {project.description}
                                </p>
                                
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                                    >
                                        {t('View Project', '查看作品')}
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;