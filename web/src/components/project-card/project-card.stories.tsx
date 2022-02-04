import React from "react"
import Card from "."

export default {
  title: "Components/Card",
  component: Card,
}

export const CardStory = () => (
  <div className="bg-bgColor p-10">
    <Card
      title="Test Project"
      shortDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
      techStack={["sanity", "gatsby"]}
    />
  </div>
)
