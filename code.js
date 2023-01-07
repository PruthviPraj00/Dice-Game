let randomnumber = Math.floor(Math.random() * 6) + 1 ;

let source = "images/dice" + randomnumber + ".png";

document.querySelectorAll("img")[0].setAttribute("src", source);




let randomnumber2 = Math.floor(Math.random() * 6) + 1 ;

let source2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", source2);




if (randomnumber > randomnumber2) {
    document.querySelector("h2").innerHTML= "🏆Player 1 Wins"
    
} 
else if(randomnumber < randomnumber2){

    document.querySelector("h2").innerHTML= "🏆Player 2 Wins"
}

else{

    document.querySelector("h2").innerHTML= "📍Draw📍"
}