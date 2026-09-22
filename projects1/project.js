var istrue = true;
while (istrue) {

    var num = parseInt(Math.random() * 100);
    var count = 10;
    while (true) {
        if (count == 0) {
            alert("you have no chances left");
            break;
        }
        var input = Number(prompt("enter guess number"));
        count--;
        if (num < input) {
            alert("too low " + " you have " + count + " chances left");
        } else if (num > input) {
            alert("too high " + " you have " + count + " chances left");
        } else {
            alert("correct!");
            break;
        }

    }
    istrue = confirm("do you want to play again?");
}