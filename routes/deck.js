const express = require('express')
const router = express.Router()
const DeckController = require('../controllers/deck')
const {validateParam, schemas, validateBody} = require('../helpers/routerHelper')


router.route('/')
    .get(DeckController.index)
    .post(validateBody(schemas.newDeckSchema), DeckController.newDeck)

router.route('/:deckID')
    .get(validateParam(schemas.idSchema, 'deckID'), DeckController.getDeck)
    .put(validateParam(schemas.idSchema, 'deckID'), validateBody(schemas.newDeckSchema), DeckController.replaceDeck)
    .patch(validateParam(schemas.idSchema, 'deckID'), validateBody(schemas.newOptionalDeckSchema), DeckController.updateDeck)
    .delete(validateParam(schemas.idSchema, 'deckID'), DeckController.deleteDeck)

    module.exports = router