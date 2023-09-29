import type { FC } from 'react'

import { SectionContainer } from 'src/components/react'

import type { ProjectSectionProps } from './ProjectSection.interface'

const ProjectSection: FC<ProjectSectionProps> = ({ projectImage, title, slug, subtitle, roles }) => {
  const handleClick = () => (window.location.href = slug)
  return (
    <SectionContainer variant="project" className="my-12">
      <div
        onClick={() => handleClick()}
        className="flex cursor-pointer flex-col justify-end gap-2 px-5 md:relative md:gap-0 md:px-10 lg:px-12"
      >
        <div className="h-full w-full opacity-50">
          <img src={projectImage?.asset.url} className="block h-auto w-full object-cover" />
        </div>
        <div className="bottom-0 left-0 z-10 flex h-full w-full flex-col items-start justify-end gap-2 px-0 text-white md:absolute md:gap-8 md:px-16 md:pb-10 lg:px-20">
          <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl ">
            <a>{title}</a>
          </h3>
          <h4 className="max-w-sm text-lg font-medium md:text-xl lg:text-2xl">{subtitle}</h4>
          <div className="flex flex-row gap-4 ">
            <ul className="flex flex-row flex-wrap justify-start gap-3 md:gap-6">
              {roles.map((role: string) => {
                return (
                  <li key={role}>
                    <span className="rounded-full border border-white px-4 py-2 text-center text-xs md:px-6 md:py-3 md:text-sm">
                      {role}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
export default ProjectSection
