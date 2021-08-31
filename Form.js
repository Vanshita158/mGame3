class Form {
    constructor() {
        this.players= createInput("No. of Players")
        this.name = createInput("Name")
        this.class = createInput("Class")
        this.digits = createInput("No. of digits")
        this.rows = createInput("No. of rows")
        this.ques = createInput("No. of questions")
        this.time = createInput("Time in which no. should disappear")
        this.button = createButton('Play');
        this.reset = createButton('Reset')
        this.title= createElement('h2')
    }
    hide() {
        this.players.hide()
        this.name.hide()
        this.class.hide()
        this.digits.hide()
        this.rows.hide()
        this.time.hide()
        this.reset.hide()
        this.ques.hide()
        this.button.hide()
    }
    display() {
        this.title.html("Visual Calculator")
        this.title.position(displayWidth/4,0)
        this.name.position(displayWidth / 4, 50)
        this.class.position(displayWidth / 4 , 100)
        this.digits.position(displayWidth / 4 , 150)
        this.rows.position(displayWidth / 4 , 200)
        this.time.position(displayWidth / 4 , 250)
        this.reset.position(displayWidth  - 60, 0)
        this.ques.position(displayWidth / 4, 300)
        this.players.position(displayWidth/4, 350)
        this.button.position(displayWidth / 4 , displayHeight/2)

        this.button.mousePressed(() => {
            this.name.hide()
           player.name= this.name.value()
            player.time= this.time.value()
            player.rows= this.time.value()
            totalPlrs= this.players.value()
            player.digits=this.time.value()
            player.ques=this.time.value()
            this.class.hide()
            this.digits.hide()
            this.rows.hide()
            this.time.hide()
            this.reset.hide()
            this.ques.hide()
            this.button.hide()
            playerCount+=1
            player.index= playerCount
            player.update()
            player.updateCount(playerCount)
        });

        this.reset.mousePressed(() => {

        })
    }
}
