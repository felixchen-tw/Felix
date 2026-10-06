import React from 'react';

const Experiences = ({ t }) => {
    const experiences = [
        {
            name: t("Google Developer Group on Campus, NTUST", "Google Developer Group on Campus 臺科大"),
            position: t("Core Team Member", "核心成員"),
            duration: t("Sep 2023 - Jun 2025", "2023 年 9 月 - 2025 年 6 月"),
            descriptions: [
                t("Organizing events, workshops, and community outreach for the Google Developer Group", "籌辦 Google Developer Group 的活動、工作坊與社群推廣")
            ],
            logo: "/GDGoCampus_ntust.png"
        },
        {
            name: t("Computer Science and Information Engineering Student Association, NTUST", "臺科大資訊工程系學生會"),
            position: t("Vice President", "副會長"),
            duration: t("Sep 2023 - Jul 2024", "2023 年 9 月 - 2024 年 7 月"),
            descriptions: [
                t("Leading members to organize events and activities for students in the department", "帶領幹部為系上同學籌辦各項活動")
            ],
            logo: "/ntust_csie_sa.jpg"
        }
    ];

    return (
        <section id="experiences" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center md:text-left">
                    {t('Experiences', '經歷')}
                </h2>
                
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                            {/* Company Logo Placeholder */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                                    <img 
                                        src={exp.logo} 
                                        alt={`${exp.name} Logo`} 
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
                                                {exp.name}
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

export default Experiences;