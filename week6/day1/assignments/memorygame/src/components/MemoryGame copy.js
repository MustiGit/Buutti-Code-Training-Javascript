import React, {useState} from "react";
import Goblin from "./img/Goblin.png";
import Warrior from "./img/Warrior.png";
import Mage from "./img/Mage.png";
import Rogue from "./img/Rogue.png";
import Spider from "./img/Spider.png";
import Troll from "./img/Troll.png";
import Morko from "./img/Morko.png";
import Hunter from "./img/Hunter.png";
import Backside from "./img/Backside.JPG";
import Found from "./img/Found.JPG";

function MemoryGame() {
    const allCardsArray = [
        {id: 1, name: "Goblin", url: Goblin, turned: false},
        {id: 2, name: "Warrior", url: Warrior, turned: false},
        {id: 3, name: "Morko", url: Morko, turned: false},
        {id: 4, name: "Hunter", url: Hunter, turned: false},
        {id: 5, name: "Spider", url: Spider, turned: false},
        {id: 6, name: "Mage", url: Mage, turned: false},
        {id: 7, name: "Rogue", url: Rogue, turned: false},
        {id: 8, name: "Troll", url: Troll, turned: false},
        {id: 9, name: "Goblin", url: Goblin, turned: false},
        {id: 10, name: "Warrior", url: Warrior, turned: false},
        {id: 11, name: "Morko", url: Morko, turned: false},
        {id: 12, name: "Hunter", url: Hunter, turned: false},
        {id: 13, name: "Spider", url: Spider, turned: false},
        {id: 14, name: "Mage", url: Mage, turned: false},
        {id: 15, name: "Rogue", url: Rogue, turned: false},
        {id: 16, name: "Troll", url: Troll, turned: false},
    ];

    // Set up first game
    let shuffledArray = [...allCardsArray];
    shuffledArray = shuffledArray.sort(() => Math.random() - 0.5);

    // Setup up states
    const [renderArray, setRenderArray] = useState(shuffledArray);
    const [renderCounter, setRenderCounter] = useState(0);

    const resetGame = () => {
        let shuffledArray = [...allCardsArray];
        shuffledArray = shuffledArray.sort(() => Math.random() - 0.5);
        setRenderArray(shuffledArray);
        setRenderCounter(0);
    };

    const showAllCards = () => {
        let arrayHolder = [...renderArray];
        // Map through all cards and make sure they are turned
        arrayHolder = arrayHolder.map((c) => ({
            ...c,
            turned: true,
        }));
        setRenderArray(arrayHolder);
    };

    const clickCard = (i) => {
        // Make delay function
        /* function timeout(delay) {
            return new Promise( res => setTimeout(res, delay) );
        }*/

        // Add contents of renderArray inside arrayHolder
        const arrayHolder = [...renderArray];

        // Check if any of cards are already turned. Skip cards that have been found already.
        const index = arrayHolder.findIndex((card) => (card.turned === true && card.name !== "Found"));

        if (index === -1) {
            // FIRST PICK
            console.log("FIRST PICK");
            arrayHolder[i].turned = true;

            console.log(arrayHolder);

            // Update state of renderArray by contents of arrayHolder
            setRenderArray(arrayHolder);
        } else if (index === i) {
            // TURNING SAME CARD AGAIN
            console.log("SAME CARD");
        } else if (arrayHolder[i].name === arrayHolder[index].name) {
            // MATCH FOUND
            console.log("MATCH");

            arrayHolder[i].turned = true;

            setRenderCounter(renderCounter + 1);

            // Update state of renderArray by contents of arrayHolder
            // setRenderArray(arrayHolder);

            // BREAK
            // await timeout(1000); //for 1 sec delay

            arrayHolder[i] = {name: "Found", url: Found, turned: true};
            arrayHolder[index] = {name: "Found", url: Found, turned: true};

            // Update state of renderArray by contents of arrayHolder
            setRenderArray(arrayHolder);
        } else {
            // Not A PAIR
            console.log("NOT A PAIR");
            arrayHolder[i].turned = true;

            setRenderCounter(renderCounter + 1);

            // Update state of renderArray by contents of arrayHolder
            // setRenderArray(arrayHolder);

            // BREAK
            // await timeout(1000); //for 1 sec delay

            arrayHolder[i].turned = false;
            arrayHolder[index].turned = false;

            // Update state of renderArray by contents of arrayHolder
            setRenderArray(arrayHolder);
        }
    };

    const renderCards = () => {
        // Check if all cards are turned
        const allTurnedChecker = renderArray.every((card) => card.turned === true);
        // Check if all card names "Found"
        const allFoundChecker = renderArray.every((card) => card.name === "Found");

        if (allFoundChecker) {
            return (
                <div id="winningScreen">YOU WON!</div>
            );
        } else if (allTurnedChecker) {
            /* Map through renderarray and make new div with
             index number inside for every card of array WITHOUT onClick option */
            return renderArray.map((card, i) => {
                return (
                    <div className="grid-item" key={card.name + i}
                        style={card.turned ? {backgroundImage: `url(${card.url})`} :
                            {backgroundImage: `url(${Backside})`}} />
                );
            });
        } else {
            /* Map through renderarray and make new div with index
            number inside for every card of array WITH onClick option */
            return renderArray.map((card, i) => {
                return (
                    <div className="grid-item" key={card.name + i}
                        style={card.turned ? {backgroundImage: `url(${card.url})`} :
                            {backgroundImage: `url(${Backside})`}}
                        onClick={() => clickCard(i)} />
                );
            });
        }
    };
    /*
                        <div className="grid-item" key={card.name + i}>
                        <img className="image" src={card.turned ?  card.url :
                            Backside } alt={card.name+i} onClick={() => clickCard(i)}></img>
                    </div>
                        */
    return (
        <div id="container">

            <div id="pageTop">
                MustGet MemoryGame
            </div>

            <div id="grid-container">
                {renderCards()}
            </div>

            <div id="pageBottom">
                <div id="guessesCounter">Guesses: {renderCounter}</div>
                <button className="button" onClick={resetGame}>Reset</button>
                <button className="button" onClick={showAllCards}>Show All</button>
            </div>

        </div>
    );
}
// <input onChange={(e) => setNameInput(e.currentTarget.value)} />
export default MemoryGame;
