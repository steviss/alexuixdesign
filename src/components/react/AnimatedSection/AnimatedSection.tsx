import { motion } from 'framer-motion'

const AnimatedSection = () => {
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
      className="max-w-screen-xl text-4xl font-medium text-gray md:pr-20 md:text-6xl lg:text-[80px] lg:leading-[100px]"
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      <motion.span variants={child}>
        Hi, I&apos;am Alex,
        <span className="text-secondary"> UI/UX Designer </span>
      </motion.span>
      <br className="hidden md:flex" />
      <motion.span variants={child}>Let&apos;s bring freshnes and fun to</motion.span>
      <br className="hidden md:flex" />
      <motion.span variants={child}>your project! </motion.span>
    </motion.p>
  )
}

export default AnimatedSection
