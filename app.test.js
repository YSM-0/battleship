import { Ship } from "./ship.js";
import { GameBoard } from "./gameboard.js";

const testShip = new Ship(4)

test('hit increase by 1', () => {
    testShip.hit()
    testShip.hit()
    testShip.hit()
    testShip.hit()
    expect(testShip.isSunk()).toBe(true)
})