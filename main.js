// Esercizio 1:
// Definire una serie di funzioni:
// add che prende due numeri e restituisce la loro somma.
// multiply che prende due numeri e restituisce il loro prodotto.
// subtract che prende due numeri e restituisce la loro differenza.
// divide che prende due numeri e restituisce il risultato della divisione.
// Poi, creare una funzione calculate che prenda tre argomenti: due numeri e una funzione che manipoli i due numeri

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const subtract = (a, b) => a - b;

const divide = (a, b) => a / b;

const calculate = (a, b, operation) => operation(a, b);

console.log(calculate(5, 3, add));

// Esercizio 2:
// Creare una funzione creaConvertitoreValuta che accetti un tasso di cambio come argomento
// e restituisca una funzione interna.La funzione interna accetta un importo come parametro
// e deve convertire l'importo da una valuta all'altra ogni volta che viene chiamata. 

const creaConvertitoreValuta = (tassoDiCambio) => {
  return (importo) => importo * tassoDiCambio;
}

console.log(creaConvertitoreValuta(1.2)(100));
