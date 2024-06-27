let circularprogress1=document.querySelector(".circular-progress1"),
    progressvalue1=document.querySelector(".progress-value1")

let startvalue1=0,
    endvalue1=90;
    speed1=80;
let progress1=setInterval(()=>{
    startvalue1++;
    console.log(startvalue1)
    progressvalue1.textContent=`${startvalue1}%`
    circularprogress1.style.background=`conic-gradient( #59b2f4 ${startvalue1*3.6}deg, #ededed 0deg)`
    if(startvalue1==endvalue1){
        clearInterval(progress1)
    }
},speed1)

let circularprogress2=document.querySelector(".circular-progress2"),
    progressvalue2=document.querySelector(".progress-value2")

let startvalue2=0,
    endvalue2=80;
    speed2=80;
let progress2=setInterval(()=>{
    startvalue2++;
    console.log(startvalue2)
    progressvalue2.textContent=`${startvalue2}%`
    circularprogress2.style.background=`conic-gradient( #59b2f4 ${startvalue2*3.6}deg, #ededed 0deg)`
    if(startvalue2==endvalue2){
        clearInterval(progress2)
    }
},speed2)

let circularprogress3=document.querySelector(".circular-progress3"),
    progressvalue3=document.querySelector(".progress-value3")

let startvalue3=0,
    endvalue3=90;
    speed3=100;
let progress3=setInterval(()=>{
    startvalue3++;
    console.log(startvalue3)
    progressvalue3.textContent=`${startvalue3}%`
    circularprogress3.style.background=`conic-gradient( #59b2f4 ${startvalue3*3.6}deg, #ededed 0deg)`
    if(startvalue3==endvalue3){
        clearInterval(progress3)
    }
},speed3)


let circularprogress4=document.querySelector(".circular-progress4"),
    progressvalue4=document.querySelector(".progress-value4")

let startvalue4=0,
    endvalue4=94;
    speed4=100;
let progress4=setInterval(()=>{
    startvalue4++;
    console.log(startvalue4)
    progressvalue4.textContent=`${startvalue4}%`
    circularprogress4.style.background=`conic-gradient( #59b2f4 ${startvalue4*3.6}deg, #ededed 0deg)`
    if(startvalue4==endvalue4){
        clearInterval(progress4)
    }
},speed4)

let circularprogress5=document.querySelector(".circular-progress5"),
    progressvalue5=document.querySelector(".progress-value5")

let startvalue5=0,
    endvalue5=80;
    speed5=100;
let progress5=setInterval(()=>{
    startvalue5++;
    console.log(startvalue5)
    progressvalue5.textContent=`${startvalue5}%`
    circularprogress5.style.background=`conic-gradient( #59b2f4 ${startvalue5*3.6}deg, #ededed 0deg)`
    if(startvalue5==endvalue5){
        clearInterval(progress5)
    }
},speed5)

let circularprogress6=document.querySelector(".circular-progress6"),
    progressvalue6=document.querySelector(".progress-value6")

let startvalue6=0,
    endvalue6=90;
    speed6=100;
let progress6=setInterval(()=>{
    startvalue6++;
    console.log(startvalue6)
    progressvalue6.textContent=`${startvalue6}%`
    circularprogress6.style.background=`conic-gradient( #59b2f4 ${startvalue6*3.6}deg, #ededed 0deg)`
    if(startvalue6==endvalue6){
        clearInterval(progress6)
    }
},speed6)

let circularprogress7=document.querySelector(".circular-progress7"),
    progressvalue7=document.querySelector(".progress-value7")

let startvalue7=0,
    endvalue7=85;
    speed7=80;
let progress7=setInterval(()=>{
    startvalue7++;
    console.log(startvalue7)
    progressvalue7.textContent=`${startvalue7}%`
    circularprogress7.style.background=`conic-gradient( #59b2f4 ${startvalue7*3.6}deg, #ededed 0deg)`
    if(startvalue7==endvalue7){
        clearInterval(progress7)
    }
},speed7)

