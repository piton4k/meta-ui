import style from "./App.module.styl"
import Demo from "./Demo"
import Meta from "./Meta"
import Tabs from "./Tabs"

const tabs: { [key: string]: () => JSX.Element } = {
  Demo,
  Meta,
}

export default function App() {
  return <div className={style.app}>
    <header className={style.header}>
      Meta UI
    </header>
    <main className={style.main}>
      <div className={style.page}>
        <Tabs tabs={Object.keys(tabs)} render={tab => {
          const Tab = tabs[tab]
          return <Tab/>
        }}/>
      </div>
    </main>
  </div>
}
