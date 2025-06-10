// pages/About.js - Realistic Content
import React from 'react';
import { Target, Heart, Coffee, Book, Code2, Database, Brain, Zap } from 'lucide-react';
import { personalInfo, aboutMe, interests, careerObjectives } from '../data/portfolioData';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Advancing in both frontend and backend technologies to build comprehensive solutions"
    },
    {
      icon: Target,
      title: "System Analysis",
      description: "Expert in analyzing complex systems, requirements gathering, and architectural design"
    },
    {
      icon: Brain,
      title: "Machine Learning & NLP",
      description: "Specialized in Thai language processing and sentiment analysis using Python and TensorFlow"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Experienced in Big Data analysis, Pivot Tables, and large dataset management for investigations"
    }
  ];

  return (
    <div className="py-20 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image and Quick Facts */}
        <div className="space-y-8">
          <div className="relative w-80 h-80 mx-auto lg:mx-0">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-transparent"> 
              <img
                src="/profile_work.png"
                alt="Jirayut Loungna - Professional Photo"
                className="w-full h-full object-contain object-center"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 rounded-2xl hidden">
                <span className="text-white text-lg">Image not available</span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-80"></div>
            <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg opacity-60"></div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Professional Profile</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Location:</span>
                <span className="text-white">Bangkok, Thailand</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Education:</span>
                <span className="text-white">B.Sc. Computer Science, KMUTNB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Graduate Year:</span>
                <span className="text-white">2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Experience:</span>
                <span className="text-white">System Analysis & IT Support</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Specialization:</span>
                <span className="text-white">ML, NLP & Full-Stack Dev</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Languages:</span>
                <span className="text-white">Thai, English</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                {aboutMe.introduction}
              </p>
              <p>
                {aboutMe.expertise}
              </p>
              <p>
                {aboutMe.philosophy}
              </p>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <Icon className="text-blue-400 mb-2" size={24} />
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Focus Areas */}
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
        <div className="flex items-center space-x-3 mb-6">
          <Zap className="text-yellow-400" size={28} />
          <h3 className="text-2xl font-semibold text-white">Current Focus Areas</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aboutMe.currentFocus.map((focus, index) => (
            <div key={index} className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 border border-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-gray-300 font-medium">{focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Objectives */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Short-term Goals */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Target className="text-green-400 mr-3" size={24} />
            Immediate Goals
          </h3>
          <div className="space-y-3">
            {careerObjectives.short_term.map((goal, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Long-term Aspirations */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Heart className="text-purple-400 mr-3" size={24} />
            Long-term Vision
          </h3>
          <div className="space-y-3">
            {careerObjectives.long_term.map((goal, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interests & Learning */}
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
        <div className="flex items-center space-x-3 mb-6">
          <Book className="text-blue-400" size={28} />
          <h3 className="text-2xl font-semibold text-white">Interests & Continuous Learning</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interests.map((interest, index) => (
            <div key={index} className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-start space-x-3">
                <Coffee className="text-amber-400 mt-1 flex-shrink-0" size={16} />
                <p className="text-gray-300 text-sm leading-relaxed">{interest}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
        <h3 className="text-2xl font-semibold text-white mb-4">My Mission</h3>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
          {aboutMe.mission}
        </p>
      </div>

      {/* Professional Values */}
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">What Drives Me</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Brain size={32} className="text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Innovation</h4>
            <p className="text-gray-400 text-sm">Constantly seeking creative solutions to complex technical challenges</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Target size={32} className="text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Excellence</h4>
            <p className="text-gray-400 text-sm">Committed to delivering high-quality, efficient, and scalable solutions</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Book size={32} className="text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Growth</h4>
            <p className="text-gray-400 text-sm">Embracing continuous learning and adapting to emerging technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;