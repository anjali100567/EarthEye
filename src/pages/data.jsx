import React, { useState } from 'react';

const Data = () => {
  const [selectedDataset, setSelectedDataset] = useState('satellite');

  const datasets = {
    satellite: {
      title: 'Satellite Imagery',
      description: 'High-resolution Earth observation data',
      metrics: [
        { label: 'Images Processed', value: '2.5M+' },
        { label: 'Coverage Area', value: '195 Countries' },
        { label: 'Resolution', value: '10m/pixel' },
        { label: 'Update Frequency', value: 'Daily' }
      ]
    },
    climate: {
      title: 'Climate Data',
      description: 'Temperature, precipitation, and weather patterns',
      metrics: [
        { label: 'Weather Stations', value: '15K+' },
        { label: 'Data Points', value: '50M+' },
        { label: 'Accuracy', value: '98.5%' },
        { label: 'Historical Range', value: '50+ Years' }
      ]
    },
    forest: {
      title: 'Forest Monitoring',
      description: 'Deforestation tracking and forest health analysis',
      metrics: [
        { label: 'Forests Monitored', value: '500+' },
        { label: 'Trees Tracked', value: '10B+' },
        { label: 'Deforestation Alerts', value: 'Real-time' },
        { label: 'Accuracy Rate', value: '96.8%' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-green-400 bg-clip-text text-transparent">
              Earth Data Hub
            </h1>
            <p className="text-xl text-blue-200">
              Comprehensive environmental data at your fingertips
            </p>
          </div>

          {/* Dataset Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(datasets).map(([key, dataset]) => (
              <button
                key={key}
                onClick={() => setSelectedDataset(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedDataset === key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-blue-200 hover:bg-white/20'
                }`}
              >
                {dataset.title}
              </button>
            ))}
          </div>

          {/* Dataset Details */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-300">
              {datasets[selectedDataset].title}
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              {datasets[selectedDataset].description}
            </p>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-4 gap-6">
              {datasets[selectedDataset].metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-blue-200">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Visualization Placeholder */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">Live Data Feed</h3>
            <div className="bg-gray-800/50 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <p className="text-gray-300">Interactive data visualization will appear here</p>
                <p className="text-sm text-gray-400 mt-2">
                  Real-time charts, maps, and analytics dashboard
                </p>
              </div>
            </div>
          </div>

          {/* Data API Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">API Access</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-400">REST API</h4>
                <code className="block bg-gray-800/70 rounded p-4 text-sm text-green-300">
                  GET /api/v1/satellite/latest<br/>
                  GET /api/v1/climate/temperature<br/>
                  GET /api/v1/forest/alerts
                </code>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-400">WebSocket Feed</h4>
                <code className="block bg-gray-800/70 rounded p-4 text-sm text-green-300">
                  wss://api.eartheye.io/live<br/>
                  Real-time data streaming<br/>
                  JSON format
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Data;