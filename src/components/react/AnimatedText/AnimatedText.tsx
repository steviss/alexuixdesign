import { motion } from 'framer-motion'

const AnimatedText = () => {
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
      className="max-w-screen-lg text-5xl font-bold uppercase text-white md:text-7xl lg:text-[115px] lg:leading-[115px]"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.span variants={child}>Turning ideas</motion.span>
      <br />
      <motion.span variants={child}>Into digital</motion.span>
      <br />
      <motion.span variants={child}>Dreams</motion.span>
    </motion.p>
  )
}

export default AnimatedText
