export function uniqueRandomNumArrayGenerator(ModifiedArray) {
  const Array = [
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

  for (let i = 0; check(); i++) {
    let RandomNumber = Math.floor(Math.random() * 28);
    Array[i] = RandomNumber;
  }

  function check() {
    for (let i = 0; i < Array.length; i++) {
      if (Array[i] !== "") {
        return false;
      } else {
        return true;
      }
    }
  }

  return Array;
}
