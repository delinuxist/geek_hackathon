'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { withAnimate } from '../../hoc'
import { textVariant } from '../../../core/utils/motion'

const OurTeam = () => {
  return (
    <div className="w-full h-screen text-white bg-gradient-to-br from-pixel-black to-disruption padding-x padding-y">
      <div>
        <motion.div variants={textVariant(0.1)}>
          <p className="text-2xl">Meet Our Team</p>
          <h1>Our Team</h1>
        </motion.div>
      </div>
      <div className='padding-y padding-x lg:columns-5'>

      </div>
    </div>
  )
}

export default withAnimate(OurTeam)