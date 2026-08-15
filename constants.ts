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
  name: "Muhammad Suffian Tafoor",
  title: "Software Engineer & Gold Medalist",
  about: "Software Engineer with a strong academic record (Gold Medalist) and hands-on experience in Android development and AI-driven solutions. Passionate about Artificial Intelligence, Machine Learning, and Deep Learning, with a proven track record of building scalable applications, optimizing performance, and conducting innovative research in energy decision support systems.",
  contact: {
    email: "muhammad.suffian.5959@gmail.com",
    phone: "+92 340 5878773",
    location: "Rawalpindi, Pakistan",
    linkedin: "https://www.linkedin.com/in/muhammadsuffian/", // Placeholder URL pattern based on name
    github: "https://github.com/MuhammadSuffian" // Placeholder URL pattern based on name
  } as ContactInfo
};

export const EDUCATION: EducationItem[] = [
  {
    institution: "Foundation University Islamabaddddd",
    location: "Islamabad, Pakistan",
    degree: "Bachelor of Science in Software Engineering",
    cgpa: "3.83/4.00",
    date: "SEPT 2021 – AUG 2025",
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
    period: "July 2024 – Dec 2025",
    description: [
      "Engineered and maintained Android applications with over 1M+ downloads, solving complex problems and improving UX for 10,000+ active users.",
      "Pioneered on-device AI-based apps using TensorFlow Lite and Google ML Kit.",
      "Developed PHP APIs and implemented Retrofit-based REST API integration for Android applications.",
      "Optimized and resolved critical application issues, achieving 95% crash-free user sessions."
    ]
  },
  {
    company: "Foundation University Islamabad",
    location: "Islamabad, Pakistan",
    role: "Research Assistant",
    period: "Sep 2024 – Present",
    description: [
      "Conducting research under Dr. Muhammad Shaheen, Dean of Software Engineering, focused on applied ML and data-driven systems for the energy sector.",
      "Developed Intelligent Energy Scenario Analysis (IESA), an end-to-end analytics platform combining WisRule wisdom rule mining, ML regression, and Transformer-based forecasting models, deployed as a multi-page Streamlit dashboard with a Supabase/PostgREST backend.",
      "Built an integrated LLM + RAG chatbot for natural-language querying of energy scenario data.",
      "Working on a research paper extending this work, covering symbolic rule mining and predictive modeling for the Pakistani energy sector.",
      "Currently exploring extensions of this research toward reinforcement learning and optimization approaches for sequential decision-making problems."
    ]
  },
  {
    company: "Foundation University Islamabad",
    location: "Islamabad, Pakistan",
    role: "Teaching Assistant (OOP & DSA Labs)",
    period: "Sep 2022 – June 2025",
    description: [
      "Assisted in conducting undergraduate laboratory sessions for Object-Oriented Programming (OOP) and Data Structures & Algorithms (DSA) under the supervision of Engr. Sherjeel Farooqui.",
      "Supported students in implementing core programming concepts including classes, inheritance, polymorphism, recursion, and fundamental data structures.",
      "Guided students in debugging code, understanding algorithmic complexity, and applying best programming practices.",
      "Assisted with lab evaluations, grading, and academic mentoring to enhance student performance and learning outcomes."
    ]
  }
];

