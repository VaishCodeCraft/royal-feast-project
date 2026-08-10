const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll(".menu-buttons button");

function filterMenu(category, btn){

    buttons.forEach(button=>{
        button.classList.remove("active");
    });

    btn.classList.add("active");

    cards.forEach(card=>{

        if(card.classList.contains(category)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

}

window.onload=function(){
    filterMenu("starters",buttons[0]);
};
