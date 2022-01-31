import React from "react"
import PageSection from "@/components/_root/page-section"
import Container from "@/components/_root/container"
import HeaderText from "@/components/_root/text-heading"

const Hero = () => {
  return (
    <PageSection>
      <Container>
        <div>
          <HeaderText size="h3" color="text-primary">
            Hi,
          </HeaderText>
          <HeaderText size="h1">I'm Tasfia Islam,</HeaderText>
          <HeaderText color="text-gray-300">Web Developer</HeaderText>
          <p className="w-4/5 py-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </Container>
    </PageSection>
  )
}

export default Hero
