import React from "react"
import style from "./Code.module.styl"

type Props = {
  children?: React.ReactNode
}

export default function Code({ children }: Props) {
  return <pre className={style.code}>
    <code>
      {children}
    </code>
  </pre>
}
