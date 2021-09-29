
/////////////////////////////////////////////expenidng-card////////////////////////////////////////
const panels=document.querySelectorAll('.panel')

panels.forEach(panel =>{

    panel.addEventListener('click', () =>
    {
        reamoveActiveClasses()
        panel.classList.add('active')
    })
        
})
function reamoveActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })

}
////////////////////////////////////////////auto-text-effect////////////////////////////////////////
const textEL= document.getElementById('text')
const speedEL=document.getElementById('speed')
const text = 'wellcome to this page'
let index=1
let speed=300/speedEL.value
writeText()

function writeText(){
    textEL.innerText = text.slice(0,index)
    index++
    if(index>text.length){
        index=1
    }
    setTimeout(writeText,speed)
}

speedEL.addEventListener('input', (e) => speed =300/e.target.value)
////////////////////////////////////////animated-countdown////////////////////////////
const nums=document.querySelectorAll('.num span')
const counter=document.querySelector('.counter')
const finalMessage=document.querySelector('.final')
const replay=document.getElementById('replay')

runAnimation()

function restDOM(){
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    nums.forEach((num)=> {
        num.classList.value=''
    })
    nums[0].classList.add('in')
}

function runAnimation(){
    nums.forEach((num,idx)=>{
        const nextTolist=nums.length - 1

        num.addEventListener('animationend',(e)=>{
            if(e.runAnimation === 'goIn' && idx!== nextTolist){
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.runAnimation==='goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            }else{
              
                counter.classList.add('hide')
                finalMessage.classList.add('show')
            }
        })
    })
}
if(replay){
replay.addEventListener('click' , () => {
    restDOM()
    runAnimation()
    
})}

