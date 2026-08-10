



/*footer*/
const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 250;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});






/*testimonials*/
const testimonials = [
{
    review:"From the moment we entered, we felt like royalty. Highly recommended!",
    name:"— Sophia L."
},
{
    review:"Amazing food, elegant ambience and outstanding service.",
    name:"— Daniel M."
},
{
    review:"One of the best fine dining experiences we've ever had.",
    name:"— Emma R."
}
];

let index = 0;

function showSlide(){
    document.getElementById("review").innerText =
    `"${testimonials[index].review}"`;

    document.getElementById("name").innerText =
    testimonials[index].name;
}

function nextSlide(){
    index++;
    if(index>=testimonials.length){
        index=0;
    }
    showSlide();
}

function prevSlide(){
    index--;
    if(index<0){
        index=testimonials.length-1;
    }
    showSlide();
}

showSlide();