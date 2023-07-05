import React from 'react'
import { FoundersCardProps } from '../../core/shared/interface'
import { AnimatePresence, motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { fadeIn, slideIn, textVariant } from '../../core/utils/motion'
import Image from 'next/image'
import { CustomButton } from '../utils'


const FoundersCard = (Props: FoundersCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", Props.index * 0.5, 0.75)} className=" md:w-[50%] w-full">
      <Tilt className="w-full p-4 bg-white border shadow-lg group rounded-2xl border-t-welcoming border-r-inspiration border-l-insightful border-b-disruption">
        {/* <div className="absolute top-0 -z-[5] -right-3 w-[101%] h-[103%] rounded-[2rem] bg-pixel-black rounded-br-3xl" /> */}
        <div className='relative w-full h-[400px]'>
          <div className='absolute top-0 left-0 z-10 hidden w-full h-full rounded-md group-hover:block bg-pixel-black/60' />
          {/* image */}
          <Image src={"/assets/img/20230317_113155 (1).jpg"} alt="founders_img" fill className="object-cover rounded-md" />
          {/* content */}
          <div
            className=" group-hover:z-20 group-hover:h-[10rem] duration-300 ease-in-out hidden md:block absolute -z-20 h-[0rem] transform bg-white/80 bottom-0 left-0 w-full border rounded-b-md p-2">
            <div className="invisible group-hover:delay-100 group-hover:visible">
              <p className="font-bold">{Props.name}</p>
              <h1 className="text-3xl">{Props.position}</h1>
              <p className="truncate">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sequi eaque illo ipsam dolorem modi a officia optio maiores, sit at exercitationem neque laboriosam dolore autem, dignissimos error adipisci sint deserunt culpa similique deleniti quia. Incidunt temporibus eaque adipisci ab facilis eos odit porro facere consequatur fugiat quod provident voluptatum impedit, neque dolorum. Aperiam repellat, atque inventore dolores consequatur rerum laboriosam voluptatem expedita explicabo voluptas aspernatur id ratione hic vel fugiat odit ut labore nesciunt error qui. Quo corrupti ipsam dignissimos maxime, accusantium consectetur, odit dolorem tenetur ad rerum perspiciatis exercitationem, sequi quis sed amet ducimus dolorum. Voluptate, quos mollitia!</p>
              <CustomButton containerStyles={'bg-inspiration rounded-md mt-2 ease-in-out py-2 hover:scale-105'} title="Read More" />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}

export default FoundersCard