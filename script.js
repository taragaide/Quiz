$(function () {
    
    var currentPage = 0,
        correct = 0;
    var myAnswers = [];
    var myQuiz = [

        ["What year was the Monopoly board game invented?", "1933", "1946", "1931", "1935", 1],

        ["What is the name of the space that you start the game from?", "Free Parking", "Chance",
            "Just Visiting", "Go!", 4],

        ["The banker MAY be a player?", "True", "Who Cares", "Unsure", "False", 1],

        ["You can go to jail by three methods. Which one is NOT a way to go to jail?",
            "Landing on the jail square by roll of dice",
            "Moved by chance or community chest card",
            "Opponent physically placing your piece in jail",
            "Rolling doubles three times in one turn", 3]
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
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', myAnswer, false);
    }

    function myAnswer() {
        var idAnswer = this.getAttribute("data-id");
        myAnswer[currentPage] = idAnswer;
        if (myQuiz[currentPage][2] == idAnswer) {
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




    function checkPage(i) {
        console.log(currentPage);
        if (currentPage == 1) {
            myOne.classList.add("show");
            myOne.classList.remove("hide");
            myTwo.classList.add("hide");
            myTwo.classList("show");
        }

        if (currentPage == 2) {
            myOne.classList.add("hide");
            myOne.classList.remove("show");
            myTwo.classList.add("show");
            myTwo.classList("hide");
        }
        myHeader.innerHTML = myQuiz[currentPage][0];
        for (var i = 0; i < myQuestion.children.length; i++) {
            var curNode = myQuestion.children[i];
            console.log(curNode.childNodes[1].innerHTML);
            curNode.childNodes[1].innerHTML = myQuiz[currentPage][(i + 1)];
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
                




