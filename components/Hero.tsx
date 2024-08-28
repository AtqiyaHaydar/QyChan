import React from 'react'
import Image from 'next/image'
import Me from '@/public/me2.jpg'
import { Badge } from './ui/badge'
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className='space-y-4'>
      <Image 
        src={Me}
        alt='My Photo'
        className='rounded-lg object-cover'
        width={100}
        height={100}
      />
      <div className='space-y-2'>
        <h1 className='text-3xl font-semibold flex items-center gap-x-4'>Atqiya Haydar <Sparkles /></h1>
        <p className='text-xl text-white/75'>Software Engineer & UI/UX Designer</p>
      </div>
      <div className='space-x-2'>
        <Link href='https://github.com/AtqiyaHaydar' target='_blank'>
          <Badge className='bg-white text-[#191919] hover:bg-white/75'>
            Github
          </Badge>
        </Link>
        <Link href='https://www.linkedin.com/in/atqiyahaydar/' target='_blank'>
          <Badge variant={"outline"} className='text-white bg-[#191919] hover:bg-white/25'>
            LinkedIn
          </Badge>
        </Link>
      </div>
    </div>
  )
}

export default Hero