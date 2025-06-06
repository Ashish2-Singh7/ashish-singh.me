"use client";

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-6">
            <div className="w-[100%] sm:w-2xl mx-auto">
                <div className="bg-black/40 backdrop-blur-xl border border-blue-400/20 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-4 shadow-2xl">
                    <div className="flex items-center justify-center">
                        <div className="hidden sm:flex space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`relative text-gray-300 hover:text-white transition-all duration-300 ${pathname === item.path ? 'text-white' : ''
                                        }`}
                                >
                                    {item.name}
                                    {pathname === item.path && (
                                        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile menu */}
                        <div className="sm:hidden flex">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`text-xs px-2 py-1 rounded transition-all duration-300 ${pathname === item.path
                                        ? 'text-white bg-blue-500/20'
                                        : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;