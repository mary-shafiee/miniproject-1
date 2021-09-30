//////////////////////////////////double-veritical-slider///////////
const sliderContainer=document.querySelector('.slider-container')
const slideRight=document.querySelector('.right-slide')
const slideLeft=document.querySelector('.left-slide')
const upButton=document.querySelector('.up-button')
const downButton=document.querySelector('.down-button')
const slidesLength=slideRight.querySelectorAll('div').length

let activeSlideIndex=0
slideLeft.getElementsByClassName.top=`-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide=(direction)=>{
    const sliderHeight= sliderContainer.clientHeight
    if(direction==='up'){
        activeSlideIndex++
        if(activeSlideIndex > slidesLength-1){
            activeSlideIndex=0
        }
    }
    slideRight.getElementsByClassName.transform=`translateY(-${activeSlideIndex*sliderHeight}px)`
    slideLeft.getElementsByClassName.transform=`translateY(${activeSlideIndex*sliderHeight}px)`

}
/////////////////////////////////////////random-image-feed///////////////////////////////////
const container= document.querySelector('.container')
const unsplashURL='https://source.unsplash.com/random/'
const row=5
for(let i = 0 ; i < row *3 ; i++){
    const img = document.createElement('img')
    img.src=`${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}
function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr}`
}
function getRandomNr(){
    return Math.floor(Math.random()*10) +300
}