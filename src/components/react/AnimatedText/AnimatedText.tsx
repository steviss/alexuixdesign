import { motion } from 'framer-motion'
import type { FC } from 'react'

import type { AnimatedTextProps } from 'src/components/react/AnimatedText/AnimatedText.interface'

const AnimatedText: FC<AnimatedTextProps> = ({ text }) => {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }
  return (
    <motion.p
      className="flex max-w-screen-lg flex-wrap gap-4 text-5xl font-medium uppercase text-white md:text-7xl lg:text-[115px] lg:leading-[115px]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.p>
  )
}

export default AnimatedText
