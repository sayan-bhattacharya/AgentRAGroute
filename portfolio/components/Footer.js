export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Your Name</h3>
            <p className="text-gray-400">
              AI Engineer & Consultant
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="#consulting" className="text-gray-400 hover:text-white">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/yourusername" className="text-gray-400 hover:text-white">GitHub</a></li>
              <li><a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}