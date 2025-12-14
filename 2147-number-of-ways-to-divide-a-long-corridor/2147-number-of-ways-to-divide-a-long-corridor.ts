function numberOfWays(corridor: string): number {
     const mod: number = 1_000_000_007;
  let res: number = 1;
  let prevSeat: number = 0;
  let numSeats: number = 0;

  for (let i = 0; i < corridor.length; i++) {
    const c: string = corridor.charAt(i);

    if (c === 'S') {
      numSeats++;

      if (numSeats > 2 && numSeats % 2 === 1) {
        res = (res * (i - prevSeat)) % mod;
      }

      prevSeat = i;
    }
  }

  return numSeats > 1 && numSeats % 2 === 0 ? res : 0;
};