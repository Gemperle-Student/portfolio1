import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/70 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
              KWG
            </span>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
              <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
              <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`sm:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/70 backdrop-blur-md">
          <a href="#home" className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={toggleMenu}>Home</a>
          <a href="#about" className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={toggleMenu}>About</a>
          <a href="#skills" className={`mobile-nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={toggleMenu}>Skills</a>
          <a href="#projects" className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={toggleMenu}>Projects</a>
          <a href="#contact" className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
