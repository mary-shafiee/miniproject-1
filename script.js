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