import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import profilePic from '../assets/port1.jpg'

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Frontend Developer', 'UI/UX Designer', 'React Specialist'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    })

    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="animated-gradient absolute inset-0"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src={profilePic}
              alt="Keirt William Gemperle"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            />
          </div>
          <div className="glass-effect p-8 rounded-2xl">
            <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-white">
              Hi, I'm <span className="bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">Keirt William Gemperle</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-100 mb-8">
              I'm a <span ref={el}></span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-white text-blue-600 font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-gray-400 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
