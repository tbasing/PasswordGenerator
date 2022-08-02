const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1EL = document.getElementById("pass1-el")
let pass2EL = document.getElementById("pass2-el")


function generate() {
    pass1EL.textContent = getPassword()
    pass2EL.textContent = getPassword()
    
}

function getRandom() {
    return Math.floor(Math.random() * characters.length)
}

function getPassword() {
    let pass = ""
    for (let i = 0; i < 15; i++) {
        pass += characters[getRandom()]
    }
    return pass
}