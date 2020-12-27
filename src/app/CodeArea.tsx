import React from "react"
import style from "./Code.module.styl"

type Props = {
  children?: React.ReactNode
}

export default function CodeArea({ children }: Props) {
  return <textarea className={style.code}>
    {children}
  </textarea>
}
