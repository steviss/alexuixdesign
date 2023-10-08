import { useStore } from '@nanostores/react'
import { AnimatePresence, motion } from 'framer-motion'
import type { FC } from 'react'

import { isMenuOpen } from 'src/stores'

import { MOBILE_MENU_ANIMATION } from './MobileMenu.consts'
import type { MobileMenuProps } from './MobileMenu.interface'

const MobileMenu: FC<MobileMenuProps> = ({ children }) => {
  const menuState = useStore(isMenuOpen)
  return (
    <AnimatePresence>
      {menuState && (
        <motion.div
          key="mobile-menu"
          animate="open"
          initial="close"
          exit="close"
          transition={{ y: { type: 'spring', stiffness: 300, damping: 30 } }}
          variants={MOBILE_MENU_ANIMATION}
          className="max-w-screen fixed bottom-0 left-0 right-0 z-30 flex max-h-screen flex-col bg-black shadow-md shadow-black md:hidden"
        >
          <nav className="flex flex-col py-4">
            <ul className="flex list-none flex-col">{children}</ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
