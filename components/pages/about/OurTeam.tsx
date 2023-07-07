'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { withAnimate } from '../../hoc'
import { textVariant, fadeIn } from '../../../core/utils/motion'
import { ourPeoples } from '../../../core/shared/constants'
import Image from 'next/image'
import { CustomButton } from '../../utils'
import { DisplayInfo } from '../../utils'
import { InfoProps } from '../../../core/shared/interface'

const OurTeam = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<InfoProps>()

  const closeModal = () => {
    setIsOpen(false);
  }

  const openModal = (info: InfoProps) => {
    setSelected(info);
    setIsOpen(true);
  }

  return (
    <>
      <div className="w-full text-white duration-200 bg-gradient-to-br from-pixel-black to-disruption padding-x padding-y hover:bg-gradient-to-tr">
        <div>
          <motion.div variants={textVariant(0.1)}>
            <p className="text-2xl">Meet Our Team</p>
            <h1>Our Team</h1>
          </motion.div>
        </div>
        <div className='w-full gap-4 space-y-4 padding-y columns-1 md:columns-2 lg:columns-3 xlg:columns-4'>
          {
            ourPeoples.map((p, index) => (
              <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} key={p.info.name} className="rounded-lg break-inside-avoid">
                <div className={`h-[${p.image.height}] w-[${p.image.width}] border-2 rounded-lg duration-200 hover:scale-105 shadow-2xl relative group ease-in-out`}>
                  <div className="absolute top-0 left-0 hidden w-full h-full rounded-lg bg-black/60 group-hover:block " />
                  <Image src={p.image.url} alt={p.info.name} height={p.image.height} width={p.image.width} className={' object-cover rounded-lg'} />
                  <CustomButton containerStyles='py-2 bg-inspiration rounded-lg hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 duration-200 ease-in-out' title="View Bio" textStyles=' font-bold text-software-grey hover:text-white' handleClick={() => openModal(p.info)} />
                </div>
              </motion.div>
            ))
          }

        </div>
      </div>
      <DisplayInfo isOpen={isOpen} closeModal={closeModal} info={selected} />
    </>
  )
}

export default withAnimate(OurTeam)