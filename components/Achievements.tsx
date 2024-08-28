import React from 'react'
import { Award } from 'lucide-react';

const achievements = [
  {
    id: 1,
    name: "Finalist in INTUITIVA UI/UX Competition 2024",
  },
  {
    id: 2,
    name: "1st Place in Codefest Hackathon Competition 2023",
  },
  {
    id: 3,
    name: "Finalist in UI/UX Competition Technology Euphoria 2023",
  },
  {
    id: 4,
    name: "1st Place in UI/UX Design Competition Forkafest 3.0",
  },
]

const Achievements = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-2xl flex items-center gap-x-4'><Award /> Honor & Awards</h3>
      <ul className='space-y-2'>
        {achievements.map(item => (
          <li key={item.id} className='flex justify-between items-center bg-[#282828] px-4 py-2 rounded-sm'>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Achievements