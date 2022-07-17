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


/*var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prénom");

var val = confirm("Etes-vous un homme ?");
if( val == true) {
        document.write ("l'utilisateur veut continuer!");
}else{
        document.write ("L'utilisateur ne veut pas continuer!");
}
var val = ("Monsieur")
alert("Bonjour "+ val + reponse1 + reponse2 + " ,Bienvenue sur la site web !");
*/


/* Exemple en plus*/
/*var a = "100";
alert("Ceci est une chaîne de caractères :" + a);
var b = 100;
b == b--;
alert(b);
var c = 1.00;
c = a+c ;
alert(c);
var d = new Boolean(true);
d = !d;
alert(d)*/


        /*cours JS*/
/*let a = parseInt(window.prompt("entrer votre chiffre :"));
let doille = "ERREUR";

if(!Number.isInteger(a)){
        doille = "pas un chiffre entier";
}else{
        if (a >=40 && a%2 == 0) {
                doille = "oui";
        }else{
                doille = "non";
        }     
}

alert(doille);*/


/*Exo année*/

// let a = window.prompt("Entrer votre année");
// let b = "ERREUR"
// console.log(a);
// if(a%4 == 0){
//         if(a%100 == 0){
//                 if(a%400 == 0){
//                         b = "Oui ces une année bissextile";
//                 }else{
//                         b = "Non ce n'es pas une année bissextile";
//                 }
//         }else{
//                 b = "Oui ces une année bis";
//         }
// }else{
//         b = "non ce n'es pas une année bissextile(365j)";
// }
// alert(b);



// let a = window.prompt("Entrer votre année");
// let b = "ERREUR"
// console.log(a);
// if(a%4 == 0){
//         if((a%100 == 0) && (a%400 !== 0)){
//                 b = "Ces pas année bissextile"
//         }else{
//                 b = "ces une année bis";
//         }
// }else{
//         b = "non ce n'es pas une année bissextile(365j)";
// }
// alert(b);

let a = window.prompt("Entrer votre année");
let b = "ERREUR"
// if(((a%4 == 0) && (a%100 !== 0)) || (a%400 == 0)){
//                 b = "Ces une année bissextile"

// }else{
//         b = "non";
// }

// b = ((a%4 == 0) && (a%100 !== 0)) || (a%400 == 0) ? "Ces une année bissextile" : "non";
// alert(b);