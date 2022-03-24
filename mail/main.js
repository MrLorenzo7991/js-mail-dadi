//Input Utente
let emailUtente = prompt("Inserisci la tua e-mail");
emailUtente = emailUtente.toLowerCase();
//Lista
let listaEmail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let aggiunta = "si";
//Controllo
let checkPresenza = false;
for(i = 0; i < listaEmail.length; i++){
    if (emailUtente == listaEmail[i]){
        checkPresenza = true;
    }
}
//Display risultato
if(checkPresenza){
    alert("Sei presente nella lista di chi può accedere!")
} else {
    aggiunta = prompt("Non sei presente nella lista di chi può accedere, vuoi essere aggiunto? (scrivi \"si\" o \"no\")")
    aggiunta = aggiunta.toLowerCase();
    console.log(aggiunta)
    if(aggiunta == "si"){
        listaEmail.push(emailUtente);
        alert("Sei stato aggiunto correttamente alla lista!");
        console.log(listaEmail);
    } else if (aggiunta == "no"){
        alert("Non sei stato aggiunto alla lista");
    } else {
        alert("Non hai scelto si o no, non verrai aggiunto alla lista");
    }
}