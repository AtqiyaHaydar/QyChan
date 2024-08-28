import React from 'react'
import { Atom } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "",
    type: "",
  }
]

const Projects = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-2xl flex items-center gap-x-4'><Atom /> Projects</h3>
      <ul className='space-y-2'>
        {projects.map(item => (
          <li key={item.id} className='flex justify-between items-center bg-[#282828] px-4 py-2 rounded-sm'>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects