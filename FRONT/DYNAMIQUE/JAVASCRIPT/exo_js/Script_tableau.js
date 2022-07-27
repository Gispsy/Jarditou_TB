// let test = ["pain", "lait", "fromage", "nouilles"];
// test;
// console.log(test);

// let second_test = [415, 400, 250, 300];
// second_test;
// console.log(second_test);

// let trosieme_test = ["god", 51, "fallen",[65, "come on"]];
// trosieme_test;
// console.log(trosieme_test);




// let shopping = ["pain", "lait", "fromage", "houmous", "nuilles"];
// shopping;

// shopping[0];
// // renvoie "pain"

// shopping[0] = "crème de sésame";
// shopping;
// // shopping renvoie maintenant ["crème de sésame", "lait", "fromage", "houmous", "nouilles"]

// let sequence = [1,1,2,3,5,8,13];
// let random = ["arbre", 795, [0, 1, 2]];

// random [2][2];




// sequence.length
// // renvoie 7
// let sequence2 = [1,1,2,3,5,8,13];
//     for ( let i = 0; i < sequence.length; i++) {
//         console.log(sequence[i]);
//     }

//ce code dit : 
//1.Commencer la boucle à l'élément 0 du tableau.
//2.Arrêter de tourner quand le dernier élément du tableau sera atteint.Cela fonctionne pour n'importe quelle dimension de tableau;
//dans notre cas, on sortira de la boucle à l'élément que nous souhaitons que la boucle traite est le 6.
//3.Afficher chaque élément sur la console de l'expplorateur avec console.log().























//Exo 1

// let t = window.prompt("Entrer taille du tableau")   //t = Taille du tableau
// let myTableau = new Array(t);    //myTableau = Création du tableau via la valeur de t

// for (i=0 ;i<=t-1;i++)
// {
//     if(i<=t-1){
//         let valeur_saisie = window.prompt("Entrer vos valeur pour le tableau");  //i = Valeur pour le tableau
//         myTableau[i] = valeur_saisie;
//         console.log(myTableau[i]);
//     }else{
//         break;
//     }
// }
// console.table(myTableau)

//Exo 2

let longueur_tab = window.prompt("Entrer nombre de poste");
let myTableau;

function InitTab(p)
{
    myTableau = Array(p);
   return myTableau;
}

console.log(InitTab(longueur_tab));
InitTab(longueur_tab);

//Fonction saisie des poste

let i;
let valeur;

function SaisieTab()
{


    for(i=0 ;i<longueur_tab ;i++){
        if(i<longueur_tab){
            valeur = window.prompt("Entrer valeur");
            myTableau[i] = valeur;
        }else{
            break;
        }
    }

console.log(myTableau);

};
SaisieTab();

//Fonction Affiche Tableau

function Affiche(myTableau)
{
    console.table(myTableau);
    return;
    
};
Affiche(myTableau)

//Fonction recherche dans le tableau

let R;

function RechercheTab(toto)
{
    R = window.prompt("Entrer la ligne a chercher entre");
    myTableau[R];
};
RechercheTab(toto);
console.log(RechercheTab(toto));

//Fonction Info Tableau

function InfoTab()
{
    let moy = NumAverage;
};