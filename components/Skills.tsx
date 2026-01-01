'use client'

interface SkillsProps {
  setActiveSection: (section: string) => void
}

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'HTML', level: 'Advanced' },
      { name: 'Vue', level: 'Beginner' },
      { name: 'CSS', level: 'Intermediate' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Java', level: 'Advanced' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Advanced'},
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'AWS/Cloud', level: 'Intermediate' },
      { name: 'C/C++', level: 'Advanced' },
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
                        {skill.level}
                      </span>
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

