import React from 'react'
import { FoundersCardProps } from '../../core/shared/interface'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { fadeIn } from '../../core/utils/motion'


const FoundersCard = (Props: FoundersCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", Props.index * 0.5, 0.75)}>
      <Tilt className=" w-full bg-white shadow-lg group rounded-2xl border border-t-welcoming border-r-inspiration border-l-insightful border-b-disruption p-4 sm:w-[400px]">
        {/* <div className="absolute top-0 -z-[5] -right-3 w-[101%] h-[103%] rounded-[2rem] bg-pixel-black rounded-br-3xl" /> */}
        <div className=' w-full h-[230px] bg-inspiration'>
          helllo
        </div>
        <div className="mt-2">
          <h2 className="font-bold">{Props.name}</h2>
          <h3 className="font-semibold text-inspiration">{Props.position}</h3>
        </div>
      </Tilt>
    </motion.div>
  )
}

export default FoundersCard