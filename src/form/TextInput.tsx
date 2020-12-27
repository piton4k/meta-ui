import React from "react"
import "./TextInput.styl"

type Props = {
  value?: string
  onChange?: (value: string) => void
} & Omit<React.HTMLAttributes<HTMLInputElement>, "onChange">

export default function TextInput({ value, onChange = () => {}, ...restProps }: Props) {
  return <div>
    <input
      type="text"
      className="text-input"
      value={value}
      onChange={e => onChange(e.target.value)}
      {...restProps}
    />
  </div>
}
