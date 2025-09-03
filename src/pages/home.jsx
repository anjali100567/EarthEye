import React from "react";
import appData from "./data";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-blue-400 mb-2">{appData.appName || "App Name"}</h1>
      <p className="text-lg mb-8">Powered by {appData.author || "NISAR"}</p>

      {/* Earth & Satellite Placeholder */}
      <div className="w-80 h-80 bg-gray-800 rounded-full flex items-center justify-center mb-12">
        <p className="text-gray-400">[3D Earth & Satellite Placeholder]</p>
      </div>

      {/* Problem Section */}
      <section className="max-w-3xl mb-12">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Problem</h2>
        <p className="text-gray-300">
          {/* Placeholder text for defining the problem */}
          Insert problem statement here. Example: Climate change is causing unpredictable weather patterns, deforestation, and natural disasters.
        </p>
      </section>

      {/* Solution Section */}
      <section className="max-w-3xl mb-12">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Solution</h2>
        <p className="text-gray-300">
          {/* Placeholder text for defining the solution */}
          Insert solution here. Example: Using satellite data and AI models to track environmental changes and predict natural disasters.
        </p>
      </section>

      {/* Other Info Section */}
      <section className="max-w-3xl mb-12">
        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Other Information</h2>
        <p className="text-gray-300">
          {/* Placeholder for additional information */}
          Add details such as project goals, features, and upcoming updates.
        </p>
      </section>
    </div>
  );
};

export default Home;
