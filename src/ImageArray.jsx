let currentImage;
export async function FetchingTheData() {
  const ImageArray = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  await Promise.all(
    ImageArray.map(async (image, index) => {
      if (index !== 0) {
        let rawUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        let result = await rawUrl.json();
        ImageArray[index] = result.sprites.front_default;
      } else {
        let rawUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/8`);
        let result = await rawUrl.json();
        ImageArray[index] = result.sprites.front_default;
      }
    })
  );

  return ImageArray;

  /*
 
  
  
  let pok2 = await fetch("https://pokeapi.co/api/v2/pokemon/2", {
    mode: "cors",
  });
  let pok3 = await fetch("https://pokeapi.co/api/v2/pokemon/3", {
    mode: "cors",
  });
  let pok4 = await fetch("https://pokeapi.co/api/v2/pokemon/4", {
    mode: "cors",
  });
  let pok5 = await fetch("https://pokeapi.co/api/v2/pokemon/5", {
    mode: "cors",
  });
  let pok6 = await fetch("https://pokeapi.co/api/v2/pokemon/6", {
    mode: "cors",
  });
  let pok7 = await fetch("https://pokeapi.co/api/v2/pokemon/7", {
    mode: "cors",
  });
  let pok8 = await fetch("https://pokeapi.co/api/v2/pokemon/8", {
    mode: "cors",
  });
  let pok9 = await fetch("https://pokeapi.co/api/v2/pokemon/9", {
    mode: "cors",
  });
  let pok10 = await fetch("https://pokeapi.co/api/v2/pokemon/10", {
    mode: "cors",
  });*/
}
