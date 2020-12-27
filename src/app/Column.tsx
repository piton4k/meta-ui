import React from "react"
import style from "./Column.module.styl"

type Props = {
  children?: React.ReactNode
}

export function Column({ children }: Props) {
  return <div className={style.column}>
    {children}
  </div>
}

export function Columns({ children }: Props) {
  return <div className={style.columns}>
    {children}
  </div>
}
