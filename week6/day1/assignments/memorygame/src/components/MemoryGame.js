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
    // Array including all possible cards
    const allCardsArray = [
        {id: 1, name: "Goblin", url: Goblin, status: "faceDown"},
        {id: 2, name: "Warrior", url: Warrior, status: "faceDown"},
        {id: 3, name: "Morko", url: Morko, status: "faceDown"},
        {id: 4, name: "Hunter", url: Hunter, status: "faceDown"},
        {id: 5, name: "Spider", url: Spider, status: "faceDown"},
        {id: 6, name: "Mage", url: Mage, status: "faceDown"},
        {id: 7, name: "Rogue", url: Rogue, status: "faceDown"},
        {id: 8, name: "Troll", url: Troll, status: "faceDown"},
        {id: 9, name: "Goblin", url: Goblin, status: "faceDown"},
        {id: 10, name: "Warrior", url: Warrior, status: "faceDown"},
        {id: 11, name: "Morko", url: Morko, status: "faceDown"},
        {id: 12, name: "Hunter", url: Hunter, status: "faceDown"},
        {id: 13, name: "Spider", url: Spider, status: "faceDown"},
        {id: 14, name: "Mage", url: Mage, status: "faceDown"},
        {id: 15, name: "Rogue", url: Rogue, status: "faceDown"},
        {id: 16, name: "Troll", url: Troll, status: "faceDown"},
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

    const showRemainingCards = () => {
        let arrayHolder = [...renderArray];
        // Map through all cards and make sure they are turned
        arrayHolder = arrayHolder.map((c) => ({
            ...c,
            status: "faceUp",
        }));
        setRenderArray(arrayHolder);
    };

    const clickCard = (i) => {
        // Add contents of renderArray inside arrayHolder
        const arrayHolder = [...renderArray];

        if (arrayHolder[i].name === "Found") {
            // Clicking "Found" card, button click does nothing
        } else {
            // Get firstPick's value to firstCard, to use in this render
            let firstCard = firstPick;

            // If user didnt wait for previous cards to turn away
            if ((firstCard !== -1) && (secondPick !== -1)) {
                arrayHolder[firstCard].status = "faceDown";
                arrayHolder[secondPick].status = "faceDown";

                // Clear picks
                firstCard = -1;
                setSecondPick(-1);
            }

            if (firstCard === -1) {
            // --- FIRST PICK --- //
                arrayHolder[i].status = "faceUp";

                // Set index of current clicked card as firstPick
                setFirstPick(i);

                // Update renderArray with arrayHolder's contents
                setRenderArray(arrayHolder);
            } else if (firstCard === i) {
            // --- SAME CARD --- //
                console.log("SAME CARD");
            } else if (arrayHolder[i].name === arrayHolder[firstCard].name) {
            // --- MATCH FOUND --- //
                // Make chosen card visible
                arrayHolder[i].status = "faceUp";

                // Update guesses counter +1
                setRenderCounter(renderCounter + 1);

                // Clear picks
                setFirstPick(-1);
                setSecondPick(-1);

                // Add 1s timeout before hiding cards
                setTimeout(() => {
                    // Modify found cards with "Found" name and status
                    arrayHolder[i] = {name: "Found", url: Found, status: "found"};
                    arrayHolder[firstCard] = {name: "Found", url: Found, status: "found"};

                    // Update state of renderArray by contents of arrayHolder
                    setRenderArray(arrayHolder);
                }, 1000);
            } else {
            // --- NOT A PAIR --- //
                arrayHolder[i].status = "faceUp";

                // Update guesses counter with +1
                setRenderCounter(renderCounter + 1);

                // Take value of second pick
                setSecondPick(i);

                // Add 1s timeout before turning cards away
                setTimeout(() => {
                    arrayHolder[i].status = "faceDown";
                    arrayHolder[firstCard].status = "faceDown";

                    // Update state of renderArray by contents of arrayHolder
                    setRenderArray(arrayHolder);
                }, 1000);
            }
        }
    };

    const checkStyle = (card) => {
        if (card.status === "faceUp") {
            return {backgroundImage: `url(${card.url})`};
        } else if (card.status === "faceDown") {
            return {backgroundImage: `url(${Backside})`};
        } else {
            return {visibility: "hidden"};
        }
    };

    const renderCards = () => {
        // Check if all cards are turned
        const allTurnedChecker = renderArray.every((card) => card.status === "faceUp");
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
                        style={card.status === "faceUp" ?
                            {backgroundImage: `url(${card.url})`} : {backgroundImage: `url(${Backside})`} }/>
                );
            });
        } else {
            /* Map through renderarray and make new div with index number
            inside for every card of array WITH onClick option */
            return renderArray.map((card, i) => {
                return (
                    <div className={"grid-item" + (card.status === "faceUp" ? " flipped" : " back")} key={card.name + i}
                        style={checkStyle(card)}
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
                <button className="button" onClick={showRemainingCards}>Show Remaining</button>
            </div>

        </div>
    );
}

export default MemoryGame;
