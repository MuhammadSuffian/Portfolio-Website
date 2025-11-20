import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white py-20 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
              I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex gap-4">
              <a 
                href={`mailto:${PROFILE.contact.email}`} 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-indigo-500/20"
              >
                Send Email
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
             <div>
               <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">Contact Info</h3>
               <div className="space-y-4">
                 <a href={`mailto:${PROFILE.contact.email}`} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                   <Mail size={18} />
                   <span className="text-sm truncate">{PROFILE.contact.email}</span>
                 </a>
                 <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                   <Phone size={18} />
                   <span className="text-sm">{PROFILE.contact.phone}</span>
                 </div>
                 <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                   <MapPin size={18} />
                   <span className="text-sm">{PROFILE.contact.location}</span>
                 </div>
               </div>
             </div>

             <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-200">Social Profiles</h3>
                <div className="flex flex-col gap-4">
                  <a href={PROFILE.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a href={PROFILE.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Designed & Built with React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Contact;