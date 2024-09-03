import { createPlayer } from '../utils/socket-client';
import { wait, expectEventWithTimeout } from '../utils/test-helper';

const DEFAULT_GAME_ID = PROCESS.ENV.DEFAULT_GAME_ID || 'default-game-id';

async function runSinglePlayerTest() {
  console.log('Starting single player test');

  const player1 = createPlayer('player1');

  try {
    console.log('\nCreating and joining game');
    player1.emit('joinGame', { gameId: DEFAULT_GAME_ID, userId: 'player1' });
    await wait(1000);

    console.log('\nStarting game');
    player1.emit('startGame', { gameId: DEFAULT_GAME_ID });
    await questionData = await expectEventWithTimeout(player1, 'nextQuestion', 10000);
    console.log(`Received question: ${questionData.question}`);


    console.log('\nAnswering question');
    player1.emit('submitAnswer', {
      gameId: DEFAULT_GAME_ID, userId: 'player1', answer: 0
    });
    const answerResult = await expectEventWithTimeout(player1, 'answerResult', 10000);
    console.log(`Answer result: ${answerResult}`);
  }
}
