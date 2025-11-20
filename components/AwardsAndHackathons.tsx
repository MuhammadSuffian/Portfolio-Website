import React from 'react';
import Section from './Section';
import { AWARDS, HACKATHONS, CERTIFICATIONS } from '../constants';
import { Trophy, Medal, Award, BadgeCheck } from 'lucide-react';

const AwardsAndHackathons: React.FC = () => {
  return (
    <Section id="awards" title="Honors & Achievements" subtitle="Recognition & Competitions">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Awards & Certs */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Trophy className="text-amber-500" size={24} />
              Honors & Awards
            </h3>
            <div className="space-y-4">
              {AWARDS.map((award, idx) => (
                <div key={idx} className="bg-gradient-to-r from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent p-4 rounded-lg border border-amber-100 dark:border-amber-900/40 flex gap-4 items-start">
                  <Medal className="text-amber-500 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">{award.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{award.institution}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 mt-8">
              <BadgeCheck className="text-emerald-600 dark:text-emerald-500" size={24} />
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{cert.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Hackathons */}
        <div>
           <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Award className="text-indigo-600 dark:text-indigo-400" size={24} />
              Hackathon Participation
            </h3>
            <div className="relative border-l border-slate-200 dark:border-slate-700 ml-3 space-y-8 pl-8 py-2">
              {HACKATHONS.map((hack, idx) => (
                <div key={idx} className="relative">
                   <div className="absolute -left-[39px] top-1 h-3 w-3 rounded-full bg-indigo-400 ring-4 ring-white dark:ring-slate-900"></div>
                   <h4 className="font-bold text-slate-800 dark:text-slate-200 text-lg">{hack.name}</h4>
                   <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                     {hack.description}
                   </p>
                </div>
              ))}
            </div>
        </div>

      </div>

    </Section>
  );
};

export default AwardsAndHackathons;