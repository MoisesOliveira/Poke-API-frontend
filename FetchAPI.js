operations = {
    method: 'get',
    mode: 'cors'
}
let offset = 0;
let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
let nextButton = document.getElementById('nextPage');
let searchInp;
let search = document.getElementById('searchBtn');
let popup = document.getElementById('popup');
let overlay = document.getElementById('overlay');

search.addEventListener('click',()=>{
    searchInp = document.getElementById('inpSearch').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchInp}`,operations).
    then( (res) => res.json()
    .then(data => {
            let htmlElements = {
                pokeName : document.getElementById('pokeName'),
                pokeImg : document.getElementById('imgPoke'),
                pokeHP : document.getElementById('pokeHP'),
                pokeType : document.getElementById('pokeType')
            }
            htmlElements.pokeImg.src = data.sprites.front_default;
            htmlElements.pokeName.innerHTML = data.name;
            htmlElements.pokeHP.innerHTML = `HP: ${data.stats[5].base_stat}`;
            htmlElements.pokeType.innerHTML = `Type: ${data.types[0].type.name}`;
            let popup = document.getElementById('popup');
            let overlay = document.getElementById('overlay');
            popup.style.display = 'block';
            popup.style.visibility = 'visible';
            console.log('showing');
            overlay.style.opacity = 0.5;
            overlay.style.pointerEvents = 'all';

            
            }
            )
        )
    }
)

overlay.addEventListener('click',()=>{
    popup.style.visibility = 'hidden';
    overlay.style.opacity = 1;
})

nextButton.addEventListener('click', ()=>{
    offset=offset+20;
    url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
    getData(url);
});


let getData = (url) =>{
    fetch(url,operations).
    then( (res) => res.json()
    .then(data => showData(data)))

    showData = (result) =>{
           for(const fields in result.results){
               let pokeName = result.results[fields].name;
               showStats(pokeName);
            }
        } 
    }
const showStats = (name) =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`,operations).
    then( (res) => res.json()
    .then(data => {
        //console.log(data.sprites.front_default);
        let div = document.getElementById('div1');
        let divPoke = document.createElement('div');
        let h1Name = document.createElement('h2');
        let h2HP = document.createElement('h2');
        let h2Type = document.createElement('h2');
        let h2 = document.createElement('h2');
        let br = document.createElement('br');
        h2.innerHTML = 'h2 element';
        h2Type.innerHTML = `Type: ${data.types[0].type.name}`;
        h2HP.innerHTML = `HP: ${data.stats[5].base_stat}`;
        h1Name.id = 'h1Name';
        divPoke.id = 'divPoke';
        h1Name.innerHTML = data.name;
        let img = document.createElement('img');
        img.src = data.sprites.front_default;
        div.appendChild(divPoke);
        divPoke.appendChild(img);
        divPoke.appendChild(h1Name);
        divPoke.appendChild(br);
        divPoke.appendChild(h2HP);
        divPoke.appendChild(h2Type);
    }))
    
    }

getData(url);

