operations = {
    method: 'get',
    mode: 'cors'
}
getData = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon",operations).
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
        console.log(data.sprites.back_default);
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
        img.src = data.sprites.back_default;
        div.appendChild(divPoke);
        divPoke.appendChild(img);
        divPoke.appendChild(h1Name);
        divPoke.appendChild(h2HP);
        divPoke.appendChild(h2Type);
    }))
    
    } 
    }

getData();