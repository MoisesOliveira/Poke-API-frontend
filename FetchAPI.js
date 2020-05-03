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

                let para = document.createElement('p');
                let node = document.createTextNode(`${pokeName}`);
                para.appendChild(node);
                let div = document.getElementById('div1');
                div.appendChild(para);
            }
        } 
    }

getData();