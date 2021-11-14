function playSound(e){
    // selects the audio element where data-key="e.keyCode"
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    //if there is no audio element with the corresponding keyCode, then don't do anything
    if(!audio) return;
    audio.currentTime = 0
    audio.play()

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)

    key.classList.add('playing')
    moveKey(key);
}

function moveKey(key) {
    switch(key.classList[1]){

        case 'move10':
            key.classList.remove('move10');
            key.classList.add('move20');
            break;
        
        case 'move20':
            key.classList.remove('move20');
            key.classList.add('move30');
            break;
        
        case 'move30':
            key.classList.remove('move30');
            key.classList.add('move40');
            break;
        
        case 'move40':
            key.classList.remove('move40');
            key.classList.add('move50');
            break;

        case 'move50':
            key.classList.remove('move50');
            key.classList.add('move60');
            break;
        
        case 'move60':
            key.classList.remove('move60');
            key.classList.add('move70');
            break;
        
        case 'move70':
            key.classList.remove('move70');
            key.classList.add('move80');
            break;
                    
        case 'move80':
            key.classList.remove('move80');
            key.classList.add('move90');
            break;
        
        case 'move90':
            key.classList.remove('move90');
            key.classList.add('move100');
            break;
        
        case 'move100':
            key.classList.remove('move100');
            break;

        default:
            key.classList.add('move10')
    
    }
}
  
function removeTransition(e){
    //transitionend is triggered on a variety of properties, (border, box shadow, etc)
    // just select one - in this case 'transform'
    if(e.propertyName != 'transform') return;
    e.target.classList.remove('playing')
}
  
const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
