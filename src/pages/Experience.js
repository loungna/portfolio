// pages/Experience.js
import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Building, TrendingUp } from 'lucide-react';
import { experience } from '../data/portfolioData';

// Experience Component - Realistic Content
const Experience = () => {
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

  const timelineContainerStyle = {
    position: 'relative',
    marginBottom: '4rem'
  };

  const experienceCardStyle = {
    background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.4), rgba(75, 85, 99, 0.3))',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    border: '1px solid #374151',
    backdropFilter: 'blur(8px)',
    marginBottom: '2rem',
    position: 'relative'
  };

  const companyHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem'
  };

  const companyLogoStyle = {
    width: '4rem',
    height: '4rem',
    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    borderRadius: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  };

  const responsibilityCardStyle = {
    background: 'rgba(55, 65, 81, 0.4)',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    border: '1px solid #4b5563',
    marginBottom: '1rem'
  };

  const skillTagStyle = {
    background: 'rgba(59, 130, 246, 0.2)',
    color: '#93c5fd',
    padding: '0.25rem 0.75rem',
    borderRadius: '1rem',
    fontSize: '0.8rem',
    fontWeight: '500',
    margin: '0.25rem',
    display: 'inline-block'
  };

  const achievementStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '0.75rem'
  };

  const achievementIconStyle = {
    width: '1.25rem',
    height: '1.25rem',
    background: '#10b981',
    borderRadius: '50%',
    marginTop: '0.25rem',
    flexShrink: 0
  };

  const impactMetricStyle = {
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1))',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '0.75rem',
    padding: '1rem',
    textAlign: 'center',
    margin: '0.5rem'
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Professional Experience</h2>
      <p style={subtitleStyle}>
        My journey in technology through hands-on experience in system analysis, 
        data processing, and IT support for critical government operations
      </p>

      {/* Main Experience */}
      <div style={timelineContainerStyle}>
        <div style={experienceCardStyle}>
          {/* Company Header */}
          <div style={companyHeaderStyle}>
            <div style={companyLogoStyle}>
              🔒
            </div>
            <div>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                Cyber Crime Investigation Bureau
              </h3>
              <p style={{ color: '#3b82f6', fontSize: '1.1rem', fontWeight: '500', marginBottom: '0.25rem' }}>
                IT Support Intern
              </p>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                📅 2020-2024 • 📍 Bangkok, Thailand • 🏛️ Government Agency
              </p>
            </div>
          </div>

          {/* Role Description */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>
              Role Overview
            </h4>
            <p style={{ color: '#d1d5db', lineHeight: '1.6', marginBottom: '1rem' }}>
              Experienced in System Analysis and IT Support, with responsibilities including the analysis of 
              large-scale datasets (Big Data Analysis) to support cybercrime investigations for government agencies. 
              Gathered user requirements, conducted in-depth data analysis using tools such as Pivot Tables, 
              and designed initial information systems architecture.
            </p>
            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>
              Created technical documentation including Flowcharts, ER-Diagrams, System Designs, and System 
              Requirement Specifications (SRS) to guide strategic decision-making for the command center. 
              Also provided technical support and maintained IT systems to ensure optimal operational efficiency.
            </p>
          </div>

          {/* Key Responsibilities */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>
              Key Responsibilities
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              <div style={responsibilityCardStyle}>
                <h5 style={{ color: '#3b82f6', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  📊 Big Data Analysis
                </h5>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Analyzed large-scale datasets to support cybercrime investigations, 
                  using advanced data processing techniques and statistical analysis.
                </p>
              </div>
              
              <div style={responsibilityCardStyle}>
                <h5 style={{ color: '#10b981', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  🏗️ System Architecture Design
                </h5>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Designed initial information systems architecture for command center operations, 
                  ensuring scalability and efficiency.
                </p>
              </div>
              
              <div style={responsibilityCardStyle}>
                <h5 style={{ color: '#8b5cf6', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  📋 Requirements Analysis
                </h5>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Gathered user requirements and conducted stakeholder analysis to 
                  ensure system solutions met operational needs.
                </p>
              </div>
              
              <div style={responsibilityCardStyle}>
                <h5 style={{ color: '#f59e0b', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  📝 Technical Documentation
                </h5>
                <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Created comprehensive technical documentation including flowcharts, 
                  ER-diagrams, and system requirement specifications.
                </p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>
              Key Achievements & Impact
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1rem' }}>
              <div>
                {[
                  'Analyzed large-scale datasets (Big Data Analysis) to support cybercrime investigations for government agencies',
                  'Gathered user requirements and conducted in-depth data analysis using Pivot Tables',
                  'Designed initial information systems architecture for command center operations',
                  'Created technical documentation including Flowcharts, ER-Diagrams, and System Designs'
                ].map((achievement, index) => (
                  <div key={index} style={achievementStyle}>
                    <div style={achievementIconStyle}></div>
                    <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
              
              <div>
                {[
                  'Provided technical support and maintained IT systems for optimal operational efficiency',
                  'Guided strategic decision-making through comprehensive system analysis',
                  'Contributed to cybercrime investigation processes through data insights',
                  'Developed technical specifications (SRS) to standardize system development'
                ].map((achievement, index) => (
                  <div key={index} style={achievementStyle}>
                    <div style={achievementIconStyle}></div>
                    <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Developed */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>
              Skills & Technologies Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                'Big Data Analysis', 'System Analysis', 'Excel Pivot Tables', 'SQL',
                'Requirements Gathering', 'Technical Documentation', 'System Architecture',
                'Flowcharts', 'ER-Diagrams', 'SRS Documentation', 'IT Support',
                'Data Processing', 'Stakeholder Analysis', 'Process Optimization'
              ].map((skill, index) => (
                <span key={index} style={skillTagStyle}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>
              Professional Impact
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <div style={impactMetricStyle}>
                <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>3 Month</div>
                <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Professional Experience</div>
              </div>
              <div style={impactMetricStyle}>
                <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>Large Scale</div>
                <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Dataset Analysis</div>
              </div>
              <div style={impactMetricStyle}>
                <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>Government</div>
                <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Agency Support</div>
              </div>
              <div style={impactMetricStyle}>
                <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>Critical</div>
                <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>System Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Experience Context */}
      <div style={{
        background: 'rgba(55, 65, 81, 0.3)',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid #374151',
        marginBottom: '3rem'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Professional Development Context
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <h4 style={{ color: '#3b82f6', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              🎯 Learning Objectives Achieved
            </h4>
            <ul style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>Gained hands-on experience with enterprise-level data analysis</li>
              <li>Developed expertise in system architecture and design</li>
              <li>Learned government standards for technical documentation</li>
              <li>Built skills in stakeholder communication and requirements gathering</li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#10b981', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              🚀 Career Foundation Built
            </h4>
            <ul style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
              <li>Real-world application of computer science principles</li>
              <li>Experience working in critical government operations</li>
              <li>Understanding of cybersecurity and investigation processes</li>
              <li>Professional development in technical communication</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Career Transition */}
      <div style={{
        background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Next Career Step
        </h3>
        <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Building on my experience in system analysis and data processing, I'm now focused on 
          advancing in <strong style={{ color: '#3b82f6' }}>Full-Stack Development</strong> and 
          <strong style={{ color: '#8b5cf6' }}> Machine Learning</strong>, aiming to create 
          efficient, scalable systems that solve complex real-world problems.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.2rem' }}>System Analysis</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Foundation Experience</div>
          </div>
          <div style={{ fontSize: '1.5rem', color: '#9ca3af' }}>→</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>Full-Stack Dev</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Current Focus</div>
          </div>
          <div style={{ fontSize: '1.5rem', color: '#9ca3af' }}>→</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '1.2rem' }}>ML Engineer</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Future Goal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;