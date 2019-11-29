var ul = document.getElementById("ul");
var btn = document.getElementById("button");
var scoreCard = document.getElementById("scoreCard");
var quizBox = document.getElementById("questionBox");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
var mainEl = document.getElementById("main");

var isQuizDone = false;

var app = {
    questions: [{
            q: "HTML stands for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Markup Language",
                "Hyper Tabular Markup Language",
                "None of these are correct"
            ],
            answer: 1
        },

        {
            q: "What does p tag stands for?",
            options: ["Paragraph", "Parking", "People", "None of the above"],
            answer: 1
        },

        {
            q: "Correct HTML tag for the largest heading is ?",
            options: ["h4", "h1", "h8", "h9"],
            answer: 2
        },

        {
            q: "What does CSS stands for?",
            options: [
                "cascading style sheets",
                "cascading style source",
                "cascading source style",
                "none of the above"
            ],
            answer: 1
        },

        {
            q: "What does JS stands for?",
            options: [
                "None of the above",
                "JavaScript",
                "Java Language",
                "Programing language"
            ],
            answer: 2
        },
        {
            q: "What does DOM stands for?",
            options: [
                "DoomsDay",
                "Type of Champagne",
                "Nothing at all",
                "Document Object Model "
            ],
            answer: 4
        }
    ],
    index: 0,
    load: function() {
        if (this.index <= this.questions.length - 1) {
            quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
            op1.innerHTML = this.questions[this.index].options[0];
            op2.innerHTML = this.questions[this.index].options[1];
            op3.innerHTML = this.questions[this.index].options[2];
            op4.innerHTML = this.questions[this.index].options[3];
            this.scoreCard();
        } else {
            quizBox.innerHTML = "Quiz Over!!!";
            isQuizDone = true;
            op1.style.display = "none";
            op2.style.display = "none";
            op3.style.display = "none";
            op4.style.display = "none";
            btn.style.display = "none";
            x.stop;
        }
    },
    next: function() {
        this.index++;
        this.load();
    },
    check: function(ele) {
        var id = ele.id.split("");

        if (id[id.length - 1] == this.questions[this.index].answer) {
            this.score++;
            ele.className = "correct";
            ele.innerHTML = "Correct";
            this.scoreCard();
        } else {
            ele.className = "wrong";
            ele.innerHTML = "Wrong";
        }
    },
    notClickAble: function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "none";
        }
    },

    clickAble: function() {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = "";
        }
    },
    score: 0,
    scoreCard: function() {
        scoreCard.innerHTML = this.questions.length + "/" + this.score;
    }
};

window.onload = app.load();

function button(ele) {
    app.check(ele);
    app.notClickAble();
}

function next() {
    app.next();
    app.clickAble();
}

// HIDEN DIV INSTRUCTIONS

$(".toggle").click(function() {
    $("#target").toggle("medium");
});

// HIDEN WRAPPER

$(".btn").click(function() {
    $("#quiz-wrapper").toggle("medium");
    startQuizBtn.style.display = "none";
    togle.style.display = "none";
});

// TIMMER BUTTON

$("#startQuizBtn").click(function() {
    var counter = 30;
    var myInterval = setInterval(function() {
        counter--;
        if (isQuizDone) {
            clearInterval(myInterval);
        }

        if (counter >= 0) {
            span = document.getElementById("count");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            quizBox.innerHTML = "Quiz Over,You Run Out Of Time!!!";
            op1.style.display = "none";
            op2.style.display = "none";
            op3.style.display = "none";
            op4.style.display = "none";
            btn.style.display = "none";
            startQuizBtn.style.display = "none";
        }
    }, 1000);
});

// PLAY AGAIN BUTTON

function playAgain() {
    location.reload();
}

// THEME SONG

var x = document.getElementById("myAudio");

function play() {
    x.play();
}