import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Proficiency" subtitle="Tools & Technologies" bg="gray">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS.map((category, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-indigo-200 dark:hover:border-indigo-700 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-100 dark:border-slate-700">
              {category.name}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <span className="text-slate-600 dark:text-slate-300 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{skill}</span>
                  <CheckCircle2 size={16} className="text-indigo-100 dark:text-indigo-900 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;