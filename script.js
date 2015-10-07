$(document).ready(function() {
   var correctAnswers = 0;
   //quiz array
   var quiz = [ {
    question: "What year was the Monopoly board game invented?",
      choices: ["1932", "1946", "1931", "1935"],
      correct: 4
   },

    {
      question: "What is the name of the space that you start the game from?.",
      choices: ["Free Parking", "Chance", "Just Visiting", "Go!"],
      correct: 4
   },
   {
      question: "The banker MAY be a player",
      choices: ["True", "False"],
      correct: 1
   },
   {
      question: "How much will you pay to the bank when lifting a mortgage on your mortgaged properties?",
      choices: ["All of your money", "$200", "Mortgage value plus 10% interest", "Mortgage value only"],
      correct: 3
   }
   ];

   // functions
   $(".app .start").on("click",function(){
      var correctChoice = quiz[0].correct;
      
      $(".question").show();
      $(".app .question").text(quiz[0].question);
      $(".title").hide();
      $(".form").show();
      $(".app .answer-a").text(quiz[0].choices[0]);
      $(".app .answer-b").text(quiz[0].choices[1]);         
      $(".app .answer-c").text(quiz[0].choices[2]);
      $(".app .answer-d").text(quiz[0].choices[3]);
      $(".app .next.question-1").show();
      $(".answers .button:eq(" + correctChoice + ")").addClass('correct');

   });
   $(".app .next.question-1").on("click",function(){
      var correctChoice = quiz[1].correct;
      
      $(".answers .button:eq(3)").removeClass('correct');
      $(".app .question").text(quiz[1].question);
      $(".app .answer-a").text(quiz[1].choices[0]);
      $(".app .answer-b").text(quiz[1].choices[1]);         
      $(".app .answer-c").text(quiz[1].choices[2]);
      $(".app .answer-d").text(quiz[1].choices[3]);
      $(".button").css('background-color', '#010F4D');
      $(this).hide();
      $(".app .next.question-2").show();
      $(".answers .button:eq(" + correctChoice + ")").addClass('correct');
   });
$(".app .next.question-2").on("click",function(){
      var correctChoice = quiz[2].correct;
      
      $(".answers .button:eq(3)").removeClass('correct');
      $(".app .question").text(quiz[2].question);
      $(".app .answer-a").text(quiz[2].choices[0]);
      $(".app .answer-b").text(quiz[2].choices[1]);         
      $(".app .answer-c").text(quiz[2].choices[2]);
      $(".app .answer-d").text(quiz[2].choices[3]);
      $(".button").css('background-color', '#010F4D');
      $(this).hide();
      $(".app .next.question-3").show();
      $(".answers .button:eq(" + correctChoice + ")").addClass('correct');
   });



   $(".app .next.question-3").on("click",function(){
      var correctChoice = quiz[3].correct;
      
      $(".answers .button:eq(1)").removeClass('correct');
      $(".app .question").text(quiz[3].question);
      $(".app .answer-a").text(quiz[3].choices[0]);
      $(".app .answer-b").text(quiz[3].choices[1]);         
      $(".app .answer-c").text(quiz[3].choices[2]);
      $(".app .answer-d").text(quiz[3].choices[3]);
      $(".button").css('background-color', '#010F4D');
      $(this).hide();
      $(".app .next.finish").show();
      
      $(".answers .button:eq(" + correctChoice + ")").addClass('correct');
   });

 
   $(".app .next.finish").on("click", function(){
      var finalScore = Math.floor((correctAnswers/quiz.length) * 100);
      $(".app .question").css('font-size', '45px');
      if (finalScore === 100) {
         $(".app .question").text("Congratulations! You got " + finalScore + " %");
      } else if (finalScore === 75) {
         $(".app .question").text("Good job! You got " + finalScore + " %");
      } else if (finalScore === 50) {
         $(".app .question").text("Alright! You got " + finalScore + " %");
      } else {
         $(".app .question").text("Oh no! You got " + finalScore + " %");
      }

      $(".app .answer-a").hide();
      $(".app .answer-b").hide();        
      $(".app .answer-c").hide();
      $(".app .answer-d").hide();
      $(".button").hide();
      $("button").hide();
   });

//Select
   $(".button-a").on("click", function(){
          $(this).css('background-color', '#FE6281');
   });
   $(".button-b").on("click", function(){
          $(this).css('background-color', '#FE6281');
   });
   $(".button-c").on("click", function(){
          $(this).css('background-color', '#FE6281');
   });
   $(".button-d").on("click", function(){
          $(this).css('background-color', '#FE6281');
   });
//Right or Wrong
   $(".answers .button").on("click",function(){
      var isCorrect = $(this).hasClass("correct");
      
       if (isCorrect) {
          correctAnswers++;
          console.log("Correct");
       } else {
          console.log("Wrong");
       }
   });

});























