// Johhny has 100 cards, he gives to his younger brother 6 cards every monday, but his mother is giving him 5 cards every wednesday.
// He also could get 2 cards each time he cleans his room.
// How many times he had to clean his room in a year to end up with 0 cards.

const cards = 100
const cardsToYoungerBrother = 6
const cardsFromMom = 5
const cardsForRoomCleaning = 2
const weeks = 52

const function1 = () => {
    const calculateCardsWeekly = cards - cardsToYoungerBrother + cardsFromMom

    const year1 = calculateCardsWeekly - weeks

    if (year1 > 0) {
        console.log("Johnny doesn't need to clean the room")
    }
}
function1()