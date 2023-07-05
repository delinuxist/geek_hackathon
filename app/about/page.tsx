import React from 'react'
import { Hero, History, Mission, Founders } from '../../components/pages/about'
import AnimatePresenceWrapper from '../../components/utils/AnimatePresenceWrapper'

export default function About() {
  return (
    <AnimatePresenceWrapper>
      <main className='relative w-full mt-10 bg-software-grey'>
        <Hero />
        <Mission />
        <History />
        <Founders />
      </main>
    </AnimatePresenceWrapper>
  )
}
