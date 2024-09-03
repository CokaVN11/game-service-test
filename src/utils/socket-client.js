import * as io from 'socket.io-client';

export createPlayer = (playerId) => {
  const socket = io(process.env.SERVER_URL);
  socket.on('connect', () => {
    console.log(`${playerId} connected`);
  });

  socket.on('error', (error) => {
    console.error(`${playerId} error: ${error}`);
  });

  return socket;
}