import React, { useState } from 'react';
import { Award, Shield, Palette, Calendar, ExternalLink, Download, Trophy, Star, CheckCircle, Clock, BookOpen } from 'lucide-react';

// Certificates Component - Updated with Currently Studying Status
const Certificates = () => {
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

  const certificateCardStyle = {
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    marginBottom: '2rem',
    backdropFilter: 'blur(8px)'
  };

  const currentStudyCardStyle = {
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1))',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    border: '2px solid rgba(16, 185, 129, 0.3)',
    marginBottom: '2rem',
    backdropFilter: 'blur(8px)',
    position: 'relative'
  };

  const awardCardStyle = {
    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(251, 191, 36, 0.1))',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    border: '1px solid rgba(245, 158, 11, 0.3)',
    marginBottom: '2rem',
    backdropFilter: 'blur(8px)'
  };

  const skillTagStyle = (color = '#3b82f6') => ({
    background: `${color}20`,
    color: color,
    padding: '0.25rem 0.75rem',
    borderRadius: '1rem',
    fontSize: '0.8rem',
    fontWeight: '500',
    margin: '0.25rem',
    display: 'inline-block'
  });

  const certIconStyle = (gradient) => ({
    width: '4rem',
    height: '4rem',
    background: gradient,
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem',
    marginBottom: '1rem'
  });

  const achievementItemStyle = {
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

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Certificates & Awards</h2>
      <p style={subtitleStyle}>
        Professional certifications, academic achievements, and recognition demonstrating 
        commitment to continuous learning and excellence in technology
      </p>

      {/* Certificates Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>
          🏅 Professional Certifications
        </h3>

        {/* Currently Studying - Cybersecurity Certificate */}
        <div style={currentStudyCardStyle}>
          {/* "Currently Studying" Badge */}
          <div style={{
            position: 'absolute',
            top: '-10px',
            right: '20px',
            background: 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '1rem',
            fontSize: '0.8rem',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <BookOpen size={16} />
            Currently Studying
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem' }}>
            <div style={certIconStyle('linear-gradient(135deg, #ef4444, #dc2626)')}>
              🛡️
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Certified Red Team Analyst & Blue Team Fundamentals
              </h4>
              <p style={{ color: '#10b981', fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                Cybersecurity Certification - In Progress
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                  🏢 CW Labs Pvt. Ltd.
                </span>
                <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>📅 2024 - Ongoing</span>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#10b981',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  In Progress
                </span>
              </div>
            </div>
          </div>

          <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Currently pursuing advanced cybersecurity training covering both offensive (Red Team) and defensive (Blue Team) security practices. 
            This comprehensive certification program includes hands-on training in penetration testing, vulnerability assessment, 
            incident response, and security analysis techniques essential for modern cybersecurity operations.
          </p>

          {/* Study Progress */}
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h5 style={{ color: '#10b981', fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>
              📚 Current Learning Focus
            </h5>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '0.5rem',
                padding: '1rem',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <div style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  🔴 Red Team Methodologies
                </div>
                <div style={{ color: '#d1d5db', fontSize: '0.8rem', lineHeight: '1.4' }}>
                  Learning penetration testing techniques, ethical hacking, and offensive security practices
                </div>
              </div>
              
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '0.5rem',
                padding: '1rem',
                border: '1px solid rgba(16, 185, 129, 0.2)'
              }}>
                <div style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  🔵 Blue Team Operations
                </div>
                <div style={{ color: '#d1d5db', fontSize: '0.8rem', lineHeight: '1.4' }}>
                  Studying incident response, threat hunting, and defensive cybersecurity strategies
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <h5 style={{ color: '#ef4444', fontSize: '1.1rem', marginBottom: '0.75rem' }}>🔴 Red Team Skills (Learning)</h5>
              <div style={{
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '0.5rem',
                padding: '1rem'
              }}>
                {[
                  'Penetration Testing Methodologies',
                  'Vulnerability Assessment Techniques',
                  'Social Engineering Awareness',
                  'Network Security Testing',
                  'Web Application Security'
                ].map((skill, index) => (
                  <div key={index} style={achievementItemStyle}>
                    <Clock size={16} style={{ color: '#ef4444', marginTop: '0.25rem', flexShrink: 0 }} />
                    <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 style={{ color: '#3b82f6', fontSize: '1.1rem', marginBottom: '0.75rem' }}>🔵 Blue Team Skills (Learning)</h5>
              <div style={{
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '0.5rem',
                padding: '1rem'
              }}>
                {[
                  'Incident Response Procedures',
                  'Security Monitoring & Analysis',
                  'Threat Detection & Hunting',
                  'Digital Forensics Basics',
                  'Security Operations Center (SOC)'
                ].map((skill, index) => (
                  <div key={index} style={achievementItemStyle}>
                    <Clock size={16} style={{ color: '#3b82f6', marginTop: '0.25rem', flexShrink: 0 }} />
                    <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h5 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.75rem' }}>Expected Cybersecurity Skills:</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={skillTagStyle('#ef4444')}>Penetration Testing</span>
              <span style={skillTagStyle('#3b82f6')}>Incident Response</span>
              <span style={skillTagStyle('#8b5cf6')}>Vulnerability Assessment</span>
              <span style={skillTagStyle('#10b981')}>Network Security</span>
              <span style={skillTagStyle('#f59e0b')}>Threat Analysis</span>
              <span style={skillTagStyle('#06b6d4')}>Security Monitoring</span>
            </div>
          </div>
        </div>

        {/* Completed - Figma Design Certificate */}
        <div style={certificateCardStyle}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem' }}>
            <div style={certIconStyle('linear-gradient(135deg, #ec4899, #8b5cf6)')}>
              🎨
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                Design Prototype with Figma
              </h4>
              <p style={{ color: '#3b82f6', fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                Practical Training Course - Completed
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                  🏛️ King Mongkut's University of Technology North Bangkok
                </span>
                <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>📅 2024</span>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#10b981',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  <CheckCircle size={12} />
                  Completed
                </span>
              </div>
            </div>
          </div>

          <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Comprehensive training in UI/UX design and prototyping using Figma. This practical course covered 
            design principles, user research methodologies, wireframing, prototyping, and collaborative design workflows. 
            Gained hands-on experience in creating user-centered designs and interactive prototypes.
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <h5 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem' }}>Skills & Knowledge Acquired:</h5>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { skill: 'UI/UX Design Principles', description: 'User-centered design methodology and best practices' },
                { skill: 'Figma Proficiency', description: 'Advanced tool usage for design and prototyping' },
                { skill: 'User Research', description: 'Understanding user needs and behavior analysis' },
                { skill: 'Design Systems', description: 'Creating consistent and scalable design frameworks' },
                { skill: 'Interactive Prototyping', description: 'Building clickable prototypes for user testing' },
                { skill: 'Collaborative Design', description: 'Team-based design workflows and feedback integration' }
              ].map((item, index) => (
                <div key={index} style={{
                  background: 'rgba(75, 85, 99, 0.3)',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  border: '1px solid #4b5563'
                }}>
                  <div style={{ color: '#ec4899', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                    {item.skill}
                  </div>
                  <div style={{ color: '#d1d5db', fontSize: '0.8rem', lineHeight: '1.4' }}>
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.75rem' }}>Certification Tags:</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={skillTagStyle('#ec4899')}>UI/UX Design</span>
              <span style={skillTagStyle('#8b5cf6')}>Figma</span>
              <span style={skillTagStyle('#3b82f6')}>Prototyping</span>
              <span style={skillTagStyle('#10b981')}>User Research</span>
              <span style={skillTagStyle('#f59e0b')}>Design Systems</span>
              <span style={skillTagStyle('#ef4444')}>Interactive Design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>
          🏆 Awards & Recognition
        </h3>

        {/* goIT Award */}
        <div style={awardCardStyle}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem' }}>
            <div style={certIconStyle('linear-gradient(135deg, #f59e0b, #eab308)')}>
              🏆
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                goIT (Gen 1) 1st Runner Up
              </h4>
              <p style={{ color: '#f59e0b', fontSize: '1rem', fontWeight: '500', marginBottom: '0.5rem' }}>
                Innovation & Design Competition
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                  🏢 Tata Consultancy Services (Thailand) Limited
                </span>
                <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>📅 2024</span>
              </div>
            </div>
          </div>

          <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Achieved 1st Runner Up position in the goIT Generation 1 competition for innovative design related to 
            IoT and environmental technology. This prestigious competition organized by Tata Consultancy Services 
            challenged participants to create innovative solutions combining technology design with environmental sustainability. 
            The project demonstrated expertise in both technical system architecture and user-centered design principles.
          </p>

          <div style={{ marginBottom: '1.5rem' }}>
            <h5 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '1rem' }}>Project Highlights:</h5>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              <div style={{
                background: 'rgba(75, 85, 99, 0.3)',
                borderRadius: '0.5rem',
                padding: '1rem',
                border: '1px solid #4b5563'
              }}>
                <div style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  🌱 Environmental Innovation
                </div>
                <div style={{ color: '#d1d5db', fontSize: '0.8rem', lineHeight: '1.4' }}>
                  Designed sustainable IoT solutions addressing environmental challenges through smart technology integration
                </div>
              </div>
              
              <div style={{
                background: 'rgba(75, 85, 99, 0.3)',
                borderRadius: '0.5rem',
                padding: '1rem',
                border: '1px solid #4b5563'
              }}>
                <div style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  🎨 Design Excellence
                </div>
                <div style={{ color: '#d1d5db', fontSize: '0.8rem', lineHeight: '1.4' }}>
                  Created comprehensive UI/UX design using Figma with focus on user experience and accessibility
                </div>
              </div>
              
              <div style={{
                background: 'rgba(75, 85, 99, 0.3)',
                borderRadius: '0.5rem',
                padding: '1rem',
                border: '1px solid #4b5563'
              }}>
                <div style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  🏗️ System Architecture
                </div>
                <div style={{ color: '#d1d5db', fontSize: '0.8rem', lineHeight: '1.4' }}>
                  Developed comprehensive system architecture demonstrating scalability and technical feasibility
                </div>
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            <h5 style={{ color: '#f59e0b', fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem' }}>
              Competition Impact & Recognition
            </h5>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.6' }}>
              This achievement demonstrates ability to translate complex technical concepts into innovative, 
              practical solutions while maintaining focus on environmental sustainability and user experience. 
              The recognition from TCS Thailand validates the quality of technical design and innovation capabilities 
              in competitive technology environments.
            </p>
          </div>

          <div>
            <h5 style={{ color: 'white', fontSize: '1rem', marginBottom: '0.75rem' }}>Skills Demonstrated:</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={skillTagStyle('#f59e0b')}>Innovation Design</span>
              <span style={skillTagStyle('#10b981')}>IoT Systems</span>
              <span style={skillTagStyle('#3b82f6')}>System Architecture</span>
              <span style={skillTagStyle('#8b5cf6')}>Figma Design</span>
              <span style={skillTagStyle('#ef4444')}>Environmental Tech</span>
              <span style={skillTagStyle('#06b6d4')}>Sustainability</span>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Progress Section */}
      <div style={{
        background: 'rgba(55, 65, 81, 0.3)',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid #374151',
        marginBottom: '3rem'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          📚 Current Learning Journey
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid rgba(16, 185, 129, 0.3)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Shield size={24} style={{ color: '#10b981' }} />
              <h4 style={{ color: '#10b981', fontSize: '1.1rem', fontWeight: '600' }}>
                Cybersecurity Excellence
              </h4>
            </div>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Actively pursuing advanced cybersecurity certifications to build expertise in both 
              offensive and defensive security operations, preparing for leadership roles in cybersecurity.
            </p>
          </div>
          
          <div style={{
            background: 'rgba(75, 85, 99, 0.3)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid #4b5563'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.5rem' }}>🎓</div>
              <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>
                Master's Degree Progress
              </h4>
            </div>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Currently pursuing M.Sc. in Information Technology at KMUTT, combining advanced academic 
              studies with practical certifications for comprehensive professional development.
            </p>
          </div>
          
          <div style={{
            background: 'rgba(75, 85, 99, 0.3)',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            border: '1px solid #4b5563'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.5rem' }}>🚀</div>
              <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600' }}>
                Continuous Innovation
              </h4>
            </div>
            <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5' }}>
              Maintaining active participation in technology competitions and innovation programs 
              while building specialized skills in emerging cybersecurity technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Continuous Learning Commitment */}
      <div style={{
        background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Commitment to Professional Development
        </h3>
        <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
          These certifications and awards represent my dedication to continuous learning and excellence in technology. 
          I actively seek opportunities to expand my knowledge, validate my skills through recognized certifications, 
          and contribute to innovative solutions that make a positive impact.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.2rem' }}>2</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Certifications</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>1</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>In Progress</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem' }}>1st</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Runner Up Award</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '1.2rem' }}>Ongoing</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Learning Journey</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;