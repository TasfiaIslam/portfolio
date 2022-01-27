import React, { ReactNode } from "react"
import { JsxEmit } from "typescript"

interface Props {
  type?: "primary" | "secondary" | "text"
  children: ReactNode
  onClick?: () => void
  loading?: boolean
  block?: boolean
  href?: string
  target?: string
  className?: string
}

const buttonChildrenStyle =
  "flex items-center justify-center gap-2 whitespace-nowrap"

const Button = ({
  type,
  children,
  onClick,
  loading,
  block,
  href,
  target,
  className = "",
}: Props): JSX.Element => {
  let tailWindClass = `${className} text-center relative whitespace-nowrap p-3 font-firaSans tracking-wide`
  tailWindClass += ` rounded-md bg-bgColor text-primary border-2 border-primary`

  return (
    <button className={tailWindClass} onClick={onClick}>
      <div className={buttonChildrenStyle}>
        {loading ? "loading..." : children}
      </div>
    </button>
  )
}

export default Button
