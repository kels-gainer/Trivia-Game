$(document).ready(function() {


  var countdownNumberEl = document.getElementById('countdown-number');
  var countdown = 60;
  var timer;
  countdownNumberEl.textContent = countdown;

  


  var questions = [{
    q: "Which planet in our solar system is the hottest?",
    ans: ["mars", "venus", "mercury", "saturn"],
    name: "planet",
    correct: "venus",
  },
  {
    q: "How much does a NASA space suite cost?",
    ans: ["12mil", "1bil", "5k", "1.5mil"],
    name: "suite",
    correct: "12mil",
  },
  {
    q: "Jupiter is the largest planet in our solar system.",
    ans: ["true", "false"],
    name: "size",
    correct: "true",
  },
  {
    q: "How many moons does Jupiter have?",
    ans: ["32", "4", "17", "67"],
    name: "moons",
    correct: "67",
  },
  {
    q: "It takes Neptune 165 earth years to make on orbit around the sun",
    ans: ["true", "false"],
    name: "neptune",
    correct: "true",
  },
  {
    q: "Which galazy is closets to our own?",
    ans: ["milkyway", "sombrero", "andromeda", "black eye"],
    name: "galaxy",
    correct: "andromeda",
  },
  ]
  

  $("#start-btn").on("click", function(){
    $("#startGame").hide();
    $("#questions").show();
    $("#countdown-number").show();
    timer = setInterval(function() {
      countdown = --countdown <= 0 ? 60 : countdown;
      countdownNumberEl.textContent = countdown;
  
      if(countdown === 0) {
        $("#questions").hide();
        $("#scores").show();
      };
  
     
        
 
  
    }, 1000);
    
  });

function findAwnsers() {
    console.log('submit');
    var awnserd = $("input[type='radio']:checked");
    console.log(awnserd);
    for (var i = 0; i < awnserd.length; i++) {
      
        var index = $(awnserd[i]).attr("data-index")
        if ($(awnserd[i]).val() === questions[index].correct) {
            correctAnswer++;
        } else {
            wrongAnswer++;
        };
    }
  }
 
  var correctAnswer = 0;
  var wrongAnswer = 0;


$(".sub-btn").on("click", function(){
    clearInterval(timer);
    findAwnsers();
    $("#questions").hide();
    $("#countdown-number").hide();
    $("#scores").show();
    $("#correctAnswers-text").append(correctAnswer);
    $("#wrongAnswers-text").append(wrongAnswer);
  });
  
});
