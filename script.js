const playpause=document.querySelector('#pla');
const picon=document.querySelector('#picon');
const ptxt=document.querySelector('#pla span');


function toggleTxt(){
        if(ptxt.textContent==="Play"){
            ptxt.textContent="Pause";
        }
        else if(ptxt.textContent==="Pause"){
            ptxt.textContent="Play"
        }
    }
playpause.onclick=()=>{

    
    picon.classList.toggle('bx-play');
    toggleTxt();
    
}
;