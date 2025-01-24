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
        let rawUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/27`);
        let result = await rawUrl.json();
        ImageArray[index] = result.sprites.front_default;
      }
    })
  );

  return ImageArray;
}
