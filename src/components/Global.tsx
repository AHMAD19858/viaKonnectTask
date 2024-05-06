'use client'
import React from 'react'
import Image from 'next/image';
import x from '../../public/socials/x.png'
import facebook from '../../public/socials/facebook.png'
import instagram from '../../public/socials/instagram.png'
function global() {

  return (
   <div className=' flex justify-center '>
        <p className=' font-black text-xl'>viaKonnect.<span className=' text-sm font-semibold'>news</span></p>
       <div className=' absolute right-0 flex gap-2 items-center mx-8 pt-2'>
       <Image
          className=' cursor-pointer '
          src={x}
          alt='/'
          layout='fixed'
          objectFit='contain'
            width={16}/>

              <Image
          className='cursor-pointer'
          src={facebook}
          alt='/'
          layout='fixed'
          objectFit='contain'
            width={16}/>

                 <Image
          className='cursor-pointer'
          src={instagram}
          alt='/'
          layout='fixed'
          objectFit='contain'
            width={16}/>
       </div>
      </div>
  )
}

export default global