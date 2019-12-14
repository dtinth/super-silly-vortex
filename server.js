const chokidar = require('chokidar')
const app = require('express')()
const server = new (require('http').Server)(app)
const io = require('socket.io')(server)

app.use(require('express').static('public'))

server.listen(+(process.env.PORT || 55555), () => {
  console.log('Listening on', server.address())
})

chokidar
  .watch('workspace', {
    ignoreInitial: true,
  })
  .on('all', (event, path) => {
    io.emit('filechange', path)
  })
