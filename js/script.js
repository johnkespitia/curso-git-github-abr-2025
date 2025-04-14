document.getElementById('searchBtn').addEventListener('click', () => {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase().trim();
    const pokemonInfo = document.getElementById('pokemonInfo');
  
    if (pokemonName === "") {
      pokemonInfo.innerHTML = "<p>Por favor, ingresa un nombre o ID de Pokémon.</p>";
      return;
    }
  
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokémon no encontrado');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        pokemonInfo.innerHTML = `
          <h2>${data.name.toUpperCase()}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p><strong>Altura:</strong> ${data.height}</p>
          <p><strong>Peso:</strong> ${data.weight}</p>
          <p><strong>Tipo:</strong> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        `;
      })
      .catch(error => {
        pokemonInfo.innerHTML = `<p>${error.message}</p>`;
      });
  });
  