const majnu = document.getElementById("majnu");
const laila = document.getElementById("laila");
function jump() {

    if(majnu.classList != "jump"){    
    majnu.classList.add("jump");

    
setTimeout(function (){




    majnu.classList.remove("jump");
}, 300);

}
    }
    

let isAlive = setInterval(function(){

let majnuTop =parseInt( window.getComputedStyle(majnu).getPropertyValue("top"));

let lailaLeft = parseInt(window.getComputedStyle(laila).getPropertyValue("left"));

if(lailaLeft <10 && lailaLeft > 0 && majnuTop >= 140){    
    alert("Majnu Distracted");    
}

},10);


document.addEventListener("keydown", function(event){
    jump();
})