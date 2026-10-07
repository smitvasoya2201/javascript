document.getElementById("submitBtn").onclick = function (event) {
    event.preventDefault();


    let form = {
        fname: document.getElementById("name").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value
    };

    if (document.getElementById("name").value == "") {
        document.getElementsByClassName("vali")[0].style.display = "block";
        document.getElementsByClassName("vali")[0].style.color = "red";
        return;
    }
    if (document.getElementById("age").value == "" || !document.getElementById("age").value.includes("number")) {
        // document.getElementsByClassName("vali")[1].style.display  = "block";
        document.getElementsByClassName("vali")[1].style.color = "red";
        return;
    }
    if (document.getElementById("email").value == "" || !document.getElementById("email").value.includes("@gmail.com")) {
        document.getElementsByClassName("vali")[2].style.color = "red";
        return;
    }
    if (document.getElementById("password").value == "") {
        document.getElementsByClassName("vali")[3].style.color = "red";
        return;
    }
    if (document.getElementById("confirmPassword").value == "" || document.getElementById("confirmPassword").value != document.getElementById("password").value) {
        document.getElementsByClassName("vali")[4].style.color = "red";
        return;
    }
    console.log(form);
}


