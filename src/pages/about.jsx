import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-green-400 bg-clip-text text-transparent">
              About Earth Eye
            </h1>
            <p className="text-xl text-blue-200">
              Monitoring our planet with cutting-edge technology
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Earth Eye is a revolutionary platform that harnesses the power of satellite imagery, 
              AI, and real-time data analytics to provide comprehensive environmental monitoring. 
              We're committed to making Earth observation data accessible to researchers, 
              policymakers, and citizens worldwide.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-green-400 text-3xl mb-4">🛰️</div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">Satellite Monitoring</h3>
              <p className="text-gray-300">
                Real-time satellite data processing for environmental changes, 
                deforestation tracking, and climate monitoring.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-green-400 text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">AI-Powered Analysis</h3>
              <p className="text-gray-300">
                Advanced machine learning algorithms analyze patterns and 
                predict environmental trends with unprecedented accuracy.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-green-400 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">Interactive Dashboards</h3>
              <p className="text-gray-300">
                Intuitive visualizations make complex environmental data 
                accessible to users of all technical backgrounds.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <div className="text-green-400 text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-3 text-blue-300">Global Impact</h3>
              <p className="text-gray-300">
                Contributing to climate action, conservation efforts, 
                and sustainable development goals worldwide.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-blue-300">Our Team</h2>
            <p className="text-lg text-gray-200 mb-6">
              Built by a passionate team of developers, data scientists, and environmental 
              enthusiasts dedicated to making a positive impact on our planet.
            </p>
            <div className="text-center">
              <p className="text-blue-300 font-semibold">
                Developed for the 2025 Environmental Tech Hackathon
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;