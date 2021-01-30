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
import Win from "./img/Win.gif";

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
    const [firstPick, setFirstPick] = useState(-1);
    const [secondPick, setSecondPick] = useState(-1);

    const resetGame = () => {
    // Reset picks
        setFirstPick(-1);
        setSecondPick(-1);

        // Shuffle array
        let shuffledArray = [...allCardsArray];
        shuffledArray = shuffledArray.sort(() => Math.random() - 0.5);

        // Set shuffled array to renderArray
        setRenderArray(shuffledArray);

        // Reset counter
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
    // Add contents of renderArray inside arrayHolder
        const arrayHolder = [...renderArray];

        // Get firstPicks value to firstCard, to use in this render
        let firstCard = firstPick;

        // If 2 cards are already chosen, hide them first
        if ((firstCard !== -1) && (secondPick !== -1)) {
            arrayHolder[firstCard].turned = false;
            arrayHolder[secondPick].turned = false;

            // Clear picks
            firstCard = -1;
            setSecondPick(-1);
        }

        if (firstCard === -1) {
            // FIRST PICK
            console.log("FIRST PICK");

            arrayHolder[i].turned = true;

            // Set index of current clicked card as firstPick
            setFirstPick(i);

            // Update renderArray with arrayHolder's contents
            setRenderArray(arrayHolder);
        } else if (firstCard === i) {
            // TURNING SAME CARD AGAIN, NOTHING HAPPENS
            console.log("SAME CARD");
        } else if (arrayHolder[i].name === arrayHolder[firstCard].name) {
            // MATCH FOUND
            console.log("MATCH");

            // Update guesses counter +1
            setRenderCounter(renderCounter + 1);

            // Modify found cards with "Found" name.
            arrayHolder[i] = {name: "Found", url: Found, turned: true};
            arrayHolder[firstCard] = {name: "Found", url: Found, turned: true};

            // Clear picks
            setFirstPick(-1);
            setSecondPick(-1);

            // Update state of renderArray by contents of arrayHolder
            setRenderArray(arrayHolder);
        } else {
            // Not A PAIR
            console.log("NOT A PAIR");
            arrayHolder[i].turned = true;

            // Update guesses counter with +1
            setRenderCounter(renderCounter + 1);

            // setFirstPick(-1);
            setSecondPick(i);

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
            /* Map through renderarray and make new div with
            index number inside for every card of array WITHOUT onClick option */
            return renderArray.map((card, i) => {
                return (
                    <div className="grid-item" key={card.name + i}
                        style={{backgroundImage: `url(${Win})`}} />
                );
            });
        } else if (allTurnedChecker) {
            /* Map through renderarray and make new div with index number
            inside for every card of array WITHOUT onClick option */
            return renderArray.map((card, i) => {
                return (
                    <div className="grid-item" key={card.name + i}
                        style={card.turned ?
                            {backgroundImage: `url(${card.url})`} :{backgroundImage: `url(${Backside})`}} />
                );
            });
        } else {
            /* Map through renderarray and make new div with index number
            inside for every card of array WITH onClick option */
            return renderArray.map((card, i) => {
                return (
                    <div className="grid-item" key={card.name + i}
                        style={card.turned ?
                            {backgroundImage: `url(${card.url})`} : {backgroundImage: `url(${Backside})`}}
                        onClick={() => clickCard(i)} />
                );
            });
        }
    };
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

export default MemoryGame;
