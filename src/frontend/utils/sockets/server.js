function sockets(server, app) {
  const io = require('socket.io')(server);
  console.log("Sockets initialized")

  const game_rooms = io.of('/s/rooms')
    .on('connection', (socket) => {
      console.log("+ CONNECTED /rooms")

      socket.on('msg', (msg) => {
        console.log("* /CHAT :  " + msg)
      })

      socket.on('join-room', (room) => {
        const { rooms } = game_rooms.adapter
        const roomExist = Object.keys(rooms).find((r)=> r === room)
        if (roomExist){
          socket.join(room);
          console.log(`* JOINED ROOM:  ${room}`)
        }else {
          console.error(`* ROOM: ${room} ,NOT FOUND`)
        }
      })

      socket.on('create-room', (room) => {
        const { rooms } = game_rooms.adapter
        const roomExist = Object.keys(rooms).find((r)=> r === room)
        if (roomExist){
          console.error(`* ROOM: ${room} ,ALREADY EXISTS`)
        }else {
          socket.join(room);
          console.log(`* CREATED ROOM:  ${room}`)
        }
      })

      socket.on('leave-room', (room) => {
        socket.leave(room);
        console.log(`* LEAVED ROOM:  ${room}`)
      })


      socket.on('disconnect', () => {
        console.log("- DISCONNECTED /rooms")
      })
    })

  app.get('/message/:room', async (req, res) => {

    try {
      const {room} = req.params;
      const sent = await game_rooms.to(room).emit("message", `Hello room ${room}`)
      console.log("SENT")
      console.log(sent)
      res.send(`Message sent to room: ${room}`)
    } catch (e) {
      res.status(404).send(e)
    }
  });
}
module.exports = sockets;
