import React from 'react'

function About() {
  return (
    <div>
        <div className="w-full min-h-screen bg-gray-100 dark:bg-black flex items-center py-10">
  <div className="w-full max-w-6xl mx-auto px-4 text-gray-900 dark:text-white">
    
    {/* Title Section */}
    <div className="mb-6">
      <h2 className="text-4xl font-semibold font-serif">About Me</h2>
      <div className="flex gap-2 mt-2">
        <div className="w-16 h-1 bg-rose-500 rounded"></div>
        <div className="w-8 h-1 bg-rose-500 rounded"></div>
      </div>
    </div>

    <h4 className="text-xl font-semibold mb-2">
      I'm <span className="text-rose-500">Samuel Abera</span> and I'm a <span className="text-rose-500">Web Developer</span>
    </h4>

    <p className="mb-6">
      I'm a FullStack Developer passionate about building impactful digital experiences. I specialize in creating clean, functional, and responsive applications.
    </p>

    {/* Info & Skills Section */}
    <div className="flex flex-col lg:flex-row gap-8">
      
      {/* Personal Info */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2">
            <li><strong>Birthday:</strong> 21 Feb 1997</li>
            <li><strong>Website:</strong> https://website.com</li>
            <li><strong>Degree:</strong> BSc. Computer Science</li>
            <li><strong>Location:</strong> Addis Ababa, Ethiopia</li>
          </ul>
          <ul className="space-y-2">
            <li><strong>Email:</strong> samuelabera87@gmail.com</li>
            <li><strong>Phone:</strong> +2519134***30</li>
            <li><strong>Employment:</strong> Remote</li>
            <li><strong>Freelance:</strong> Available</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <button className="bg-rose-600 text-white px-5 py-2 rounded-full font-semibold">Download CV</button>
          <button className="bg-rose-600 text-white px-5 py-2 rounded-full font-semibold">Hire Me</button>
        </div>
      </div>

      {/* Skills Progress */}
      <div className="w-full lg:w-1/2 space-y-4">
        {[
          { skill: 'WordPress', level: '92%' },
          { skill: 'HTML/CSS/JavaScript', level: '90%' },
          { skill: 'PHP/Laravel', level: '80%' },
          { skill: 'Vue/Nuxt', level: '85%' },
          { skill: 'NestJS', level: '70%' },
        ].map(({ skill, level }) => (
          <div key={skill}>
            <div className="flex justify-between font-medium mb-1">
              <span>{skill}</span>
              <span>{level}</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div className="bg-rose-500 h-2 rounded-full" style={{ width: level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About