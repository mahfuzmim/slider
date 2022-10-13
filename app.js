const slides = document.querySelectorAll(".slide");
const nxtBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide, value){
    slide.style.left = `${value * 100}%`;

});
let counter = 0;

nxtBtn.addEventListener("click", ()=>{
    counter++;
    carousel();





})
prevBtn.addEventListener("click", ()=>{
    counter--;
    carousel();
    
})
 function carousel(){
    // if(counter>slides.length-1){
    //     counter = 0;
    //  }
    //  else if(counter<0){
    //     counter = slides.length-1;
    //  }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)` ;

    })
    
     if(counter>0){
        prevBtn.style.display = "block";
    
    }
    else{
        prevBtn.style.display = "none";


    }
    if(counter===slides.length-1){
        nxtBtn.style.display = "none";
    }
    else{
        nxtBtn.style.display = "block";
    }

 }
 if(counter === 0){
    prevBtn.style.display = "none";
}



 









