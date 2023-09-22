//Tableau

let tableauFruit = ["Grenade","mangue","banane","melon","pasteque"];
// le tableauFruit=["index 0","index 1","index 2","index 3","index 4"]


console.log(typeof tableauFruit);
console.log(tableauFruit); //Un tabelau commencve tjr par 0
console.log(tableauFruit[0]); //Aller chercher se qui est ecrit dans la case 0
console.log(tableauFruit.length); //connaitre le nombre d'element
console.log(tableauFruit.push("Fraise"));


tableauFruit[1] = "coco"; //pour changer un element du tableau
console.log(tableauFruit);


for(let i=0;i<tableauFruit.length;i++){
    console.log(tableauFruit[i])
}
//pour (un compteur initialiser a 0 ; on teste la valeur du compteur ; on incremente le compteur de 1)
// i++ = i+1
// i-- = i-1
// i+=2 = i+2

//Ecrire 10* Bonjour
for(let i=1;i<=10;i++){
    console.log("Bonjour n°" + i);
}

//Ecricre 10* Bonjour dans le sens inverse
for(let i=10;i>0;i--){
    console.log("Bonjour n°" + i);
}

//Creation d'une boucle pour afficher tout les elements
tableauFruit.forEach(fruit => {  //forEach = pour chaque
    console.log(fruit);
});

for(let i=10;i>=0;i--){
    //if(i==0)
    //   console.log("i")
    //}else
    // console.log{
}