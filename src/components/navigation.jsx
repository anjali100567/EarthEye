// Create src/components/Navigation.jsx
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="logo">🌍 EARTH EYE</div>
          <ul className="flex space-x-6">
            <li><Link to="/home" className="text-white hover:text-blue-400">HOME</Link></li>
            <li><Link to="/about" className="text-white hover:text-blue-400">ABOUT</Link></li>
            <li><Link to="/data" className="text-white hover:text-blue-400">DATA</Link></li>
            <li><Link to="/chatbot" className="text-white hover:text-blue-400">CHATBOT</Link></li>
            <li><Link to="/contact" className="text-white hover:text-blue-400">CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;