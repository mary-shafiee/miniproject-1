////////////////////////sticky navbar///////////////////////////////////////////////////////////
const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav());
function fixNav(){
     if(window.scrollY > nav.offsetHeight + 150){
         nav.classList.add('active')
     }else{
         nav.classList.remove('active')
     }
 }
/////////////////////////search ////////////////////////////////////////////////////////////
const search = document.querySelector('.search');
const btn=document.querySelector('.btn');
const input= document.querySelector('.input');
// btn.addEventListener('click', openSearch());
// function openSearch(){
//     search.classList.toggle('active');
//     input.focus();
// }
btn.addEventListener('click' , () => {
    search.classList.toggle('active')
    input.focus();
})
////////////////////////////////////////split landing pages///////////////////////////////////////// 
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const container2 = document.querySelector('.container2');

left.addEventListener('mouseenter', () => container2.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container2.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => container2.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container2.classList.remove('hover-right'))

/////////////////////////////////////button ripple//////////////////////////////////////////
const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('click', function(e){
        const x=e.clientX
        const y=e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top=yInside + 'px'
        circle.style.left= xInside +'px'
        this.appendChild(circle)
        setTimeout ( () => circle.remove(), 500)
        

    })
})