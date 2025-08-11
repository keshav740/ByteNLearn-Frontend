const sections = document.querySelectorAll("section");
const cards = document.querySelectorAll(".card");


// console.log("hellow")

function revealOnScroll(){
    const trigger = window.innerHeight - 100;
    sections.forEach(sec =>{
        const top = sec.getBoundingClientRect().top;
        if (top < trigger){
            sec.classList.add("visible");
        }
    });

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < trigger){
            card.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);