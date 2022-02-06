import React from "react"
import Project from "."

export default {
  title: "Components/Project",
  component: Project,
}

const project = {
  node: {
    title: "Test Project",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    techStack: [{ technology: "sanity" }, { technology: "gatsby" }],
  },
}

const projects = Array(10)
  .fill(10)
  .map(() => project)

export const ProjectStory = () => (
  <div className="bg-bgColor p-10">
    <Project projects={projects} />
  </div>
)
