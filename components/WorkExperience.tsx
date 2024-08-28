import React from 'react'

const experience = [
  {
    id: 1,
    name: "Software Engineering Laboratory Assistant",
    company: "STEI ITB",
    time: "Start Aug. 2024"
  },
  {
    id: 2,
    name: "Software Engineer Intern",
    company: "Purple Foxes Italy",
    time: "Jul. 2024 - Present",
  },
  {
    id: 3,
    name: "UI/UX Designer Intern",
    company: "Datare",
    time: "Nov. 2023 - Jan. 2024"
  },
]

const WorkExperience = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-2xl'>Work Experience</h3>
      <ul className='space-y-2'>
        {experience.map(item => (
          <li key={item.id} className='flex justify-between items-center'>
            <div>
              <p>{item.name}</p>
              <p className='text-white/75 text-sm'>{item.company}</p>
            </div>
            <p className='text-white/75 text-sm'>
              {item.time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkExperience