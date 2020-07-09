var deckSymbols = ["spade", "heart", "diamond", "club"]
var deckNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const createNewDeck = () => {
    let newDeck = []
    deckSymbols.forEach(cardSymbol => {
        deckNumbers.forEach(cardValue => {
            let card = {
                cardValue,
                cardSymbol
            }
            newDeck.push(card)
        })
    })

    return newDeck
}

module.exports = {createNewDeck}