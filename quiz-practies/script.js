const arr = [
    {
        question: "What is HTML?",
        options: [
            "HYPER TEXT MARKUP LANGUAGE",
            "HYPER MARKUP LANGUAGE",
            "HYPER TEXT LANGUAGE",
            "HYPER TEXT MARKUP "
        ],
        answer: "HYPER TEXT MARKUP LANGUAGE"
    },
    {
        question: "What is CSS?",
        options: [
            "CASCADING STYLE SHEET",
            "CASCADING STYLE SHEETS",
            "CASCADING STYLESHEET",
            "CASCADING STYLE SHEETS"
        ],
        answer: "CASCADING STYLE SHEET"
    },
    {
        question: "What is JavaScript?",
        options: [
            "JavaScript is a programming language"
            , "JavaScript is a scripting language",
            "JavaScript is a markup language",
            "JavaScript is a style sheet language"
        ],
        answer: "JavaScript is a programming language"
    },
    {
        question: "What is the full form of DOM?",
        options: [
            "Document Object Model",
            "Document Object Method",
            "Document Oriented Model",
            "Document Oriented Method"
        ],
        answer: "Document Object Model"
    }
]

var username = prompt("Enter your name");
let index = 0;
let id;
let seconds = 10;
let correct = 0;
let incorrect = 0;

let timer = () => {
    document.querySelector(".timer .second").innerHTML = seconds;
    id = setInterval(() => {
        seconds--;
        if (seconds == 0) {
            index++;
            getQuestion();
            checkAnswer();
            clearInterval(id);
            seconds = 10;
        }

        document.querySelector(".timer .second").innerHTML = seconds;
    }, 1000);
}
let getQuestion = () => {
    timer();
    if (index >= arr.length) {
        document.querySelector(".btn button").disabled = true;
        checkresult();
        return;
    }
    document.querySelector(".question i").innerHTML = index + 1;
    document.querySelector(".question span").innerHTML = arr[index].question;

    for (const i in arr[index].options) {
        document.querySelectorAll("aside")[i].children[0].checked = false;
        document.querySelectorAll("aside")[i].children[0].value = arr[index].options[i];

        document.querySelectorAll(".op aside")[i].children[1].innerHTML = arr[index].options[i];
    }

}
getQuestion();

document.querySelector(".btn button").onclick = () => {
    seconds = 10;
    clearInterval(id);

    checkAnswer();
    index++;
    getQuestion();

}

let checkAnswer = () => {
    var useroup;
    if (document.querySelectorAll(".op input")[0].checked) {
        useroup = document.querySelectorAll('.op input')[0].value;
        console.log("hg");
    }
    else if (document.querySelectorAll('.op input')[1].checked) {
        useroup = document.querySelectorAll('.op input')[1].value;

    } else if (document.querySelectorAll('.op input')[2].checked) {
        useroup = document.querySelectorAll('.op input')[2].value;

    } else if (document.querySelectorAll('.op input')[3].checked) {
        useroup = document.querySelectorAll('.op input')[3].value;

    }
     (arr[index].answer == useroup) ? document.querySelector(".correct").innerHTML = ++correct : document.querySelector(".incorrect").innerHTML = ++incorrect;
    }


var checkresult = function () {
    document.querySelector("article").style.display = "none";
    // document.querySelector(".result").classList.remove("none");
    document.querySelector(".result").style.display = "block";

    document.querySelector(".result h1").innerHTML = username;
    document.querySelector("h2 span").innerHTML = correct;
    clearInterval(id);


}




   document.querySelector(".yes").onclick = function () {
        index = 0;
        id;
        seconds = 10;
        correct = 0;
        incorrect = 0;
document.querySelector(".timer .second").innerHTML = seconds;

        document.querySelector(".result").style.display = "none";
        document.querySelector("article").style.display = "block";
        document.querySelector(".correct").innerHTML = 0;
        document.querySelector(".incorrect").innerHTML = 0;
        document.querySelector(".btn button").disabled = false;
        getQuestion();
        
    }

   document.querySelector(".no").onclick = function () {
    document.querySelector(".over").innerHTML = "game over";
   }