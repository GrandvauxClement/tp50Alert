let tabEntré = ['ton prénom ','ton nom','ton age','ton année de naissance','ton lieu de naissance','ou habite tu', 'ton sexe', 'prenom de ton pere', 'prenom de ta mere','age de ton pere',
            'age de ta mere', 'lieu de naissance de ton pere', 'lieu de naissance de ta mere', 'ton plat prefere', 'ton jeux prefere', 'ton livre prefere', 'ton manga prefer',
            'ton alcool préferer', 'ton cocktail preferer', 'ta musique preferer', 'ton style de musique preferer', 'ton artiste preferer', 'ton ecrivain preferer', 'ton bar preferer',
            'ton type de soirée preferer', 'ton domaine d\'etude prefere', 'ton language de prog preferer', 'ta langue preferer'];
let reponseUser = '';
let i=0;
let lienMusique = ['hamster.mp3','piou.mp3','patate.mp3'];
let numMusique =0;
let playMusique = '';
let player ;
playMusique = '<audio id="musique'+numMusique+'" src="musique/'+lienMusique[numMusique]+'" autoplay loop></audio>';
document.write(playMusique);

while(reponseUser != 'Sorry i\'m root' )
{
     player = document.querySelector('#musique'+numMusique);
     reponseUser = prompt(tabEntré[i]);
     i = i+1;
  if (reponseUser == 'Musique suivante'){

      if (numMusique == 2)
      {
          numMusique = 0;
      }
      else {
          numMusique += 1;
      }
      player.src = '"musique/'+lienMusique[numMusique]+'"';
  /*    playMusique = '<audio id="musique'+numMusique+'" src="musique/'+lienMusique[numMusique]+'" autoplay loop></audio>';
      document.write(playMusique); */
      alert('Next musique');
  }

}
document.write('hello root');
