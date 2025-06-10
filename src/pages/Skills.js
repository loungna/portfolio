// pages/Skills.js - Modern with Real Icons
import React, { useState, useEffect } from 'react';
import { 
  Code2, Database, Brain, Server, Settings, GitBranch, BarChart3,
  Globe, Monitor, Smartphone, Cloud, Terminal, FileCode, Layers,
  Zap, Target, TrendingUp, Award, Cpu, Network, HardDrive
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend Development');
  const [animatedBars, setAnimatedBars] = useState(false);

  const skillCategories = {
    'Frontend Development': {
      skills: ['ReactJS', 'HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'UI/UX Principles'],
      color: '#3b82f6',
      icon: Monitor,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Building responsive and interactive user interfaces'
    },
    'Backend Development': {
      skills: ['Python', 'Node.js', 'Flask', 'FastAPI', 'RESTful APIs'],
      color: '#10b981',
      icon: Server,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Server-side development and API architecture'
    },
    'Programming Languages': {
      skills: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'SQL', 'HTML'],
      color: '#f59e0b',
      icon: Code2,
      gradient: 'from-orange-500 to-yellow-500',
      description: 'Core programming languages and syntax'
    },
    'Data Analysis & ML': {
      skills: ['Python', 'Machine Learning', 'NLP', 'Excel Pivot', 'Data Visualization', 'TensorFlow'],
      color: '#8b5cf6',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Artificial intelligence and data science'
    },
    'Database Management': {
      skills: ['MySQL', 'SQL', 'Database Design'],
      color: '#ef4444',
      icon: Database,
      gradient: 'from-red-500 to-rose-500',
      description: 'Data storage and database systems'
    },
    'Tools & Platforms': {
      skills: ['GitHub', 'Jira Software', 'Postman', 'Kubernetes', 'Google Cloud'],
      color: '#06b6d4',
      icon: Settings,
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Development tools and cloud platforms'
    },
    'System Analysis': {
      skills: ['Requirements', 'Flow charts', 'System design', 'ER-Diagrams', 'SDLC', 'SRS'],
      color: '#84cc16',
      icon: BarChart3,
      gradient: 'from-lime-500 to-green-500',
      description: 'System architecture and analysis methods'
    }
  };

  const skillLevels = {
    'Python': 70, 'JavaScript': 55, 'ReactJS': 60, 'SQL': 60, 'Machine Learning': 80,
    'Flask': 80, 'FastAPI': 75, 'Node.js': 60, 'MySQL': 55, 'HTML': 90, 'CSS': 85,
    'Java': 65, 'C': 70, 'C++': 70, 'NLP': 80, 'TensorFlow': 60, 'Excel Pivot': 60,
    'Data Visualization': 50, 'GitHub': 65, 'Jira Software': 50, 'Postman': 65,
    'Kubernetes': 60, 'Google Cloud': 75, 'Requirements': 80, 'Flow charts': 90,
    'System design': 80, 'ER-Diagrams': 80, 'SDLC': 75, 'SRS': 80,
    'Responsive Web Design': 60, 'UI/UX Principles': 65, 'RESTful APIs': 50,
    'Database Design': 65
  };

  // Animate bars on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedBars(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getSkillIcon = (skillName) => {
    const iconMap = {
      'ReactJS': Globe,
      'HTML': FileCode,
      'CSS': Layers,
      'JavaScript': Terminal,
      'Python': Code2,
      'Node.js': Server,
      'Flask': Network,
      'FastAPI': Zap,
      'MySQL': Database,
      'SQL': HardDrive,
      'Machine Learning': Brain,
      'TensorFlow': Cpu,
      'GitHub': GitBranch,
      'Google Cloud': Cloud,
      'Java': Code2,
      'C': Terminal,
      'C++': Terminal
    };
    return iconMap[skillName] || Code2;
  };

  const getSkillLevel = (level) => {
    if (level >= 80) return { label: 'Expert', color: 'text-green-400' };
    if (level >= 70) return { label: 'Advanced', color: 'text-blue-400' };
    if (level >= 60) return { label: 'Intermediate', color: 'text-yellow-400' };
    return { label: 'Beginner', color: 'text-gray-400' };
  };

  return (
    <div className="py-20 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels across various domains
        </p>
      </div>

      {/* Core Competencies Summary */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Core Competencies</h3>
        <p className="text-gray-300 text-center mb-8">
          Specialized in <strong className="text-blue-400">System Analysis</strong>, 
          <strong className="text-green-400"> Machine Learning</strong>, and 
          <strong className="text-purple-400"> Full-Stack Development</strong> with proven experience 
          in analyzing large datasets and building scalable web applications.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-4 text-center hover:bg-gray-700/50 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <Code2 className="text-white" size={24} />
            </div>
            <div className="text-white font-semibold">Python Expert</div>
            <div className="text-gray-400 text-sm">ML, Data Analysis, Backend</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-4 text-center hover:bg-gray-700/50 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <Globe className="text-white" size={24} />
            </div>
            <div className="text-white font-semibold">React Developer</div>
            <div className="text-gray-400 text-sm">Frontend, UI/UX</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-4 text-center hover:bg-gray-700/50 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <Brain className="text-white" size={24} />
            </div>
            <div className="text-white font-semibold">ML & NLP</div>
            <div className="text-gray-400 text-sm">Thai Language Processing</div>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-4 text-center hover:bg-gray-700/50 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
              <BarChart3 className="text-white" size={24} />
            </div>
            <div className="text-white font-semibold">System Analysis</div>
            <div className="text-gray-400 text-sm">Requirements, Architecture</div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.entries(skillCategories).map(([category, data]) => {
          const Icon = data.icon;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? `bg-gradient-to-r ${data.gradient} text-white shadow-lg transform scale-105`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium hidden sm:inline">{category}</span>
              <span className="font-medium sm:hidden">{category.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Skills */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center space-x-4 mb-6">
            {React.createElement(skillCategories[activeCategory].icon, {
              className: "text-white",
              size: 32,
              style: { color: skillCategories[activeCategory].color }
            })}
            <div>
              <h3 className="text-2xl font-semibold text-white">{activeCategory}</h3>
              <p className="text-gray-400">{skillCategories[activeCategory].description}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const level = skillLevels[skill] || 75;
              const skillLevel = getSkillLevel(level);
              const SkillIcon = getSkillIcon(skill);
              
              return (
                <div key={index} className="bg-gray-700/30 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-600/50 rounded-lg flex items-center justify-center">
                        <SkillIcon size={16} style={{ color: skillCategories[activeCategory].color }} />
                      </div>
                      <span className="text-white font-medium">{skill}</span>
                    </div>
                    <div className="text-right">
                      <div style={{ color: skillCategories[activeCategory].color }} className="font-semibold">
                        {level}%
                      </div>
                      <div className={`text-xs ${skillLevel.color}`}>
                        {skillLevel.label}
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-600/50 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                        animatedBars ? '' : 'w-0'
                      }`}
                      style={{
                        width: animatedBars ? `${level}%` : '0%',
                        background: `linear-gradient(to right, ${skillCategories[activeCategory].color}, ${skillCategories[activeCategory].color}dd)`
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* All Skills Overview */}
      <div className="grid lg:grid-cols-2 gap-8">
        {Object.entries(skillCategories).map(([category, data]) => {
          const Icon = data.icon;
          const categorySkills = data.skills;
          const avgLevel = Math.round(
            categorySkills.reduce((acc, skill) => acc + (skillLevels[skill] || 75), 0) / categorySkills.length
          );
          
          return (
            <div key={category} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${data.color}20` }}
                >
                  <Icon size={24} style={{ color: data.color }} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{category}</h4>
                  <p className="text-gray-400 text-sm">{data.description}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Overall Proficiency</span>
                  <span style={{ color: data.color }} className="font-semibold">{avgLevel}%</span>
                </div>
                <div className="w-full bg-gray-600/50 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animatedBars ? `${avgLevel}%` : '0%',
                      background: `linear-gradient(to right, ${data.color}, ${data.color}dd)`
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="text-xs text-gray-400">
                {categorySkills.length} skills • {categorySkills.filter(skill => (skillLevels[skill] || 75) >= 70).length} advanced
              </div>
            </div>
          );
        })}
      </div>

      {/* Professional Experience with Technologies */}
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
        <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
          <Award className="text-yellow-400 mr-3" size={28} />
          Professional Experience with Technologies
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-700/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Brain size={20} className="text-white" />
              </div>
              <h4 className="text-blue-400 font-semibold">Graduate Project</h4>
            </div>
            <p className="text-white font-medium mb-2">Thai Music Emotion Analysis</p>
            <p className="text-gray-400 text-sm mb-3">
              Python • TensorFlow • NLP • React • Flask/FastAPI • Google Cloud
            </p>
            <p className="text-gray-300 text-sm">
              Developed ML models for Thai sentiment analysis, processed 30,000+ songs, 
              built full-stack web application with cloud deployment.
            </p>
          </div>
          
          <div className="bg-gray-700/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <BarChart3 size={20} className="text-white" />
              </div>
              <h4 className="text-green-400 font-semibold">Professional Work</h4>
            </div>
            <p className="text-white font-medium mb-2">Cyber Crime Investigation Bureau</p>
            <p className="text-gray-400 text-sm mb-3">
              System Analysis • Big Data • SQL • Excel Pivot • Documentation
            </p>
            <p className="text-gray-300 text-sm">
              Analyzed large-scale datasets for cybercrime investigations, designed system architecture, 
              created technical documentation and requirement specifications.
            </p>
          </div>
          
          <div className="bg-gray-700/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Target size={20} className="text-white" />
              </div>
              <h4 className="text-purple-400 font-semibold">Competition Award</h4>
            </div>
            <p className="text-white font-medium mb-2">goIT Competition - 1st Runner Up</p>
            <p className="text-gray-400 text-sm mb-3">
              Figma • System Architecture • IoT • Environmental Technology
            </p>
            <p className="text-gray-300 text-sm">
              1st Runner Up for innovative IoT environmental solution design, 
              combining UI/UX design with technical system architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Learning & Growth */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4 flex items-center justify-center">
          <TrendingUp className="text-blue-400 mr-3" size={28} />
          Continuous Learning & Development
        </h3>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Actively expanding skills through tech podcasts, online courses, and hands-on projects. 
          Currently focusing on advanced cloud technologies and modern development frameworks.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-700/30 rounded-xl p-4">
            <div className="text-2xl font-bold text-blue-400 mb-1">7+</div>
            <div className="text-gray-300 text-sm">Programming Languages</div>
          </div>
          <div className="bg-gray-700/30 rounded-xl p-4">
            <div className="text-2xl font-bold text-green-400 mb-1">15+</div>
            <div className="text-gray-300 text-sm">Technologies & Tools</div>
          </div>
          <div className="bg-gray-700/30 rounded-xl p-4">
            <div className="text-2xl font-bold text-purple-400 mb-1">4</div>
            <div className="text-gray-300 text-sm">Years of Learning</div>
          </div>
          <div className="bg-gray-700/30 rounded-xl p-4">
            <div className="text-2xl font-bold text-yellow-400 mb-1">3</div>
            <div className="text-gray-300 text-sm">Certifications</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;