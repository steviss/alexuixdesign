import classNames from 'classnames'
import type { FC } from 'react'

import type { ToolBeltItemProps } from './ToolBeltItem.interface'

const ToolBeltItem: FC<ToolBeltItemProps> = ({ label, className, ...props }) => {
  return (
    <span {...props} className={classNames('font-nunito text-2xl font-black text-primary md:text-4xl', className)}>
      {label}
    </span>
  )
}

export default ToolBeltItem
