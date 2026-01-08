
import React from 'react';
import Section from './Section';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience & Education" subtitle="My Professional Journey" bg="gray">
        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-indigo-600 dark:text-indigo-400">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Academic Foundation</h3>
          </div>

          <div className="space-y-12 relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-10">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[51px] top-1.5 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-slate-300 dark:bg-slate-700 transition-transform group-hover:scale-125 group-hover:bg-indigo-500"></div>
                
                <div className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">{edu.institution}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-sm text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full mb-2">
                        <Calendar size={14} className="text-indigo-500" /> {edu.date}
                      </span>
                      <div className="flex items-center gap-2 px-3 py-1">
                        <span className="text-slate-400">CGPA:</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold text-base">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                  
                  {edu.honors && edu.honors.length > 0 && (
                    <div className="mb-6 inline-flex items-center gap-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-xl px-5 py-3">
                      <span className="text-xl">🏆</span>
                      <p className="text-sm md:text-base font-bold text-amber-900 dark:text-amber-200">
                        {edu.honors[0]}
                      </p>
                    </div>
                  )}

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <BookOpen size={14} /> Core Specializations
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span key={i} className="px-4 py-1.5 text-sm font-medium bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

              {/* Professional Experience Section (Top Prominence) */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-10  ">
            <div className="p-2.5 bg-indigo-600 rounded-xl text-white shadow-lg shadow-indigo-200 dark:shadow-none">
              <Briefcase size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Professional Experience</h3>
          </div>
          
          <div className="space-y-12 relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 pl-10">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[51px] top-1.5 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-indigo-600 transition-transform group-hover:scale-125"></div>
                
                <div className="bg-white dark:bg-slate-900/50 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">{job.role}</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg">{job.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end text-sm text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full mb-2">
                        <Calendar size={14} className="text-indigo-500" /> {job.period}
                      </span>
                      <span className="flex items-center gap-2 px-3 py-1">
                        <MapPin size={14} className="text-slate-400" /> {job.location}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500/50"></span>
                        <span className="text-base">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
    </Section>
  );
};

export default Experience;
