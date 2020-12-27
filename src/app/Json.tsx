import React from "react"
import Code from "./Code"

type Props = {
  indent?: number
  children?: React.ReactNode
}

export default function Json({ children, indent = 4 }: Props) {
  return <Code>{JSON.stringify(children, null, indent)}</Code>
}
