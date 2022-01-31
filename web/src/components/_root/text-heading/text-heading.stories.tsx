import React from "react"
import HeaderText from "."

export default {
  title: "Root/HeaderText",
  component: HeaderText,
}

export const H1 = () => (
  <div className="bg-bgColor">
    <HeaderText size="h1" color="text-green-400">
      Hi, I am Tasfia
    </HeaderText>
  </div>
)

export const H2 = () => (
  <div className="bg-bgColor">
    <HeaderText>Hi, I am Tasfia</HeaderText>
  </div>
)

export const H3 = () => (
  <div className="bg-bgColor">
    <HeaderText size="h3">Hi, I am Tasfia</HeaderText>
  </div>
)
