let circularprogress=document.querySelector(".circular-progress"),
    progressvalue=document.querySelector(".progress-value")

let startvalue=0,
    endvalue=100;
    speed=50;
let progress=setInterval(()=>{
    startvalue++;
    console.log(startvalue)
    progressvalue.textContent=`${startvalue}%`
    circularprogress.style.background=`conic-gradient( purple ${startvalue*3.6}deg, #ededed 0deg)`
    if(startvalue==endvalue){
        clearInterval(progress)
    }
},speed)