var ul = document.getElementById("ul");
var bvtn = document.getElementById("button");
var scoreCard = Document.getElementById("questionBox");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");

var app = {
    question: [{
            q: "Html stands for?",
            options: [
                "Hyper Text Markup Language",
                "Hight Text Markup Language",
                "Hyper Tabular Markup Language",
                "None of the above"
            ],
            answer: 1
        },

        {
            q: "Which of tag is used to mark begining of paragraph?",
            options: ["TD", "br", "p", "tr"],
            answer: 3
        },

        {
            q: "Correct HTML tag for largest heading is?",
            options: ["h4", "h1", "h8", "h9"],
            answer: 2
        }
    ],



    index: 0,

    load: function({
            if (this.index <= this.questions.length - 1) {
                quizBox.innerHTML = this.index + 1 + "." + this.questions[this.index].q;
                op1.innerHTML = this.question[this.index].options[0];
                op2.innerHTML = this.question[this.index].options[1];
                op3.innerHTML = this.question[this.index].options[2];
                op4.innerHTML = this.question[this.index].options[3];

                this.scoreCard();

            } else {
                quizBox.innerHTML = "Quiz Over......!!!"
                op1.style.display = "none";
                op2.style.display = "none";
                op3.style.display = "none";
                op4.style.display = "none";
                btn.style.display = "none";
            }
        }
    })
};