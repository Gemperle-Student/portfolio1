const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 75 }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'Responsive Design', level: 90 },
        { name: 'UI/UX Design', level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">{skillGroup.category}</h3>
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-teal-400 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
