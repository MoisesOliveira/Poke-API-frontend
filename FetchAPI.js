operations = {
    method: 'get',
    mode: 'cors'
}
let offset = 0;
let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
let nextButton = document.getElementById('nextPage');
nextButton.addEventListener('click', ()=>{
    url = `https://pokeapi.co/api/v2/pokemon?offset=${offset+20}&limit=20`;
    console.log(url);
    getData();
    return url;
    
});


getData = () =>{
    fetch(url,operations).
    then( (res) => res.json()
    .then(data => showData(data)))

    showData = (result) =>{
           for(const fields in result.results){
               let pokeName = result.results[fields].name;
               showStatus(pokeName);
            }
        }
    showStatus = (name) =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`,operations).
    then( (res) => res.json()
    .then(data => {
        console.log(data.sprites.front_default);
        let div = document.getElementById('div1');
        let divPoke = document.createElement('div');
        let h1Name = document.createElement('h2');
        let h2HP = document.createElement('h2');
        let h2Type = document.createElement('h2');
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
        divPoke.appendChild(h2HP);
        divPoke.appendChild(h2Type);
    }))
    
    } 
    }

getData();