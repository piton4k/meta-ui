import classNames from "classnames"
import React, { useState } from "react"
import style from "./Card.module.styl"

type Props = {
  className?: string
  expandable?: true
  title?: string,
  children?: React.ReactNode
}

export default function Card({ className, expandable, title, children, ...rest }: Props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const classes = classNames(style.card, className, expandable && style.isExpandable, { [style.isExpanded]: isExpanded })

  return <div className={classes} {...rest}>
    {title && <div className={style.title}>{title}</div>}

    <div className={style.body}>
      {expandable && <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
      >{isExpanded ? "Show less" : "Show more"}</button>}

      {children}
    </div>
  </div>
}
