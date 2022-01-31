import React, { ReactNode } from "react"

const colors = {
  dark: "text-gray-200",
  light: "text-black",
}

const weight = {
  h1: "font-bold",
  h2: "font-semibold",
  h3: "font-medium",
}

export interface Props {
  children: ReactNode
  size?: "h1" | "h2" | "h3"
  mode?: "light" | "dark"
  className?: string
  color?: string
}

function HeaderText({
  children,
  size = "h2",
  mode = "dark",
  className,
  color,
}: Props): JSX.Element {
  const tailWindClass =
    `${color || colors[mode]} ${weight[size]}` + `${className ? className : ""}`

  switch (size) {
    case "h1":
      return <h1 className={tailWindClass}> {children} </h1>
    case "h2":
      return <h2 className={tailWindClass}>{children}</h2>
    case "h3":
      return <h3 className={tailWindClass}> {children} </h3>
    default:
      return <h2 className={tailWindClass}> {children} </h2>
  }
}

export default HeaderText
