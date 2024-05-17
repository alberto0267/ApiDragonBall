const listaDragonBall = document.getElementById('descripcionGeneral');

let URL = "https://dragonball-api.com/api/characters/";

for(let i=1 ; i<10; i++){

    fetch(URL  +i)
    .then((repsonse)=> repsonse.json())
    .then (data => mostrarDragon(data))
}

// fetch(URL).then((response) => response.json()).then((data) => {
//     let dragons = data.items;
//     dragons.forEach((dragon) => {
//         mostrarDragon(dragon);
//     });
// });



function mostrarDragon(dragon){
    const div = document.createElement('div');

    div.classList.add('descripcionGeneralita');
    div.innerHTML = `<div class="personaje">
    <div id="imagen-personaje">
    <img src="${dragon.image}" alt="">
     </div>
    <p class="especificaciones" id="Nombre">Nombre:${dragon.name}</p>
     <p class="especificaciones" id="baseKI">KiBase:${dragon.ki}</p>
    <p class="especificaciones" id="TotalKI">KiTotal: ${dragon.maxKi}</p>
    <p class="especificaciones" id="clan"> Clan:${dragon.affiliation}</p>
    <p class="especificaciones" id="descripcion"> Descripcion:${dragon.description}</p>
</div>
`;
listaDragonBall.append(div);
}



// let page = 2;
// const URL1 = "https://dragonball-api.com/api/characters?page=2&limit=10";

// function fetchNextPage() {
//    URL++;
//     fetch(URL1)
//     .then((repsonse)=> repsonse.json())
//     .then (data => mostrarDragon2(data))

//     function siguientePagina(mostrarDragon2){
//         div.classList.add('descripcionGeneralita');
//         div.innerHTML = `<div class="botones">
//          <div id="botones">
//         <button id="Anterior">${mostrarDragon2.next}</button>
//         <button id="Siguiente">Siguiente</button>
// </div> `;
//     }
// }
