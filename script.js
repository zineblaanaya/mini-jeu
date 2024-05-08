console.log('connecté')

let btnPink = document.getElementById('btn-pink');
//console.log(btnPink);

let btnBlue = document.getElementById('btn-blue');
//console.log(btnBlue);

let titre = document.getElementById('titre');
//console.log(titre)


let compteur = 0;

btnPink.addEventListener('click',function(){
    console.log('bouton rose cliqué');
    add();
  
});

btnBlue.addEventListener('click',function(){
    console.log('bouton bleu cliqué');
    add();
});

function add(){
    compteur = compteur + 1;
    console.log(compteur, 'compteur après incrémentation');
    titre.innerHTML = compteur;
}

setTimeout(function(){
console.log('jeu terminé')
btnBlue.remove();
btnPink.remove();
},20000);