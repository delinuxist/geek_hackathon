import React from 'react'
import { Hero, History, Mission, Founders } from '../../components/pages/about'

export default function About() {
  return (
    <main className='relative w-full bg-software-grey'>
      <Hero />
      <Mission />
      <History />
      <Founders />
    </main>
  )
}
