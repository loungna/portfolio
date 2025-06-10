// data/portfolioData.js - Updated Real Data

export const personalInfo = {
  name: "Jirayut Loungna",
  title: "System Analyst & Business Analyst",
  profileImage: "/profile_work.png", // Path to your profile image
  email: "loungna@hotmail.com",
  phone: "+66 85 1204259",
  location: "Bangkok 10170, Thailand",
  summary: "Recent Computer Science graduate with expertise in Python and JavaScript. Experienced in Data Analysis, including data processing, Pivot Table analysis, and large dataset management. Developed a Machine Learning-based project to analyze Thai song genres from lyrics using Python and NLP techniques. Passionate about advancing in Frontend and Backend Development, aiming to build efficient systems."
};

export const aboutMe = {
  introduction: "I'm a System Analyst and Business Analyst with a strong foundation in Computer Science from King Mongkut's University of Technology North Bangkok. My focus is on bridging business needs with technical solutions to optimize processes and create efficient systems.",

  expertise: "I specialize in analyzing business requirements, translating them into system specifications, and collaborating with teams to deliver scalable solutions that drive business value and efficiency.",

  philosophy: "I believe in continuous learning to stay updated with business analysis and system design trends, ensuring every solution aligns with business objectives and enhances processes.",

  mission: "To leverage my expertise as both a System Analyst and Business Analyst in creating impactful solutions that improve business processes, optimize system efficiency, and deliver exceptional value to stakeholders. I aim to continue growing as a professional, enhancing my skills in business and system analysis, and making meaningful contributions to both the tech and business communities.",


  currentFocus: [
    "Advancing in Frontend and Backend Development",
    "Building efficient and scalable systems",
    "Machine Learning and NLP for Thai language",
    "Data Analysis and Big Data processing",
    "System Architecture and Design"
  ]
};

export const skills = {
  'Frontend Development': ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'UI/UX Principles'],
  'Backend Development': ['Python', 'Node.js', 'Flask', 'FastAPI', 'RESTful APIs'],
  'Database Management': ['MySQL', 'SQL', 'Database Design'],
  'Programming Languages': ['Python', 'JavaScript', 'Java', 'C', 'C++', 'SQL', 'HTML'],
  'Data Analysis & ML': ['Python', 'Machine Learning', 'NLP', 'Excel Pivot', 'Data Visualization'],
  'Tools & Platforms': ['GitHub', 'Jira Software', 'Postman', 'Kubernetes'],
  'System Analysis': ['Requirements', 'Flow charts', 'System design', 'ER-Diagrams', 'SDLC', 'SRS']
};

export const experience = [
  {
    title: "IT Support",
    company: "Cyber Crime Investigation Bureau",
    type: "Internship",
    period: "2020-2024",
    description: "Experienced in System Analysis and IT Support, with responsibilities including the analysis of large-scale datasets (Big Data Analysis) to support cybercrime investigations for government agencies. Gathered user requirements, conducted in-depth data analysis using tools such as Pivot Tables, and designed initial information systems architecture.",
    achievements: [
      "Analyzed large-scale datasets (Big Data Analysis) to support cybercrime investigations for government agencies",
      "Gathered user requirements and conducted in-depth data analysis using Pivot Tables",
      "Designed initial information systems architecture for command center operations",
      "Created technical documentation including Flowcharts, ER-Diagrams, System Designs, and System Requirement Specifications (SRS)",
      "Provided technical support and maintained IT systems to ensure optimal operational efficiency",
      "Contributed to strategic decision-making through comprehensive system analysis"
    ],
    skills_developed: [
      "Big Data Analysis",
      "System Analysis",
      "Technical Documentation",
      "Requirements Gathering",
      "IT Support",
      "Database Management",
      "Pivot Table Analysis",
      "System Architecture Design"
    ]
  }
];

export const projects = [
  {
    title: "Thai Music Emotion Analysis Web App",
    description: "Developed a full-stack web application to classify emotions (Happy, Sad, Angry, Love) in Thai song lyrics using NLP and Machine Learning. This graduate project demonstrates advanced skills in both technical implementation and research.",
    technologies: ["Python", "TensorFlow", "Flask/FastAPI", "ReactJS", "Spotify API", "Google Cloud"],
    category: "Machine Learning & Web Development",
    status: "Completed",
    type: "Graduate Project",
    features: [
      "Built and fine-tuned Thai sentiment models with TensorFlow for high-accuracy emotion detection",
      "Integrated Spotify API to analyze lyrics from 30,000+ Thai songs using Flask/FastAPI",
      "Designed frontend with ReactJS for a responsive, user-friendly UI",
      "Deployed on Google Cloud (Compute Engine, Cloud Storage, Cloud Functions) for scalability and performance"
    ],
    challenges: [
      "Processing and analyzing 30,000+ Thai song lyrics with high accuracy",
      "Fine-tuning machine learning models specifically for Thai language sentiment analysis",
      "Integrating multiple APIs (Spotify) for seamless data flow and processing",
      "Implementing scalable cloud deployment architecture on Google Cloud Platform"
    ],
    results: [
      "Successfully achieved high-accuracy emotion detection for Thai language text",
      "Processed and analyzed over 30,000 Thai songs from Spotify database",
      "Created a fully functional, responsive web application",
      "Deployed scalable cloud infrastructure capable of handling large datasets"
    ],
    impact: "This project showcases the intersection of machine learning, natural language processing, and web development, specifically tailored for Thai language processing - a niche area with significant potential for cultural and commercial applications."
  }
];

