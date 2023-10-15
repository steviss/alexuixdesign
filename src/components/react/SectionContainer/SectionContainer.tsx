import classNames from 'classnames'
import type { FC } from 'react'

import type { SectionContainerProps } from './SectionContainer.interface'

const SectionContainer: FC<SectionContainerProps> = ({ disableHeight, children, className, variant, containerClass, ...props }) => {
  return (
    <section {...props} className={classNames('w-full', className)}>
      <div
        className={classNames(
          'container mx-auto flex w-full flex-col md:py-0',
          { 'justify-center px-5 md:px-10 lg:px-12': variant !== 'project' },
          { 'md:min-h-screen': !disableHeight },
          containerClass,
        )}
      >
        {children}
      </div>
    </section>
  )
}
export default SectionContainer
