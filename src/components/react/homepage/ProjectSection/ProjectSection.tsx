import type { FC } from 'react'

import type { ProjectSectionProps } from './ProjectSection.interface'

const ProjectSection: FC<ProjectSectionProps> = ({ projectImage, title, slug, subtitle, roles }) => {
  const handleClick = () => (window.location.href = slug)
  return (
    <section className="my-12">
      <div className="container mx-auto">
        <div
          onClick={() => handleClick()}
          className="cursor-pointer flex flex-col gap-2 md:gap-0 justify-end md:relative px-5 md:px-10 lg:px-12"
        >
          <div className="w-full h-full opacity-50">
            <img src={projectImage?.asset.url} className="w-full h-auto object-cover block" />
          </div>
          <div className="md:absolute w-full h-full bottom-0 justify-end items-start px-0 md:px-16 lg:px-20 left-0 flex flex-col gap-2 md:gap-8 md:pb-10 text-white z-10">
            <h3 className="md:text-3xl text-2xl lg:text-4xl font-bold ">
              <a>{title}</a>
            </h3>
            <h4 className="text-lg md:text-xl lg:text-2xl font-medium max-w-[370px]">{subtitle}</h4>
            <div className="flex flex-row gap-4 ">
              <ul className="flex flex-row flex-wrap gap-3 md:gap-6 justify-start">
                {roles.map((role: string) => {
                  return (
                    <li key={role}>
                      <span className="text-xs text-center md:text-sm border border-white rounded-full py-2 px-4 md:py-3 md:px-6">
                        {role}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProjectSection
