'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { logo } from '../../public/assets/img'
import { footerLinks } from '../../core/shared/constants'
import { motion } from 'framer-motion'
import { slideIn } from '../../core/utils/motion'

const Footer = () => {
  return (
    <footer className='flex flex-col mt-5 text-white bg-pixel-black '>
      <div className='flex flex-wrap justify-between gap-5 py-10 max-md:flex-col '>
        {/* left content */}
        <div className='flex flex-col items-start justify-start gap-6 '>
          <motion.div initial='hidden'
            whileInView={"show"}
            variants={slideIn("left", "spring", 0, 2)}
            className='w-[50%] h-10 padding-x bg-disruption flex items-center justify-center rounded-r-sm'>
            <Image src={logo} alt='logo' width={118} height={18} className='object-contain' />
          </motion.div>
          <div className='padding-x' >
            <p>Next Revolution in Software Engineering</p>
            <div className='flex flex-wrap justify-between mt-10 text-disruption'>
              <div className='flex flex-col '>
                <p className='font-bold '>Email us</p>
                <p>contact@turntabl.io</p>
              </div>
              <div>
                <p className='font-bold '>Call us</p>
                <p>23348789987712</p>
              </div>
            </div>
          </div>
        </div>
        {/* right conten */}
        <div className='flex flex-wrap flex-1 w-full gap-10 padding-x md:justify-end max-md:mt-10'>
          {footerLinks.map(link => (
            <div key={link.title} className=' flex flex-col gap-2 min-w-[170px]'>
              <h3 className='font-bold'>
                {link.title}
              </h3>
              {link.title === "Socials" ? link.links.map(item => (
                <Link href={""} onClick={() => window.open(item.url, "_blank")} key={item.title} className='hover:text-inspiration'>
                  {item.title}
                </Link>
              )) : link.links.map(item => (
                <Link href={item.url} key={item.title} className='hover:text-inspiration'>
                  {item.title}
                </Link>
              ))}

            </div>
          ))}
        </div>
      </div>
      {/* copyright */}
      <div className='flex flex-wrap items-center justify-between py-10 mt-10 border-t border-gray-100 padding-x'>
        <p>&copy;2023 Turntabl. All Rights Reserved</p>
        <div className='flex justify-center flex-1 gap-10 sm:justify-end max-sm:mt-4'>
          <Link href={"/"} className='hover:text-inspiration'>
            Privacy Policy
          </Link>
          <Link href={"/"} className='hover:text-inspiration'>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer