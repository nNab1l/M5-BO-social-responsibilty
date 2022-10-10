// This function refers to the signup page

function signUp(){
    document.getElementById("js--signUp").style.display = "block";
}

function closeSignUp(){
    document.getElementById("js--signUp").style.display = "none";
}

let x = document.getElementById("login");
let y = document.getElementById("register");
let formButton = document.getElementById("btn");

        function register(){
            x.style.left = "-40rem";
            y.style.left = "5rem";
            formButton.style.left = "11rem";
        }

        function login(){
            x.style.left = "5rem";
            y.style.left = "45rem";
            formButton.style.left = "0rem";
        }



// This function open menubar on mobile
const button = document.getElementById("js--openMenu");
const addMenu = document.getElementsByClassName("header__nav")[0];
button.onclick = function(){ 
    if(addMenu.classList.contains("header__nav--openMenu")){ 
        addMenu.classList.remove("header__nav--openMenu");
    }
    else{
        addMenu.classList.add("header__nav--openMenu");
    }
}


