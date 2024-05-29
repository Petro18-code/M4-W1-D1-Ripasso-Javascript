// 1. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.
function somma50(a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  } else return false;
}

console.log(somma50(20, 30))

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.
const rimuoviCarattere = (stringa, posizione) => {
  if (posizione < 0 || posizione >= stringa.length) {
    return stringa;
  }
  let ArrayDiLettere = stringa.split("");
  ArrayDiLettere.splice(posizione, 1);
  return ArrayDiLettere.join("");
};

// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.
const compresi = (a, b) => {
  if (
    (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
    (a >= 70 && a <= 100 && b >= 70 && b <= 100)
  ) {
    return true;
  } else return false;
};

// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.
const controllaCitta = (nomeCitta) => {
  if (nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")) {
    return nomeCitta;
  } else return false;
};

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L’array deve essere passato come parametro.
const calcolaSomma = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.
const controllaArray = (arr) => {
  if (!arr.includes(1) && !arr.includes(3)) {
    return true;
  } else return false;
};

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”

const angoli = (deg) => {
    if (deg < 90) return "acuto"
    if (deg > 90 && deg < 180) return "ottuso"
    if (deg === 90) return "retto"
    if (deg === 180) return "piatto"
}

// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

function sentence(Fiat) {
  let FIAT = Fiat.toUpperCase()
  let array = FIAT.split(" ")
  let acronimo = ""
  array.forEach(element => {
    acronimo += element.charAt(0)
  });
  return acronimo
}