//Input Utente
let emailUtente = prompt("Inserisci la tua e-mail");
emailUtente = emailUtente.toLocaleLowerCase();
//Lista
let listaEmail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
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
    alert("Non sei presente nella lista di chi può accedere...")
}