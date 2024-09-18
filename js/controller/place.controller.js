'use strict'

function onInit() {
    setBgc()
    initMap()
    renderPlaces()
}

function renderPlaces() {
    const elList = document.querySelector('.places-list')
    let strHTML = ''
    gPlaces.forEach(place => strHTML += `<li>${place.name}
        <button onclick="onRemovePlace('${place.id}')">X</button> </li>`)
    elList.innerHTML = strHTML
}

function onRemovePlace(placeId) {
    gPlaces = gPlaces.filter(place => place.id !== placeId)
    renderPlaces()
}