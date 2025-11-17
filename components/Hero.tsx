import React from 'react';
import { SectionId } from '../types';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id={SectionId.HOME} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{
          backgroundImage: `url('https://picsum.photos/id/42/1920/1080')`, // A moody, atmospheric beach shot
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <p className="text-white/90 uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-in-up">
          Exclusive Destination Weddings
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-6 leading-tight animate-fade-in-up delay-100">
          Where Love Meets <br /> The Horizon
        </h1>
        <p className="text-white/80 max-w-xl text-lg md:text-xl font-light mb-10 animate-fade-in-up delay-200">
          Experience the epitome of luxury on the pristine shores of the Maldives.
          Your forever starts here.
        </p>
        <a
          href={`#${SectionId.ABOUT}`}
          className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 animate-fade-in-up delay-300"
        >
          Discover More
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;