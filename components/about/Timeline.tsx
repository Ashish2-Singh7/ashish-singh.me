import React from 'react';

interface TimelineItem {
    year: string;
    title: string;
    description: string;
    score?: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="relative">
            {/* Main vertical line */}
            <div className="absolute left-4 top-4 w-0.5 h-full bg-gradient-to-b from-blue-400 to-blue-600" />

            {items.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                    {/* Dot */}
                    <div className="relative z-10 w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-3 h-3 bg-white rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="ml-6 flex-1">
                        <div className="bg-black/40 backdrop-blur-lg border border-blue-400/20 rounded-xl p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="text-lg sm:text-xl font-bold text-white">{item.title}</h4>
                                <span className="text-blue-400 font-semibold text-sm sm:text-base sm:w-[30%] sm:text-right">{item.year}</span>
                            </div>
                            <p className="text-white/80 text-sm sm:text-base">{item.description}</p>
                            {item.score && (
                                <div className="mt-3 inline-block px-3 py-1 bg-blue-500/20 rounded-full">
                                    <span className="text-blue-300 text-sm font-medium">{item.score}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
