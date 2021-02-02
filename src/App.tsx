import React, { useState, useEffect } from 'react';


class ImageLink {
    src: string;
    value: number;

    constructor(src: string, value: number = 0) {
        this.src = src;
        this.value = value;
    }
}


function App() {
    useEffect(() => {
        rollDices();
    }, [])

    const [imageLinks] = useState<Array<string>>([
        '/images/dice-blank.png',
        '/images/dice-1.png',
        '/images/dice-2.png',
        '/images/dice-3.png',
        '/images/dice-4.png',
        '/images/dice-5.png',
        '/images/dice-6.png',
    ]);


    const [images] = useState<Array<ImageLink>>([
        new ImageLink(imageLinks[0]),
        new ImageLink(imageLinks[0]),
        new ImageLink(imageLinks[0]),
        new ImageLink(imageLinks[0]),
        new ImageLink(imageLinks[0]),
    ]);



    const [summary, setSummary] = useState<number>(0);
    const [randomNumbers, setRandomNumbers] = useState<Array<number>>([]);


    const rollDices = () => {


        let newArray: Array<number> = Array.from({length: 5}, () => Math.floor(Math.random() * 6) + 1)
        setRandomNumbers(newArray);
        setSummary(randomNumbers.reduce((a, b) => a + b, 0))

        randomNumbers.forEach((number: number, index: number) => {
            images[index].src = imageLinks[number];
            images[index].value = number;
        })
    }


    return (
    <>
        <h1 className="text-3xl text-center text-green-300 mx-auto mt-14 ">Zadanie Patrik Halgaš</h1>

        <span className="grid grid-cols-5 mx-auto " id="result">
            <div className="place-self-center my-10 hide">
                <img src={images[0].src}  alt=""/>
                {images[0].value > 0 &&
                    <p className="text-center text-xl hide mt-2 text-green-600 font-extrabold">hodil si číslo <span
                    className="text-red-500 dices">{ images[0].value }</span></p>
                }

            </div>
            <div className="place-self-center my-10 hide">
                <img src={images[1].src} alt=""/>
                {images[1].value > 0 &&
                    <p className="text-center text-xl hide mt-2 text-green-600 font-extrabold">hodil si číslo <span
                    className="text-red-500 dices">{ images[1].value }</span></p>
                }
            </div>
            <div className="place-self-center my-10 hide">
                <img src={images[2].src} alt=""/>
                {images[2].value > 0 &&
                    <p className="text-center text-xl hide mt-2 text-green-600 font-extrabold">hodil si číslo <span
                    className="text-red-500 dices">{ images[2].value }</span></p>
                }
            </div>
            <div className="place-self-center my-10 hide">
                <img src={images[3].src} alt=""/>
                {images[3].value > 0 &&
                    <p className="text-center text-xl hide mt-2 text-green-600 font-extrabold">hodil si číslo <span
                    className="text-red-500 dices">{ images[3].value }</span></p>
                }
            </div>
            <div className="place-self-center my-10 hide">
                <img src={images[4].src} alt=""/>
                {images[4].value > 0 &&
                    <p className="text-center text-xl hide mt-2 text-green-600 font-extrabold">hodil si číslo <span
                    className="text-red-500 dices">{ images[4].value }</span></p>
                }
            </div>

        </span>

        <span id="number"> </span>

        { summary > images.length &&
            <p className="text-center text-xl hide mt-2 text-green-600 font-extrabold">súčet čísel ktoré si hodil je
                : <span className="text-purple-500">{summary}</span> </p>
        }

        <div className="flex">
            <button
                className="bg-yellow-400 hover:bg-indigo-900 flex-initial px-10 py-2 mx-auto my-12 rounded  text-pink-700 font-extrabold "
                onClick={rollDices}
            >

                Roll Dice
            </button>
        </div>
    </>
    );
}

export default App;
