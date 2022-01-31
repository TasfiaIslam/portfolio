import React from "react"
import PageSection from "."

export default {
  title: "Root/PageSection",
  component: PageSection,
}

export const Light = () => (
  <>
    <PageSection mode="light" paddingAmount="large">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </PageSection>
    <PageSection mode="light" paddingAmount="small">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </PageSection>
  </>
)

export const Dark = () => (
  <>
    <PageSection mode="dark" paddingAmount="large" className="text-white">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </PageSection>
    <PageSection mode="dark" paddingAmount="small" className="text-white">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </PageSection>
  </>
)

export const Gradient = () => (
  <>
    <PageSection mode="gradient" paddingAmount="large">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </PageSection>
    <PageSection mode="gradient" paddingAmount="small">
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </PageSection>
  </>
)
