import React from 'react';
import Section from './Section';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Education & Experience" subtitle="My Journey" bg="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Education Column (Now First) */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-3">
            <GraduationCap className="text-indigo-600 dark:text-indigo-400" />
            Education
          </h3>
          <div className="space-y-8 relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-3 pl-8 pb-4">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-600 dark:bg-indigo-500"></div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">{edu.institution}</p>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0 flex flex-col items-start sm:items-end">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {edu.date}</span>
                      <span className="font-semibold text-indigo-500 dark:text-indigo-400 mt-1">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  
                  {edu.honors && edu.honors.length > 0 && (
                    <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800/30 rounded-lg p-3">
                      <p className="text-sm font-semibold text-amber-800 dark:text-amber-200 flex items-center gap-2">
                        <span className="text-lg">🏅</span> {edu.honors[0]}
                      </p>
                    </div>
                  )}

                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-5">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <BookOpen size={14} /> Relevant Coursework
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span key={i} className="px-2.5 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-600">
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

        {/* Experience Column (Now Second) */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-3">
            <Briefcase className="text-indigo-600 dark:text-indigo-400" />
            Professional Experience
          </h3>
          <div className="space-y-8 relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-3 pl-8 pb-4">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-600 dark:bg-indigo-500"></div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">{job.company}</p>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0 flex flex-col items-start sm:items-end">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {job.period}</span>
                      <span className="flex items-center gap-1 mt-1"><MapPin size={14} /> {job.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Experience;