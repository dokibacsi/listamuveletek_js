import { SZAMLISTA, SZOVEGLISTA } from "./adat.js";
console.log(SZAMLISTA);

$(() => {
  /*    let kevertIndexLista = keveres1(SZAMLISTA);
  /*for (let index = 0; index < lista.length; index++) {
    console.log(SZAMLISTA[index], kevertIndexLista[index] ,SZAMLISTA[kevertIndexLista[index]])
  }*/

  console.log(SZOVEGLISTA);
  rendezes1(SZOVEGLISTA);
  console.log(SZOVEGLISTA);
  console.log(SZAMLISTA);
  rendezes2(SZAMLISTA);
  console.log(SZAMLISTA)
});

/*function keveres1(lista) {
  /*Ez a lista az eredeti lista megKevertIndex értékeit fogja tartalmazni
  let megKevertIndex = [];
  let szamok;

  while (megKevertIndex.length < lista.length) {
    szamok = Math.floor(Math.random() * lista.length);
    let index = 0;
    while (
      index < megKevertIndex.length &&
      !(szamok == megKevertIndex[index])
    ) {
      index++;
    }
    if (index >= megKevertIndex.length) {
      megKevertIndex.push(szamok);
    }
  }
}*/

function rendezes1(lista) {
  lista.sort();
}

function rendezes2(lista) {
    /*lista.sort(function(a,b){return a-b})*/
    lista.sort((a,b)=>{return a-b})
  }

function keveres2(lista){
    lista.sort((a,b)=>{return 0.5 - Math.random()})
}