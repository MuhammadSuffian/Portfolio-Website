import { 
  ContactInfo, 
  EducationItem, 
  ExperienceItem, 
  ProjectItem, 
  ResearchItem, 
  HackathonItem, 
  SkillCategory, 
  AwardItem, 
  CertificationItem 
} from './types';

export const PROFILE = {
  name: "Muhammad Suffian Tattttfoor",
  title: "Software Engineer & Gold Medalist",
  about: "Software Engineer with a strong academic record (Gold Medalist) and hands-on experience in Android development and AI-driven solutions. Passionate about Artificial Intelligence, Machine Learning, and Deep Learning, with a proven track record of building scalable applications, optimizing performance, and conducting innovative research in energy decision support systems.",
  contact: {
    email: "muhammad.suffian.5959@gmail.com",
    phone: "+92 340 5878773",
    location: "Rawalpindi, Pakistan",
    linkedin: "https://linkedin.com/in/suffiantafoor", // Placeholder URL pattern based on name
    github: "https://github.com/suffiantafoor" // Placeholder URL pattern based on name
  } as ContactInfo
};

export const EDUCATION: EducationItem[] = [
  {
    institution: "Foundation University Islamabad",
    location: "Islamabad, Pakistan",
    degree: "Bachelor of Science in Software Engineering",
    gpa: "3.83/4",
    date: "Aug 2025",
    honors: ["Gold Medalist (Fall 2021 Batch)"],
    coursework: [
      "Artificial Intelligence", 
      "Data Science", 
      "Digital Image Processing", 
      "Algorithms", 
      "SQA", 
      "Computer Networks", 
      "SPM"
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Hura Technologies",
    location: "Rawalpindi, Punjab",
    role: "Android Developer",
    period: "July 2024 – Sep 2025",
    description: [
      "Engineered and maintained Android applications with over 1M+ downloads, solving complex problems and improving UX for 10,000+ active users.",
      "Pioneered on-device AI-based apps using TensorFlow Lite and Google ML Kit.",
      "Developed PHP APIs and implemented Retrofit-based REST API integration for Android applications.",
      "Optimized and resolved critical application issues, achieving 95% crash-free user sessions."
    ]
  }
];

export const RESEARCH: ResearchItem[] = [
  {
    title: "Wisdom Mining in Energy Decision Support",
    status: "In progress",
    description: [
      "Conducting research for an AI-driven Decision Support System to optimize energy usage.",
      "Implementing WisRule, a Wisdom mining algorithm, to achieve adaptive advantage over associative rule mining.",
      "Evaluating contextually locked LLMs and regression models to improve accuracy and usability."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Senior Year Project: Intelligent Energy Scenario Analysis (IESA)",
    technologies: ["Streamlit", "Groq Cloud", "FIAS", "Scikit-learn", "Wisdom Mining", "Python", "Pandas", "NumPy", "Matplotlib"],
    description: [
      "Problem: Energy planning systems are outdated, complex, and lack accurate forecasting or personalized insights. This results in inefficient resource allocation, increased costs, and poor sustainability outcomes.",
      "Solution: An AI-powered, user-friendly platform for accurate predictions, scenario analysis, and personalized recommendations—enabling smarter, more sustainable national energy management.",
      "Implemented WisRule algorithm to identify energy patterns and generate intelligent insights."
    ]
  },
  {
    title: "Multi AI Agents",
    technologies: ["Gemini", "Google SDK", "Python"],
    description: [
      "Developed a currency conversion AI agent app leveraging multi-agent architecture.",
      "Integrated multiple AI agents to communicate and solve complex conversion tasks efficiently."
    ]
  },
  {
    title: "AI Search Helper",
    technologies: ["Gemini", "Google SDK", "Google Search Tool"],
    description: [
      "Developed a single AI agent using Gemini and Google SDK integrated with Google Search.",
      "Assists users by performing web searches and summarizing the data into concise, relevant answers."
    ]
  },
  {
    title: "Sufrinia - Multi LLM Chatbot",
    technologies: ["Kotlin", "XML", "Retrofit", "Gemini Flash", "Ollama", "Google TTS & STT"],
    description: [
      "Android app with TTS, STT, image input, and multiple LLM models.",
      "Built an AI-powered chatbot app with dynamic UI and real-time conversational flow.",
      "Enabled flexible AI switching and dynamic context retention."
    ]
  },
  {
    title: "AI Study Buddy",
    technologies: ["LLM", "RAG", "AI", "Web"],
    description: [
      "LLM and RAG-based study assistance for students and teachers.",
      "Provides personalized academic support and resource generation."
    ]
  },
  {
    title: "AI HR System",
    technologies: ["AI", "Automation", "Web"],
    description: [
      "Automates and assists HR in daily tasks.",
      "Handles automated query handling and employee support."
    ]
  },
  {
    title: "AI Sentiment-Based Chatbot",
    technologies: ["NLP", "Sentiment Analysis", "AI"],
    description: [
      "Evaluates user sentiment to provide appropriate replies.",
      "Adapts conversational tone based on user emotion analysis."
    ]
  }
];

export const HACKATHONS: HackathonItem[] = [
  {
    name: "Reimagine WebHackathon 2025",
    description: "Developed AI Study Buddy, an AI-powered study assistant website for students and teachers."
  },
  {
    name: "Code Fusion Hackathon 2025",
    description: "Developed AI HR, an AI-powered HR website for automated query handling and employee support."
  },
  {
    name: "Comsats Visio Spark 2024",
    description: "Built a mobile fitness tracking app with authentication, real-time leaderboard, and performance analytics."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Kotlin", "Java", "Python", "C++", "C", "SQL"]
  },
  {
    name: "Software & Tools",
    skills: ["Git", "GitHub", "Android Studio", "Postman", "Figma", "Jupyter Notebook", "VS Code"]
  },
  {
    name: "Laboratory & Research",
    skills: ["Data Preprocessing", "Feature Selection", "Wisdom Rule Mining", "Data Visualization", "AI/ML", "Deep Learning"]
  }
];

export const AWARDS: AwardItem[] = [
  {
    title: "Gold Medal for Highest CGPA",
    institution: "Foundation University Islamabad",
    year: "2025"
  },
  {
    title: "Distinction Certificate for Academic Performance",
    institution: "Foundation University Islamabad",
    year: "2025"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Google Cybersecurity",
    issuer: "Google on Coursera"
  },
  {
    name: "AI For Everyone",
    issuer: "deeplearning.ai on Coursera"
  }
];