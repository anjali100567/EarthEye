import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-green-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-blue-200">
              Get in touch with the Earth Eye team
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue-300">Send us a message</h2>
              
              {isSubmitted && (
                <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 mb-6">
                  <p className="text-green-300">✅ Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-200">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-200">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-200">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="data">Data Access Request</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-blue-200">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-blue-300">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400 text-xl">📧</div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-blue-200">contact@eartheye.io</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400 text-xl">🌐</div>
                    <div>
                      <p className="font-medium">Website</p>
                      <p className="text-blue-200">www.eartheye.io</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400 text-xl">💬</div>
                    <div>
                      <p className="font-medium">Support</p>
                      <p className="text-blue-200">Live chat available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Response Times</h3>
                <div className="space-y-3 text-gray-200">
                  <p><strong>General Inquiries:</strong> Within 24 hours</p>
                  <p><strong>Technical Support:</strong> Within 12 hours</p>
                  <p><strong>Partnership Requests:</strong> Within 48 hours</p>
                  <p><strong>Data Access:</strong> Within 24 hours</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Follow Us</h3>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600/50 hover:bg-blue-600 rounded-lg transition-all">
                    <span>🐦</span>
                    <span>Twitter</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600/50 hover:bg-blue-600 rounded-lg transition-all">
                    <span>💼</span>
                    <span>LinkedIn</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600/50 hover:bg-blue-600 rounded-lg transition-all">
                    <span>🐙</span>
                    <span>GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;