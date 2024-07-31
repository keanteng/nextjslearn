'use client'

import { useState } from 'react';

// create a new component called MyButton
function MyButton() {
    return (
        <button
        className="bg-blue-500 text-white p-2 px-4 rounded-md shadow-md"
        >
            Click me!
        </button>
    );
}

// create a profile pic
const user = {
    name: "John Doe",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
};

// product list
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Apple', isFruit: true, id: 2 },
    { title: 'Banana', isFruit: true, id: 3 },
    { title: 'Carrot', isFruit: false, id: 4 },
    { title: 'Orange', isFruit: true, id: 5 },
    { title: 'Pineapple', isFruit: true, id: 6 },
    { title: 'Tomato', isFruit: false, id: 7 },
    { title: 'Watermelon', isFruit: true, id: 8 },
]

// create a counter component
function Counter() {
    return undefined;
}

function Counter2({count, onClick}) {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white p-2 px-4 rounded-md shadow-md"
        >
            Clicked {count} times
        </button>
    )
}

export default function Tutorial() {

    const listItems = products.map(product => 
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    )

    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <main>
            <div>
                <h1>Welcome to the Tutorial</h1>
                <MyButton />
            </div>

            <br />

            <div>
                <h2>{user.name}</h2>
                <img
                className="rounded-full"
                src={user.imageUrl}
                alt={'Photo of '  + user.name}
                style={{ 
                    width: user.imageSize,
                    height: user.imageSize,
                 }}
                ></img>
            </div>

            <br />

            <div>
                <ul>
                    {listItems}
                </ul>
            </div>

            <br />

            <div>
                <h1>Two Counters That Update Together</h1>
                <Counter2 count={count} onClick={handleClick}/>
                <Counter2 count={count} onClick={handleClick}/>
            </div>
        
        </main>
    )
}