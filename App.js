//
/* LOGIC
*/
//score you can add and sottract
var score = 0;
//player can make the choose
var playerChoice;

//conversion of choose
var readable = {
  '0':'sasso',
  '1':'carta',
  '2':'forbici'
};
//object that allow the cpu to make the choose and store the data
//var cpuChoice = Math.floor(Math.random() * 3);
//console.log('cpuChoice', cpuChoice);
var cpuChoice = {
  init: function(){
    this.store = Math.floor(Math.random() * 3);
    this.text = readable[this.store];
  },
  store: '' ,
  text: ''
};

//cpuChoice.init();
//console.log('cpuChoice:',cpuChoice.store,cpuChoice.text);
// rules of the choose
var order = [0, 1, 2, 0];

var chooseWinner = function(player,cpu){
  if(order[player] === order[cpu]){
    return 'The game is tied.Try again?';
  }
  if(order[player] === order[cpu + 1]){
    return 'You won !!! Try again?';
    score ++;
  } else{
    score --;
    return 'You lost :(';
  }
}
/**
*UI
*/

var paragraph = document.querySelector('p');

var assignClick = function(tag,pos){
  //assign a click listener
  tag.addEventListener('click', function(){
    //set the players cpuChoice
  playerChoice = pos;
    //give feedback to the cpu cpuChoice
  cpuChoice.init();
  paragraph.innerText += '\n' + 'The computer choose: ' + cpuChoice.text + '\n';
   //print our win/lose feedback
  // paragraph.innerText += 'You choose:' + playerChoice.text + '\n';
  paragraph.innerText += chooseWinner(playerChoice, cpuChoice.store) + '\n';
  // display the score
  paragraph.innerText += 'SCORE: ' + score;
    //determine a winner
    //display the winner and the current score
  });
}

var images = {
  tags: document.getElementsByTagName('img'),
  init: function(){
    for(var step = 0; step < this.tags.length; step++){
      assignClick(this.tags[step],step);
    }
  }
}

images.init();
