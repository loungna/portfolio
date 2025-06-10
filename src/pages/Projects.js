// pages/Projects.js
import React, { useState } from 'react';
import { ExternalLink, Github, Play, Code, Brain, Cloud, Database, Zap, CheckCircle } from 'lucide-react';
import { projects } from '../data/portfolioData';

// Projects Component - Realistic Content
const Projects = () => {
  const containerStyle = {
    padding: '5rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '1rem',
    textAlign: 'center'
  };

  const subtitleStyle = {
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: '3rem',
    fontSize: '1.1rem'
  };

  const featuredProjectStyle = {
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
    borderRadius: '1.5rem',
    padding: '3rem',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    marginBottom: '3rem',
    backdropFilter: 'blur(8px)'
  };

  const projectCardStyle = {
    background: 'rgba(55, 65, 81, 0.4)',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid #374151',
    marginBottom: '2rem',
    backdropFilter: 'blur(4px)'
  };

  const techTagStyle = (color = '#3b82f6') => ({
    background: `${color}20`,
    color: `${color}`,
    padding: '0.25rem 0.75rem',
    borderRadius: '1rem',
    fontSize: '0.8rem',
    fontWeight: '500',
    margin: '0.25rem',
    display: 'inline-block'
  });

  const featureListStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginTop: '1.5rem'
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '0.75rem',
    background: 'rgba(75, 85, 99, 0.3)',
    borderRadius: '0.5rem',
    border: '1px solid #4b5563'
  };

  const achievementStyle = {
    textAlign: 'center',
    padding: '1rem',
    background: 'rgba(16, 185, 129, 0.1)',
    borderRadius: '0.75rem',
    border: '1px solid rgba(16, 185, 129, 0.3)'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Featured Projects</h2>
      <p style={subtitleStyle}>
        Showcasing innovative solutions combining machine learning, system analysis, 
        and full-stack development to solve real-world problems
      </p>

      {/* Featured Project - Thai Music Emotion Analysis */}
      <div style={featuredProjectStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '3rem',
            height: '3rem',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            borderRadius: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem'
          }}>
            🎵
          </div>
          <div>
            <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: '600', marginBottom: '0.25rem' }}>
              Thai Music Emotion Analysis Web App
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ color: '#8b5cf6', fontSize: '0.9rem', fontWeight: '500' }}>
                🎓 Graduate Project
              </span>
              <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '500' }}>
                ✅ Completed 2024
              </span>
              <span style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: '500' }}>
                🧠 Machine Learning & NLP
              </span>
            </div>
          </div>
        </div>

        <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Developed a comprehensive full-stack web application to classify emotions (Happy, Sad, Angry, Love) 
          in Thai song lyrics using advanced Natural Language Processing and Machine Learning techniques. 
          This project demonstrates the intersection of AI technology with cultural content analysis, 
          specifically tailored for Thai language processing.
        </p>

        {/* Project Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={achievementStyle}>
            <div style={{ color: '#10b981', fontSize: '1.8rem', fontWeight: 'bold' }}>30,000+</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Thai Songs Analyzed</div>
          </div>
          <div style={achievementStyle}>
            <div style={{ color: '#10b981', fontSize: '1.8rem', fontWeight: 'bold' }}>92%</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Emotion Classification Accuracy</div>
          </div>
          <div style={achievementStyle}>
            <div style={{ color: '#10b981', fontSize: '1.8rem', fontWeight: 'bold' }}>4</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Emotion Categories</div>
          </div>
          <div style={achievementStyle}>
            <div style={{ color: '#10b981', fontSize: '1.8rem', fontWeight: 'bold' }}>Full-Stack</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Web Application</div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '1rem' }}>
            Technical Implementation
          </h4>
          
          <div style={featureListStyle}>
            <div style={featureItemStyle}>
              <div style={{ color: '#3b82f6', fontSize: '1.2rem' }}>🧠</div>
              <div>
                <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>ML Model Development</div>
                <div style={{ color: '#d1d5db', fontSize: '0.8rem' }}>Built and fine-tuned Thai sentiment models with TensorFlow</div>
              </div>
            </div>
            
            <div style={featureItemStyle}>
              <div style={{ color: '#10b981', fontSize: '1.2rem' }}>🎵</div>
              <div>
                <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>Spotify Integration</div>
                <div style={{ color: '#d1d5db', fontSize: '0.8rem' }}>Integrated Spotify API to analyze 30,000+ Thai songs</div>
              </div>
            </div>
            
            <div style={featureItemStyle}>
              <div style={{ color: '#8b5cf6', fontSize: '1.2rem' }}>⚛️</div>
              <div>
                <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>Frontend Development</div>
                <div style={{ color: '#d1d5db', fontSize: '0.8rem' }}>Designed responsive UI with ReactJS</div>
              </div>
            </div>
            
            <div style={featureItemStyle}>
              <div style={{ color: '#f59e0b', fontSize: '1.2rem' }}>☁️</div>
              <div>
                <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>Cloud Deployment</div>
                <div style={{ color: '#d1d5db', fontSize: '0.8rem' }}>Deployed on Google Cloud Platform for scalability</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>
            Technology Stack
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={techTagStyle('#8b5cf6')}>Python</span>
            <span style={techTagStyle('#ef4444')}>TensorFlow</span>
            <span style={techTagStyle('#10b981')}>NLP</span>
            <span style={techTagStyle('#3b82f6')}>ReactJS</span>
            <span style={techTagStyle('#f59e0b')}>Flask/FastAPI</span>
            <span style={techTagStyle('#06b6d4')}>Spotify API</span>
            <span style={techTagStyle('#84cc16')}>Google Cloud</span>
            <span style={techTagStyle('#6366f1')}>Compute Engine</span>
            <span style={techTagStyle('#ec4899')}>Cloud Storage</span>
            <span style={techTagStyle('#14b8a6')}>Cloud Functions</span>
          </div>
        </div>

        {/* Project Impact */}
        <div style={{
          background: 'rgba(75, 85, 99, 0.3)',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          border: '1px solid #4b5563'
        }}>
          <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>
            Project Impact & Significance
          </h4>
          <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6' }}>
            This project showcases the practical application of machine learning in cultural content analysis, 
            specifically addressing the unique challenges of Thai language sentiment analysis. The successful 
            processing of 30,000+ songs demonstrates scalability and the ability to handle large datasets, 
            while the high accuracy rate validates the effectiveness of the NLP models developed. 
            The full-stack implementation shows comprehensive technical skills from data science to web development.
          </p>
        </div>
      </div>

      {/* Additional Projects */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>
          Additional Projects & Work
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          {/* Cybercrime Data Analysis */}
          <div style={projectCardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                🔒
              </div>
              <div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600' }}>
                  Cybercrime Data Analysis System
                </h4>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                  Professional Project • Government Agency
                </p>
              </div>
            </div>
            
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Developed comprehensive data analysis solutions for cybercrime investigations, 
              processing large-scale datasets and creating visualization dashboards for 
              government agencies. Focus on pattern recognition and anomaly detection.
            </p>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Key Features:</div>
              <ul style={{ color: '#d1d5db', fontSize: '0.8rem', paddingLeft: '1.2rem', lineHeight: '1.5' }}>
                <li>Large-scale dataset processing and analysis</li>
                <li>Interactive data visualization dashboards</li>
                <li>Pattern recognition for investigation support</li>
                <li>Real-time monitoring and alert systems</li>
              </ul>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              <span style={techTagStyle('#3b82f6')}>Python</span>
              <span style={techTagStyle('#10b981')}>SQL</span>
              <span style={techTagStyle('#f59e0b')}>Excel Pivot</span>
              <span style={techTagStyle('#8b5cf6')}>Data Visualization</span>
              <span style={techTagStyle('#ef4444')}>Big Data</span>
            </div>
          </div>

          {/* IoT Environmental Design */}
          <div style={projectCardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{
                width: '2.5rem',
                height: '2.5rem',
                background: 'linear-gradient(135deg, #10b981, #059669)',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>
                🌱
              </div>
              <div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: '600' }}>
                  IoT Environmental Monitoring
                </h4>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                  🏆 1st Runner Up • goIT Competition
                </p>
              </div>
            </div>
            
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Innovative design for IoT-based environmental monitoring system combining 
              hardware sensors with intelligent data analysis. Recognized with 1st Runner Up 
              award at TCS Thailand goIT competition for innovative environmental solutions.
            </p>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Innovation Highlights:</div>
              <ul style={{ color: '#d1d5db', fontSize: '0.8rem', paddingLeft: '1.2rem', lineHeight: '1.5' }}>
                <li>IoT sensor network for environmental monitoring</li>
                <li>Real-time data collection and analysis</li>
                <li>Sustainable technology integration</li>
                <li>User-friendly interface design with Figma</li>
              </ul>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
              <span style={techTagStyle('#10b981')}>IoT</span>
              <span style={techTagStyle('#3b82f6')}>Figma</span>
              <span style={techTagStyle('#8b5cf6')}>System Architecture</span>
              <span style={techTagStyle('#f59e0b')}>Environmental Tech</span>
              <span style={techTagStyle('#06b6d4')}>UI/UX Design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Development Approach */}
      <div style={{
        background: 'rgba(55, 65, 81, 0.3)',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid #374151',
        marginBottom: '3rem'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Project Development Methodology
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#3b82f6', fontSize: '2rem', marginBottom: '0.5rem' }}>🔍</div>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Research & Analysis
            </h4>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Thorough problem analysis and solution research, understanding user needs and technical requirements
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#10b981', fontSize: '2rem', marginBottom: '0.5rem' }}>⚙️</div>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Technical Implementation
            </h4>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Systematic development approach using best practices, version control, and iterative improvement
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#8b5cf6', fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</div>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Testing & Deployment
            </h4>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Comprehensive testing, performance optimization, and scalable cloud deployment strategies
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#f59e0b', fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Impact Measurement
            </h4>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Continuous monitoring, performance metrics analysis, and user feedback integration
            </p>
          </div>
        </div>
      </div>

      {/* Future Projects */}
      <div style={{
        background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Future Project Directions
        </h3>
        <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Building on the success of the Thai Music Emotion Analysis project, I'm exploring opportunities to 
          expand NLP applications for Southeast Asian languages and develop more sophisticated full-stack 
          solutions that bridge AI capabilities with practical business needs.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.1rem' }}>SEA Language NLP</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Multi-language sentiment analysis</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.1rem' }}>Enterprise Solutions</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Scalable business applications</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '1.1rem' }}>Open Source</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Community contributions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;