"use client";

import React, { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm sm:text-base">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-blue-400/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors text-sm sm:text-base"
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm sm:text-base">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-blue-400/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors text-sm sm:text-base"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm sm:text-base">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/40 border border-blue-400/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold hover:scale-105 transition-transform duration-300 text-sm sm:text-base cursor-pointer"
            >
                Send Message
            </button>
        </form>
    )
}

export default ContactForm
