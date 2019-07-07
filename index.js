function tom1()
{ 
    console.log("I got clickeck")
    let tom1 =  new Audio("./sounds/tom-1.mp3")
    document.querySelector(".w").classList.toggle("pressed") //finds the index 0 of the elements with class 'w' and adds pressed o its classlist.
    tom1.play()
}
function tom2()
{ 
    console.log("I got clickeck")
    let tom2 =  new Audio("./sounds/tom-2.mp3")
    document.querySelector(".a").classList.toggle("pressed")
    tom2.play()
}
function tom3()
{ 
    console.log("I got clickeck")
    let tom3 =  new Audio("./sounds/tom-3.mp3")
    document.querySelector(".j").classList.toggle("pressed")
    tom3.play()
}
function tom4()
{ 
    console.log("I got clickeck")
    let tom4 =  new Audio("./sounds/tom-4.mp3")
    document.querySelector(".k").classList.toggle("pressed")
    tom4.play()
}
function crash()
{ 
    console.log("I got clickeck")
    let crash =  new Audio("./sounds/crash.mp3")
    document.querySelector(".l").classList.toggle("pressed")
    crash.play()
}
function pedal()
{ 
    console.log("I got clickeck")
    let pedal =  new Audio("./sounds/kick-bass.mp3")
    document.querySelector(".s").classList.toggle("pressed")
    pedal.play()
}
function snare()
{ 
    console.log("I got clickeck")
    let snare =  new Audio("./sounds/snare.mp3")
    document.querySelector(".d").classList.toggle("pressed")
    snare.play()
}

// Eevent listeners for keyboard presses
document.addEventListener("keypress", function(event){
    let key = event.key

    switch (key) {
        case "w":
            tom1()
            break;
    
        case "a":
            tom2()
            break;
    
        case "s":
            pedal()
            break;
    
        case "d":
            snare()
            break;
    
        case "j":
            tom3()
            break;
    
        case "k":
            tom4()
            break;
    
        case "l":
            crash()
            break;
    
        default:
            console.log(key)
            break;
    }
})