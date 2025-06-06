import React from 'react';
import AnimatedBackground from '../../components/AnimatedBackground';
import Link from 'next/link';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            link: "#",
            github: "#"
        },
        {
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates using Socket.io. Built with React and Firebase.",
            technologies: ["React", "Firebase", "Socket.io", "Material-UI"],
            link: "#",
            github: "#"
        },
        {
            title: "Weather Dashboard",
            description: "Modern weather application with geolocation support and 7-day forecast. Responsive design with beautiful animations.",
            technologies: ["JavaScript", "API Integration", "CSS3", "Chart.js"],
            link: "#",
            github: "#"
        },
        {
            title: "Blog Platform",
            description: "Full-featured blogging platform with user authentication, rich text editor, and comment system.",
            technologies: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS"],
            link: "#",
            github: "#"
        },
        {
            title: "Chat Application",
            description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
            technologies: ["React", "Socket.io", "Node.js", "Express"],
            link: "#",
            github: "#"
        },
        {
            title: "Portfolio Website",
            description: "Responsive portfolio website with modern design, animations, and optimized performance.",
            technologies: ["React", "TailwindCSS", "Framer Motion", "Netlify"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />

            <div className="relative z-10 pt-24 sm:pt-32 pb-16 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Projects</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
                            A showcase of applications and websites I've built
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.title}
                                className="group bg-black/40 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-4 sm:p-6 hover:bg-black/50 transition-all duration-300 hover:scale-105 flex-col flex justify-between"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* <div className="h-32 sm:h-48 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
                                    <div className="text-2xl sm:text-4xl text-white/50">🚀</div>
                                </div> */}

                                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-white/70 text-xs sm:text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white text-sm font-semibold hover:scale-105 transition-transform duration-200">
                                        Live Demo
                                    </button>
                                    <button className="flex-1 sm:flex-none px-4 py-2 border border-blue-400/30 rounded-lg text-white text-sm font-semibold hover:bg-blue-500/10 transition-colors duration-200">
                                        GitHub
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 sm:mt-16 text-center">
                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Want to Collaborate?</h3>
                            <p className="text-white/80 mb-6 text-sm sm:text-base">
                                I'm always open to working on exciting projects and learning new technologies.
                                Let's build something amazing together!
                            </p>
                            <Link href="/contact">
                                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer">
                                    Contact Me
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;