export const RESEARCH: ResearchItem[] = [
  {
    title: "PREDICTING PHISHING ATTACKS USING NATURAL LANGUAGE PROCESSING AND USER BEHAVIORAL INDICATORS",
    status: "Published – 18, December 2025",
    link: "https://thesesjournal.com/index.php/1/article/view/1688#:~:text=This%20research%20proposes%20a%20comprehensive,subtle%20cues%20of%20phishing%20attempts.",
    description: [
      "Analyzed linguistic features of phishing messages using advanced NLP techniques to identify semantic, syntactic, and psychological deception cues.",
      "Modeled user behavioral indicators such as link-click frequency, response time, and prior phishing exposure to capture human susceptibility factors.",
      "Developed a hybrid machine learning framework integrating NLP-based content analysis with behavioral data for proactive phishing prediction.",
      "Evaluated the hybrid model against traditional approaches, demonstrating improved accuracy, robustness, and detection of zero-day phishing attacks."
    ]
  },
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
    ],
    link: ["https://iesa-intelligent-energy-scenario-analysis-live-nkfuuzjjkmpmjcj.streamlit.app/"]
  },
  {
    title: "AI Legal Consultant — Pakistan",
    technologies: ["Streamlit", "Python", "RAG (Retrieval-Augmented Generation)", "llama-3.3 70b", "Pinecone DB"],
    description: [
      "Problem: Legal information in Pakistan is scattered across dozens of statutes and hard to access for non-lawyers, leading to confusion around basic rights, procedures, and applicable laws in common scenarios like harassment, trafficking, and traffic accidents.",
      "Solution: An AI-powered legal information assistant grounded in 40+ Pakistani statutes (Constitution, PPC, CrPC, PECA 2016, Trafficking & Smuggling Acts, Family Law, Corporate & Banking Acts, and more), delivering source-cited answers instead of generic or hallucinated legal advice.",
      "Implemented a retrieval pipeline that grounds every response strictly in ingested legal documents, with inline citations (act, section, page) and explicit uncertainty flags when the knowledge base lacks sufficient information."
    ],
    link: ["https://suffian-ai-legal-consultant.streamlit.app/"]
  },
  {
    title: "Stock Price Prediction using LSTM",
    technologies: ["LSTM", "Keras", "yfinance", "Plotly", "Python"],
    description: [
      "Developed a deep learning model to predict Apple (AAPL) stock closing prices using a stacked LSTM neural network.",
      "Pulled 13+ years of historical market data and built interactive candlestick visualizations using Plotly.",
      "Trained the network using Open, High, Low, and Volume values to forecast future closing prices."
    ],
    link: ["https://github.com/MuhammadSuffian/Stock-Price-Prediction-using-LSTM.git"]
  },

  // {
  //   title: "Sufrinia - Multi LLM Chatbot",
  //   technologies: ["Kotlin", "XML", "Retrofit", "Gemini Flash", "Ollama", "Google TTS & STT"],
  //   description: [
  //     "Android app with TTS, STT, image input, and multiple LLM models.",
  //     "Built an AI-powered chatbot app with dynamic UI and real-time conversational flow.",
  //     "Enabled flexible AI switching and dynamic context retention."
  //   ],
  //   link:["nil"]
  // },
  {
    title: "AI Study Buddy",
    technologies: ["Groq API", "Streamlit", "RAG", "Vector Search"],
    description: [
      "Built a Retrieval-Augmented Generation (RAG) chatbot that lets users upload multiple documents (TXT and PDF) for context-aware Q&A.",
      "Implemented automatic text chunking and vector indexing, paired with Groq API for fast inference and a Streamlit-based interactive interface."
    ],
    link: ["https://ai-study-buddy-beta.streamlit.app/"]
  },
  {
    title: "Fashion-MNIST Image Classification Using Neural Networks",
    technologies: ["TensorFlow", "Keras", "NumPy", "Matplotlib", "Python"],
    description: [
      "Developed a feedforward neural network in TensorFlow/Keras to classify clothing images from the Fashion-MNIST dataset.",
      "Built a sequential architecture consisting of Dense layers (with ReLU and Softmax activations) to recognize 10 distinct apparel categories.",
      "Handled the end-to-end machine learning pipeline, including data normalization, validation splitting, model training, and prediction visualization."
    ],
    link: ["https://github.com/MuhammadSuffian/Image-Classification-with-NN"]
  },
  {
    title: "AI Sentiment-Based Chatbot",
    technologies: ["TextBlob", "Groq API", "Speech Recognition", "Streamlit"],
    description: [
      "Built a voice-based app that transcribes uploaded or live-recorded audio into text using SpeechRecognition.",
      "Performs sentiment analysis with TextBlob and generates an empathetic, LLM-driven response via the Groq API."
    ],
    link: ["https://ai-sentiment-analysisgit.streamlit.app/"]
  },
  {
    title: "House Price Prediction with AI",
    technologies: ["Scikit-learn", "Linear Regression", "LLM", "Streamlit"],
    description: [
      "Built a multi-variable Linear Regression model trained on a real-world housing dataset to predict house prices.",
      "Integrated an LLM (openai/gpt-oss-120b) to explain predictions in natural, conversational language via an interactive Streamlit app."
    ],
    link: ["https://muhammadsuffian-linear-regressi-house-price-app-with-llm-loohfa.streamlit.app/"]
  },
  {
    title: "AI HR System",
    technologies: ["AI", "Automation", "Web"],
    description: [
      "Automates and assists HR in daily tasks.",
      "Handles automated query handling and employee support."
    ],
    link: ["https://github.com/MuhammadSuffian/AI-HR"]
  },
  {
    title: "TechCorp IT Support Chatbot",
    technologies: ["LangChain", "Ollama", "LLM"],
    description: [
      "Built an IT support chatbot using LangChain and a local Ollama LLM (llama3.2) with a company-specific prompt template for common issues like VPN and account access.",
      "Maintains conversation memory per session and auto-escalates out-of-scope issues to a human with a mock ticket number."
    ],
    link: ["https://github.com/MuhammadSuffian/Suffian_TechCorp_IT_Chatbot.git"]
  },
  {
    title: "Minto - Math Expert Agent",
    technologies: ["LangChain", "Groq API", "LLM"],
    description: [
      "Built Minto, a conversational math expert agent powered by LangChain and Groq's llama-3.3-70b-versatile model, using per-session conversational memory.",
      "Answers math queries in a concise, friendly tone while politely declining anything outside the math domain."
    ],
    link: ["https://github.com/MuhammadSuffian/Minto-Math-expert-agent"]
  },
  {
    title: "Cryptocurrency Price Prediction (BTC-USD)",
    technologies: ["AutoTS", "Time-Series Forecasting", "Plotly"],
    description: [
      "Built a time-series forecasting notebook that predicts Bitcoin's closing price using AutoTS, which automatically searches and ensembles dozens of forecasting models (ETS, GLM, FFT, and more).",
      "Fetched ~2 years of daily BTC-USD data via yfinance, visualized it with interactive Plotly candlestick charts, and forecasted the next 30 days using a validated model ensemble."
    ],
    link: ["https://github.com/MuhammadSuffian/CryptoCurrency-Price-Prediction-using-ML"]
  },

  {
    title: "Future Sales Prediction",
    technologies: ["Scikit-learn", "Linear Regression", "Pandas"],
    description: [
      "Trained a Linear Regression model on historical advertising and sales data to learn the relationship between marketing spend (TV, Radio, Newspaper) and product sales.",
      "Included data preprocessing, visualization, and model evaluation to generate future sales predictions based on advertising budgets."
    ],
    link: ["https://github.com/MuhammadSuffian/Future_Sales_Prediciton_using_ML"]
  },
  {
    title: "Waiter Tip Prediction",
    technologies: ["Scikit-learn", "Linear Regression", "EDA"],
    description: [
      "Built a Linear Regression model to predict expected waiter tips from restaurant billing data, using features like total bill, party size, day, and time.",
      "Performed exploratory data analysis and visualization to uncover customer behavior patterns, then evaluated model performance for tip prediction accuracy."
    ],
    link: ["https://github.com/MuhammadSuffian/Waiter_Tip_Prediction_using_ML"]
  },
];

