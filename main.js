const btnNext = document.getElementsByClassName("btn-next")[0];
const btnPrev = document.getElementsByClassName("btn-prev")[0];
const slider = document.getElementsByClassName("slider");
const circle = document.getElementsByClassName("fa-circle");
let indexCurrent = 0;
slider[indexCurrent].classList.add("active");
circle[indexCurrent].classList.add("threesCircle-active");
function removeClass (){
    for(let i = 0;i < slider.length;i++){
        slider[i].classList.remove("slider-current");
        slider[i].classList.remove("active");
        slider[i].classList.remove("slider-current-next");
        slider[i].classList.remove("slider-current-prev");
        slider[i].classList.remove("slider-current-prev-prev");
        circle[i].classList.remove("threesCircle-active");
    }
}
btnNext.addEventListener("click",() => {
    removeClass ();
    if(indexCurrent == slider.length - 1){
        indexCurrent = 0
        slider[indexCurrent].classList.add("slider-current");
        slider[slider.length - 1].classList.add("slider-current-next");
    }else{
        indexCurrent ++;
        slider[indexCurrent].classList.add("slider-current");
        slider[indexCurrent -1].classList.add("slider-current-next");
        
    }
    circle[indexCurrent].classList.add("threesCircle-active");
})

btnPrev.addEventListener("click",() => {
    removeClass ();
    if(indexCurrent == 0){
        indexCurrent = slider.length - 1
        slider[indexCurrent].classList.add("slider-current-prev");
        slider[0].classList.add("slider-current-prev-prev");
    }else{
        indexCurrent --;
        slider[indexCurrent].classList.add("slider-current-prev");
        slider[indexCurrent + 1].classList.add("slider-current-prev-prev");
        
    }
    circle[indexCurrent].classList.add("threesCircle-active");
})

for(let i = 0; i <circle.length;i++){
    circle[i].addEventListener("click",()=>{
        removeClass ();
        if(i < indexCurrent){
            slider[i ].classList.add("slider-current-prev");
            slider[i +1].classList.add("slider-current-prev-prev");
        }else{
            slider[i].classList.add("slider-current");
            slider[i - 1].classList.add("slider-current-next");
        }
        circle[i].classList.add("threesCircle-active");
    })
}
