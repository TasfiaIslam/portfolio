import React from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"
import HeaderText from "@/components/_root/text-heading"
import { CardContainer, CardDescription, CardFooter } from "./styled"

interface Props {
  title: string
  image?: string | IGatsbyImageData
  shortDescription?: string
  gitLink?: string
  webLink?: string
  techStack: {
    technology: string
  }[]
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
    <CardContainer>
      <HeaderText size="h4" className="py-3">
        {title}
      </HeaderText>
      <CardDescription>{shortDescription}</CardDescription>
      <CardFooter>
        {techStack?.map(tech => (
          <p>{tech.technology}</p>
        ))}
      </CardFooter>
    </CardContainer>
  )
}

export default ProjectCard