export const HACKATHONS: HackathonItem[] = [
  {
    name: "AI Factory by NativeBuilder 2026",
    description: "Developed Nexus Research, an AI-powered multi-agent research platform for students and researchers to automate literature review and academic paper analysis.",
    link: "https://lablab.ai/ai-hackathons/nativebuilder-build-without-limits/belungra/nexus-research"
  },
  {
    name: "Reimagine WebHackathon 2025",
    description: "Developed AI Study Buddy, an AI-powered study assistant website for students and teachers to support their academics.",
    link: "https://devpost.com/software/ai-study-budy"
  },
  {
    name: "Code Fusion Hackathon (ICodeGuru × WPbridge) 2025",
    description: "Developed AI HR, an AI-powered HR website for automated query handling and employee support.",
    link: "https://github.com/MuhammadSuffian/hackaton_sept_ai_python_chatbot_rag/tree/main"
  },
  {
    name: "COMSATS Visio Spark 2024",
    description: "Built a mobile fitness tracking app with authentication, real-time leaderboard, and performance analytics.",
    link: "https://drive.google.com/file/d/1WpFeeFlIgI5gll0GmzsqK_VzoMBKej8u/view?usp=sharing"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "Kotlin", "Java", "C++", "C", "SQL"]
  },
  {
    name: "Software & Tools",
    skills: ["Git/GitHub", "Pandas", "Numpy", "Scikit-learn", "Pytorch", "TensorFlow", "Linux", "Docker"]
  },
  {
    name: "Laboratory & Research",
    skills: ["Data Preprocessing", "Feature Selection", "Wisdom Rule Mining", "Data Visualization", "AI/ML", "Deep Learning", "Model Traning", "Generative AI", "LLMs", "Vision Language Models"]
  }
];

export const AWARDS: AwardItem[] = [
  {
    title: "Gold Medal for Highest CGPA",
    institution: "Foundation University Islamabad",
    year: "2025"
  },
  {
    title: "Distinction Certificate & Merit-Based Scholarship for Academic Performance",
    institution: "Foundation University Islamabad",
    year: "2025"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Google Cybersecurity",
    issuer: "Google on Coursera",
    link: "https://coursera.org/share/6aec69b2e806f00c468f70d34ce9360a",
  },
  {
    name: "AI For Everyone",
    issuer: "deeplearning.ai on Coursera"
    , link: "https://coursera.org/share/1338ada61fc8b38a8acc99ac3c34f2ab"
  }
];