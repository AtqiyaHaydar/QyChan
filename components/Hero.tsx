import React from 'react'
import Image from 'next/image'
import Me from '@/public/me3.jpg'
import { Badge } from './ui/badge'
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='space-y-4' data-aos="fade-down">
      <Image 
        src={Me}
        alt='My Photo'
        className='rounded-lg object-cover'
        width={100}
        height={100}
      />
      <div className='space-y-2'>
        <h1 className='text-3xl font-semibold'>Atqiya Haydar </h1>
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
        <Link href='https://drive.google.com/file/d/14gO1rJypWcWjzUy7WOTY-LjNZUAyiYvJ/view?usp=sharing' target='_blank'>
          <Badge variant={"secondary"} className='text-white bg-[#191919] hover:bg-white/25 underline-offset-2'>
            Curriculum Vitae
          </Badge>
        </Link>
      </div>
    </div>
  )
}

export default Hero