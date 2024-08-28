import React from 'react'
import Image from 'next/image'
import Me from '@/public/me.jpg'
import { Badge } from './ui/badge'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <Image 
        src={Me}
        alt='My Photo'
        className='rounded-lg object-cover'
        width={100}
        height={100}
      />
      <div className='space-y-2'>
        <h1 className='text-3xl'>Atqiya Haydar</h1>
        <p className='text-xl text-white/75'>Software Engineer & Product Designer (UI/UX)</p>
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