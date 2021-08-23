//THE LOGIC

const danceFloor = document.querySelector('#floor');
const width = danceFloor.width
const height = danceFloor.height
const tilesInRow = 8
const tilesWidth = width/tilesInRow
const tilesInCollum = 5
const tilesHeight = height/tilesInCollum

function setup () {
 imgMoveUp = loadImage("club-game/assets/character-up.png")
 imgMoveLeft = loadImage("club-game/assets/character-left.png")
 imgMoveRight = loadImage("club-game/assets/character-right.png")
 imgMoveDown = loadImage("club-game/assets/character-down.png")
 imgMoveDance = loadImage("club-game/assets/treasure.png")
}

class Dancer {
    constructor(curCollum, curRow){
        this.col = curCollum
        this.row = curRow
        this.direction = "down"
        this.score = 0
        this.level = 1
        

        const gifsMovement = { 
            left: "club-game/assets/character-left.png",
            up: "club-game/assets/character-up.png",
            right: "club-game/assets/character-right.png",
            down:"club-game/assets/character-down.png",
            dance:"club-game/assets/treasure.png"
        }

        this.image = {}

        for (let direction in gifsMovement) { 
            this.image[direction] = new Image()
            this.image[direction].src = gifsMovement[direction]
        }
    }

    moveUp () {
        this.row--
        this.direction = "up"
    }

    moveDown () {
        this.row++
        this.direction = "down"
    }

    moveLeft() {
        this.col--
        this.direction = "left"
    }

    moveRight() {
        this.col++
        this.direction = "right"
    }

    dance() {
        this.direction = "dance"
        this.row = danceMoveX
        this.col = danceMoveY
    }
}

const dancer = new Dancer(0,0)

class DestinationTile {
    constructor() {
      this.setRandomTile ()
      
      this.image = new Image ()
      this.image.src = ""
    }
      setRandomTile() {
          this.col = Math.floor(Math.random() * tilesInCollum)
          this.row = Math.floor(Math.random() * tilesInRow)
      }
     
}

const destination = new DestinationTile

//keypressed event -> later with buttons etc.

document.addEventListener("keypress", event => {
    event.preventDefault()

    switch (event.keyCode) {
        case 37:
            dancer.moveLeft()
            break;
        
        case 38:
            dancer.moveUp()
            break;

        case 39:
            dancer.moveRight()
            break;
        
        case 40:
            dancer.moveDown()
            break;

        case 32:
            dancer.dance()
            
    }
})
