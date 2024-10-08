import { useEffect, useState } from "react";
import { cards } from '../../data';
import Card from "../card/Card";
import { Item } from "../../data";
import style from './Main.module.scss'

export default function Main() {
    const [data, setData] = useState<Item[]>([]);
    const [score, setScore] = useState<number>(0);
    const [bestScore, setBestScore] = useState<number>(0);
    const [key, setKey] = useState<number[]>([])

    useEffect(() => {  
        const fetchUrls = async () => {
            const updateCards = await Promise.all(cards.map(async (card) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${card.number}`)
                const data = await response.json();
                return { ...card, title:toUpperCase(data.species.name) ,url: data.sprites.front_default}
            }));
            setData(updateCards);
        };
        fetchUrls();
    }, []);

    function toUpperCase(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function mixData(): void {
        setData(prevData => [...prevData].sort(() => Math.random() - 0.5));
    }

    function changeScore(keyOfComponent: number) {
        if (key.length === 0 ) {
            setKey(prevKey => [...prevKey, keyOfComponent])
            setScore(score + 1);
        }


        const repeatingElemet = key.includes(keyOfComponent);

        if (!repeatingElemet) {
            setScore(score + 1);
            setKey(prevKey => [...prevKey, keyOfComponent])
        } else {
            if (bestScore < score) {
                setBestScore(score)
            }
            setScore(0);
            setKey([]);
        }
    }

    return (
        <>
            <div className={style['score']}>
                <div>Score: {score}</div>
                <div>Best score: {bestScore}</div>
            </div>
            <div className={style['container-card']}>
                {data.map(obj => (
                    <Card key={obj.id} name={obj.title} url={obj.url} mixFunction = {mixData} changeScoreFunction = {() => changeScore(obj.id)}/>
                ))}
            </div>
        </>
    )
} 