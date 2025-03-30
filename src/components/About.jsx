import profilePic from '../assets/port1.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden">
              <img
                src={profilePic}
                alt="Keirt William Gemperle"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-600 to-teal-400 rounded-2xl -z-10"></div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Hi there! I'm Keirt William Gemperle, a passionate frontend developer and project manager with a keen eye for design and a love for creating beautiful, 
              functional web experiences. With expertise in modern web technologies and project management, I specialize in building responsive 
              and user-friendly applications while effectively coordinating teams and resources.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My journey in web development started with a curiosity for how things work on the internet, and it has evolved 
              into a professional career where I get to bring ideas to life through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">2+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="px-6 py-3 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">10+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
