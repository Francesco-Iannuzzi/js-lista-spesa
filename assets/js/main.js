/*

Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
- Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
- Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

*/

/*
Tools:
- const / let
- array
- log
- while
- insertAdjacentHTML
*/

//creare un array definendo i vari elelementi che la compongono e loggarli in console
const shoppingItems = [
    'pasta',
    'carne',
    'pesce',
    'latte',
    'uova',
    'snack',
]
console.log(shoppingItems);

//selezionare l'elemento i dom in cui stampare i vari elementi dell'array
const ulElement = document.querySelector('ul');

//ciclare i vari elementi dell'array con while per definirli con una variabile incrementale
let i = 0;
while (i < shoppingItems.length) {
    const item = shoppingItems[i];
    console.log(item);
    
    //stampare nella dom gli elementi dell'array
    const ulMarkup = `<li class="list-group-item fs-5">${item}</li>`
    
    //indicare a che punto dell'elemento selezionato in dom per stamparci gli elementi dell'array
    ulElement.insertAdjacentHTML('beforeend', ulMarkup);

    i++
}