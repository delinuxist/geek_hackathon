'use client'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import TransitionEffect from './TransitionEffect'

const AnimatePresenceWrapper = ({ children }:
  { children: React.ReactNode }) => {
  return (
    <>
      <AnimatePresence mode='wait'>
        <TransitionEffect />
        {children}
      </AnimatePresence>
    </>
  )
}

export default AnimatePresenceWrapper