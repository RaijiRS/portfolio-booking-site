'use client'

interface SkillsProps {
  setActiveSection: (section: string) => void
}

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 83 },
      { name: 'HTML', level: 85 },
      { name: 'Vue', level: 75 },
      { name: 'CSS', level: 70 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Java', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Postman', level: 80 },
      { name: 'AWS/Cloud', level: 65 },
      { name: 'C/C++', level: 80 },
    ],
  },
]

export default function Skills({ setActiveSection }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 rounded-xl p-6 shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-primary-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-primary-600 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

