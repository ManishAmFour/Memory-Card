export function uniqueRandomNumArrayGenerator(ModifiedArray) {
  const Array = [];
  //const randomNumArray = [];

  for (let i = 0; Array.length < 27; i++) {
    let randomNumber = Math.floor(Math.random() * 27);
    if (Array.length === 0) {
      Array.push(randomNumber);
    } else {
      if (!Array.includes(randomNumber)) {
        Array.push(randomNumber);
      }
    }
  }

  for (let i = 0; i < Array.length; i++) {
    ModifiedArray.forEach((imageLink, index) => {
      if (index === Array[i]) {
        Array[i] = imageLink;
      }
    });
  }

  return Array;
}
