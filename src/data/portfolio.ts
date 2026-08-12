export const profile = {
  name: "Rahul Daga",
  title: "ML Engineer · AI Research · ISRO",
  email: "rahul.0411.da@gmail.com",
  github: "https://github.com/rahul02-dat",
  location: "Somehwere",
  education: "B.Tech IT · VIT Pune · 2026",
  bioParagraphs: [
    "I am an engineer with a deep interest in AI and Machine Learning fields. My core skill: I think, I research, I build. I deliver real-world solutions, automated workflows and measurable business outcomes. In my career of engineering I have worked on RAG systems, Data Engineering, Development of Agentic systems and workflows and learned failure mode debugging from deploying workflows to production."
  ],
  interests: [
    { label: "Coding", desc: "I Develop" },
    { label: "Music", desc: "I play with strings" },
    { label: "Gaming", desc: "I Play" },
    { label: "Gyming", desc: "I lift" },
    { label: "Binge Watching", desc: "I watch" }
  ],
};

export const coreAreas = [
  { label: "Machine Learning", tone: "accent" },
  { label: "Agentic AI", tone: "accent" },
  { label: "LLM Systems", tone: "accent" },
  { label: "LLM Security", tone: "red" },
  { label: "Prompt Injection Defense", tone: "red" },
  { label: "Computer Vision", tone: "green" },
  { label: "Image Forensics", tone: "green" },
  { label: "Atmospheric ML", tone: "amber" },
  { label: "ISRO Research", tone: "amber" },
  { label: "Data Pipelines", tone: "default" },
  { label: "MLOps", tone: "default" },
  { label: "RAG", tone: "default" },
  { label: "FastAPI", tone: "default" },
  { label: "Docker", tone: "default" },
  { label: "Edge AI", tone: "default" },
] as const;

export const skillTabs = [
  {
    id: "dev",
    label: "Development",
    skills: [
      { name: "Python", icon: "python", tone: "accent" },
      { name: "JavaScript / TS", icon: "javascript", tone: "accent" },
      { name: "Golang", icon: "go", tone: "default" },
      { name: "ReactJS", icon: "react", tone: "default" },
      { name: "Next.js", icon: "nextdotjs", tone: "default" },
      { name: "Node.js", icon: "nodedotjs", tone: "default" },
      { name: "Django", icon: "django", tone: "default" },
      { name: "FastAPI", icon: "fastapi", tone: "accent" },
      { name: "Flask", icon: "flask", tone: "default" },
      { name: "GraphQL", icon: "graphql", tone: "default" },
      { name: "TailwindCSS", icon: "tailwindcss", tone: "default" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "SQL", icon: "mysql", tone: "default" },
      { name: "PostgreSQL", icon: "postgresql", tone: "default" },
      { name: "MongoDB", icon: "mongodb", tone: "default" },
      { name: "Redis", icon: "redis", tone: "default" },
      { name: "Supabase", icon: "supabase", tone: "default" },
    ],
  },
  {
    id: "ml",
    label: "AI/ML",
    skills: [
      { name: "PyTorch", icon: "pytorch", tone: "accent" },
      { name: "TensorFlow", icon: "tensorflow", tone: "accent" },
      { name: "Scikit-Learn", icon: "scikitlearn", tone: "default" },
      { name: "OpenCV", icon: "opencv", tone: "default" },
      { name: "EfficientNet", icon: "keras", tone: "default" }, // Using keras logo as proxy for EfficientNet
      { name: "NumPy & Pandas", icon: "pandas", tone: "accent" },
      { name: "Ollama", icon: "ollama", tone: "default" },
      { name: "AI Forensics", icon: "huggingface", tone: "red" },
    ],
  },
  {
    id: "tools",
    label: "Tools Used",
    skills: [
      { name: "Git / GitHub", icon: "github", tone: "accent" },
      { name: "Docker", icon: "docker", tone: "default" },
      { name: "Kubernetes", icon: "kubernetes", tone: "default" },
      { name: "Google Cloud", icon: "googlecloud", tone: "default" },
      { name: "Linux", icon: "linux", tone: "default" },
      { name: "Unix / macOS", icon: "apple", tone: "default" },
      { name: "Streamlit", icon: "streamlit", tone: "default" },
      { name: "Jupyter", icon: "jupyter", tone: "default" },
      { name: "Raspberry Pi", icon: "raspberrypi", tone: "default" },
      { name: "NetCDF / HDF5", icon: "scipy", tone: "default" },
      { name: "GitLab CI", icon: "gitlab", tone: "default" },
    ],
  },
] as const;

export type ProjectType = "ml" | "sec" | "cv" | "misc";

