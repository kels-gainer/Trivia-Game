$(document).ready(function() {

// clock start =====================================

  var countdownNumberEl = document.getElementById('countdown-number');
  var countdown = 60;

  countdownNumberEl.textContent = countdown;

  var timer = setInterval(function() {
    countdown = --countdown <= 0 ? 60 : countdown;
    countdownNumberEl.textContent = countdown;

    if(countdown === 0) {
      $("#questions").hide();
      $("#scoresPg").show();
    };

    $("#sub-but").on("click", function() {
      clearInterval(timer);
      
  });

  }, 1000);

//  Questions Start ========================================

  var questions = [{
    q: "Which planet in our solar system is the hottest?",
    a: ["Mars", "Venus", "Mercury", "Saturn"],
    name: "planet",
    correct: "Venus",
    divClass: ".planet",
  },
  {
    q: "How much does a NASA space suite cost?",
    a: ["12 million", "1 billion", "5 thousand", "1.5 million"],
    name: "suite",
    correct: "12 million",
    divClass: ".suite",
  },
  {
    q: "Jupiter is the largest planet in our solar system.",
    a: ["True", "False"],
    name: "size",
    correct: "True",
    divClass: ".size",
  },
  {
    q: "How many moons does Jupiter have?",
    a: ["32", "4", "17", "67"],
    name: "moons",
    correct: "67",
    divClass: ".moons",
  },
  {
    q: "It takes Neptune 165 earth years to make on orbit around the sun",
    a: ["True", "False"],
    name: "neptune",
    correct: "True",
    divClass: ".neptune"
  },
  {
    q: "Which galazy is closets to our own?",
    a: ["Milkyway", "Sombrero", "Andromeda", "Black Eye"],
    name: "galaxy",
    correct: "Andromeda",
    divClass: ".galaxy"
  },
  ]

  // Score Start ========================================================

  $("#start-btn").on("click", function(){
    $("#startGame").hide();
    $("#questions").show();
  });

  // Grading Questions ================================================

  var correctAnswer = 0;
  var wrongAnswer = 0;
  var unanswered = 0;

  for(var i = 0; questions.length; i++);
  if (questions[i].checked);
  console.log("checked");
  
});
