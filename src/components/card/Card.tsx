import style from './Card.module.scss';
import { cards } from '../../data';
import { useEffect, useState } from 'react';

export default function Card() {
    const [pic, setPic] = useState(null)
    
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(response => response.json())
      .then(data => setPic(data) )
    }, [])
    // const data = cards[0];
    // console.log(data);
    
    return (
        <>
          <div className={style['container']}>
            { pic && <img src={pic.sprites.front_default} alt="dsf" id='pokemonSprite'/>}  
            <h2>{pic.name} Pikachu</h2>
          </div>
        </>
    )
}