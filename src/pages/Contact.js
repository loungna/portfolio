// pages/Contact.js - Realistic Content
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, User, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    position: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setFormErrors({});
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '', 
        company: '', 
        position: '' 
      });
      
      // Reset success message after 10 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: personalInfo.email,
      description: "Send me an email and I'll respond within 24 hours",
      link: `mailto:${personalInfo.email}`,
      color: "from-blue-500 to-cyan-500",
      available: "Always available"
    },
    {
      icon: Phone,
      title: "Phone",
      value: personalInfo.phone,
      description: "Call me for urgent matters or quick discussions",
      link: `tel:${personalInfo.phone}`,
      color: "from-green-500 to-emerald-500",
      available: "9 AM - 7 PM (GMT+7)"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangkok, Thailand",
      description: "Available for local meetings and collaborations",
      link: null,
      color: "from-purple-500 to-violet-500",
      available: "Local meetings by appointment"
    }
  ];

  const socialPlatforms = [
    {
      icon: Github,
      name: "GitHub",
      url: socialLinks.github,
      description: "Check out my code and contributions",
      color: "hover:text-gray-400",
      username: "@jirayut-loungna"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: socialLinks.linkedin,
      description: "Connect with me professionally",
      color: "hover:text-blue-400",
      username: "jirayut-loungna"
    },
    {
      icon: Mail,
      name: "Email",
      url: `mailto:${socialLinks.email}`,
      description: "Direct email communication",
      color: "hover:text-green-400",
      username: personalInfo.email
    }
  ];

  const collaborationAreas = [
    {
      title: "Full-Stack Development",
      description: "Web applications using React, Node.js, Python",
      icon: "💻",
      skills: ["React", "Node.js", "Python", "Flask/FastAPI"]
    },
    {
      title: "Machine Learning Projects",
      description: "NLP, sentiment analysis, data processing",
      icon: "🤖",
      skills: ["TensorFlow", "NLP", "Python", "Data Analysis"]
    },
    {
      title: "System Analysis",
      description: "Architecture design, requirements analysis",
      icon: "📊",
      skills: ["System Design", "Requirements", "Documentation"]
    },
    {
      title: "Open Source Contributions",
      description: "Contributing to community projects",
      icon: "🌟",
      skills: ["Git", "Collaboration", "Code Review"]
    }
  ];

  const opportunityTypes = [
    {
      type: "Full-Time Position",
      description: "Ready for full-time roles in System Analysis, Full-Stack Development, or ML",
      status: "Available",
      color: "text-green-400"
    },
    {
      type: "Freelance Projects",
      description: "Open to interesting freelance opportunities and consulting work",
      status: "Selective",
      color: "text-blue-400"
    },
    {
      type: "Collaboration",
      description: "Interested in collaborating on innovative technology projects",
      status: "Open",
      color: "text-purple-400"
    },
    {
      type: "Mentorship",
      description: "Available for tech mentorship and knowledge sharing",
      status: "Limited",
      color: "text-yellow-400"
    }
  ];

  return (
    <div className="py-20 space-y-16">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          I'm always excited to discuss new opportunities, collaborate on interesting projects, 
          or simply connect with fellow developers and technology enthusiasts
        </p>
      </div>

      {/* Current Status */}
      <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-6 border border-green-500/30 max-w-3xl mx-auto">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 font-semibold text-lg">Available for Opportunities</span>
        </div>
        <p className="text-gray-300 text-center">
          Recent Computer Science graduate actively seeking full-time positions in System Analysis, 
          Full-Stack Development, or Machine Learning roles. Ready to contribute to innovative projects 
          and grow with a dynamic team.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left Column - Contact Form */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <MessageSquare className="text-blue-400 mr-3" size={28} />
              Send Me a Message
            </h3>
            
            {isSubmitted && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-6 flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={24} />
                <div>
                  <h4 className="text-green-400 font-semibold">Message Sent Successfully!</h4>
                  <p className="text-green-300 text-sm">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    <User className="inline mr-2" size={18} />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${formErrors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="Your full name"
                  />
                  {formErrors.name && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    <Mail className="inline mr-2" size={18} />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800/50 border ${formErrors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
                    placeholder="your@email.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Your Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Your role (optional)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  <FileText className="inline mr-2" size={18} />
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border ${formErrors.subject ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors`}
                  placeholder="What is this regarding?"
                />
                {formErrors.subject && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {formErrors.subject}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-2">
                  <MessageSquare className="inline mr-2" size={18} />
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-gray-800/50 border ${formErrors.message ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                  placeholder="Tell me about your project, opportunity, or how I can help you..."
                />
                {formErrors.message && (
                  <p className="text-red-400 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {formErrors.message}
                  </p>
                )}
                <p className="text-gray-500 text-sm mt-1">
                  Minimum 10 characters. Current: {formData.message.length}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                        {method.link ? (
                          <a 
                            href={method.link}
                            className="text-blue-400 hover:text-blue-300 transition-colors font-medium block mb-1"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-gray-300 font-medium mb-1">{method.value}</p>
                        )}
                        <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                        <p className="text-green-400 text-xs">{method.available}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
            <div className="grid grid-cols-1 gap-4">
              {socialPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-blue-500 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <Icon className={`text-gray-400 group-hover:text-white ${platform.color} transition-colors`} size={24} />
                      <div className="flex-1">
                        <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">{platform.name}</h4>
                        <p className="text-gray-400 text-sm">{platform.description}</p>
                        <p className="text-blue-400 text-xs">{platform.username}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Opportunity Types */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Open to Opportunities</h3>
            <div className="space-y-3">
              {opportunityTypes.map((opp, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`${opp.color} text-sm font-medium mt-1`}>{opp.status}</div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium text-sm">{opp.type}</h4>
                    <p className="text-gray-400 text-xs">{opp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration Areas */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
            <h3 className="text-xl font-semibold text-white mb-4">Open to Collaborate On</h3>
            <div className="space-y-4">
              {collaborationAreas.map((area, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-2xl">{area.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{area.title}</h4>
                    <p className="text-gray-300 text-sm mb-2">{area.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {area.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Response Time Info */}
      <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center">
          <Clock className="text-blue-400 mr-3" size={24} />
          Response Time Commitment
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-blue-400 font-semibold text-lg">Email</h4>
            <p className="text-gray-300">Within 24 hours</p>
            <p className="text-gray-500 text-sm">Usually much faster</p>
          </div>
          <div>
            <h4 className="text-green-400 font-semibold text-lg">Phone/WhatsApp</h4>
            <p className="text-gray-300">Same day</p>
            <p className="text-gray-500 text-sm">For urgent matters</p>
          </div>
          <div>
            <h4 className="text-purple-400 font-semibold text-lg">Project Discussions</h4>
            <p className="text-gray-300">Within 2-3 days</p>
            <p className="text-gray-500 text-sm">Detailed proposal review</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">Ready to Work Together?</h3>
        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
          Whether you have a project in mind, want to discuss opportunities, or just want to connect and chat about technology, 
          I'd love to hear from you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${personalInfo.email}?subject=Hello from your portfolio&body=Hi Jirayut,%0D%0A%0D%0AI found your portfolio and would like to connect.%0D%0A%0D%0A`}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Send Email Now
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;