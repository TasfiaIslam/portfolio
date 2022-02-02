import React from "react"
import PageSection from "@/components/_root/page-section"
import Container from "@/components/_root/container"
import HeaderText from "@/components/_root/text-heading"

interface Props {
  title: string
  sub_header?: string
  subtitle?: string
  description?: string
}

const Hero = ({ title, sub_header, subtitle, description }: Props) => {
  return (
    <PageSection>
      <Container>
        <div>
          <HeaderText size="h3" color="text-primary">
            {sub_header}
          </HeaderText>
          <HeaderText size="h1">{title}</HeaderText>
          <HeaderText color="text-gray-300">{subtitle}</HeaderText>
          <p className="w-4/5 py-4 text-gray-400">{description}</p>
        </div>
      </Container>
    </PageSection>
  )
}

export default Hero