export interface Project {
  num: string;
  name: string;
  metric: string;
  badge: string;
  type: ProjectType;
  github: string;
  description: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    num: "001",
    name: "Forensic AI Image Detector",
    metric: "Real vs AI-generated · GradCAM",
    badge: "Computer Vision",
    type: "cv",
    github: "https://github.com/rahul02-dat/Image_Forensicsv2",
    description: "A dual-stream CNN classifying images as real photographs or AI-generated, trained on the GenImage benchmark dataset. It uses an EfficientNet-B4 spatial stream to process RGB patterns alongside a parallel Patch-DCT frequency stream that analyzes frequency-domain artifacts. A GradCAM heatmap is overlaid on input images to highlight the exact spatial regions that triggered the AI-generated verdict, all wrapped in a Dockerized FastAPI backend deployable to Hugging Face Spaces.",
    stack: ["Python", "EfficientNet-B4", "GradCAM", "FastAPI"],
  },
  {
    num: "002",
    name: "Containerized Security Evaluation and Threat Modeling",
    metric: "secp256k1 · Lattice Reduction",
    badge: "Cryptanalysis",
    type: "sec",
    github: "https://github.com/rahul02-dat/cryptography",
    description: "A security cryptanalysis pipeline for recovering a 256-bit ECDSA private key over the secp256k1 elliptic curve from biased nonces. The system casts signature equations into instances of the Hidden Number Problem (HNP) and solves them via lattice reduction, effectively modeling side-channel and firmware leak scenarios where nonce generators leak partial bits per signature.",
    stack: ["Python", "Cryptography", "Lattice Reduction", "Cryptanalysis"],
  },
  {
    num: "003",
    name: "Transformer Training and Gradient Optimization Infrastructure",
    metric: "AMP Scaler · Distributed",
    badge: "MLOps",
    type: "ml",
    github: "https://github.com/rahul02-dat/ML-Infrastructures",
    description: "A benchmarking harness developed to diagnose and fix subtle gradient accumulation defects that corrupt mixed-precision training dynamics. It focuses on resolving issues with PyTorch's torch.amp.GradScaler and torch.autocast when scaling across micro-batches, optimizing modern distributed pipelines to prevent silent corruption when simulating large batch sizes on constrained memory.",
    stack: ["Python", "PyTorch AMP", "Distributed Training", "MLOps"],
  },
  {
    num: "004",
    name: "DataPrepX — AI Data Handler",
    metric: "90% accuracy · Auto ETL",
    badge: "ML Pipeline",
    type: "ml",
    github: "https://github.com/rahul02-dat/Data-PrepX-v1.2",
    description: "An AI-assisted preprocessing engine that automatically detects data quality issues (missing values, inconsistent types, outliers) using intelligent heuristic analysis. It recommends operations via modular YAML/JSON configurations and features adaptive model selection across 7 regression and classification models, reducing manual data preparation time by 70% with an interactive Streamlit UI for real-time visualization.",
    stack: ["Python", "Golang", "ReactJS", "Pytorch"],
  },
  {
    num: "005",
    name: "Multi-Agent Cybersecurity Framework",
    metric: "LangGraph · Local LLMs",
    badge: "Cybersecurity",
    type: "sec",
    github: "https://github.com/rahul02-dat/Multi_Agent_Cybersecurity_Framework",
    description: "An air-gapped, multi-agent Intrusion Prevention System (IPS) leveraging local LLMs and Retrieval-Augmented Generation (RAG). It uses a heuristic Watchdog to filter traffic, routing anomalies to a LangGraph-orchestrated AI swarm where an Analyst agent proposes threats, a Critic acts as a Red Team, and a Judge arbitrates to deploy active firewall mitigations, all grounded by a ChromaDB threat intelligence vector store.",
    stack: ["Python", "LangGraph", "Ollama", "ChromaDB", "LLMs"],
  },
  {
    num: "006",
    name: "ASCII Camera — Real-Time Renderer",
    metric: "30 FPS · Multi-threaded",
    badge: "Creative CV",
    type: "misc",
    github: "https://github.com/rahul02-dat/ASCII_Camera",
    description: "A real-time webcam-to-ASCII art renderer running at up to 30 FPS in a dedicated Tkinter GUI window. The application uses a multi-threaded background CaptureThread to read frames and maps pixels to ASCII via a vectorized NumPy lookup table. It features six selectable character palettes switchable on the fly, alongside a full CLI with adjustable columns, target FPS, and live keyboard shortcuts.",
    stack: ["Python", "OpenCV", "NumPy", "Tkinter"],
  },
];

