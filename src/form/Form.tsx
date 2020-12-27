import React from "react"

type Props = {
  children?: React.ReactNode
}

export default function Form({ children, ...rest }: Props) {
  return <form {...rest}>
    {children}
  </form>
}
