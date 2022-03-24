//tiro dadi
let tiroUtente = Math.floor(Math.random()*6+1);
let tiroComputer = Math.floor(Math.random()*6+1);
//Vincitore
alert("Giochiamo a dadi! Tira il tuo dado!")
if (tiroUtente > tiroComputer){
    alert("Hai Fatto:" + " " + tiroUtente + "     " + "Io ho fatto:" + " " + tiroComputer + "     " + "Complimenti, hai vinto!");
} else if (tiroUtente < tiroComputer){
    alert("Hai Fatto:" + " " + tiroUtente + "     " + "Io ho fatto:" + " " + tiroComputer + "     " + "Peccato, hai perso!");
} else{
    alert("Hai Fatto:" + " " + tiroUtente + "     " + "Io ho fatto:" + " " + tiroComputer + "     " + "Abbiamo pareggiato, rifacciamo!")
}