function analizaPalabras(palabras) {
  let analisis = [];
  for (let i in palabras) {
    const palabra = palabras[i];  /* solo existe dentro del for. */
    analisis.push(`#######`);
    analisis.push(`Palabra ${+i + 1}: ${palabra}`);  /* +i para forzarlo a que sea un numero. Es originalmente un string */
    analisis.push(`Nº de caracteres: ${palabra.length}`);
    analisis.push(`Deletreo: ${deletreo(palabra)}`);
    analisis.push(`La palabra es ${esPar(palabra) ? "par" : "impar"}` +
      ` y ${empiezaMayuscula(palabra) ? "" : "no "}empieza por mayúscula`);
    analisis.push(`La palabra ${contieneBle(palabra) ? "" : "no "}contiene "ble"`);
  }
  return analisis.join("\n"); /* \n = caracter salto de linea */
}

const deletreo = texto => texto.split("").join("-");
const esPar = texto => texto.length % 2 === 0;
const empiezaMayuscula = texto => texto[0] === texto[0].toUpperCase();
const contieneBle = texto => texto.toLowerCase().includes("ble"); /* el string que nos han pasado lo paso a LowerCase y ya puedo ver si contiene ble */
/*
function analizaPalabras(palabras) {
  palabras.forEach(indexPalabras);
}

function indexPalabras(palabra, index) {
  console.log(`Palabra ${ index }: ${ palabra }`);
  caracteres(palabra);
  deletrear(palabra);
  parMayus(palabra);
  contieneBle(palabra);
}

function caracteres(palabra) {
  console.log(`Nº de caracteres: ${ palabra.length }`);
}

function deletrear(palabra) {
  let deletreo = palabra.split("").join(" - ");
  console.log(`Deletreo: ${ deletreo }`);
}

function parMayus(palabra) {
  let parOImpar;
  let esMayus;
  if (palabra.length % 2 === 0) {
    parOImpar = "par"
  } else { parOImpar = "impar" }
  if (palabra.charAt(0) === palabra.charAt(0).toUpperCase()) {
    esMayus = " "
  } else { esMayus = " no " }
  console.log(`La palabra es ${ parOImpar } y${ esMayus }empieza por mayúscula`);
}

function contieneBle(palabra) {
  let ble;
  if (palabra.search("ble") >= 0 || palabra.search("BLE") >= 0) {
    ble = " ";
  } else {
    ble = " no ";
  }
  console.log(`La palabra${ ble }contiene "ble"`);
  console.log(`#######`);
}
 */

/* console.log(`Palabra ${ index }: ${ palabra }`);
console.log(`Nº de caracteres: ${ caracteres }`);
console.log(`Deletreo: ${ deletreo }`);
console.log(`La palabra es ${ parOImpar } y ${ esMayus } empieza por mayúscula`);
console.log(`La palabra${ ble }contiene "ble"`);
 */

/* Palabra 1: hola
Nº de caracteres: 4
Deletreo: h - o - l - a
La palabra es par y no empieza por mayúscula
La palabra no contiene "ble" */
