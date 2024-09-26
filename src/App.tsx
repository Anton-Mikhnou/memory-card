import style from './App.module.scss'
import Card from './components/card/Card'
import Main from './components/main/Main'

function App() {


  return (
    <>
      <h1>Hello</h1>

      <div className={style['container']}>
        <Main/>
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> */}
      </div>
    </>
  )
}

export default App
