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
    ]
};