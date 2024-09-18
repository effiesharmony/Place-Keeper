'use strict'
// MAIN JS - CRUDL

var gPlaces = [
    {
        id: 'p1',
        lat: 32.1416,
        lng: 34.831213,
        name: `Puki's house`
    },

    {
        id: 'p2',
        lat: 32.076448,
        lng: 34.818711,
        name: `Luli's house`
    }

]

let map

async function initMap() {
  const position = { lat: -25.344, lng: 131.031 }
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps")
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  })

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  })
}

