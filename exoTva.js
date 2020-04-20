//let montantTTC = prompt('Saisir un montant TTC en €');
let Tva1 = 5.5;
let Tva2 = 10;
let Tva3= 20;
let isGood = false
;

let montantTVA = prompt('Saisir le taux de TVA adequate (choisir entre 5, 10, 20');
while( isGood == false) {
    if (montantTVA == 5) {
       document.write('Montant de la TVA est de :' + montantTTC * montantTVA / 100 + ' € si la TVA est de ' + Tva1 + '% <br>');
        isGood = true;
    } else if (montantTVA == 10) {
        document.write('Montant de la TVA est de :' + montantTTC * montantTVA / 100 + ' € si la TVA est de ' + Tva2 + '% <br>');
        isGood = true;
    } else if (montantTVA == 20) {
        document.write('Montant de la TVA est de :' + montantTTC * montantTVA / 100 + ' € si la TVA est de ' + Tva3 + '% <br>');
        isGood = true;
   } else {
        montantTVA = prompt('Tu as saisi un mauvais montant de TVA RECOMMENCE !!');
    }
}
