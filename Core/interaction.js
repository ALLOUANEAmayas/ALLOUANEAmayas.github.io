function agrandirImage (id) {
   document.getElementsByID(id).style.position = "absolute";
   document.getElementsByID(id).style.top = "50%";
   document.getElementsByID(id).style.left = "50%";
   document.getElementsByID(id).style.transform = "translate(-50%, -50%) scale(2)";

}
function retrecirImage(id){
    document.getElementsByID(id).style.position = "translate(-50%, -50%) scale(2)";
   document.getElementsByID(id).style.top = "relative";
   document.getElementsByID(id).style.left = "auto";
   document.getElementsByID(id).style.transform = "auto";
}

const voitureX = document.querySelector('.voitureX');

voitureX.addEventListener('mouseout',()=>{
      voitureX.classList.add('is-hovered');
});

voitureX.addEventListener('mouseout',() => {
    voitureX.classList.remove('is-hovered');
})

