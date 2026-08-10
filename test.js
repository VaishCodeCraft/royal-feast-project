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