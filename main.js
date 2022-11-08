//PART 1
let alertForm = document.querySelector("#alertForm");
let alertInput = document.querySelector("#alertInput");

alertForm.addEventListener("submit",function(event){
    event.preventDefault();
    alert(alertInput.value);
    alertInput.value = "";//resetting text box resetting to default values 
});

//PART 2
//sandwichForm variables/querySelectors
let sandwichForm = document.querySelector("#sandwichForm");
let ingredients = document.querySelectorAll("#sandwichForm .ingredients");
//for of loop just to check we are querySelectorAll(ing) correctly
for(let item of ingredients){
    console.log(item.id)
}
//sandwichForm eventListener
sandwichForm.addEventListener("submit", function(event){
    event.preventDefault();
    let newStr = "";
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked === true){
            newStr += `${ingredients[i].id}, `;//because the name of our ingredients are stored in input ids
        }
    }
    console.log(newStr);//just to check in inspect console
    alert(`Your sandwich contains: ${newStr}`);
    
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].checked === true){
            ingredients[i].checked = false;
        }
    }
});

//Part 3
//haircutForm variables/querySelectors
let haircutForm = document.querySelector("#haircutForm");
let date = document.querySelector("#date");
let stylist = document.querySelector("#stylist");
let longHairRadio = document.querySelector("#longHair");
let shortHairRadio = document.querySelector("#shortHair");

//haircutForm eventListener
haircutForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(longHairRadio.checked === true){
        alert(`Haircut scheduled for ${date.value} with ${stylist.value} for long hair.`);
    }else if(shortHairRadio.checked === true){
        alert(`Haircut scheduled for ${date.value} with ${stylist.value} for short hair.`);
    }
    //resetting inputs to default values
    date.value = "";
    stylist.value = "";
    longHairRadio.checked = false;
    shortHairRadio = false;
});

//Part 4
//accountForm variables/querySelectors
let accountForm = document.querySelector("#accountForm");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");

//accountForm eventListener
accountForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(password.value !== confirmPassword.value){
        alert("PASSWORDS DO NOT MATCH! PLEASE TRY AGAIN!");
    }else if(username.value.length < 3){
        alert("USERNAME MUST BE AT LEAST 3 CHARACTERS LONG! PLEASE RE-ENTER A VALID USERNAME!")
    }else if(password.value.length < 4){
        alert("PASSWORD MUST BE AT LEAST FOUR CHARACTERS LONG! PLEASE RE-ENTER A VALID PASSWORD!")
    }else{
        alert(`An account has been created for username: ${username.value}, email address: ${email.value}`);
    }
    //resetting inputs to default values
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
});