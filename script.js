const panels =document.querySelectorAll('.panel')

panels.forEach(x=> {
   
    x.addEventListener("mouseover", () =>{
        removeActiveClasses()
        x.classList.add('active')
    }) 

})
 
function removeActiveClasses(){
    panels.forEach(x =>{
       
        x.classList.remove('active')
        
    })
}