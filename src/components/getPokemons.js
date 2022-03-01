export const getPokemons = async (limit, offset) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  const resp1 = await fetch(url);
  const { results } = await resp1.json();

  const pokemons = await Promise.all(
    results.map(async (result) => {
      const resp2 = await fetch(result.url);
      const value = await resp2.json();
      return {
        id: value.id,
        name: value.name,
        image: value.sprites.front_default,
      };
    })
  );

  return pokemons;
};
