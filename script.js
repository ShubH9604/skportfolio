const numbers=document.getElementById("lineNumbers")

for(let i=1;i<=28;i++){

const div=document.createElement("div")

div.textContent=i

numbers.appendChild(div)

}

function openRepo(project){

    const repos={
    dreamcontrol:"https://github.com/GenRobo/DreamControl",
    careercompass:"https://github.com/ShubH9604/CareerCompass",
    hrdata:"https://github.com/ShubH9604/HR-Data-Analytics"
    }
    
    window.open(repos[project],"_blank")
    
    }


function openTab(id,e){

document.querySelectorAll(".code").forEach(c=>{
c.classList.remove("active")
})

document.querySelectorAll(".tab").forEach(t=>{
t.classList.remove("active")
})

document.getElementById(id).classList.add("active")

e.target.classList.add("active")

}



/* typing animation */

const name="Shubh Kalaria"

const roles=[
"I'm a ML Fanatic",
"I'm an AI Research Intern",
"I'm a RL Explorer",
"I'm a Web Developer"
]

let roleIndex=0
let charIndex=0
let typing=true

function animate(){

const nameEl=document.querySelector(".name")
const roleEl=document.querySelector(".typing")

nameEl.textContent=name

let text=roles[roleIndex]

if(typing){

roleEl.textContent=text.substring(0,charIndex)
charIndex++

if(charIndex>text.length){
typing=false
setTimeout(animate,1200)
return
}

}else{

roleEl.textContent=text.substring(0,charIndex)
charIndex--

if(charIndex<0){
typing=true
roleIndex=(roleIndex+1)%roles.length
}

}

setTimeout(animate,70)

}

animate()
