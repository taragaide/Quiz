$(function () {

    var currentPage = 0,
        correct = 0;
    var myAnswers = [];
    var myQuiz = [

        ["The earliest known version of Monopoly is known as",1, "The Landlord's Game", "Monopoly", "Property Owners", "Parker Brothers"],

        ["What is the name of the space that you start the game from?",4, "Free Parking", "Chance",
            "Just Visiting", "Go!"],

        ["The banker MAY be a player?",1, "True", "Who Cares", "Unsure", "False"],

        ["You can go to jail by three methods. Which one is NOT a way to go to jail?",3,
            "Landing on the jail square by roll of dice",
            "Moved by chance or community chest card",
            "Opponent physically placing your piece in jail",
            "Rolling doubles three times in one turn"]
    ];


    var myHeader = document.getElementById("quizHeader");
    var classname = document.getElementsByClassName("answer");
    var myQuestion = document.getElementById("questions");
    var progressBar = document.getElementById("progressBar");
    var btnNext = document.getElementById("btnNext");
    var btnPrevious = document.getElementById("btnPrevious");
    var btnFinish = document.getElementById("finishQuiz");
    checkPage();

    btnNext.addEventListener("click", moveNext);
    btnPrevious.addEventListener("click", moveBack);
     btnFinish.addEventListener("click", endQuiz);
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', myAnswer, false);
    }

    function myAnswer() {
        //alert();
        var idAnswer = this.getAttribute("data-id");
        myAnswer[currentPage];
        if (myQuiz[0][1] == idAnswer) {
            console.log("Correct Answer");
        } else {
            console.log("Wrong Answer");
        }
        console.log(myAnswers);
    }

    function addBox() {
        for (var i = 0; i < myQuestion.children.length; i++) {
            var curNode = myQuestion.children[i];
            if (myAnswers[currentPage] == (i + 1)) {
                curNode.classList.add("seleAnswer");
            } else {
                curNode.classList.remove("seleAnswer");
            }
        }

    }


    function moveNext() {
        if (myAnswers[currentPage]) {
            console.log("please proceed");
            if (currentPage < (myQuiz.length - 1)) {
                currentPage++;
                checkPage(currentPage);
            } else {
                console.log(currentPage + ' ' + myQuiz.length);
                if (myQuiz.length >= currentPage) {
                    endQuiz();
                } else {
                    console.log('End of Quiz' + currentPage);
                }
            }
        } else {
            console.log('Not answered');
        }
    }


function endQuiz(){
  console.log('Quiz is OVER');

    }



    function checkPage(i) {
        if (currentPage == 0) {
            btnPrevious.classList.add("hide");
        }
        else {
            btnPrevious.classList.remove("hide");
        }

        if ((currentPage +1) < (myQuiz.length)){
            btnNext.classList.remove("hide");
        }

        else {
            btnNext.classList.add("hide");
            btnFinish.classList.remove("hide");
        }

        myHeader.innerHTML=myQuiz[currentPage][0];
        for (var i = 0; i < myQuestion.children.length; i++) {
            var curNode = myQuestion.children[i];
            curNode.childNodes[1].innerHTML = (myQuiz[currentPage][(i + 2)]);
        }
        if (myAnswers[currentPage]==(i+1)) {
            curNode.classList.add("seleAnswer");
        }
        else {
            curNode.classList.remove("seleAnswer");
        }
    }

    //progress bar
    var increment = Math.ceil((currentPage) / (myQuiz.length) * 100);
    progressBar.style.width = (increment) + '%';
    progressBar.innerHTML = (increment) + '%';


    function moveBack() {
        if (currentPage > 0) {
            currentPage--;
            checkPage(currentPage);
        } else {
            console.log("end of quiz page");
        }
    }


});
                




