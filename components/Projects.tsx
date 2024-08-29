import React from 'react'
import { Atom } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: "SEASalon",
    type: "Website",
    href: "https://github.com/AtqiyaHaydar/SEASalon",
    description: "A salon management app developed as a submission for Compfest SEA, selected as one of the top 20 participants from over 1000 registrants, showcasing exceptional functionality and design."
  },
  {
    id: 2,
    name: "INFEST 2024 Website",
    type: "Website",
    href: "https://infest-2024.vercel.app/",
    description: "A comprehensive website created for INFEST 2024, Indonesia's largest investment festival organized by KSEP ITB, designed to enhance user engagement and provide detailed event information."
  },
  {
    id: 3,
    name: "WikiRace Solver",
    type: "Website",
    href: "https://github.com/AtqiyaHaydar/Tubes2_PergiBahasa",
    description: "A strategic algorithm project submitted for 'Tugas Besar 2 IF2211 Strategi Algoritma,' this website offers a unique solution to WikiRace challenges, demonstrating problem-solving skills and algorithmic expertise."
  },
  {
    id: 4,
    name: "SRE ITB Website Design",
    type: "Design",
    href: "https://www.figma.com/design/7ZxQYz5u76LPvSIiQchcrY/SRE-ITB-IT-Development?node-id=584-132&t=QcFRqLWUphrVnd0b-1",
    description: "A professional and visually engaging design for the SRE ITB website, focusing on modern aesthetics and user-friendly navigation to enhance the user experience for ITB’s internal stakeholders."
  },
  {
    id: 5,
    name: "SugarRush",
    type: "Design",
    href: "https://www.figma.com/design/AKSiZ4hEjoWdmO5CskgbJE/SugarRush---Training-1-KSEP-Operations?node-id=0-1&t=HCnbt8hxXIWXeomA-1",
    description: "A candy-themed website design created for training KSEP operations members, blending playful elements with educational content to engage and inspire new members."
  },
  {
    id: 6,
    name: "Blissify",
    type: "Design",
    href: "https://www.figma.com/design/CF7W83yUCMr2PSmt75o1UK/Blissify?node-id=0-1&t=yOvr72tFonTLlJKY-1",
    description: "An innovative mental health care app designed to provide users with accessible and supportive mental wellness tools, prioritizing user experience and emotional well-being."
  }
]

const Projects = () => {
  return (
    <div data-aos="fade-up" className='space-y-4'>
      <h3 className='text-2xl flex items-center gap-x-4'><Atom /> Projects</h3>
      <ul className='flex flex-col gap-y-2'>
        {projects.map(item => (
          <li key={item.id} className='flex items-center justify-between w-full bg-[#282828] gap-x-6 rounded-sm px-4 py-2' data-aos="fade-up">
            <div>
              <p className='text-sm md:text-[16px]'>{item.name}</p>
              <p className='text-white/50 text-sm'>{item.description}</p>
            </div>
            <Link href={item.href} target='_blank' className='text-white/50'>
              <ExternalLink className='h-5 w-5' />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects