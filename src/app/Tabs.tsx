import React from "react"
import Toggle from "../form/Toggle"
import { whenDefined } from "../util"
import { createUseStorage } from "../util/storage"
import style from "./Tabs.module.styl"

type Props = {
  tabs: string[]
  render: (tab: string) => React.ReactNode
}

const [, useStorage] = createUseStorage<string>("currentTab")

export default function Tabs({ tabs, render }: Props) {
  const [selectedTab, setSelectedTab] = useStorage(tabs[0])

  return <>
    <div className={style.header}>
      <Toggle values={tabs} value={selectedTab} onChange={whenDefined(setSelectedTab)}/>
    </div>
    {render(selectedTab)}
  </>
}
