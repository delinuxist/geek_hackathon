'use client'
import { useEffect, useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { ProgrammingEffect, WebDevelopment } from '../../public/assets/json'
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion"
import { ThumbsUp } from '../../public/assets/img'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { histories } from '../../core/shared/constants'
import { HistoryCard } from '../card'

const AboutPage = () => {
  const typedRef = useRef(null);

  const [text] = useTypewriter({
    words: ["Providing", "Innovative", "Solutions", "To Businesses"],
    loop: true,
    delaySpeed: 2000,
  })


  return (
    <section className='w-[100%] mt-10 text-pixel-black bg-software-grey'>
      {/* hero */}
      <div className='padding-x w-[100%] min-h-screen flex flex-col gap-10 md:grid grid-cols-5'>
        <div className="w-[100%] col-span-2 flex flex-col gap-3 text-center">
          <div className="mt-10 md:mt-20" />
          <h1 className={`w-[100%]`}>Software Agency</h1>
          <h1>{text}</h1>
        </div>
        <div className='col-span-3 '>
          <Lottie onComplete={() => {
          }} animationData={ProgrammingEffect} />
        </div>
      </div>
      {/* Mission */}
      <section className="relative text-white bg-pixel-black">
        <div className="w-[100%] flex flex-wrap padding-x padding-y justify-between gap-10">
          <motion.div>
            <p className="text-2xl">Company&apos;s Mission</p>
            <h1>Mission</h1>
          </motion.div>
          <div className={'bg-white h-[20rem] w-[40%]'}>

          </div>
        </div>
      </section>
      {/* History */}
      <section className="relative text-black bg-white">
        <div className="w-[100%] padding-x padding-y">
          <motion.div>
            <p className="text-2xl">Company&apos;s History</p>
            <h1>History</h1>
          </motion.div>
          <div className="flex flex-col mt-20">
            <VerticalTimeline>
              {
                histories.map((history) => (
                  <HistoryCard key={history.title} />
                ))
              }
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutPage