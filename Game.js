class Game {
  constructor() {

  }
  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player()
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

    }

  }
  play() {
    form.hide()
    var startnum = Math.pow(10, this.digits - 1)
    var endnum = Math.pow((this.digits) - 1)

    num = []
    for (i = 0; i < this.rows, i++) {
      num[i] = Math.round(random(startnum, endnum))

    }
    var op = ["+", "-", "*", "/"]
    var qop = []
    for (i = 0; i < this.rows - 1; i++) {
      rand = Math.round(random(0, 3))
      qop[i] = op[rand]
    }
    var ques = []
    for (i = 0; i < (this.rows * 2) - 1; i++) {
      if (i % 2 == 0) {
        ques[i] = num[Math.round(i / 2)]
      }
      else {
        ques[i] = qop[Math.round(i / 2)]

      }
    }
    var fq= ["ques[1]"+"qop[2]"+ "ques[2}"+"qop[3]"+"ques[3]"]
     
    }
    /*10 to power fo (this.digits-1 ) (10 to power of this.digits) -
     1 startnum = Math.pow(10,this.digit-1) 
     endnum = Math.pow(10,this.digit) - 1
      num = []
       for(i=0;i<this.rows;i++){
          num[i] = Math.round(random(startnum,endnum))
          }
           op = [+,-,*,/] 
          op[rand] qop = [] for(i=0;i<this.rows-1;i++){
             rand = math,round(random(0,3)) 
             qop[i] = op[rand] 
           }
              this.rows = 3 num[0]
               num[1]
                num[2]
                 num[0]+num[1] this.digit = 2 10->99 this.rows = 3
       form.hide();
       */

  }
}
