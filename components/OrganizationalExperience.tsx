import React from 'react'
import { UsersRound } from 'lucide-react';

const experiences = [
  {
    id: 1,
    name: "Frontend Web Developer",
    company: "OSKM ITB 2024",
    time: "Aug. 2024 - Sep. 2024"
  },
  {
    id: 2,
    name: "Chief Technology Officer",
    company: "Kabinet KM ITB",
    time: "Jun. 2024 - Present",
  },
  {
    id: 3,
    name: "Director of Operations",
    company: "Kelompok Studi Ekonomi dan Pasar Modal ITB",
    time: "Mar. 2024 - Jan. 2024"
  },
  {
    id: 4,
    name: "UI/UX Designer",
    company: "Skill Up",
    time: "Mar. 2024 - Jun. 2024"
  },
  {
    id: 5,
    name: "Frontend Web Developer & UI/UX Designer",
    company: "Society of Renewable Energy ITB",
    time: "Jun. 2023 - Jun. 2024"
  },
  {
    id: 6,
    name: "UI/UX Designer",
    company: "ITB Fair 2024",
    time: "Jun. 2024 - May. 2024"
  },
  {
    id: 7,
    name: "UI/UX Designer",
    company: "TEDxITB",
    time: "Aug. 2024 - Jan. 2024"
  },
  {
    id: 8,
    name: "Frontend Web Developer",
    company: "Kelompok Studi Ekonomi dan Pasar Modal ITB",
    time: "Mar. 2023 - Jan. 2024"
  },
  {
    id: 9,
    name: "Frontend Web Developer & UI/UX Designer",
    company: "Parade Wisuda ITB",
    time: "Sep. 2023 - Oct. 2023"
  },
]

const OrganizationalExperience = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-2xl flex items-center gap-x-4'><UsersRound /> Experience</h3>
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

export default OrganizationalExperience