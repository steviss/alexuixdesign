import type { HTMLAttributes, PropsWithChildren } from 'react'

export type SectionContainerProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  variant?: 'project'
  containerClass?: string
  disableHeight?: boolean
}
