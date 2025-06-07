"use client";

import React, { useEffect, useState } from 'react';
import AnimatedBackground from '../../components/AnimatedBackground';

interface Skill {
    name: string;
    experience: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    projects?: number;
    category: string;
    description?: string;
}

const Skills = () => {
    const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
    const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: boolean }>({});

    const skills: Skill[] = [
        // Frontend
        { name: "React.js", experience: "Advanced", projects: 8, category: "Frontend", description: "Building dynamic UIs" },
        { name: "JavaScript", experience: "Advanced", projects: 12, category: "Frontend", description: "ES6+ features" },
        { name: "TypeScript", experience: "Intermediate", projects: 5, category: "Frontend", description: "Type-safe development" },
        { name: "HTML5", experience: "Expert", projects: 15, category: "Frontend", description: "Semantic markup" },
        { name: "CSS3", experience: "Advanced", projects: 15, category: "Frontend", description: "Modern styling" },
        { name: "Tailwind CSS", experience: "Advanced", projects: 6, category: "Frontend", description: "Utility-first CSS" },
        { name: "Next.js", experience: "Intermediate", projects: 3, category: "Frontend", description: "Full-stack React" },

        // Backend
        { name: "Node.js", experience: "Advanced", projects: 7, category: "Backend", description: "Server-side JavaScript" },
        { name: "Express.js", experience: "Advanced", projects: 6, category: "Backend", description: "Web framework" },
        { name: "Python", experience: "Intermediate", projects: 4, category: "Backend", description: "Scripting & APIs" },
        { name: "Java", experience: "Intermediate", projects: 3, category: "Backend", description: "OOP concepts" },
        { name: "RESTful APIs", experience: "Advanced", projects: 8, category: "Backend", description: "API design" },

        // Database & Tools
        { name: "MongoDB", experience: "Advanced", projects: 5, category: "Database", description: "NoSQL database" },
        { name: "MySQL", experience: "Intermediate", projects: 3, category: "Database", description: "Relational database" },
        { name: "Git & GitHub", experience: "Expert", projects: 20, category: "Tools", description: "Version control" },
        { name: "Docker", experience: "Beginner", projects: 2, category: "Tools", description: "Containerization" },
        { name: "AWS", experience: "Beginner", projects: 1, category: "Tools", description: "Cloud services" },

        // Other
        { name: "Socket.io", experience: "Intermediate", projects: 2, category: "Other", description: "Real-time communication" },
        { name: "JWT", experience: "Advanced", projects: 4, category: "Other", description: "Authentication" },
        { name: "Redux", experience: "Intermediate", projects: 3, category: "Other", description: "State management" },
    ];

    const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Other'];

    const getExperienceColor = (experience: string) => {
        switch (experience) {
            case 'Expert': return 'from-blue-400 to-blue-600';
            case 'Advanced': return 'from-blue-500 to-blue-700';
            case 'Intermediate': return 'from-blue-600 to-blue-800';
            case 'Beginner': return 'from-blue-700 to-blue-900';
            default: return 'from-blue-600 to-blue-800';
        }
    };

    const getExperienceIcon = (experience: string) => {
        switch (experience) {
            case 'Expert': return '⭐⭐⭐⭐';
            case 'Advanced': return '⭐⭐⭐';
            case 'Intermediate': return '⭐⭐';
            case 'Beginner': return '⭐';
            default: return '⭐⭐';
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const categoryIndex = parseInt(entry.target.getAttribute('data-category') || '0');
                        setVisibleCategories(prev => [...prev, categoryIndex]);

                        setTimeout(() => {
                            const categoryKey = `category-${categoryIndex}`;
                            setAnimatedSkills(prev => ({ ...prev, [categoryKey]: true }));
                        }, 300);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const elements = document.querySelectorAll('.skill-category');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />

            <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">Skills</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
                            Technologies I've learned through hands-on projects and continuous practice
                        </p>
                    </div>
                    {visibleCategories.length ===0 && <p className="text-center sm:hidden text-lg sm:text-xl text-gray-100/10 max-w-2xl mx-auto">
                        Move Scroller Down to see
                    </p>}

                    {categories.map((category, categoryIndex) => {
                        const categorySkills = skills.filter(skill => skill.category === category);

                        return (
                            <div
                                key={category}
                                data-category={categoryIndex}
                                className="skill-category mb-12"
                                style={{
                                    transform: visibleCategories.includes(categoryIndex) ? 'translateY(0)' : 'translateY(50px)',
                                    opacity: visibleCategories.includes(categoryIndex) ? 1 : 0,
                                    transition: 'all 0.6s ease-out'
                                }}
                            >
                                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                                    {category}
                                </h2>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    {categorySkills.map((skill, skillIndex) => (
                                        <div
                                            key={skill.name}
                                            className="group bg-black/40 backdrop-blur-lg border border-blue-500/20 rounded-xl p-4 sm:p-6 hover:border-blue-400/40 hover:scale-105 transition-all duration-300"
                                            style={{
                                                animationDelay: `${skillIndex * 100}ms`,
                                                transform: animatedSkills[`category-${categoryIndex}`] ? 'translateY(0)' : 'translateY(20px)',
                                                opacity: animatedSkills[`category-${categoryIndex}`] ? 1 : 0,
                                                transition: `all 0.5s ease-out ${skillIndex * 100}ms`
                                            }}
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                                                <div className="text-sm">
                                                    {getExperienceIcon(skill.experience)}
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getExperienceColor(skill.experience)}`}>
                                                    {skill.experience}
                                                </span>
                                            </div>

                                            {skill.projects && (
                                                <div className="mb-2">
                                                    <span className="text-blue-400 text-sm font-medium">
                                                        {skill.projects} Projects
                                                    </span>
                                                </div>
                                            )}

                                            {skill.description && (
                                                <p className="text-white/70 text-sm">
                                                    {skill.description}
                                                </p>
                                            )}

                                            <div className="mt-3 h-1 bg-gray-800/60 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full bg-gradient-to-r ${getExperienceColor(skill.experience)} transition-all duration-1000 ease-out`}
                                                    style={{
                                                        width: animatedSkills[`category-${categoryIndex}`] ? '100%' : '0%',
                                                        animationDelay: `${skillIndex * 150}ms`
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    <div className="mt-16 text-center">
                        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">GitHub & Learning</h3>
                            <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-4">
                                My skills are backed by real projects and continuous learning. Each technology listed represents
                                hands-on experience through personal projects, coursework, and collaborative development.
                            </p>
                            <a
                                href="https://github.com/Ashish2-Singh7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300"
                            >
                                View My GitHub
                                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
