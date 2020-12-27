import classNames from "classnames"
import "./Toggle.styl"

type Value = string

type Props = {
  values: Value[]
  value?: Value
  onChange?: (value: Value | undefined) => void
  allowEmpty?: boolean
}

export default function Toggle({ values, value, onChange = () => {}, allowEmpty = false }: Props) {
  const onClick = (v: Value) => () => {
    if (v === value) {
      if (allowEmpty) onChange(undefined)
    }
    else onChange(v)
  }

  return <div className="toggle-group">
    {values.map(v => <span
      key={v}
      className={classNames("toggle", { "is-toggled": v === value})}
      onClick={onClick(v)}
    >{v}</span>)}
  </div>
}
