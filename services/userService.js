'use strict'

// SAVING AND READING USER-PREF

function saveToStorage(key, value){
    const srtValue = JSON.stringify(value)
    localStorage.setItem(key, strValue)
}

function loadFromStorage(key){
    const strValue = localStorage.getItem(key)
    return JSON.parse(strValue)
}