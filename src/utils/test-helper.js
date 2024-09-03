import { Socket } from 'socket.io-client';

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function expectEventWithTimeout(socket: Socket, event: string, timeout: number): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(`Timeout waiting for event ${event}`));
    }, timeout);

    socket.on(event, (data) => {
      clearTimeout(timeoutId);
      resolve(data);
    });
  });
}
