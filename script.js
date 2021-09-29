
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