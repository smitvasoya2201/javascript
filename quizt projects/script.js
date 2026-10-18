const questions = [
    {
        qns: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        ans: "var"
    },
    {
        qns: "Which method is used to print output in the browser console?",
        options: ["console.log()", "print()", "write()", "display()"],
        ans: "console.log()"
    },
    {
        qns: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["//", "/*", "#", "<!--"],
        ans: "//"
    },
    {
        qns: "Which data type is used to store true or false?",
        options: ["String", "Boolean", "Number", "Object"],
        ans: "Boolean"
    },
    {
        qns: "Which operator is used for strict equality in JavaScript?",
        options: ["==", "=", "===", "!="],
        ans: "==="
    }
];
let index = 0;
let id;
let currect = 0;
let incurrect = 0;

var username = prompt("Enter your name :")

function timer() {
    let second = 10;
    document.querySelector('.second').innerHTML = second;

    id = setInterval(() => {
        if (second == 0) {
            clearInterval(id);
            index++;
            checkQuestion();
            getQuestion();
            return;
        }
        second--;
        document.querySelector('.second').innerHTML = second;
    }, 1000);
}

function getQuestion() {
    timer();
    document.querySelector(".qs i").innerHTML = index + 1;
    document.querySelector(".qs span").innerHTML = questions[index].qns;
    for (const i in questions[index].options) {
        document.querySelectorAll("aside")[i].children[0].checked = false;
        document.querySelectorAll("aside")[i].children[0].value = questions[index].options[i];
        document.querySelectorAll("aside")[i].children[1].innerHTML = questions[index].options[i];
    }
}
getQuestion();


function checkQuestion() {
    var useropt;
    if (document.querySelectorAll('.op input')[0].checked) {
        useropt = document.querySelectorAll('.op input')[0].value;
    } else if (document.querySelectorAll('.op input')[1].checked) {
        useropt = document.querySelectorAll('.op input')[1].value;
    } else if (document.querySelectorAll('.op input')[2].checked) {
        useropt = document.querySelectorAll('.op input')[2].value;
    } else if (document.querySelectorAll('.op input')[3].checked) {
        useropt = document.querySelectorAll('.op input')[3].value;
    }
    (questions[index - 1].ans == useropt) ? document.querySelector('.correct').innerHTML = ++currect : document.querySelector('.incorrect').innerHTML = ++incurrect;
}

document.querySelector("button").onclick = function () {
    clearInterval(id);
    index++;
    if (index >= questions.length) {
        checkQuestion();
        document.querySelector(".result").style.display = "block";
        document.querySelector(".result span").innerHTML = currect;
        document.querySelector(".result h1").innerHTML = username;
        console.log("Here");
        return;
    }
    checkQuestion();
    getQuestion();
}




document.querySelector(".yes").onclick = function () {
    index = 0;
    currect = 0;
    incurrect = 0;
    document.querySelector('.correct').innerHTML = 0;
    document.querySelector('.incorrect').innerHTML = 0;

    document.querySelector(".result").style.display = "none";
    getQuestion();
}

document.querySelector(".no").onclick = function (){
    document.body.innerHTML = "";
    document.write("<h1>Game Over</h1>");
}