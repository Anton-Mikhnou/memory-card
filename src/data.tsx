// import { useEffect } from "react";

interface Item {
    key: number,
    title: string,
    url: string | undefined,
}


async function pokemon(param: string) {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {mode: 'cors'})
        const data = await response.json()
        const img = data.sprites.front_default;
        cards[0].url = img;
        
        return img;
    }
    catch(error) {
        console.error(error)
    }
}


// pokemon()


export const cards: Array<Item> = [
    {
        key: 0,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 1,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 2,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 3,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 4,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 5,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 6,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 7,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 8,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 9,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 10,
        title: 'sdf',
        url: undefined,
    },

    {
        key: 11,
        title: 'sdf',
        url: undefined,
    },

]