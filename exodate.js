alert('Restez chez vous !');
document.write('Je fais du js pendant le confinement <br>');
console.info('Hello World !');


let jourSemaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
document.write('<h1>Les jours de la semaine</h1> <ol>');
for (let jour of jourSemaine)
{
    if(jour == 'samedi'|| jour=='dimanche')
    {
        document.write('<li style="color: red">' + jour + '</li>');
    }
    else {
        document.write('<li style="color: green">' + jour + '</li>');
    }
}
document.write('</ol>');
document.write('Le premier jour de la semaine est '+jourSemaine[0]+'<br>');
document.write('Le dernier jour de la semaine est '+jourSemaine[6]+'<br>');
const date = new Date();
const dateNomJour = jourSemaine[date.getDay()-1];
const dateJour = date.getDate();
const dateMois = date.getMonth();
const dateYear = date.getFullYear();
let mois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
let dateNomMois = mois[dateMois];
document.write('Nous sommes le '+dateNomJour+' '+dateJour+' '+dateNomMois+' '+dateYear+'<br>');
if ((dateNomMois == 'juin' && dateJour>= 20) || dateNomMois== 'juillet' || dateNomMois == 'aout' || (dateNomMois =='septembre' && dateJour<=21)){
    document.write('<img src="https://cdn.xl.thumbs.canstockphoto.fr/soleil-vecteur-eps_csp8723014.jpg" style="max-width: 300px">');
}
if ((dateNomMois == 'mars' && dateJour>= 20) || dateNomMois== 'avril' || dateNomMois == 'mai' || (dateNomMois =='juin' && dateJour<=19)){
    document.write('<img src="https://static.actu.fr/uploads/2017/04/muguet1_copyright-ernest-turc-bis-1024x768.jpg" style="max-width: 300px">');
}

