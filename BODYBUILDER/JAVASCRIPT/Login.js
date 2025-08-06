
let labels = document.querySelectorAll("label");
let inputs = document.querySelectorAll("input");
let buttons = document.querySelectorAll("button");
let myHeadings = document.querySelectorAll("h1");
buttons[0].style.visibility = "hidden";

function handleLogin(){

    let myUser = {myPhone: inputs[0].value, myPassword: inputs[1].value};
    let user = JSON.parse(localStorage.getItem("2025Registered"));
    // console.log(user);

    user.forEach((element, index) => {

        if(element.phone != myUser.myPhone || element.password != myUser.myPassword){
            myHeadings[0].textContent = `Either the username or passsword is wrong`;
        }
        else if(element.phone == myUser.myPhone  && element.password == myUser.myPassword){
            let cuurentPhone = String(myUser.myPhone);
            let message = `+${cuurentPhone.slice(0, 5)}*********${cuurentPhone.slice(10)} Welcome Back`;
            myHeadings[1].textContent = message;
            hideElements();  
        }
    });
}

function hideElements(){
    buttons[0].style.visibility = "visible";
    buttons[1].style.visibility = "hidden";
    myHeadings[0].style.visibility = "hidden";

    inputs.forEach((element, index) => {
        element.style.visibility = "hidden";
        labels[index].style.visibility = "hidden";
    });
}




