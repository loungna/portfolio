import { Download, MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Home = ({ setCurrentPage, isLoaded }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="text-center space-y-8 max-w-4xl mx-auto px-4">

        {/* Profile Image */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl bg-white transform hover:scale-105 transition-transform duration-500">
            <img
              src="/profile_work.png"
              alt="Jirayut Loungna - System Analyst and Full-Stack Developer"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          </div>

          {/* Floating animation rings */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping"></div>
          <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              {personalInfo.title}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-gray-400 leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-4 mt-8 text-sm">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-blue-400 font-semibold mb-1">🎓 Fresh Graduate</div>
                <div className="text-gray-300">Computer Science, KMUTNB 2024</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-green-400 font-semibold mb-1">🤖 ML Junior</div>
                <div className="text-gray-300">Thai NLP & Sentiment Analysis</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-4 border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-purple-400 font-semibold mb-1">📊 Data Analyst</div>
                <div className="text-gray-300">Big Data & Cybercrime Investigation</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => setCurrentPage('projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg flex items-center space-x-2"
          >
            <span>View My Projects</span>
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>

          <button className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <a
              href="/JirayutCV_SA.pdf"
              download="JirayutCV_SA.pdf"
              className="flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group"
          >
            <Mail size={20} className="group-hover:scale-110 transition-transform" />
            <span>{personalInfo.email}</span>
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors group"
          >
            <Phone size={20} className="group-hover:scale-110 transition-transform" />
            <span>{personalInfo.phone}</span>
          </a>
          <div className="flex items-center space-x-2 text-gray-400">
            <MapPin size={20} />
            <span>Bangkok, Thailand</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">2024</div>
            <div className="text-gray-400 text-sm">Graduate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">30K+</div>
            <div className="text-gray-400 text-sm">Songs Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">5+</div>
            <div className="text-gray-400 text-sm">Tech Skills</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">1st</div>
            <div className="text-gray-400 text-sm">Runner Up</div>
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30 max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Available for Opportunities</span>
          </div>
          <p className="text-gray-300 text-sm">
            Open to full-time positions in System Analyst, Business Analyst.
            Ready to contribute to innovative projects and grow with a team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
