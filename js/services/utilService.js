'use strict'

function saveToStorage(key, value){
    const strValue = JSON.stringify(value)
    localStorage.setItem(key, strValue)
}

function loadFromStorage(key){
    const strValue = localStorage.getItem(key)
    return JSON.parse(strValue)
}

function setBgc() {
    const bgc = loadFromStorage('user').color
    const elBody = document.querySelector('body')
    elBody.style.backgroundColor = bgc
}