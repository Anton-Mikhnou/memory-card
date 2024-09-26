import style from './Card.module.scss';

interface CardProp {
  name: string,
  url: string
}

export default function Card({name, url}: CardProp) {
    
    return (
        <>
          <div className={style['container']}>
            <img src={url} alt="dsf" id='pokemonSprite'  draggable="false"/>
            <h2>{name}</h2>
          </div>
        </>
    )
}