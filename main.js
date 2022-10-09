// This function refers to the signup page

function signUp(){
    window.location.href = "http://127.0.0.1:5500/signUp.html";
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

