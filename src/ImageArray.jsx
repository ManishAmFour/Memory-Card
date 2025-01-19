import { useState, useEffect } from "react";

async function FetchingTheData() {
  let pok1 = await fetch("https://pokeapi.co/api/v2/pokemon/1", {
    mode: "cors",
  });
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
  });
}

export function configuringTheData() {
  return FetchingTheData().then((binaryData) => {
    let url = binaryData;
    return url;
  });
}
