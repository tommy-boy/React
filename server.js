require('dotenv').config()
const micro = require('micro')
const match = require('micro-route/match')
const { parse } = require('url')
const next = require('next')
const port = 3000
const dev = process.env.NODE_ENV === 'development'
const app = next({ dev })
const handle = app.getRequestHandler()
const { join } = require('path')
const { json } = require('micro')
const widgets = require('./proxy/GET/widgets')

const server = micro(async (req, res) => {
  const parsedUrl = parse(req.url, true)
  if (match(req, '/widgets')) {
    return widgets(req, res)
  } else {
    return handle(req, res, parsedUrl)
  }
})

app.prepare().then(() => {
  server.listen(port, err => {
    if (err) throw err
    //console.log(`> Ready on https://localhost:${port}`)
  })
})