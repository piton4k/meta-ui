import classNames from "classnames"
import React from "react"
import Control from "./Control"

type Props = {
  errors?: string[]
  children?: React.ReactNode
}

export default function Field({ errors, children }: Props) {
  const hasErrors = errors != null && errors.length !== 0

  return <Control className={classNames({ "is-danger": hasErrors })}>
    {children}
    {hasErrors && <ul className="messages">
      {errors && errors.map((error, i) => <li key={i}>{error}</li>)}
    </ul>}
  </Control>
}
