import React from "react"
import Card from "."

export default {
  title: "Components/Card",
  component: Card,
}

export const CardStory = () => (
  <>
    <Card
      title="Test Project"
      shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
      techStack={["sanity", "gatsby"]}
    />
  </>
)
