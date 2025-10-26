import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span role="img" aria-label="purple-heart">💜</span> CONNECTED
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Where campus friendships begin! Connect with like-minded students,
            share amazing memories, and build lasting relationships that go
            beyond graduation.{" "}
            <span role="img" aria-label="hearts">💕</span>
          </p>

          <div className="flex space-x-4 mt-5">
            <a
              href="#"
              className="bg-gray-800 hover:bg-purple-600 text-white px-3 py-2 rounded-full text-sm"
            >
              f
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-purple-600 text-white px-3 py-2 rounded-full text-sm"
            >
              ig
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-purple-600 text-white px-3 py-2 rounded-full text-sm"
            >
              tw
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-400 transition">Profile Matching</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Video Calls</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Memory Sharing</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Communities</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Safety Guidelines</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-6 text-sm text-gray-500">
        <p className="text-center md:text-left">
          © 2025 CONNECTED. All rights reserved. Made with{" "}
          <span role="img" aria-label="hearts">💕</span> for students.
        </p>

        <div className="mt-3 md:mt-0 text-center md:text-right">
          <p>📧 hello@connected.com</p>
          <p>📞 1-800-CAMPUS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
