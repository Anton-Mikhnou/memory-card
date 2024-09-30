import { useEffect, useState } from "react";
import { cards } from '../../data';
import Card from "../card/Card";
import { Item } from "../../data";

export default function Main() {
    const [data, setData] = useState<Item[]>([]);

    useEffect(() => {  
        const fetchUrls = async () => {
            const updateCards = await Promise.all(cards.map(async (card) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${card.number}`)
                const data = await response.json();
                return { ...card, title:toUpperCase(data.species.name) ,url: data.sprites.front_default}
            }));
            console.log('1');
            setData(updateCards);
        };
        fetchUrls();
    }, []);

    function toUpperCase(string: string): string {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function mixData() {
        setData([...cards.sort(() => Math.random() - 0.5)])
    }

    return (
        <>
            {data.map(obj => (
                <Card key={obj.id} name={obj.title} url={obj.url} fun = {mixData}/>
            ))}
        </>
    )
} 