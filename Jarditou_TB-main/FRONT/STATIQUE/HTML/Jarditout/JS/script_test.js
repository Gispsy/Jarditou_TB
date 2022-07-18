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

//let a = window.prompt("Entrer votre année");
//let b = "ERREUR"
//if(((a%4 == 0) && (a%100 !== 0)) || (a%400 == 0)){
//               b = "Ces une année bissextile"

//}else{
//               b = "non";
//}

// b = ((a%4 == 0) && (a%100 !== 0)) || (a%400 == 0) ? "Ces une année bissextile" : "non";
//alert(b);


//Exo Boucle 


//let N ="";

//while (true) {
//        N = window.prompt("Entrer votre prénom :");
//        if (N) {
//                N = N + "";
//        }else{
//                break;
//        }
//}
//alert(N)

// let N = window.prompt("Entrer votre chiffre");


// //décrémentation
// for(i= (N-1); i>=0;i--){
//         alert(i);
// }

//incrémentation

// for(i=0;i>N;i++){
//         alert(i);
// }



// while(N>=0){

// if(N!=0){
//         N=N-1;
// }else {
//         break;
// }

// // alert("N vaut :"+N);

// // }

// do{

//     if(N==0){
//         break;
//     }else{    
//         N=N-1;   
// alert("N vaut :"+N);
// }

// }
// while (N>=0)


let a = window.prompt("Nombre entier 1");       // Premier chiffre
let b = window.prompt("Nombre entier 2");       //Deuxieme chiffre
let n = "Erreur";                            //valeur de a + b || Erreur
console.log(n%2 == 0);
while (n =a+b){                                //additions de a + b                     
        alert("l'addition des deux faut " +n);
         if(n%2){                             // si none%2
                alert("La moyen est de" + n);
                 break;                          //stop la boucle
         }else{                                  //sinon alert 
                alert("Mauvais résultat");
                break;
        }
}