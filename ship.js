class Ship {
    constructor(length, hits = 0) {
        this.length = length
        this.hits = hits
        this.sunk = false
    }

    isSunk() {
        if (this.hits === this.length) {
            this.isSunk = true
            return true
        } return false
    }

    hit() {
        this.hits++
    }
}

export { Ship }