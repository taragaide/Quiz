$(document).ready(function(){

var curPage=0;
var myAnswers = [];
var myQuiz=[
  ["What year was the Monopoly board game invented?", "1933", "1946", "1931", "1935", 1],

  ["What is the name of the space that you start the game from?","Free Parking", "Chance", "Just Visiting", "Go!", 4],

  ["The banker MAY be a player?", "True", "Who Cares", "Unsure", "False", 1],

  ["You can go to jail by three methods. Which one is NOT a way to go to jail?", "Landing on the jail square by roll of dice", "Moved by chance or community chest card", "Opponent physically placing your piece in jail", "Rolling doubles three times in one turn", 3]


];

var myHeader = document.getElementById("quizHeader");
var classname = document.getElementsByClassName("answer");
var myQuestion = document.getElementById("questions");
var progressBar=document.getElementById("progressBar");
var btnNext=document.getElementById("btnNext");
var btnPrevious=document.getElementById("btnPrevious");
var btnFinish=document.getElementById("finishQuiz");
checkPage();

btnNext.addEventListener("click", moveNext);
btnPrevious.addEventListener("click", moveBack);
btnFinish.addEventListener("click", endQuiz);
for (var i=0; i<classname.length; i++) {
  classname[i].addEventListener('click', myAnswer, false);
}


function myAnswer (){
    var idAnswer=this.getAttribute("data-id");
    myAnswer[curPage]=idAnswer;
    if (myQuiz[curPage][1]==idAnswer){
      console.log("Correct Answer");
    }
    else
    {
      console.log("Wrong Answer");
    }
    console.log(myAnswers);
  }


function addBox(){
  for (var i = 0; i<myQuestion.children.length; i++){
      var curNode=myQuestion.children[i];
      if (myAnswers[curPage]==(i+1)){
        curNode.classList.add("seleAnswer");
      }
      else {
        curNode.classList.remove("seleAnswer");
      }
  }

}


function moveNext(){
  if (myAnswers[curPage]){
    console.log("please proceed");
    if (curPage<(myQuiz.length-1)){
      curPage++;
      checkPage(curPage);
    } else
  }
}


function checkPage (i) {
if (curPage==0){
  btnPrevious.classList.add("hide");
} 
else {
  btnP
}

}


});










 