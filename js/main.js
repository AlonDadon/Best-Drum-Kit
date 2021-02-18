'use strict'

function init() {
    window.addEventListener('keydown',playSound) 
}

function playSound(ev) {
    const key = document.querySelector(`[data-key="${ev.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
    const keys = document.querySelectorAll('.key')
    keys.forEach(key => key.addEventListener('transitionend',removeTransition))

    if(gIsFirstTouch === true){
        gIsFirstTouch = false
        hideFirstTouch()
    } 
}
function removeTransition(ev){
    if (ev.propertyName !== 'transform')return
    this.classList.remove('playing')
}

