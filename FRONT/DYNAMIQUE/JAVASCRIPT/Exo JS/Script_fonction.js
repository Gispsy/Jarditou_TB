// function maFonction() 
// {
//  var plop1 = 123;       
//    return plop1;
// }

// function maFonction2() 
// {
//    plop2 = 456;     
// }

// plop1 = maFonction();

// console.log("fonction 1 / plop1 : "+plop1);

// maFonction2();

// console.log("mafonction2 > plop2 : "+plop2);


//Exo 1

let x =window.prompt("Entrer le nombre a multiplier");
let y =window.prompt("Entrer les multiplicateur");


//fonction pour multiplier les valeur rentrer


function produit(x,y)
{
    let resultat = x*y;
    return resultat,Image;
}
// function Image(Image)
// {
//     afficheImg(papillon.jpg);
//     return Image;
// }

function addTheImage(img)
{
document.createElement('img');
img.src = "../papillon.jpg";
document.body.appendChild(img);
}