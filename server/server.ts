import express from 'express'
import path from 'path'

import booksRoutes from './routes/books'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/v1/books', booksRoutes)

export default server
