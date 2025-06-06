"use client";

import { useEffect } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NotFound = () => {
    const pathname = usePathname()

    useEffect(() => {
        console.log(
            "404 Error: User attempted to access non-existent route:",
            pathname
        );
    }, [pathname]);

    return (
        <div className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />

            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto">
                    <div className="mb-8 animate-fade-in">
                        <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 mb-4 leading-none">
                            404
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Page Not Found
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                            Oops! The page you're looking for seems to have vanished into the digital void.
                        </p>

                        <div className="bg-black/40 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-4 sm:p-6 md:p-8 mb-8 shadow-2xl">
                            <p className="text-gray-200 mb-4 text-sm sm:text-base">
                                <span className="text-blue-400 font-semibold">Route attempted:</span> {pathname}
                            </p>
                            <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                                Don't worry, even the best explorers sometimes take wrong turns.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <Link
                            href="/"
                            className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                        >
                            <span className="relative z-10">Return Home</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>

                        <Link
                            href="/projects"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400/40 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg backdrop-blur-sm hover:bg-blue-500/10 hover:border-blue-400/60 transition-all duration-300"
                        >
                            View Projects
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                        <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">Home</Link>
                        <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">About</Link>
                        <Link href="/skills" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">Skills</Link>
                        <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">Contact</Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-blue-400/40 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-blue-400/60 rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
