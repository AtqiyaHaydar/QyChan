import React from 'react'
import { Award } from 'lucide-react';

const achievements = [
  {
    id: 1,
    name: "Finalist in INTUITIVA UI/UX Competition 2024",
    description: "Secured a top 10 position out of 157 teams by developing an innovative mental health app featuring an immersive and user-centric interface."
  },
  {
    id: 2,
    name: "1st Place in Codefest Hackathon Competition 2023",
    description: "Achieved first place by creating a cutting-edge digital signature platform designed to verify document authenticity with high security and ease of use."
  },
  {
    id: 3,
    name: "Finalist in UI/UX Competition Technology Euphoria 2023",
    description: "Recognized as a finalist for designing a comprehensive healthcare app focused on enhancing patient experience and accessibility."
  },
  {
    id: 4,
    name: "1st Place in UI/UX Design Competition Forkafest 3.0",
    description: "Won first place by designing an interactive library application, showcasing outstanding skills in creating engaging and user-friendly interfaces."
  },
]

const Achievements = () => {
  return (
    <div data-aos="fade-up" className='space-y-4'>
      <h3 className='text-2xl flex items-center gap-x-4'><Award /> Honor & Awards</h3>
      <ul className='space-y-2'>
        {achievements.map(item => (
          <li key={item.id} className='flex flex-col justify-between border-b border-white/5 py-2' data-aos="fade-up">
            <p>{item.name}</p>
            <p className='text-white/50 text-sm'>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Achievements