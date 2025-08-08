
let myLabels = document.querySelectorAll("label");
let mySelects = document.querySelectorAll("select");

let myObjects = [];
// localStorage.setItem("userFeedBacks", JSON.stringify(myObjects));
let myObj = {Rating: "", Affordability: "", Friendly: "", Beneficial: "", Services: ""};

function handleFeedback(){
    
        if(mySelects[0].value == ""){
            window.alert("Invalid Option");
        }
        else if(mySelects[1].value == ""){
            window.alert("You must select valid option")
        }
        else if(mySelects[2].value == ""){
            window.alert("Choose valid option")
        }
        else if(mySelects[3].value == ""){
            window.alert("Select valid option")
        }
        else if(mySelects[4].value == ""){
            window.alert("Invalid option !")
        }

        else{
            myObj.Rating = mySelects[0].value;
            myObj.Affordability = mySelects[1].value;
            myObj.Friendly = mySelects[2].value;
            myObj.Beneficial = mySelects[3].value;
            myObj.Services = mySelects[4].value;

            myObjects = JSON.parse(localStorage.getItem("userFeedBacks"));
            myObjects = [...myObjects, myObj];
            localStorage.setItem("userFeedBacks", JSON.stringify(myObjects));
            
            console.log(myObjects);
            console.log(myObj);

            mySelects.forEach(element =>{
                element.value = "";
            });

        }

}
