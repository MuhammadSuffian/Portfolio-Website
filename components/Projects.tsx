import React from 'react';
import Section from './Section';
import { PROJECTS, RESEARCH } from '../constants';
import { Code, BookOpen, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects & Research" subtitle="Innovation in Action">
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {PROJECTS.map((project, index) => (
          <div key={index} className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-300 flex flex-col h-full">
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <Code size={24} />
                </div>
                <div className="flex gap-2 flex-wrap justify-end">
                   {project.technologies.slice(0, 3).map(tech => (
                     <span key={tech} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md font-medium">
                       {tech}
                     </span>
                   ))}
                   {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md font-medium">
                       +{project.technologies.length - 3}
                     </span>
                   )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <ul className="space-y-2 mb-6 flex-1">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start">
                     <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                     {desc}
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 mt-auto flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                View Details <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Research Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 text-white border border-transparent dark:border-slate-700">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <BookOpen size={32} className="text-indigo-300" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">Research Publication</h3>
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 text-xs font-semibold border border-indigo-500/30 mb-6">
              {RESEARCH[0].status}
            </div>
            
            <h4 className="text-xl font-semibold text-indigo-200 mb-4">
              {RESEARCH[0].title}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-sm leading-relaxed">
               {RESEARCH[0].description.map((desc, i) => (
                 <div key={i} className="flex gap-3">
                   <span className="h-1.5 w-1.5 mt-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
                   <p>{desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Projects;