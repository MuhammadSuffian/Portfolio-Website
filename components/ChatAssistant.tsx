import React, { useState, useRef, useEffect } from 'react';
// Note: `@google/genai` is a server-side library and should not be imported
// directly into client-side React code. We'll attempt a dynamic import at
// runtime (caught safely) so the app doesn't crash in the browser if the
// package isn't available. For production, move API calls to a server
// endpoint and call that from the client.
import { MessageCircle, X, Send, Loader2, Sparkles, User, Bot } from 'lucide-react';
import { PROFILE, EDUCATION, EXPERIENCE, PROJECTS, RESEARCH, SKILLS, AWARDS, CERTIFICATIONS, HACKATHONS } from '../constants';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: `Hi! I'm Suffian's AI assistant. Ask me anything about his projects, skills, or experience!` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // Use `any` because the client won't have server-side types for the
  // Google GenAI SDK. In production the chat should be proxied through
  // a server endpoint instead of calling the SDK from the browser.
  const chatSessionRef = useRef<any | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const initChat = async () => {
    if (chatSessionRef.current) return;

    const contextData = {
      profile: PROFILE,
      education: EDUCATION,
      experience: EXPERIENCE,
      projects: PROJECTS,
      research: RESEARCH,
      skills: SKILLS,
      awards: AWARDS,
      certifications: CERTIFICATIONS,
      hackathons: HACKATHONS
    };

    const systemInstruction = `You are an AI assistant for Muhammad Suffian Tafoor's portfolio website.
    Your goal is to answer visitor questions professionally and accurately based STRICTLY on the provided context below.
    
    Context Data:
    ${JSON.stringify(contextData, null, 2)}
    
    Guidelines:
    - Be friendly, professional, and concise.
    - If asked about contact info, provide the email or LinkedIn from the profile.
    - If asked about skills, summarize the key ones.
    - If asked about specific projects, provide details from the projects list.
    - If the answer is not in the context, politely state that you don't have that information and suggest contacting Suffian directly.
    - Do not make up facts not present in the data.
    - Use formatting (bullet points) if helpful for readability.
    - You are representing a Gold Medalist Software Engineer, so maintain a high standard of discourse.
    `;

    try {
      // Only attempt to load the server-side SDK when running in a
      // server/Node environment (no `window`). This avoids Vite trying
      // to resolve `@google/genai` while bundling client code.
      if (typeof window === 'undefined') {
        // Use an indirect import (constructor) to avoid static analysis
        // by bundlers that would try to resolve the module at build time.
        // @ts-ignore
        const mod: any = await new Function('s', 'return import(s)')('@google/genai');
        const GoogleGenAI = mod.GoogleGenAI ?? mod.default ?? mod;
        const ai = new GoogleGenAI({ apiKey: "AIzaSyAUWQ8q6xyhRLd51aueJj0VH4C7emtWKic" });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: systemInstruction,
          },
        });
      } else {
        // In the browser, do not attempt to import the server SDK. Leave
        // chatSessionRef null so we can gracefully show a helpful message
        // when the user tries to send a message.
        console.warn('Skipping server-only GenAI import in browser environment.');
      }
    } catch (error) {
      console.warn('GenAI SDK not available in this environment; chat disabled.', error);
    }
  };

  // Initialize chat when the component mounts so it's ready
  useEffect(() => {
    // call async init
    initChat();
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Ensure chat is initialized
      if (!chatSessionRef.current) await initChat();

      if (!chatSessionRef.current) {
        setMessages(prev => [...prev, { role: 'model', text: "AI service is not available in this environment." }]);
        return;
      }

      const result = await chatSessionRef.current.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: result.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error connecting to the AI service. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-all duration-300 border-2 border-white dark:border-slate-800 ${
          isOpen 
            ? 'bg-slate-200 text-slate-800 rotate-90 dark:bg-slate-700 dark:text-white' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-110'
        }`}
        aria-label="Chat with AI Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-96 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-50 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right ${
        isOpen 
          ? 'opacity-100 scale-100 translate-y-0' 
          : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
      }`}
      style={{ maxHeight: '600px', height: '70vh' }}
      >
        {/* Header */}
        <div className="bg-indigo-600 p-4 flex items-center gap-3 text-white shadow-md">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="font-bold text-sm md:text-base">Suffian's AI Assistant</h3>
            <p className="text-xs text-indigo-100 opacity-90">Powered by Gemini</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10 shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300' 
                  : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
              }`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-tr-none shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex items-start gap-3">
               <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                 <Bot size={16} />
               </div>
               <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700">
                 <Loader2 size={20} className="animate-spin text-indigo-600 dark:text-indigo-400" />
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about projects, skills..."
              className="flex-1 bg-slate-100 dark:bg-slate-800 border-0 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 dark:text-white placeholder:text-slate-400 transition-all outline-none"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;