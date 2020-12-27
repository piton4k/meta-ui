import classNames from "classnames"
import React from "react"
import "./Control.styl"

type Props = {
  className?: string
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export default function Control({ className, children, ...rest }: Props) {
  return <div className={classNames("control", className)} {...rest}>
    {children}
  </div>
}