let circularprogress8=document.querySelector(".circular-progress8"),
    progressvalue8=document.querySelector(".progress-value8")

let startvalue8=0,
    endvalue8=78;
    speed8=100;
let progress8=setInterval(()=>{
    startvalue8++;
    console.log(startvalue8)
    progressvalue8.textContent=`${startvalue8}%`
    circularprogress8.style.background=`conic-gradient( #59b2f4 ${startvalue8*3.6}deg, #ededed 0deg)`
    if(startvalue8==endvalue8){
        clearInterval(progress8)
    }
},speed8)

let circularprogress9=document.querySelector(".circular-progress9"),
    progressvalue9=document.querySelector(".progress-value9")

let startvalue9=0,
    endvalue9=70;
    speed9=100;
let progress9=setInterval(()=>{
    startvalue9++;
    console.log(startvalue9)
    progressvalue9.textContent=`${startvalue9}%`
    circularprogress9.style.background=`conic-gradient( #59b2f4 ${startvalue9*3.6}deg, #ededed 0deg)`
    if(startvalue9==endvalue9){
        clearInterval(progress9)
    }
},speed9)

let circularprogress10=document.querySelector(".circular-progress10"),
    progressvalue10=document.querySelector(".progress-value10")

let startvalue10=0,
    endvalue10=70;
    speed10=100;
let progress10=setInterval(()=>{
    startvalue10++;
    console.log(startvalue10)
    progressvalue10.textContent=`${startvalue10}%`
    circularprogress10.style.background=`conic-gradient( #59b2f4 ${startvalue10*3.6}deg, #ededed 0deg)`
    if(startvalue10==endvalue10){
        clearInterval(progress10)
    }
},speed10)



const observer1=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show1');
        }
        else{
            entry.target.classList.remove('show1');
        }
    })
});
const observer2=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show2');
        }
        else{
            entry.target.classList.remove('show2');
        }
    })
});

const observer3=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show3');
        }
        else{
            entry.target.classList.remove('show3');
        }
    })
});
const container1=document.querySelectorAll('.container1');
container1.forEach((el)=>observer1.observe(el))

const container2=document.querySelectorAll('.container2');
container2.forEach((el)=>observer1.observe(el))

const container3=document.querySelectorAll('.container3');
container3.forEach((el)=>observer3.observe(el))

const container4=document.querySelectorAll('.container4');
container4.forEach((el)=>observer2.observe(el))

const container5=document.querySelectorAll('.container5');
container5.forEach((el)=>observer2.observe(el))

const container6=document.querySelectorAll('.container6');
container6.forEach((el)=>observer1.observe(el))

const container7=document.querySelectorAll('.container7');
container7.forEach((el)=>observer1.observe(el))

const container8=document.querySelectorAll('.container8');
container8.forEach((el)=>observer3.observe(el))

const container9=document.querySelectorAll('.container9');
container9.forEach((el)=>observer2.observe(el))

const container10=document.querySelectorAll('.container10');
container10.forEach((el)=>observer2.observe(el))


var typed=new Typed('.multipletext',{
    strings:['Machine Learning Engineer','Data Analyst','Data Scientist','Frontend Developer'],
    loop:true,
    typeSpeed:70,
    backSpeed:70,

})

////read more function//////
function changeReadMore() { 
	const mycontent = 
		document.getElementById('more'); 
	const mybutton = 
		document.getElementById('readmore1'); 
	const span1 = document.getElementById("dot") ;

	if (mycontent.style.display === 'none'
		|| mycontent.style.display === '') { 
		mycontent.style.display = 'inline'; 
		span1.style.display = "none"; 
		mybutton.textContent = 'Read Less'; 
	} else { 
		mycontent.style.display = 'none'; 
		mybutton.textContent = 'Read More'; 
		span1.style.display = "inline"; 
	} 
} 