import React from 'react'
import { BookOpenCheck } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Alisha Listya",
    role: "Chief Operating Officer at Datare",
    testimonial: `"Atqiya has high spirit in increasing Datare's visual UI/UX. He had profound understanding of both user interface design and user experience, creating something new and exciting in our project. Along with adding value through the innovative designs, Atqiya managed our very tight deadlines. I am confident that he will continue to drive excellence in any future role he undertake. I recommend for any position, especially those that seeks innovative and creative ideas."`,
  }
]

const Testimonials = () => {
  return (
    <div className='space-y-4' data-aos='fade-up'>
      <h3 className='text-2xl flex items-center gap-x-4'><BookOpenCheck /> Testimonials</h3>
      <ul>
        {testimonials.map(item => (
          <li key={item.id} className='flex flex-col justify-between border-2 border-white rounded-lg p-4 gap-y-4' data-aos="fade-up" >
            <div>
              <p>{item.name}</p>
              <p className='text-sm'>{item.role}</p>
            </div>
            <p className='text-white/75 text-sm'>
              {item.testimonial}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Testimonials