export const education = {
  degree: "Bachelor of Science (B.Sc.) in Computer Science",
  institution: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
  department: "Department of Computer Science and Information Science",
  period: "2020-2024",
  location: "Bangkok, Thailand",

  academic_focus: [
    "System Analysis and Design",
    "Software Engineering and Development",
    "Machine Learning and Data Analysis",
    "Database Systems and Management",
    "Web Development Technologies",
    "Computer Networks and Security"
  ],

  key_coursework: [
    "Data Structures and Algorithms",
    "Database Systems",
    "Software Engineering",
    "Machine Learning",
    "Web Development",
    "System Analysis and Design",
    "Computer Networks",
    "Cybersecurity Fundamentals",
    "Natural Language Processing",
    "Big Data Analytics"
  ],

  graduate_project: {
    title: "Thai Music Emotion Analysis Web App",
    focus: "Machine Learning-based project to analyze Thai song genres from lyrics using Python and NLP techniques",
    significance: "Demonstrates practical application of academic learning in real-world problem solving"
  }
};

export const certificates = [
  {
    title: "Design Prototype with Figma",
    issuer: "King Mongkut's University of Technology North Bangkok",
    type: "Practical Training Course",
    date: "2024",
    description: "Comprehensive training in UI/UX design and prototyping using Figma, covering design principles, user research, and prototype development",
    skills: ['UI/UX Design', 'Prototyping', 'User Research', 'Design Systems', 'Figma']
  },
  {
    title: "Certified Red Team Analyst & Blue Team Fundamentals",
    issuer: "CW Labs Pvt. Ltd.",
    type: "Cybersecurity Certification",
    date: "2024",
    description: "Advanced cybersecurity training covering both offensive (Red Team) and defensive (Blue Team) security practices, including penetration testing and incident response",
    skills: ['Penetration Testing', 'Network Security', 'Incident Response', 'Vulnerability Assessment', 'Cybersecurity Analysis']
  }
];

export const awards = [
  {
    title: "goIT (Gen 1) 1st Runner Up",
    description: "Innovative design related to IoT and environment using Figma and System Architecture",
    issuer: "Tata Consultancy Services (Thailand) Limited",
    date: "2024",
    category: "Innovation & Design",
    significance: "Recognition for innovative thinking in IoT solutions and environmental technology, combining design excellence with technical system architecture"
  }
];

export const interests = [
  "Listening to Tech Podcasts for regular updates on technology knowledge and industry trends",
  "Continuous learning in cybersecurity, system analysis, and emerging technologies",
  "Exploring new programming frameworks and development tools",
  "Contributing to open-source projects and community development",
  "IoT and environmental technology solutions for sustainable development",
  "Machine Learning research, particularly in natural language processing",
  "System architecture design and scalable software solutions"
];

export const careerObjectives = {
  short_term: [
    "Advance expertise in Frontend and Backend Development",
    "Build efficient and scalable web applications",
    "Gain more experience in cloud technologies and deployment",
    "Contribute to meaningful open-source projects"
  ],

  long_term: [
    "Become a senior full-stack developer with expertise in system architecture",
    "Lead development teams in creating innovative technology solutions",
    "Specialize in machine learning applications for Southeast Asian languages",
    "Establish a career bridging system analysis and cutting-edge development practices"
  ],

  passion_areas: [
    "Full-Stack Web Development",
    "Machine Learning and NLP",
    "System Analysis and Architecture",
    "Data-driven application development",
    "Technology solutions for social impact"
  ]
};

export const socialLinks = {
  github: "https://github.com/loungna",
  linkedin: "https://www.linkedin.com/in/jirayut-loungna-0a945236a/",
  email: "loungna@hotmail.com"
};

export const technicalProjects = {
  graduation_project: {
    name: "Thai Music Emotion Analysis Web App",
    description: "A comprehensive full-stack application combining machine learning, natural language processing, and web development to analyze emotional content in Thai music lyrics",
    technical_stack: ["Python", "TensorFlow", "NLP", "Flask/FastAPI", "ReactJS", "Spotify API", "Google Cloud"],
    key_learnings: [
      "Advanced machine learning model development and fine-tuning",
      "Thai language natural language processing techniques",
      "Full-stack web application architecture and deployment",
      "API integration and cloud platform utilization",
      "Large dataset processing and analysis methodologies"
    ]
  }
};