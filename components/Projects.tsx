import React, { useState, useEffect } from 'react';
import Section from './Section';
import { PROJECTS, RESEARCH } from '../constants';
import { Code, BookOpen, ArrowUpRight, ExternalLink, X, LayoutGrid, ChevronRight } from 'lucide-react';

// ─── All Projects Modal ───────────────────────────────────────────────────────

interface AllProjectsModalProps {
  onClose: () => void;
}

const AllProjectsModal: React.FC<AllProjectsModalProps> = ({ onClose }) => {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="All Projects"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-4 mx-4 flex flex-col bg-slate-50 dark:bg-slate-950 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 fade-in duration-300">

        {/* Header */}
        <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
              <LayoutGrid size={20} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">All Projects</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">{PROJECTS.length} projects total</p>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-all-projects-modal"
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable grid */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 md:px-10 py-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Shared Project Card ──────────────────────────────────────────────────────

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-300 flex flex-col h-full">
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-50 dark:bg-slate-700/50 rounded-lg text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
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

      <a
        href={project.link?.[0] || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2 mt-auto flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/50 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
      >
        View Details <ArrowUpRight size={16} />
      </a>
    </div>
  </div>
);

// ─── Main Projects Section ────────────────────────────────────────────────────

const FEATURED_COUNT = 4;

const Projects: React.FC = () => {
  const [showAllModal, setShowAllModal] = useState(false);
  const featuredProjects = PROJECTS.slice(0, FEATURED_COUNT);

  return (
    <>
      <Section id="projects" title="Projects & Research" subtitle="Innovation in Action">
        {/* Research Section */}
        <div className="space-y-8 mb-20">
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

        {/* Featured Projects Grid */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-16 mb-12">
          {/* Section header */}
          <div className="flex items-center justify-between gap-3 mb-8 px-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                <Code size={20} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Projects</h3>
              <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700/50">
                {FEATURED_COUNT} of {PROJECTS.length}
              </span>
            </div>

            <button
              id="view-all-projects-btn"
              onClick={() => setShowAllModal(true)}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-700/60 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-200 shadow-sm hover:shadow-indigo-200 dark:hover:shadow-indigo-900/40"
            >
              View All Projects
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* 2×2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAllModal(true)}
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <LayoutGrid size={18} />
              Explore All {PROJECTS.length} Projects
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </Section>

      {/* All Projects Modal */}
      {showAllModal && (
        <AllProjectsModal onClose={() => setShowAllModal(false)} />
      )}
    </>
  );
};

export default Projects;