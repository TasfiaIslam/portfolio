import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const ProjectContainer = ({ children }: Props) => {
  return <div>{children}</div>
}
