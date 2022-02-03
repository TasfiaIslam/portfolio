import React from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import HeaderText from "../_root/text-heading"

interface Props {
  title: string
  image?: string | IGatsbyImageData
  shortDescription?: string
  gitLink?: string
  webLink?: string
  techStack: string[]
  createDate?: Date
}

const ProjectCard = ({
  title,
  image,
  shortDescription,
  gitLink,
  webLink,
  techStack,
  createDate,
}: Props): JSX.Element => {
  return (
    <div className="rounded-md shadow-lg bg-gray-400 p-4">
      <HeaderText size="h4" className="py-3">
        {title}
      </HeaderText>
      <p className="pb-6">{shortDescription}</p>
      <div className="flex space-x-4">
        {techStack.map(technology => (
          <p>{technology}</p>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
