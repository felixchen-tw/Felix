import React from 'react';

const Community = () => {
    const communityActivities = [
        {
            name: "Google Developer Group on Campus NTUST",
            position: "Core Team Member",
            duration: "Sep 2023 - Jun 2025",
            descriptions: [
                "Organizing events, workshops, and community outreach for the Google Developer Group"
            ],
            logo: "/GDGoCampus_ntust.png"
        },
        {
            name: "Computer Science and Information Engineering Student Association, NTUST", 
            position: "Vice President",
            duration: "Sep 2023 - Jul 2024",
            descriptions: [
                "Leading members to organize events and activities for students in the department"
            ],
            logo: "/ntust_csie_sa.jpg"
        }
    ];

    return (
        <section id="community" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center md:text-left">
                    Community
                </h2>
                
                <div className="space-y-6">
                    {communityActivities.map((activity, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                            {/* Organization Logo Placeholder */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                                    <img 
                                        src={activity.logo} 
                                        alt={`${activity.name} Logo`} 
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
                                                {activity.name}
                                            </h3>
                                            <p className="text-gray-600 mb-2">{activity.position}</p>
                                        </div>
                                        <span className="text-sm text-gray-500 whitespace-nowrap">
                                            {activity.duration}
                                        </span>
                                    </div>
                                    
                                    <ul className="text-gray-700 space-y-1">
                                        {activity.descriptions.map((desc, descIndex) => (
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

export default Community;