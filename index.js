const addCards = require('./src/utils/addCards')
const express = require('express')

const app = express();

require('./src/routes/deckRoutes.js')(app);

app.listen(8080);

// TODO: Remover essas porras e jogar em arquivos de rota

var deckPile1 = []
var deckPile2 = []
var deckDifference = 0

const deckSplit = (deck) => {
        //corta o deck em 2 pilhas
        let halfValue = Math.floor(deck.length / 2)
        deckPile1 = deck.slice(0, halfValue)
        deckPile2 = deck.slice(halfValue, deck.length)
        
        deckDifference = 0 // 0 se os dois sao do mesmo tamanho, 1 se a pilha 1 é maior, 2 se a pilha 2 é maior
        //verifica o tamanho das pilhas pro for
        if (deckPile1.length === deckPile2.length) {
            return deckPile1.length
        } else if (deckPile1.length > deckPile2.length) {
            deckDifference = 1
            return deckPile2.length
        } else {
            deckDifference = 2
            return deckPile1.length
        }
}

const rifleShuffle = (deck, nShuffles, cutTheDeck) => {
    var deckLength = deckSplit(deck)
    let deckResult = []


    for (i = 0; i < nShuffles; i++) {
        deckResult = []
        for (x = 0; x < deckLength; x++) {
            deckResult.push(deckPile1[x])
            deckResult.push(deckPile2[x])
        }
        deckLength = deckSplit(deckResult)
    }
    return deckResult
}

const standardDeck = addCards.createNewDeck()
let newDeck = rifleShuffle(standardDeck, 12, true)
console.log(newDeck)
