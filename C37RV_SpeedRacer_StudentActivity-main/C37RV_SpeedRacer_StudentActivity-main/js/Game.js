class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1=createSprite(width/2-50,height-100)
   car1.addImage("car1",car1_img)

   car2=createSprite(width/2-50,height-100)
   car2.addImage("car2",car2_img)
   cars=[car1,car2]
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
this.handleElements()
Player.getPlayerInfo()
if(allPlayers !== undefined){
  Image(track,0,-height*5,width,height*6)
  drawSprites()
}



  }
}
