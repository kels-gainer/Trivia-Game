$(document).ready(function() {


  var countdownNumberEl = document.getElementById('countdown-number');
  var countdown = 60;

  countdownNumberEl.textContent = countdown;

  var timer = setInterval(function() {
    countdown = --countdown <= 0 ? 60 : countdown;
    countdownNumberEl.textContent = countdown;

    if(countdown === 0) {
      $("#questions").hide();
      $("#scores").show();
    };

    $(".sub-but").on("click", function() {
      clearInterval(timer);
      
  });

  }, 1000);


  var questions = [{
    q: "Which planet in our solar system is the hottest?",
    ans: ["Mars", "Venus", "Mercury", "Saturn"],
    name: "planet",
    correct: "Venus",
  },
  {
    q: "How much does a NASA space suite cost?",
    ans: ["12 million", "1 billion", "5 thousand", "1.5 million"],
    name: "suite",
    correct: "12 million",
  },
  {
    q: "Jupiter is the largest planet in our solar system.",
    ans: ["True", "False"],
    name: "size",
    correct: "True",
  },
  {
    q: "How many moons does Jupiter have?",
    ans: ["32", "4", "17", "67"],
    name: "moons",
    correct: "67",
  },
  {
    q: "It takes Neptune 165 earth years to make on orbit around the sun",
    ans: ["True", "False"],
    name: "neptune",
    correct: "True",
  },
  {
    q: "Which galazy is closets to our own?",
    ans: ["Milkyway", "Sombrero", "Andromeda", "Black Eye"],
    name: "galaxy",
    correct: "Andromeda",
  },
  ]
  

  $("#start-btn").on("click", function(){
    $("#startGame").hide();
    $("#questions").show();
    $("#countdown-number").show();
    
  });


  var correctAnswer = 0;
  var wrongAnswer = 0;
  var unanswered = 0;

    for (var i = 0; i < questions.length; i++) {
        if ($('input:radio[value="' + questions[i].ans + '"]:checked').val() === questions[i].correct) {
            correctAnswer++;
            console.log("are you working")
        } else {
            wrongAnswer++;
            unanswered++;
        };
    }

$(".sub-btn").on("click", function(){
    $("#questions").hide();
    $("#countdown-number").hide();
    $("#scores").show();
    $("#correctAnswers-text").append(correctAnswer);
    $("#wrongAnswers-text").append(wrongAnswer);
    $("#unanswered-text").append(unanswered);
  });
  
});
