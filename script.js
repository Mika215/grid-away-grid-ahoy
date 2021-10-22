const menu=document.getElementById("menu-1");
const toggler=document.querySelector(".toggler");


const show=()=>{
    menu.classList.add('show');
    console.log("Menu rendered")
    return;
}


const hide=()=>{
    menu.classList.add('hide');
    console.log("Menu hidden")
    return;
}

let clickCounter=0
toggler.addEventListener('click',()=>{
        clickCounter++
         if(clickCounter===2){
        hide();
    }else{
        show();
       
    }
    // window.top.location = window.top.location; 
   
})

