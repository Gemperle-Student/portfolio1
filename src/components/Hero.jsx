import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import profilePic from '../assets/port1.jpg'

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'UI/UX Designer', 'Project Manager'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    })

    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="min-h-screen w-full relative overflow-hidden">
      <div className="animated-gradient absolute inset-0"></div>
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <img
                src={profilePic}
                alt="Keirt William Gemperle"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                Hi, I'm <span className="text-blue-200">Keirt William Gemperle</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-50 mb-8">
                I'm a <span ref={el} className="text-white font-medium"></span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#projects"
                  className="px-8 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full border-2 border-blue-200 text-blue-100 font-medium hover:border-blue-300 hover:text-blue-200 transition-colors duration-200"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
