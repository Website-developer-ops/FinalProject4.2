
let labels = document.querySelectorAll("label");
let inputs = document.querySelectorAll("input");
let buttons = document.querySelectorAll("button");
let myHeading = document.querySelector("h1");
let myObj={};
let myObjects = [];

buttons[0].style.visibility = "hidden";
// localStorage.setItem("2025Registered", JSON.stringify(myObjects));
// Don't alter these functions try at your own risk

buttons[0].style.display = "";

function register(){
    setItems();

    if(String(myObj.first).length < 3 || String(myObj.first.length) > 15){
        window.alert("First Name must be between 3 - 15 characters");
    }
    else if(String(myObj.last).length < 3 || String(myObj.last).length > 15){
        window.alert("Last Name must be between 3 - 15 characters");
    }
    else if(String(myObj.phone).length != 12 || !(String(myObj.phone).startsWith("254"))){
        window.alert("Phone must start with 254 and must be 12 numbers");
    }
    else if(!(String(myObj.email).includes("@")) || !(String(myObj.email).endsWith(".com"))){
        window.alert("You must enter valid Email");
    }
    else if(String(myObj.password).length < 5 || String(myObj.password).length > 15){
        window.alert("Password must be between 5 - 15 characters");
    }
    else if(String(myObj.repeat) !== String(myObj.password)){
        window.alert("The two passwords must be matching");
    }

    else if(String(myObj.password) === String(myObj.repeat)){
        let oldUsers = JSON.parse(localStorage.getItem("2025Registered"));
        // endRegistrationLogic();
        oldUsers.forEach((element, index) => {
            if(element.phone == myObj.phone || element.email == myObj.email){
                myHeading.textContent = "You are already registered in the system";
                hideElements();
            }
            else{
                endRegistrationLogic();
            }
        });
        console.log(myObj);      
    }
}

function endRegistrationLogic(){   
        let email = String(myObj.email);
        let midPoint = email.indexOf("@");
        let message = `${email.slice(0, 3)}**********${email.slice(midPoint)}`;
        myHeading.textContent = `${message} Registration is successful`;

        let myUsers = JSON.parse(localStorage.getItem("2025Registered"));
        myUsers = [...myUsers, myObj];

        // console.log(myUsers);

        myUsers = JSON.stringify(myUsers);
        localStorage.setItem("2025Registered", myUsers);

        hideElements();
}

function setItems(){
    myObj = {
                first: inputs[0].value, last: inputs[1].value, phone: inputs[2].value, email: inputs[3].value,
                password: inputs[4].value, repeat: inputs[5].value
            }
}

// Function to display unique Users
function checkUsers(){
    let myUsers = JSON.parse(localStorage.getItem("2025Registered"));
    
    const seenEmails = new Set();
    const seenPhones = new Set();
    const uniqueUsers = [];

    myUsers.forEach(user =>{
        const email = user.email?.toLowerCase().trim();
        const phone = user.phone?.trim();

        if(!seenEmails.has(email) && !seenPhones.has(phone)){
            seenEmails.add(email);
            seenPhones.add(phone);
            uniqueUsers.push(user);
        }
    });

    myUsers = uniqueUsers;
    localStorage.setItem("2025Registered", JSON.stringify(myUsers));
    console.log(myUsers);
}
checkUsers();

function hideElements(){
    buttons[0].style.visibility = "visible";
    buttons[1].style.visibility = "hidden";

    inputs.forEach((element, index) => {
        element.style.visibility = "hidden";
        labels[index].style.visibility = "hidden";
    });
}

