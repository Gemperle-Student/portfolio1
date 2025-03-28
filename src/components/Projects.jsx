import port2 from '../assets/port2.png';
import port3 from '../assets/port3.png';

const Projects = () => {
  const projects = [
    {
      title: 'Awesome Todos',
      description: 'A todo list using MERN stack',
      image: port2,
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Iskor',
      description: 'An Score Tracking App using MERN stack',
      image: port3,
      tags:  ['MongoDB', 'Express.js', 'React', 'Node.js'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Odin Recipe',
      description: 'Odi Recipe using HTML + CSS',
      image: 'https://via.placeholder.com/600x400',
      tags: ['HTML','CSS'],
      liveLink: '#',
      githubLink: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-teal-400/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      className="px-4 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="px-4 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
