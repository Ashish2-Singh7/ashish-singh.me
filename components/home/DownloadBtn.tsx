"use client";
import React from 'react'
import toast from 'react-hot-toast';

const DownloadBtn = () => {

    const fireToast = () => {
        toast((t) => (
            <div className="flex items-start gap-3 p-4 bg-[#080e20] rounded-lg shadow-lg min-w-[280px]">
                <svg className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <div className="flex-1">
                    <span className="text-white font-medium">
                        CV isn&apos;t available yet, it&apos;s coming soon!
                    </span>
                </div>
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="ml-2 px-2 py-1 text-sm text-blue-400 hover:text-blue-500 rounded transition-colors cursor-pointer"
                    aria-label="Dismiss"
                >
                    Dismiss
                </button>
            </div>
        ));
    }
    return (

        <button className="w-fit sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400/40 rounded-full text-white font-semibold text-base sm:text-lg backdrop-blur-sm hover:bg-blue-500/10 hover:border-blue-400/60 transition-all duration-300 cursor-pointer" onClick={fireToast}>
            Download CV
        </button>
    )
}

export default DownloadBtn
