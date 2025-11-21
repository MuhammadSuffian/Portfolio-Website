import React from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-indigo-50/30 dark:from-slate-950 dark:to-slate-900 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 text-sm font-medium mb-4">
             Software Engineer & Gold Medalist
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Hello, I'm <br />
            <span className="text-indigo-600 dark:text-indigo-400">{PROFILE.name.split(' ').slice(0, 2).join(' ')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {PROFILE.about}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <a 
              href="#" 
              className="px-8 py-3 rounded-lg bg-white text-slate-700 font-semibold border border-slate-200 shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
              onClick={(e) => e.preventDefault()} // Prevent default since no actual PDF URL is provided
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-8 text-slate-500 dark:text-slate-400">
            <a href={PROFILE.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={PROFILE.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <div className="flex items-center gap-1 text-sm">
              <MapPin size={18} />
              {PROFILE.contact.location}
            </div>
          </div>
        </div>

        {/* Visual / Abstract graphic or Placeholder for image */}
        <div className="flex-1 relative hidden md:block">
            <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-indigo-600 rounded-full opacity-10 blur-2xl animate-pulse dark:opacity-20"></div>
                <div className="absolute top-4 left-4 w-72 h-72 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 rotate-6 shadow-2xl z-10"></div>
                <div className="absolute top-0 left-0 w-72 h-72 rounded-2xl bg-slate-900 flex items-center justify-center z-20 overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
                   {/* <img 
                      src="img.jpg" 
                      alt={PROFILE.name} 
                      className="w-full h-full object-cover"
                    /> */}
                    <img src="img.jpg"></img>
                    {/* <span className="text-6xl font-bold text-white/20">ST</span> */}
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-8 top-12 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg z-30 animate-bounce" style={{ animationDuration: '3s' }}>
                   <span className="text-2xl">🏆</span>
                </div>
                <div className="absolute -left-8 bottom-12 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg z-30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                   <span className="text-2xl">💻</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;