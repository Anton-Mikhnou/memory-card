import { useRef, useEffect } from 'react';
import style from './Card.module.scss';

interface CardProp {
  name: string,
  url: string
}

export default function Card({name, url, fun}: CardProp) {
    const myRef = useRef(null)

    useEffect(() => {
        myRef.current.addEventListener('click', fun);
        return () => {
            myRef.current.removeEventListener('click', fun);
        };
    }, []);

    return (
        <>
          <div className={style['container']} ref={myRef}>
            <img src={url} alt="pokemon" id='pokemonSprite'  draggable="false"/>
            <h2>{name}</h2>
          </div>
        </>
    )
}