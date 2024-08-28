import React from 'react'
import { LaptopMinimal } from 'lucide-react';

const experiences = [
  {
    id: 1,
    name: "Software Engineering Laboratory Assistant",
    company: "Institut Teknologi Bandung",
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
      <h3 className='text-2xl flex items-center gap-x-4'><LaptopMinimal /> Work Experience</h3>
      <ul>
        {experiences.map(item => (
          <li key={item.id} className='flex justify-between items-center border-b border-white/5 py-2'>
            <div>
              <p>{item.name}</p>
              <p className='text-white/50 text-sm'>{item.company}</p>
            </div>
            <p className='text-white/50 text-sm'>
              {item.time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkExperience