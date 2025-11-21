import React, { useEffect, useState } from 'react';

const Loader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Initializing...');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          if (onComplete) {
            // Small delay to let the user see the 100% state briefly
            setTimeout(onComplete, 500);
          }
          return 100;
        }
        // Non-linear progress for a more realistic "loading" feel
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    // Cycle text based on approximate progress time
    const textTimer = setTimeout(() => setText('Loading Modules...'), 800);
    const textTimer2 = setTimeout(() => setText('Compiling Assets...'), 1600);
    const textTimer3 = setTimeout(() => setText('Welcome'), 2200);

    return () => {
      clearInterval(timer);
      clearTimeout(textTimer);
      clearTimeout(textTimer2);
      clearTimeout(textTimer3);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer spinning ring */}
        <div className="absolute h-24 w-24 rounded-full border-4 border-indigo-100 dark:border-slate-800"></div>
        <div className="absolute h-24 w-24 rounded-full border-t-4 border-indigo-600 dark:border-indigo-500 animate-spin"></div>
        
        {/* Inner pulsing circle */}
        <div className="absolute h-12 w-12 bg-indigo-600 dark:bg-indigo-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Center Logo/Icon */}
        <div className="relative z-10 h-16 w-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-lg border-2 border-indigo-50 dark:border-slate-800">
          <span className="font-bold text-xl text-indigo-600 dark:text-indigo-400">ST</span>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-4 relative">
        <div 
          className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Loading Text */}
      <div className="h-6 flex items-center justify-center">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wider uppercase animate-pulse">
          {text}
        </span>
      </div>
      
      {/* Percentage */}
      <div className="mt-2 font-mono text-xs text-indigo-400">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default Loader;