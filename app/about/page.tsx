import React from 'react';
import AnimatedBackground from '../../components/AnimatedBackground';
import Link from 'next/link';
import Timeline from '@/components/about/Timeline';

const About = () => {
  const educationJourney = [
    {
      year: '2024-Present',
      title: 'B.Tech in Electrical Engineering',
      description: 'Currently pursuing Bachelor of Technology at NSUT Delhi',
      score: 'Ongoing'
    },
    {
      year: '2024',
      title: 'JEE Cleared',
      description: 'Qualified for engineering entrance with a competitive rank',
      score: 'Rank 33,100'
    },
    {
      year: '2024',
      title: '12th Grade',
      description: 'Successfully completed higher secondary education',
      score: '90%'
    },
    {
      year: '2022',
      title: '10th Grade',
      description: 'Successfully Completed secondary education',
      score: '90%'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 pt-24 sm:pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Me</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6">
              <div className="bg-black/40 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">My Journey</h2>
                <p className="text-white/80 leading-relaxed mb-6 text-sm sm:text-base">
                  I'm a passionate developer and student who loves turning ideas into reality through code.
                  My journey in technology started with curiosity and has evolved into a deep passion for
                  creating meaningful digital experiences.
                </p>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Currently pursuing my education while working on various projects that challenge me
                  to grow as a developer. I believe in continuous learning and staying updated with
                  the latest technologies.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">What I Do</h3>
                <ul className="space-y-3 text-white/80 text-sm sm:text-base">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Full Stack Web Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Backend Engineering
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    API Development & Integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    Open Source & Learning
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Let's Connect</h3>
                <p className="text-white/80 mb-6 text-sm sm:text-base">
                  I'm always excited to discuss new opportunities, collaborate on projects,
                  or simply chat about technology and development.
                </p>
                <Link href="/contact"><button className="w-full cursor-pointer sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300">
                  Get In Touch
                </button></Link>
              </div>
            </div>

            <div>
              <div className="bg-black/40 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Educational Journey</h3>
                <Timeline items={educationJourney} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;