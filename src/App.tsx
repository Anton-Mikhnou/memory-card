import style from './App.module.scss'
import Card from './components/card/Card'

function App() {


  return (
    <>
      <h1>Hello</h1>

      <div className={style['container']}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  )
}

export default App
