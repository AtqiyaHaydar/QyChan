import React from 'react'
import { Atom } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    name: "SEASalon",
    type: "Website",
    href: "https://github.com/AtqiyaHaydar/SEASalon",
  },
  {
    id: 2,
    name: "INFEST 2024 Website",
    type: "Website" ,
    href: "https://infest-2024.vercel.app/",
  },
  {
    id: 3,
    name: "WikiRace Solver",
    type: "Website",
    href: "https://github.com/AtqiyaHaydar/Tubes2_PergiBahasa",
  },
  {
    id: 4,
    name: "SRE ITB Website Design",
    type: "Design",
    href: "https://www.figma.com/design/7ZxQYz5u76LPvSIiQchcrY/SRE-ITB-IT-Development?node-id=584-132&t=QcFRqLWUphrVnd0b-1",
  },
  {
    id: 5,
    name: "SugarRush",
    type: "Design",
    href: "https://www.figma.com/design/AKSiZ4hEjoWdmO5CskgbJE/SugarRush---Training-1-KSEP-Operations?node-id=0-1&t=HCnbt8hxXIWXeomA-1",
  },
  {
    id: 6,
    name: "Blissify",
    type: "Design",
    href: "https://www.figma.com/design/CF7W83yUCMr2PSmt75o1UK/Blissify?node-id=0-1&t=yOvr72tFonTLlJKY-1",
  }
]

const Projects = () => {
  return (
    <div className='space-y-4'>
      <h3 className='text-2xl flex items-center gap-x-4'><Atom /> Projects</h3>
      <ul className='flex flex-col gap-y-2'>
        {projects.map(item => (
          <li key={item.id} className='flex items-center justify-between w-full bg-[#282828] rounded-sm px-4 py-2 '>
            <div className='flex items-center gap-x-2'>
              <Badge className={cn(
                'text-white',
                item.type === 'Website' && 'bg-gradient-to-br from-blue-500 to-green-500 border-none',
                item.type === 'Design' && 'bg-gradient-to-br from-purple-500 to-pink-500 border-none'
              )}>{item.type}</Badge>
              <p className='text-sm md:text-[16px]'>{item.name}</p>
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