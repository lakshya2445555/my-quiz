class Quiz {
  constructor(){}
  getState(){
    var GameStateRef = database.ref('gameState');
    GameStateRef.on("value",function(data){
      gameState = data.val();
    })
    
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  
  

  async start(){
    if(gameState === 0){
      contestant = new contestant();
      var ContestantCountRef = await database.ref('contestantCount').once("value");
      if(ContestantCountRef.exists()){
        ContestantCount = ContestantCountRef.val();
        contestant.getCount();
      } 
      question = new Question()
      question.display();
    }
    
      question = new Question()
      question.display();
    
  }
  
}


play(){

  question.hide();
  background("yellow");
  Fill(0);
  textSize(30);
  text("Result of the quiz",340,50);
  //text("---------------------------",320,65);
  Contestant.getPlayerInfo();
  if(allContestants !== undefined){
    debugger;
    var display_Answers = 230;
    Fill("Blue");
    textSize(20);
    text("NOTE:  Contestant who answered correct are highlighted in green color!",130,230);

    for(var plr in allContestants){
      debugger;
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
      fill("Green")
      else
      fill("red");

      display_Answers+=30;
      textSize(20);
      text(allContestants[plr].name + "! " + allContestants[plr].answer,250,display_Answers)
    }
    }

}
}


