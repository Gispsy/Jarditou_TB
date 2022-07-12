/*var num = 1 ;
var prenom = "Jean" ;

alert(num);
alert(prenom);
var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre couleur préférée");

var val = confirm("Voulez-vous continuer?");
if( val == true ) {
         document.write ("L'utilisateur veut continuer!");
} else {
         document.write ("L'utilisateur ne veut pas continuer!");
}
console.log("texte affiché test console")*/

/*Exo excercie*/


var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prénom");

var val = confirm("Etes-vous un homme ?");
if( val == true) {
        document.write ("l'utilisateur veut continuer!");
}else{
        document.write ("L'utilisateur ne veut pas continuer!");
}
var val = ("Monsieur")
alert("Bonjour "+ val + reponse1 + reponse2 + " ,Bienvenue sur la site web !");
