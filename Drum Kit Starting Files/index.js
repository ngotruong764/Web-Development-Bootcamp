for(let i = 0; i < document.querySelectorAll('.drum').length; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        let buttonInnerHTML = this.innerHTML;
        AudioPlay(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}

document.addEventListener('keypress', function(event) {
    AudioPlay(event.key);
    buttonAnimation(event.key);
})

function AudioPlay(key){
    switch(key){
        case 'w':
            audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;  
        case 'j':
            audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;  
        case 'k':
            audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break; 
        case 'l':
            audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;  
        default:
            break;
    }
    
}

function buttonAnimation(key){
    let activeButton = document.querySelector("."+ key);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
    
}