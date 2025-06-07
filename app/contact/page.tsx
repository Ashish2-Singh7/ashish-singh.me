import React from 'react';
import AnimatedBackground from '../../components/AnimatedBackground';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';

const Contact = () => {

    return (
        <div className="min-h-screen relative overflow-hidden">
            <AnimatedBackground />

            <div className="relative z-10 pt-24 sm:pt-32 pb-16 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
                            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Touch</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
                            Let's discuss your project or just say hello
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-black/40 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-6 sm:p-8">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Let's Connect</h2>
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-lg sm:text-xl">📧</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm sm:text-base">Email</h3>
                                            <p className="text-white/70 text-sm sm:text-base">code.pirates.cpp@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-lg sm:text-xl">📱</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm sm:text-base">Phone</h3>
                                            <p className="text-white/70 text-sm sm:text-base">+91 8810315731</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-lg sm:text-xl">📍</span>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-semibold text-sm sm:text-base">Location</h3>
                                            <p className="text-white/70 text-sm sm:text-base">New Delhi, India</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 sm:mt-8">
                                    <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">Follow Me</h3>
                                    <div className="flex space-x-4">
                                        <Link href="https://www.instagram.com/ashish27639singh/" target="_blank">
                                            <button className="cursor-pointer w-8 sm:w-10 h-8 sm:h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors">
                                                <FaInstagram className="w-5 h-5 rounded-full" />
                                            </button>
                                        </Link>
                                        <Link href="https://github.com/Ashish2-Singh7" target="_blank">
                                            <button className="cursor-pointer w-8 sm:w-10 h-8 sm:h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors">
                                                <FaGithub className="w-5 h-5 rounded-full" />
                                            </button>
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/ashish-kumar-singh-36918836a/" target="_blank">
                                            <button className="cursor-pointer w-8 sm:w-10 h-8 sm:h-10 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors">
                                                <FaLinkedin className="w-5 h-5 rounded-full" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/40 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