export interface Experience {
  role: string;
  org: string;
  badge: string;
  badgeType: "now" | "past";
  accent: "isro" | "archsoft" | "edu";
  points: string[];
  chips: string[];
}

export const experiences: Experience[] = [
  {
    role: "AI Research Intern",
    org: "ISRO — Indian Space Research Organisation",
    badge: "Feb – Aug 2026",
    badgeType: "past",
    accent: "isro",
    points: [
      "AT ISRO, I was a part of the Atmospheric Sciences Division at Indian Space Research Organisation - Space Application Centre. I got the opportunity to work under the scientists working on a project based on direct retrieval of atmospheric parameters using satellite data. I was given a task to research on existing satellite data retrieval methods and based on my research, I proposed a method to retrieve atmospheric parameters directly using INSAT-3DS satellite data, by using AI and Machine Learning methods. By designing a training ensemble of various machine learning models and a custom neural network, I was able to achieve the automation of retrival with an R2 score of 98.73%"
    ],
    chips: ["Python", "TensorFlow", "NetCDF / HDF5", "NumPy / SciPy", "Satellite Remote Sensing", "Atmospheric Science"],
  },
  {
    role: "AI and Machine Learning Engineer",
    org: "Archsoft · Raipur, Chhattisgarh",
    badge: "Jun – Sep 2025",
    badgeType: "past",
    accent: "archsoft",
    points: [
      "Being in Archsoft I was a part of a project which was based on development of an image forensics web application app, to detect digitally manipulated images and verify image authensticity. Implementing a Gradient-Weighted Class Activation Mapping Algorithm, fusing EfficientNet-B4 and DCT-Coefficients, I was able to generate visual heatmaps that mapped speciic pixels regions to forensic anomalies, with a ROC-AUC score of 93.85%"
    ],
    chips: ["Python", "FastAPI", "SHA-256 Hashing", "EXIF Analysis", "Computer Vision"],
  },
];

export const publications = [
  {
    venue: "IEEE ICESCI 2025 · Peer-Reviewed Conference Paper",
    title: "Securing Automotive Using Iris Recognition",
    body: "Presents an end-to-end iris biometric authentication system designed for automotive security, implemented on Raspberry Pi hardware. The pipeline covers iris capture, segmentation, feature extraction, and KNN-based classification — achieving 2.5–3.5 second recognition and unlock speeds. Demonstrates feasibility of embedded biometric security for vehicle access control without cloud dependency.",
    tags: ["Biometrics", "Computer Vision", "KNN", "Raspberry Pi", "Automotive Security"],
    link: "https://ieeexplore.ieee.org/document/10988056",
  },
  {
    venue: "GRENZE International Journal of Engineering and Technology · 2025",
    title: "Online Vocal Interviewer: based on AI for Candidate Response Analysis and Evaluation",
    body: "This paper presents an implementation of an AI-powered Voice-Based interviewer. It includes dynamic generation of interview questions from a given job profile description, conversational interaction in real time, and a scoring system via Sentiment Analysis based on structural coherence and content relevance. A web dashboard aggregates the scoring and statistics with a summary of the whole interview. The core tech stack used for this project is Next.js, Supabase, and Retell AI. For sentiment analysis, the OpenAI API is orchestrated through the LangChain framework.",
    tags: ["Voice AI", "Next.js", "Supabase", "Retell AI", "LangChain", "OpenAI"],
    link: "https://drive.google.com/file/d/1a-KH-cm5O2PHuekEGZmbp6MbnDnAKuIP/view?usp=sharing",
  },
];

export const certifications = [
  { issuer: "Anthropic", name: "AI Fluency: Framework & Foundations", link: "https://verify.skilljar.com/c/kwmkrz9vnqpn" },
  { issuer: "Anthropic", name: "Claude 101", link: "https://verify.skilljar.com/c/isvw4jzh6y9u" },
  { issuer: "IBM", name: "Python for Data Science, AI and Development", link: "https://www.coursera.org/account/accomplishments/verify/E1CW7GW90Q6F" },
  { issuer: "IBM", name: "Developing AI Applications with Python and Flask", link: "https://www.coursera.org/account/accomplishments/verify/RUIAC1GBYEF4" },
  { issuer: "Microsoft", name: "Career Essentials in Generative AI", link: "https://www.linkedin.com/learning/certificates/3e856ffcdca7ade49feef6754d738f4c6e907cdf563b78db840929a0724b4160" },
  { issuer: "Microsoft", name: "Azure AI Essentials", link: "https://www.linkedin.com/learning/certificates/908a274f54dce90e75f8980d8117e15b16e5d52178a9fcc6d6357a9841e0b3e1" },
];
