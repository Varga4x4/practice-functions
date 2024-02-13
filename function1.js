// Johhny has 100 cards, he gives to his younger brother 6 cards every monday, but his mother is giving him 5 cards every wednesday.
// He also could get 2 cards each time he cleans his room.
// How many times he had to clean his room in a year to end up with 0 cards.

let cards = 100
const cardsToYoungerBrother = 6
const cardsFromMom = 5
const cardsForRoomCleaning = 2

const function1 = (initialCardNumbers, everyMondayCardsLost, everyWednesdayCardsGet, cardsForRoomCleaning) => {

    let currentCardNumber = initialCardNumbers
    for (let index = 1; index < 53; index++) {

        currentCardNumber -= everyMondayCardsLost
        currentCardNumber += everyWednesdayCardsGet
    }

    if (currentCardNumber === 0) {
        return 0
    }

    if (currentCardNumber < 0) {
        const numberOfCleanings = Math.abs(currentCardNumber) / cardsForRoomCleaning
        return numberOfCleanings
    }
}
console.log(function1(52, 6, 5, 2))