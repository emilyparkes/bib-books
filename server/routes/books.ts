import express from "express";
const router = express.Router()

import * as db from '../db/db'

router.get('/', (req, res) => {
  db.getAllBooks()
    .then((books) => {
      res.json(books)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.post('/', (req, res) => {
  db.addbook(req.body)
    .then((idArr) => {
      const idNum = idArr[0].id
      return db.getBookById(idNum)
    })
    .then((dbBook) => {
      res.json(dbBook)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteBook(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const read = req.body.read
  db.updateBook(id, read)
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

export default router