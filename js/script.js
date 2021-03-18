//anno corrente 
var anno = 21;

//inserisci nome
var nome = prompt ('Ciao, dimmi il tuo nome');
console.log(nome); 

//inserisci cognome
var cognome = prompt ('Ora il tuo cognome');
console.log(cognome); 

//inserisci colore preferito
var colore = prompt ("Qual'è il tuo colore preferito?")
console.log(colore); 

//password generator
document.getElementById('password').innerHTML= nome + cognome + colore + anno;