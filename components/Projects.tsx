import React from 'react';
import Section from './Section';
import { PROJECTS, RESEARCH } from '../constants';
import { Code, BookOpen, ArrowUpRight, ExternalLink } from 'lucide-react';

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
              {/* <a href=Pro target="_blank" rel="noopener noreferrer">
              <button className="w-full py-2 mt-auto flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                View Details <ArrowUpRight size={16} />
              </button>
              </a> */}
                 {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="w-full py-2 mt-auto flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                    View Details <ArrowUpRight size={16} />
                  </button>
                </a>
              ) : (
                <button
                  disabled
                  className="w-full py-2 mt-auto flex items-center justify-center gap-2 text-sm font-medium text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg cursor-not-allowed"
                >
                  View Details <ArrowUpRight size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Research Section */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 mb-2 px-2">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
                <BookOpen size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Research Publications</h3>
        </div>

        {RESEARCH.map((res, idx) => (
          <div key={idx} className="bg-indigo-50 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 text-slate-900 dark:text-white border border-indigo-100 dark:border-slate-700 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-200 text-xs font-semibold border border-indigo-200 dark:border-indigo-500/30">
                        {res.status}
                    </div>
                    {res.link && (
                        <a 
                            href={res.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-300 hover:underline decoration-2 underline-offset-4"
                        >
                            Read Publication <ExternalLink size={16} />
                        </a>
                    )}
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold text-indigo-700 dark:text-indigo-200 mb-6 leading-tight">
                  {res.title}
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                   {res.description.map((desc, i) => (
                     <div key={i} className="flex gap-3">
                       <span className="h-1.5 w-1.5 mt-2.5 rounded-full bg-indigo-500 dark:bg-indigo-400 flex-shrink-0"></span>
                       <p>{desc}</p>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
};

export default Projects;