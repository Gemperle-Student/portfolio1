import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/keirt-william-gemperle/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/YourGitHubUsername',
      color: 'hover:text-gray-800'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:your.email@example.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/YourTwitterHandle',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Let's <span className="text-blue-500">Connect</span>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-600 mb-12">
            Feel free to reach out through any of these platforms. I'm always excited to connect, collaborate, and discuss new opportunities!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className={`w-10 h-10 transition-colors ${social.name === 'LinkedIn' ? 'hover:text-[#0077B5]' : 
                    social.name === 'GitHub' ? 'hover:text-[#333]' : 
                    social.name === 'Email' ? 'hover:text-blue-500' : 
                    'hover:text-[#1DA1F2]'}`} />
                  <span className="font-medium text-gray-700">{social.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
