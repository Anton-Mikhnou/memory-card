import style from'./App.module.scss';
import Main from './components/main/Main';

function App() {

  return (
    <>
    <div className={style['container']}>
      <h1>The memory cards</h1>
      <Main/>
    </div>
    </>
  )
}

export default App;
