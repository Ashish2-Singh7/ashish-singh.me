import React from 'react';
import TypingAnimation from '../../components/TypingAnimation';
import AnimatedBackground from '../../components/AnimatedBackground';
import Link from 'next/link';
import DownloadBtn from '@/components/home/DownloadBtn';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const Home = () => {
    const roles = [
        'Developer',
        'Student',
        'Full Stack Developer',
        'Backend Engineer'
    ];

    return (
        <div className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />

            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-8 animate-fade-in">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Ashish</span>
                        </h1>

                        <div className="text-xl sm:text-2xl md:text-4xl text-gray-200 mb-8 h-12">
                            I am a{' '}
                            <TypingAnimation
                                texts={roles}
                                className="text-blue-400 font-semibold"
                            />
                        </div>

                        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                            Passionate about creating digital experiences that make a difference.
                            Specializing in modern web technologies and scalable solutions.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
                        <Link href="https://github.com/Ashish2-Singh7" target='__blank'>
                            <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 cursor-pointer">
                                <span className="relative z-10">View My Work</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </button>
                        </Link>
                        <DownloadBtn />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
                <div className="h-10 border-2 border-blue-400/40 rounded-full flex justify-center space-x-5 p-5 items-center">

                    <div>
                        <Link href="https://www.instagram.com/ashish27639singh/" target="_blank"><FaInstagram className="w-5 h-5 rounded-full" /></Link>
                    </div>

                    <div>
                        <Link href="https://github.com/Ashish2-Singh7" target="_blank"><FaGithub className="w-5 h-5 rounded-full" /></Link>
                    </div>

                    <div>
                        <Link href="https://www.linkedin.com/in/ashish-kumar-singh-36918836a/" target="_blank"><FaLinkedin className="w-5 h-5 rounded-full" /></Link>
                    </div>

                    <div>
                        <Link href="https://www.fiverr.com/your-profile" target="_blank"><SiFiverr className="w-5 h-5 bg-green-400/40 rounded-full" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
