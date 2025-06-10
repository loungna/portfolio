import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, Users, Code, Brain, Clock, TrendingUp, Star, CheckCircle, Circle } from 'lucide-react';

const Education = () => {
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

  const currentEducationStyle = {
    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(34, 197, 94, 0.1))',
    borderRadius: '1.5rem',
    padding: '3rem',
    border: '2px solid rgba(16, 185, 129, 0.3)',
    marginBottom: '3rem',
    backdropFilter: 'blur(8px)',
    position: 'relative'
  };

  const mainEducationStyle = {
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
    borderRadius: '1.5rem',
    padding: '3rem',
    border: '1px solid rgba(59, 130, 246, 0.3)',
    marginBottom: '3rem',
    backdropFilter: 'blur(8px)'
  };

  const universityHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '2rem'
  };

  const universityLogoStyle = {
    width: '5rem',
    height: '5rem',
    borderRadius: '1rem',
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: '0.5rem'
  };

  const courseworkGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
    marginTop: '1.5rem'
  };

  const courseItemStyle = {
    background: 'rgba(75, 85, 99, 0.3)',
    borderRadius: '0.5rem',
    padding: '1rem',
    border: '1px solid #4b5563',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const gradeStyle = (grade) => {
    const color = grade.startsWith('A') ? '#10b981' :
      grade.startsWith('B') ? '#3b82f6' : 
      grade.startsWith('C+') ? '#f7ff04' :
      grade.startsWith('C') ? '#f59e0b' :
      grade.startsWith('D+') ? '#f87171' :
      grade.startsWith('D') ? '#fa6c46' : '#ef4444'; 
    return {
      background: `${color}20`,
      color: color,
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.8rem',
      fontWeight: '600'
    };
  };

  const achievementCardStyle = {
    background: 'rgba(55, 65, 81, 0.4)',
    borderRadius: '1rem',
    padding: '1.5rem',
    border: '1px solid #374151',
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

  // Master's degree coursework data
  const requiredCourses = [
    'Enterprise Computing Platform Design',
    'Design and Analysis of Algorithms',
    'Basic AI Application Development',
    'Standards, Laws and Compliances for IT Professionals',
    'Database Management',
    'Data Governance',
    'Systems Analysis and UX/UI Design',
    'Network and Cybersecurity',
    'Research Methodology (Academic Track)',
    'Research Methodology for Practitioners (Professional Track)'
  ];

  const electiveCourses = [
    'Decision Support',
    'Business Financial Analysis',
    'Information Technology Project Management',
    'Strategic Digital Transformation',
    'Information Technology Control and Audits',
    'Information Quality Management',
    'Seminar',
    'Data Mining',
    'Big Data Analytics',
    'Agile System Development',
    'Artificial Intelligence',
    'Multimedia Technology',
    'Mobile Technology',
    'Internet of Things and Application',
    'Introduction to Hypervisor and Mastering Virtualbox',
    'Basic Linux Administration',
    'Wireshark Packet Analysis',
    'Securing Digital Infrastructure',
    'Cybersecurity Risk Management',
    'Security Operation',
    'Threat Intelligence',
    'Data Visualization',
    'NoSQL Database'
  ];

  const practicalWorkshops = [
    'Database Programming and Administration Workshop',
    'SMART Networking and Intelligent Infrastructure Workshop',
    'UX/UI Workshop',
    'Artificial Intelligence for Business Workshop',
    'Data Science on Cloud Workshop',
    'Java Programming Workshop',
    'Cloud Computing Workshop'
  ];

  const currentEducation = {
    degree: "Master of Science (M.Sc.) in Information Technology",
    institution: "King Mongkut's University of Technology Thonburi (KMUTT)",
    department: "School of Information Technology",
    period: "July 2025 - Expected 2027",
    status: "Currently Pursuing",
    location: "Bangkok, Thailand",
    focus: [
      "Advanced Software Engineering",
      "Data Science and Analytics", 
      "Cloud Computing and Distributed Systems",
      "Artificial Intelligence and Machine Learning",
      "Cybersecurity and Information Systems",
      "Research Methodology and Innovation"
    ],
    researchInterests: [
      "Natural Language Processing for Southeast Asian Languages",
      "Machine Learning Applications in Cultural Content Analysis",
      "Scalable Web Application Architecture",
      "AI-driven System Analysis and Design"
    ]
  };

  const keyCoursework = [
    { code: '040613101', name: 'FUND OF CS & PROFESS ISSUES', credits: 3, semester: '1/63', grade: 'C' },
    { code: '040613102', name: 'COMPUTER PROGRAMMING I', credits: 3, semester: '1/63', grade: 'A' },
    { code: '040613121', name: 'COMPUTER PROGRAMMING II', credits: 6, semester: '2/63', grade: 'C'},
    { code: '040613202', name: 'DATA STRUCTURE & ALGORITHM', credits: 3, semester: '1/65', grade: 'D' },
    { code: '040613222', name: 'OBJECT-ORIENTED PROGRAMMING', credits: 3, semester: '1/65', grade: 'B' },
    { code: '040613241', name: 'SYSTEM ANALYSIS AND DESIGN', credits: 3, semester: '2/64', grade: 'B' },
    { code: '040613272', name: 'COMP ORGAN & ARCHITECTURE', credits: 3, semester: '2/64', grade: 'B' },
    { code: '040613292', name: 'DESIGN & ANAL OF ALGORITHM', credits: 3, semester: '2/65', grade: 'D' },
    { code: '040613325', name: 'PRINC OF PROGRAM LANGUAGE', credits: 3, semester: '2/65', grade: 'C+' },
    { code: '040613331', name: 'DATABASE SYSTEMS', credits: 3, semester: '2/66', grade: 'C+' },
    { code: '040613344', name: 'SOFTWARE ENGINEERING', credits: 3, semester: '1/65', grade: 'C+' },
    { code: '040613349', name: 'HUMAN COMPUTER INTERACTION', credits: 3, semester: '2/65', grade: 'B' },
    { code: '040613351', name: 'COMPUTER NETWORKS', credits: 3, semester: '1/65', grade: 'C' },
    { code: '040613374', name: 'OPERATING SYSTEM', credits: 3, semester: '1/65', grade: 'D+' },
    { code: '040613404', name: 'SPECIAL PROJECT I', credits: 1, semester: '2/66', grade: 'C+' },
    { code: '040613405', name: 'SPECIAL PROJECT II', credits: 3, semester: '1/67', grade: 'C+' }
  ];

  const academicAchievements = [
    {
      title: 'Outstanding Graduate Project',
      description: 'Thai Music Emotion Analysis Web App recognized for innovation in NLP and cultural content analysis',
      impact: 'Demonstrated practical application of ML in Southeast Asian language processing'
    },
    {
      title: 'Consistent Academic Performance',
      description: 'Maintained strong GPA throughout the program with focus on practical skill application',
      impact: 'Built comprehensive foundation in both theoretical concepts and hands-on development'
    },
    {
      title: 'Research & Development Focus',
      description: 'Specialized coursework in Machine Learning, NLP, and System Analysis',
      impact: 'Developed expertise in cutting-edge technologies with real-world applications'
    }
  ];

  const extracurricularActivities = [
    {
      activity: 'Computer Science Student Association',
      role: 'Active Member',
      description: 'Participated in tech workshops, coding competitions, and peer learning sessions',
      skills: ['Leadership', 'Technical Presentation', 'Peer Mentoring']
    },
    {
      activity: 'University Tech Fair',
      role: 'Project Presenter',
      description: 'Presented graduate project to industry professionals and academic faculty',
      skills: ['Public Speaking', 'Technical Communication', 'Project Management']
    },
    {
      activity: 'Peer Programming Group',
      role: 'Study Group Leader',
      description: 'Led study sessions and helped fellow students with programming concepts',
      skills: ['Teaching', 'Problem Solving', 'Team Collaboration']
    },
    {
      activity: 'Open Source Contribution',
      role: 'Contributor',
      description: 'Contributed to various open-source projects during university years',
      skills: ['Version Control', 'Code Review', 'Community Engagement']
    }
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Education</h2>
      <p style={subtitleStyle}>
        Academic foundation and continuous learning journey from Computer Science excellence 
        to advanced Information Technology research and development
      </p>

      {/* Current Education - Master's Degree */}
      <div style={currentEducationStyle}>
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
          <Clock size={16} />
          Currently Studying
        </div>

        <div style={universityHeaderStyle}>
          <div style={universityLogoStyle}>
            <img 
              src="kmutt-logo.png"
              alt="KMUTT Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div>
            <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              King Mongkut's University of Technology Thonburi
            </h3>
            <p style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: '500', marginBottom: '0.25rem' }}>
              {currentEducation.degree}
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
              📅 {currentEducation.period} • 📍 {currentEducation.location} • 🎓 {currentEducation.department}
            </p>
          </div>
        </div>

        {/* Current Status & Progress */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{
            background: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '0.75rem',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>2025-2027</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Study Period</div>
          </div>
          <div style={{
            background: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '0.75rem',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>In Progress</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Status</div>
          </div>
          <div style={{
            background: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '0.75rem',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>Advanced IT</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Specialization</div>
          </div>
          <div style={{
            background: 'rgba(16, 185, 129, 0.2)',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            borderRadius: '0.75rem',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>July 2025</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Started</div>
          </div>
        </div>

        {/* Master's Curriculum - Required Courses */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={20} style={{ color: '#10b981' }} />
            Required Courses (Core Curriculum)
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
            {requiredCourses.map((course, index) => (
              <div key={index} style={{
                background: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '0.75rem',
                padding: '1rem',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                <span style={{ color: '#d1d5db', fontSize: '0.85rem', fontWeight: '500' }}>{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Elective Courses */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Circle size={20} style={{ color: '#6ee7b7' }} />
            Elective Courses (Specialization Options)
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.5rem' }}>
            {electiveCourses.map((course, index) => (
              <div key={index} style={{
                background: 'rgba(75, 85, 99, 0.3)',
                borderRadius: '0.5rem',
                padding: '0.75rem',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Circle size={12} style={{ color: '#6ee7b7', flexShrink: 0 }} />
                <span style={{ color: '#d1d5db', fontSize: '0.8rem' }}>{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Workshops */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code size={20} style={{ color: '#34d399' }} />
            Practical Workshops & Labs
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem' }}>
            {practicalWorkshops.map((workshop, index) => (
              <div key={index} style={{
                background: 'rgba(52, 211, 153, 0.1)',
                borderRadius: '0.75rem',
                padding: '1rem',
                border: '1px solid rgba(52, 211, 153, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <Code size={16} style={{ color: '#34d399', flexShrink: 0 }} />
                <span style={{ color: '#d1d5db', fontSize: '0.85rem', fontWeight: '500' }}>{workshop}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Research Interests */}
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '1rem',
          padding: '1.5rem'
        }}>
          <h4 style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>
            🔬 Research Interests & Future Direction
          </h4>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {currentEducation.researchInterests.map((interest, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <Brain size={16} style={{ color: '#10b981' }} />
                <span style={{ color: '#d1d5db', fontSize: '0.9rem' }}>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bachelor's Degree - Completed */}
      <div style={mainEducationStyle}>
        <div style={universityHeaderStyle}>
          <div style={universityLogoStyle}>
            <img 
              src="kmutnb-logo.png"
              alt="KMUTNB Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <div>
            <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              King Mongkut's University of Technology North Bangkok
            </h3>
            <p style={{ color: '#3b82f6', fontSize: '1.2rem', fontWeight: '500', marginBottom: '0.25rem' }}>
              Bachelor of Science (B.Sc.) in Computer Science
            </p>
            <p style={{ color: '#9ca3af', fontSize: '0.95rem' }}>
              📅 2020-2024 • 📍 Bangkok, Thailand • 🎓 Department of Computer Science and Information Science
            </p>
          </div>
        </div>

        {/* Academic Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '0.75rem',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>4 Years</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Duration</div>
          </div>
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '0.75rem',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>140+</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Credits Completed</div>
          </div>
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '0.75rem',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>ML & NLP</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Specialization</div>
          </div>
          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '0.75rem',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 'bold' }}>2024</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Graduated</div>
          </div>
        </div>

        {/* Academic Focus Areas */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '1rem' }}>
            Bachelor's Program Focus Areas
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {[
              { title: 'System Analysis & Design', icon: '🔧', description: 'Requirements gathering, system architecture, and design patterns' },
              { title: 'Machine Learning & NLP', icon: '🧠', description: 'AI algorithms, neural networks, and language processing' },
              { title: 'Software Engineering', icon: '💻', description: 'Development methodologies, testing, and project management' },
              { title: 'Database Systems', icon: '🗄️', description: 'Database design, optimization, and data management' },
              { title: 'Web Development', icon: '🌐', description: 'Frontend and backend technologies, full-stack development' },
              { title: 'Cybersecurity', icon: '🛡️', description: 'Security principles, threat analysis, and protection strategies' }
            ].map((area, index) => (
              <div key={index} style={{
                background: 'rgba(75, 85, 99, 0.3)',
                borderRadius: '0.75rem',
                padding: '1rem',
                border: '1px solid #4b5563'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{area.icon}</div>
                <h5 style={{ color: 'white', fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {area.title}
                </h5>
                <p style={{ color: '#d1d5db', fontSize: '0.8rem', lineHeight: '1.4' }}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Graduate Project Highlight */}
        <div style={{
          background: 'rgba(139, 92, 246, 0.1)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          borderRadius: '1rem',
          padding: '1.5rem'
        }}>
          <h4 style={{ color: '#8b5cf6', fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem' }}>
            🎓 Graduate Project: Thai Music Emotion Analysis Web App
          </h4>
          <p style={{ color: '#d1d5db', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            Developed a Machine Learning-based project to analyze Thai song genres from lyrics using Python and NLP techniques.
            This comprehensive project demonstrated practical application of academic learning in real-world problem solving,
            combining multiple disciplines including AI, web development, and cultural content analysis.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={skillTagStyle}>Machine Learning</span>
            <span style={skillTagStyle}>Natural Language Processing</span>
            <span style={skillTagStyle}>Python</span>
            <span style={skillTagStyle}>TensorFlow</span>
            <span style={skillTagStyle}>React</span>
            <span style={skillTagStyle}>Full-Stack Development</span>
            <span style={skillTagStyle}>Thai Language</span>
            <span style={skillTagStyle}>Cultural Analysis</span>
          </div>
        </div>
      </div>

      {/* Academic Journey Timeline */}
      <div style={{
        background: 'rgba(55, 65, 81, 0.3)',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid #374151',
        marginBottom: '3rem'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Academic Journey Timeline
        </h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.5rem auto'
            }}>
              <GraduationCap size={24} style={{ color: 'white' }} />
            </div>
            <div style={{ color: '#3b82f6', fontWeight: 'bold' }}>2020-2024</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Bachelor's Degree</div>
            <div style={{ color: '#9ca3af', fontSize: '0.8rem' }}>KMUTNB</div>
          </div>
          
          <div style={{ color: '#9ca3af', fontSize: '1.5rem' }}>→</div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.5rem auto',
              animation: 'pulse 2s infinite'
            }}>
              <TrendingUp size={24} style={{ color: 'white' }} />
            </div>
            <div style={{ color: '#10b981', fontWeight: 'bold' }}>2025-2027</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Master's Degree</div>
            <div style={{ color: '#9ca3af', fontSize: '0.8rem' }}>KMUTT</div>
          </div>
          
          <div style={{ color: '#9ca3af', fontSize: '1.5rem' }}>→</div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '4rem',
              height: '4rem',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.5rem auto'
            }}>
              <Award size={24} style={{ color: 'white' }} />
            </div>
            <div style={{ color: '#f59e0b', fontWeight: 'bold' }}>2027+</div>
            <div style={{ color: '#d1d5db', fontSize: '0.9rem' }}>Future Goals</div>
            <div style={{ color: '#9ca3af', fontSize: '0.8rem' }}>Career Growth</div>
          </div>
        </div>
      </div>

      {/* Key Coursework */}
      <div style={{
        background: 'rgba(55, 65, 81, 0.3)',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid #374151',
        marginBottom: '3rem'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          Bachelor's Coursework & Academic Performance
        </h3>

        <div style={courseworkGridStyle}>
          {keyCoursework.map((course, index) => (
            <div key={index} style={courseItemStyle}>
              <div>
                <div style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  {course.name}
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.8rem' }}>
                  {course.credits} Credits • {course.semester}
                </div>
              </div>
              <div style={gradeStyle(course.grade)}>
                {course.grade}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Achievements */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Academic Achievements & Recognition
        </h3>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {academicAchievements.map((achievement, index) => (
            <div key={index} style={achievementCardStyle}>
              <h4 style={{ color: '#3b82f6', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                🏆 {achievement.title}
              </h4>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                {achievement.description}
              </p>
              <div style={{
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '0.5rem',
                padding: '0.75rem'
              }}>
                <span style={{ color: '#3b82f6', fontSize: '0.8rem', fontWeight: '500' }}>Impact: </span>
                <span style={{ color: '#d1d5db', fontSize: '0.8rem' }}>{achievement.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extracurricular Activities */}
      <div style={{
        background: 'rgba(55, 65, 81, 0.3)',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid #374151',
        marginBottom: '3rem'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Extracurricular Activities & Leadership
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {extracurricularActivities.map((item, index) => (
            <div key={index} style={{
              background: 'rgba(75, 85, 99, 0.3)',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              border: '1px solid #4b5563'
            }}>
              <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                {item.activity}
              </h4>
              <p style={{ color: '#8b5cf6', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.75rem' }}>
                {item.role}
              </p>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                {item.description}
              </p>
              <div>
                <div style={{ color: '#9ca3af', fontSize: '0.8rem', marginBottom: '0.5rem' }}>Skills Developed:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} style={{
                      background: 'rgba(16, 185, 129, 0.2)',
                      color: '#6ee7b7',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '0.75rem',
                      fontSize: '0.7rem',
                      fontWeight: '500'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Foundation for Future Success */}
      <div style={{
        background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))',
        borderRadius: '1rem',
        padding: '2rem',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Building Advanced Expertise Through Continuous Education
        </h3>
        <p style={{ color: '#d1d5db', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
          From a solid Computer Science foundation at KMUTNB to advanced Information Technology studies at KMUTT, 
          my educational journey reflects a commitment to continuous learning and specialization in cutting-edge technologies. 
          The combination of theoretical excellence and practical application prepares me for leadership roles in technology innovation.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.2rem' }}>Strong Foundation</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>CS Fundamentals</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#10b981', fontWeight: 'bold', fontSize: '1.2rem' }}>Advanced Studies</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>IT Specialization</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#8b5cf6', fontWeight: 'bold', fontSize: '1.2rem' }}>Research Focus</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Innovation & Tech</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem' }}>Future Ready</div>
            <div style={{ color: '#9ca3af', fontSize: '0.9rem' }}>Leadership Potential</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;