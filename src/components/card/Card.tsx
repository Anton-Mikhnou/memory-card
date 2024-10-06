import { useRef, useEffect } from 'react';
import style from './Card.module.scss';

interface CardProp {
    name: string,
    url: string,
    mixFunction: () => void,
}

export default function Card({name, url, mixFunction, onCLi}: CardProp) {
    const myRef = useRef<HTMLDivElement>(null!) ;

    useEffect(() => {

        const node = myRef;

        node.current.addEventListener('click', mixFunction);
        return () => {
            node.current.removeEventListener('click', mixFunction);
        };
        
    });

    return (
        <>
          <div className={style['container']} ref={myRef} onClick={onCLi}>
            <img src={url} alt="pokemon" id='pokemonSprite'  draggable="false"/>
            <h2>{name}</h2>
          </div>
        </>
    )
}