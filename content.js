// content.js

// bouton on/off vie + annuler + temps illimité + bouton pour ajouter des "passer"
// rétrécir zone commande : légèrement décaler à droite , pouvoir déplier
//! à la place de faire le niveau, afficher les étapes jusqu'à la validation ou recommencer
// bouton afficher toutes les réponses et en rouge là où on en est, pas afficher 0123, afficher couleur à la pace
//! pouvoir mieux comparerv (garder historique et afficher en rouge ce qui ne va pas)
// pouvoir réafficher, rejouer (flèches) ce qu'on a fait
// raccourcis clavier revenir en arriere, valider
//! finir mode auto
//! bouton en cas d'erreur revenir à là où on en était
// POURQUOI DIV TEMPS PAS TROUVé
//! formater plu -> pluton, bouton revenir et pouvoir cacher

// si bcp de temps, bcp de points => fixer
// afficher réponse : utiliser les flèches avancer/reculer
//! clean code + autres fichiers
//! bouton pour cacher le cheat (déplier)
//! sauvegarder en cache libre précédent  ou autres préférences
//! Pouvoir enregistrer des niveaux difficiles pour les refaire (mode refaire dans une queue qu'on peut enlever des favoris)


// var divCanvG = document.getElementById('divCanvG'); divCanvG.style.marginTop = '-20px';
 

// setTimeout(() => {
            
// bouton revoir ce qu'on a fait

// console.log("goaa");
// // Injection d'un script dans la page elle-même pour accéder aux variables locales
// (function() {
//     // On vérifie si la variable existe
//     if (typeof timeLeft !== 'undefined') {
//         timeLeft += 60;  // Incrémente timeLeft
//         console.log("timeLeft après incrémentation : " + timeLeft);
//     } else {
//         // Si timeLeft n'existe pas, on affiche un message
//         console.log("La variable timeLeft n'est pas définie dans le contexte global.");
//     }

//     // Exemple d'accès à une variable locale dans une fonction spécifique
//     // Si `timeLeft` est défini à l'intérieur d'une fonction dans la page,
//     // il faudrait injecter le code de manière à l'accéder.

//     // Exemple générique : injection de code dans une fonction spécifique
//     const script = document.createElement('script');
//     script.textContent = `
//         (function() {
//             // Exemple d'accès à une variable interne d'une fonction
//             // if (typeof timeLeft !== 'undefined') {
//             //     timeLeft += 60;
//             //     console.log('timeLeft modifié dans la page :', timeLeft);
//             // } else {
//             //     console.log('Variable timeLeft non trouvée');
//             // }
//     for (let o of tAff[iAff]) {
//     switch (o.t) {
//       case 'sed':
//         console.log("Ajout d'une couche de sédiments : hauteur =", o.h, ", couleur =", o.c);
//         var col = parseInt(o.c);
//         if (col < 0){
//         console.log("C'est du -1");
//           col = Math.floor(random(seedCoul)*4);
//           console.log("New col " + col);
          

//         }
//           seedCoul++;

//         clicBoutonSediment(col);
//         break;
//       case 'fn1':
//         console.log("Ajout d'une faille normale 1 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//         clicBoutonFaille("fn1");
//         break;
//       case 'fi1':
//         console.log("Ajout d'une faille inverse 1 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//         clicBoutonFaille("fi1");
//         break;
//       case 'fn2':
//         console.log("Ajout d'une faille normale 2 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//         clicBoutonFaille("fn2");
//         break;
//       case 'fi2':
//         console.log("Ajout d'une faille inverse 2 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//         clicBoutonFaille("fi2");
//         break;
//       case 'vol':
//         console.log("Ajout d'un volcan : x =", o.x, ", profondeur =", o.p);
//         clicBoutonVolcan();
//         break;
//       case 'pli':
//         console.log("Création d'un pli");
//         clicBoutonPli();
//         break;
//       case 'ero':
//         console.log("Erosion : hauteur =", o.h);
//         clicBoutonErosion();
//         break;
//       case 'plu':
//         console.log("Ajout d'un pluton : x =", o.x, ", profondeur =", o.p, ", rayon =", o.r);
//         clicBoutonPluton();
//         break;
//       default:
//         console.log("Action inconnue :", o.t);
//     }
//   }
  
//   function clicBoutonSediment(couleur) {
//     // Code pour cliquer sur le bouton Sediment de la couleur correspondante
//     // Vous devez identifier l'ID du bouton correct dans le code source du jeu.
//     // Exemple :
//     if (couleur != "-1"){
//     let idBouton = "butSedim" + couleur;
//     document.getElementById(idBouton).click();
// }
//   }
  
//   function clicBoutonFaille(type) {
//     // Code pour cliquer sur le bouton de faille du type correspondant
//     // Exemple :
//     //* optimiser dès lors de l'executtion de la fonction
//     let idBouton = "butFailleI2"; 
//     if(type == "fi2"){
//         idBouton = "butFailleI2"; 

//     } else if (type == "fi1"){
//         idBouton = "butFailleI"; 

//     } else if (type = "fn1"){
//         idBouton = "butFailleN" ; 

//     } else if (type = fn2){
//         idBouton = "butFailleN2" ; 

//     }
//     console.log(type);
//     document.getElementById(idBouton).click();
//   }
  
//   function clicBoutonVolcan() {
//     // Code pour cliquer sur le bouton Volcan
//     document.getElementById("butVolcan").click();
//   }
  
//   function clicBoutonPli() {
//     // Code pour cliquer sur le bouton Pli
//     document.getElementById("butPli").click();
//   }
  
//   function clicBoutonErosion() {
//     // Code pour cliquer sur le bouton Erosion
//     document.getElementById("butEro").click();
//   }
  
//   function clicBoutonPluton() {
//     // Code pour cliquer sur le bouton Pluton
//     document.getElementById("butPluton").click();
//   }
  
//   document.getElementById("butComp").click();
//   const divVerif = document.getElementById("divVerif");

// const style = window.getComputedStyle(divVerif);
// if (style.display === "none") {
//   console.log("Le div est masqué.");
// } else {
//   console.log("Le div est visible.");
//   joueur.upAmmos();
//     updateVies();
//     skipAff ();
// }

//         })();
//     `;
//     document.documentElement.appendChild(script); // Injecte le script dans la page
// })();

//     console.log('timeLeft a été incrémenté à :', timeLeft);

// }, 10000);

var libre = true;
var comparaison = false;

setTimeout(() => {
  document.addEventListener("keydown", (event) => {
    var key = event.key;
    if (key === "Enter" || key === "ArrowDown") {
        console.log("Touche 'Entrée' détectée !");
        const divVerif = document.getElementById("divVerif");

        const style = window.getComputedStyle(divVerif);
        if (style.display === "none") {
          document.getElementById("butComp").click();

        } else {
          document.getElementById("butOKverif").click();

        }
        
        // Ajoutez ici la logique que vous souhaitez exécuter lorsque la touche "Entrée" est pressée
    } else if (key === "*" || key === "ArrowLeft") {
      console.log(`Touche '${key}' détectée !`);
      document.getElementById("butGomme").click();
      // skipAff()

      // Ajoutez ici la logique à exécuter lorsque l'une de ces touches est pressée
    } else if (key === "$" || key === "ArrowRight") {
        document.getElementById("butSkip").click();
        console.log(`Touche '${key}' détectée !`);
      // Ajoutez ici la logique à exécuter lorsque l'une de ces touches est pressée
  } else if (key === "ù"|| key === "ArrowUp") {
        document.getElementById("butReset").click();
        console.log(`Touche '${key}' détectée !`);
    // Ajoutez ici la logique à exécuter lorsque l'une de ces touches est pressée
  }
});


console.log("GOOOO");
// document.addEventListener("DOMContentLoaded", () => {
  console.log("I");
  // Liste des IDs des boutons à surveiller
  var buttonIds = ["butGomme", "butReset", "butSkip"];

  buttonIds.forEach((id) => {
      const button = document.getElementById(id);

      if (button) {
          // Ajoute un écouteur pour chaque bouton détecté
          button.addEventListener("click", (event) => {
              console.log(`Bouton cliqué : ${event.target.id}`);
              handleButtonClick(event.target.id);
          });
      } else {
          console.warn(`Le bouton avec l'ID '${id}' n'a pas été trouvé.`);
      }
  });
// });

// Fonction pour gérer les clics en fonction de l'ID
function handleButtonClick(buttonId) {
  switch (buttonId) {
      case "butGomme":
        if (libre){
        var script = document.createElement('script');
        script.textContent = `
        joueur.upGommes();
        updateVies();
    `;
      document.documentElement.appendChild(script); // Injecte le script dans la page
      setTimeout(() => {
        script.remove(); // Cela supprime le script après son exécution
      }, 1000);
    }
          break;
      case "butReset":
        if (libre){
        var script = document.createElement('script');
        script.textContent = `
        joueur.upVies();
        updateVies();
        
    `;
      document.documentElement.appendChild(script); // Injecte le script dans la page
      setTimeout(() => {
        script.remove(); // Cela supprime le script après son exécution
      }, 1000);
    }
          break;
      case "butSkip":
        if (libre){
        var script = document.createElement('script');
        script.textContent = `
        joueur.upAmmos();
        updateVies();
    `;
      document.documentElement.appendChild(script); // Injecte le script dans la page
      setTimeout(() => {
        script.remove(); // Cela supprime le script après son exécution
      }, 1000);
    }
          break;
      default:
          console.log("Aucune action définie pour ce bouton.");
  }
}





// document.addEventListener("DOMContentLoaded", () => {
  // IDs des boutons à surveiller
  var buttonIds = ["butOKverif", "butSkip", "butSauteVerif", "butReset", "butPretDefiFou", "butLyellParle"];

  // Fonction partagée
  function sharedFunction () {
      // console.log(`Bouton cliqué : ${event.target.id}`);
      // alert(`Action déclenchée pour le bouton : ${event.target.id}`);
      // Ajoutez ici la logique commune à tous les boutons
      var script1 = document.createElement('script');
        script1.textContent = `
        try {
document.getElementById('divBarreTemps').style.display = 'inline';
} catch(e){}
 try {
// Sélectionner tous les éléments avec la classe 'duplicated-barre'
var elements = document.querySelectorAll('.duplicated-barre');

// Supprimer chaque élément trouvé
elements.forEach(function(element) {
    element.remove();
});
} catch(e){}

clearInterval(intervalId);




    `;
      document.documentElement.appendChild(script1); // Injecte le script dans la page
      setTimeout(() => {
        script1.remove(); // Cela supprime le script après son exécution
      }, 2000);
      if (libre){
        




      var script = document.createElement('script');
        script.textContent = `

joueur.upVies();
updateVies();


// var invisibleDiv = document.createElement('div');
// invisibleDiv.id = 'timeLeftDiv';
// invisibleDiv.textContent = timeLeft;

// invisibleDiv.style.display = 'none';

// document.body.appendChild(invisibleDiv);



if (originalBarreTemps) {
    // Créer un nouvel élément div pour la nouvelle barre
    var newBarreTemps = originalBarreTemps.cloneNode(true); // Duplique l'élément entier, y compris son contenu
    
    newBarreTemps.style.width = '200px';
    newBarreTemps.style.backgroundColor = 'rgb(255, 0, 0)';
    //newBarreTemps.id = 'divBarreTempsDuplicate'; // Nouveau ID
    newBarreTemps.classList.add('duplicated-barre');

    // Ajouter la nouvelle barre au DOM. Ici, nous allons l'ajouter à son parent direct.
   originalBarreTemps.parentElement.appendChild(newBarreTemps);
   document.getElementById('divBarreTemps').style.display = 'none';

    console.log('Barre dupliquée et ajoutée avec succès !');
} else {
    console.log("L'élément #divBarreTemps n'a pas été trouvé.");
}
    

// timeLeft += 5;
var time = timeLeft;
var intervalId = setInterval(() => {
  timeLeft = Math.floor(time / 2) + 1; // Division entière
  // console.log("console");
}, (Math.floor(time / 2) + 1)*1000); // Division entière pour l'intervalle


        // Vérifie si l'élément original existe
var originalBarreTemps = document.getElementById('divBarreTemps');




    `;
      document.documentElement.appendChild(script); // Injecte le script dans la page
      setTimeout(() => {
        script.remove(); // Cela supprime le script après son exécution
      }, 2000);






      // setTimeout(() => {
      
    // }, 2000);
    }
  };

  // Ajoute un écouteur de clic à chaque bouton
  buttonIds.forEach((id) => {
      const button = document.getElementById(id);

      if (button) {
          button.addEventListener("click", sharedFunction);
      } else {
          console.warn(`Le bouton avec l'ID '${id}' n'a pas été trouvé.`);
      }
  });
// });

}, 2000);

// Créez le conteneur pour les boutons et le slider
const container = document.createElement('div');
container.id = 'overlay-container';
container.innerHTML = `
  <div id="overlay">
  <div>
    <input type="range" id="speed-slider" min="0" max="100" value="50" />
    <span id="slider-value">50</span>
    
    <button id="reponse">Afficher la réponse</button>
    <button id="recommencer" style="display: none;">Ajouter une vie</button>
    </div>
    <div>
    <button id="annuler" style="display: none;">Ajouter une "annuler"</button>
    <button id="temps" style="display: none;">Ajouter 1 minute</button>
    <button id="comparaison">Afficher comparaison</button>
    <button id="revoir">Revoir</button>
    <button id="onoff">True</button> <!-- Le bouton ON/OFF -- //! mettre couleurs les boutons>
    </div>
  </div>
`;
document.body.appendChild(container);

// Appliquer les styles
const style = document.createElement('link');
style.rel = 'stylesheet';
style.href = chrome.runtime.getURL('styles.css');
document.head.appendChild(style);

// Ajoutez les actions
const slider = document.getElementById('speed-slider');
const sliderValue = document.getElementById('slider-value');
// const randomButton = document.getElementById('random-button');

slider.addEventListener('input', () => {
  sliderValue.textContent = slider.value;
});



document.getElementById('comparaison').addEventListener('click', () => {
  comparaison = !comparaison;
   var script1 = document.createElement('script');
     script1.textContent = `
    //  console.log("OKA0OJI");
     var container = document.getElementById('json-highlight-container');
    
     if (container) {
         container.remove(); // Supprimer le premier enfant
     }
  // `;
  document.documentElement.appendChild(script1); // Injecte le script dans la page
  setTimeout(() => {
    script1.remove(); // Cela supprime le script après son exécution
  }, 1000);
  // if (comparaison){
  const script = document.createElement('script');
    script.textContent = `
     
    // Fonction pour comparer un tableau avec une référence
function getDifferences(baseArray, compareArray) {
    var differences = [];
    baseArray.forEach(item => {
        if (!compareArray.includes(item)) {
            differences.push(item); // Éléments absents dans le tableau comparé
        }
    });
    return differences;
}

// Fonction pour analyser les différences sur tActions
function highlightDifferences(baseArray, compareArrays) {

    var differences = [];

    const maxLength = Math.max(baseArray.length, compareArray.length); // On prend la longueur du plus grand tableau

    for (let i = 0; i < maxLength; i++) {
        // Vérifier si les éléments sont égaux ou si l'un des tableaux a un élément en excédent
        if (baseArray[i] !== compareArray[i]) {
            differences.push(i); // Si les éléments ne sont pas égaux, on ajoute l'index à la liste des différences
        }
    }

    return differences;

// const differences = new Set();

//     // Comparer le tableau de base avec tous les autres tableaux
//     otherArrays.forEach(compareArray => {
//         getDifferences(baseArray, compareArray).forEach(diff => differences.add(diff));
//     });

    return differences; // Retourne un ensemble des différences
}

// Fonction pour créer un conteneur affichant les différences
function createHighlightContainer(baseArray) {
    const container = document.createElement('div');
    container.id = 'json-highlight-container';
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.left = '10px';
    container.style.width = '6vw';
    container.style.height = '14vh';
    container.style.overflowY = 'scroll';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    container.style.color = 'white';
    container.style.padding = '10px';
    container.style.border = '1px solid #ccc';
    container.style.borderRadius = '5px';
    container.style.zIndex = '9999';
    container.style.fontFamily = 'monospace';

    // Créer un contenu formaté avec les différences en rouge
    // baseArray.forEach(item => {
    //     const span = document.createElement('span');
    //     span.textContent = item;
    //     span.style.display = 'block';
    //     span.style.color = differences.includes(item) ? 'red' : 'white'; // Rouge si c'est une différence
    //     //* has
    //     container.appendChild(span);
    // });
    // Comparaison des éléments à chaque index
    var baseArray = tActions[0];
var compareArray = tActions[1];
const maxLength = Math.max(baseArray.length, compareArray.length); // On prend la longueur du plus grand tableau

    for (let i = 0; i < maxLength; i++) {

        // Comparaison strict à chaque index
        if (baseArray[i] !== compareArray[i]) {
            console.log(baseArray[i], compareArray[i]);
                var span = document.createElement('span');
        span.textContent = baseArray[i];
        span.style.display = 'block';
        span.style.color = 'red'; // Rouge si c'est une différence
        container.appendChild(span);
        } else {
           console.log("NON",baseArray[i], compareArray[i]);
              var span = document.createElement('span');
        span.textContent = baseArray[i];
        span.style.display = 'block';
        span.style.color =  'white'; // Rouge si c'est une différence
        container.appendChild(span);
        }
    }





    document.body.appendChild(container);
}


// Analyser les différences
var baseArray = tActions[0];
var otherArrays = tActions.slice(1); // Prend tout sauf le premier tableau
// var differences = highlightDifferences(baseArray, otherArrays);

// Injecter les différences sur la page
createHighlightContainer(baseArray);

`;
  document.documentElement.appendChild(script); // Injecte le script dans la page
  setTimeout(() => {
    script.remove(); // Cela supprime le script après son exécution
  }, 1000);
// }
});


// randomButton.addEventListener('click', () => {
//   const randomValue = Math.floor(Math.random() * 100) + 1;
//   slider.value = randomValue;
//   sliderValue.textContent = randomValue;
// });

document.getElementById('reponse').addEventListener('click', () => {
  const script = document.createElement('script');
    script.textContent = `
    

//! tActions[0] est aussi un corrigé sans le -1
    var liste = [];
    for (let o of tAff[iAff]) {
      switch (o.t) {
        case 'sed':
        var couleur = Math.floor(random(seedCoul)*4);// + 10;
          console.log("Ajout d'une couche de sédiments : hauteur =", o.h, ", couleur =", o.c );
          if (o.c != -1){
            couleur = o.c;
          }
          let idBouton = "butSedim" + couleur;
          liste.push(couleur)
          //document.getElementById(idBouton).click();
          seedCoul++;
          break;
        case 'fn1':
          console.log("Ajout d'une faille normale 1 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
          liste.push("fn1")
        //document.getElementById("butFailleN").click();
          break;
        case 'fi1':
          console.log("Ajout d'une faille inverse 1 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
          liste.push("fi1");
          //document.getElementById("butFailleI").click();
          break;
        case 'fn2':
          console.log("Ajout d'une faille normale 2 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
          liste.push("fn2");
            //document.getElementById("butFailleN2").click();
          break;
        case 'fi2':
          console.log("Ajout d'une faille inverse 2 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
          liste.push("fi2");
              //document.getElementById("butFailleI2").click();
          break;
        case 'vol':
          console.log("Ajout d'un volcan : x =", o.x, ", profondeur =", o.p);
          liste.push("vol");
          //document.getElementById("butVolcan").click();
          break;
        case 'pli':
          console.log("Création d'un pli");
          liste.push("pli");
        //document.getElementById("butPli").click();
          break;
        case 'ero':
          console.log("Erosion : hauteur =", o.h);
          liste.push("ero");
        //document.getElementById("butEro").click();
          break;
        case 'plu':
          console.log("Ajout d'un pluton : x =", o.x, ", profondeur =", o.p, ", rayon =", o.r);
        liste.push("plu");
        //document.getElementById("butPluton").click();
          break;
        default:
          console.log("Action inconnue :", o.t);
      }
    }
    console.log(liste);
    var DELAI = ${slider.value*10}; 
    
    var style = document.createElement('style');
    style.textContent = 
  '.highlight {' +
  '  border: 5px solid white;' +  // Crée un cadre blanc de 5px
  '  box-shadow: 0 0 10px white;' +  // Ajoute un léger effet de lueur autour du cadre
  '}';
    // transition: border 0.3s, box-shadow 0.3s;  Ajoute une transition douce 
    document.head.appendChild(style); // Injecte le style dans la page
    
    // Fonction principale pour appliquer les clics avec le délai et l'effet visuel
    for (let i = 0; i < liste.length; i++) {
      setTimeout(() => {
        let element;
        // Logique pour définir l'élément à cliquer en fonction de la valeur
        switch (liste[i]) {
          case 0:
            element = document.getElementById("butSedim0");
            break;
          case 1:
            element = document.getElementById("butSedim1");
            break;
          case 2:
            element = document.getElementById("butSedim2");
            break;
          case 3:
            element = document.getElementById("butSedim3");
            break;
          case 'fn1':
            element = document.getElementById("butFailleN");
            break;
          case 'fi1':
            element = document.getElementById("butFailleI");
            break;
          case 'fn2':
            element = document.getElementById("butFailleN2");
            break;
          case 'fi2':
            element = document.getElementById("butFailleI2");
            break;
          case 'vol':
            element = document.getElementById("butVolcan");
            break;
          case 'pli':
            element = document.getElementById("butPli");
            break;
          case 'ero':
            element = document.getElementById("butEro");
            break;
          case 'plu':
            element = document.getElementById("butPluton");
            break;
          default:
            console.log("Action inconnue :", liste[i]);
            return; // Si l'action est inconnue, on sort de la fonction
        }
        // Appliquer l'effet visuel (cadre blanc épais)
        if (element) {
          element.classList.add("highlight"); // Ajout de la classe CSS pour le cadre
        }
        // Effectuer le clic sur l'élément
        if (element) {
          element.click();
        }
        // Supprimer l'effet visuel après le délai
        setTimeout(() => {
          if (element) {
            element.classList.remove("highlight"); // Enlever le cadre après le délai
          }
        }, DELAI); // Délai avant de retirer le cadre
      }, DELAI * i); // Délai progressif entre chaque clic
    }
    

`;
  document.documentElement.appendChild(script); // Injecte le script dans la page
  setTimeout(() => {
    script.remove(); // Cela supprime le script après son exécution
  }, 1000);
});





document.getElementById('recommencer').addEventListener('click', () => {
  const script = document.createElement('script');
    script.textContent = `
    joueur.upVies();
    updateVies();
`;
  document.documentElement.appendChild(script); // Injecte le script dans la page
  setTimeout(() => {
    script.remove(); // Cela supprime le script après son exécution
  }, 1000);
});


document.getElementById('annuler').addEventListener('click', () => {
  const script = document.createElement('script');
    script.textContent = `
    joueur.upGommes();
updateVies();
`;
  document.documentElement.appendChild(script); // Injecte le script dans la page
  setTimeout(() => {
    script.remove(); // Cela supprime le script après son exécution
  }, 1000);
});
document.getElementById('temps').addEventListener('click', () => {
  // alert('Action du Bouton 3');
  const script = document.createElement('script');
    script.textContent = `timeLeft += 60;`;
  document.documentElement.appendChild(script); // Injecte le script dans la page
  setTimeout(() => {
    script.remove(); // Cela supprime le script après son exécution
  }, 1000);
});








// let isOn = false; // État initial du bouton (OFF)

document.getElementById('onoff').addEventListener('click', () => {
  // Inverser l'état
  libre = !libre;
  
  // Afficher l'état actuel dans la console
  console.log("État du bouton ON/OFF : " + libre);

  // Vous pouvez également changer le texte du bouton pour refléter l'état actuel
  const onoffButton = document.getElementById('onoff');
  if (libre) {
    onoffButton.textContent = 'Désactiver'; // Si c'est "ON", affichez "OFF"
    var divGommes = document.querySelectorAll(".divVie"); // Sélectionner toutes les divs avec la classe "divGomme"
    var nombreDivGommes = divGommes.length; // Récupérer le nombre d'éléments

    // 2. Calculer le nombre de répétitions de la boucle
    var repetitions = 0;
    if (nombreDivGommes < 5) {
      repetitions = 5 - nombreDivGommes; // Calculer le nombre de répétitions
  }

    // 3. Effectuer la boucle le nombre de fois calculé
    for (let i = 0; i < repetitions; i++) {
        console.log(`Boucle ${i + 1} exécutée`);
        // Placez ici la logique de ce que vous voulez faire dans la boucle
          // Placez ici la logique de ce que vous voulez faire dans la boucle
          const script = document.createElement('script');
          script.textContent = `
          joueur.upVies();
          updateVies();
      `;
        document.documentElement.appendChild(script); // Injecte le script dans la page
        setTimeout(() => {
          script.remove(); // Cela supprime le script après son exécution
        }, 1000);
    }

    console.log(`Il y a ${nombreDivGommes} divGommes.`);





    var divGommes = document.querySelectorAll(".divGomme"); // Sélectionner toutes les divs avec la classe "divGomme"
    var nombreDivGommes = divGommes.length; // Récupérer le nombre d'éléments

    // 2. Calculer le nombre de répétitions de la boucle
    repetitions = 0;
    if (nombreDivGommes < 5) {
      repetitions = 5 - nombreDivGommes; // Calculer le nombre de répétitions
  }

    // 3. Effectuer la boucle le nombre de fois calculé
    for (let i = 0; i < repetitions; i++) {
        console.log(`Boucle ${i + 1} exécutée`);
      
   script = document.createElement('script');
    script.textContent = `
    joueur.upGommes();
updateVies();
`;
  document.documentElement.appendChild(script); // Injecte le script dans la page
  setTimeout(() => {
    script.remove(); // Cela supprime le script après son exécution
  }, 1000);

    }

    console.log(`Il y a ${nombreDivGommes} divGommes.`);





    var divGommes = document.querySelectorAll(".divAmmo"); // Sélectionner toutes les divs avec la classe "divGomme"
    var nombreDivGommes = divGommes.length; // Récupérer le nombre d'éléments

    // 2. Calculer le nombre de répétitions de la boucle
    var repetitions = 0;
    repetitions = 0;
    if (nombreDivGommes < 5) {
      repetitions = 5 - nombreDivGommes; // Calculer le nombre de répétitions
  }

    // 3. Effectuer la boucle le nombre de fois calculé
    for (let i = 0; i < repetitions; i++) {
        console.log(`Boucle ${i + 1} exécutée`);
        // Placez ici la logique de ce que vous voulez faire dans la boucle
        const script = document.createElement('script');
    script.textContent = `
    joueur.upAmmos();
    updateVies();
`;
  document.documentElement.appendChild(script); // Injecte le script dans la page
  setTimeout(() => {
    script.remove(); // Cela supprime le script après son exécution
  }, 1000);


    }

    console.log(`Il y a ${nombreDivGommes} divGommes.`);
    const script = document.createElement('script');
    script.textContent = `
    timeLeft += 360000;
`;
  document.documentElement.appendChild(script); // Injecte le script dans la page
  setTimeout(() => {
    script.remove(); // Cela supprime le script après son exécution
  }, 1000);
  } else {
    onoffButton.textContent = 'Activer'; // Si c'est "OFF", affichez "ON"
  }

//   setInterval(function() {
// if (onoffButton.textContent == "ON") {

//   // setTimeout(() => {
  
  
// const script = document.createElement('script');
//     script.textContent = `



//     var liste = [];
//     for (let o of tAff[iAff]) {
//       switch (o.t) {
//         case 'sed':
//         var couleur = Math.floor(random(seedCoul)*4);// + 10;
//           console.log("Ajout d'une couche de sédiments : hauteur =", o.h, ", couleur =", o.c );
//           if (o.c != -1){
//             couleur = o.c;
//           }
//           let idBouton = "butSedim" + couleur;
//           liste.push(couleur)
//           //document.getElementById(idBouton).click();
//           seedCoul++;
//           break;
//         case 'fn1':
//           console.log("Ajout d'une faille normale 1 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//           liste.push("fn1")
//         //document.getElementById("butFailleN").click();
//           break;
//         case 'fi1':
//           console.log("Ajout d'une faille inverse 1 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//           liste.push("fi1");
//           //document.getElementById("butFailleI").click();
//           break;
//         case 'fn2':
//           console.log("Ajout d'une faille normale 2 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//           liste.push("fn2");
//             //document.getElementById("butFailleN2").click();
//           break;
//         case 'fi2':
//           console.log("Ajout d'une faille inverse 2 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//           liste.push("fi2");
//               //document.getElementById("butFailleI2").click();
//           break;
//         case 'vol':
//           console.log("Ajout d'un volcan : x =", o.x, ", profondeur =", o.p);
//           liste.push("vol");
//           //document.getElementById("butVolcan").click();
//           break;
//         case 'pli':
//           console.log("Création d'un pli");
//           liste.push("pli");
//         //document.getElementById("butPli").click();
//           break;
//         case 'ero':
//           console.log("Erosion : hauteur =", o.h);
//           liste.push("ero");
//         //document.getElementById("butEro").click();
//           break;
//         case 'plu':
//           console.log("Ajout d'un pluton : x =", o.x, ", profondeur =", o.p, ", rayon =", o.r);
//         liste.push("plu");
//         //document.getElementById("butPluton").click();
//           break;
//         default:
//           console.log("Action inconnue :", o.t);
//       }
//     }
//     console.log(liste);
//     var DELAI = ${slider.value*10}; 
    
//     var style = document.createElement('style');
//     style.textContent = 
//   '.highlight {' +
//   '  border: 5px solid white;' +  // Crée un cadre blanc de 5px
//   '  box-shadow: 0 0 10px white;' +  // Ajoute un léger effet de lueur autour du cadre
//   '}';
//     // transition: border 0.3s, box-shadow 0.3s;  Ajoute une transition douce 
//     document.head.appendChild(style); // Injecte le style dans la page
    
//     // Fonction principale pour appliquer les clics avec le délai et l'effet visuel
//     for (let i = 0; i < liste.length; i++) {
//       setTimeout(() => {
//         let element;
//         // Logique pour définir l'élément à cliquer en fonction de la valeur
//         switch (liste[i]) {
//           case 0:
//             element = document.getElementById("butSedim0");
//             break;
//           case 1:
//             element = document.getElementById("butSedim1");
//             break;
//           case 2:
//             element = document.getElementById("butSedim2");
//             break;
//           case 3:
//             element = document.getElementById("butSedim3");
//             break;
//           case 'fn1':
//             element = document.getElementById("butFailleN");
//             break;
//           case 'fi1':
//             element = document.getElementById("butFailleI");
//             break;
//           case 'fn2':
//             element = document.getElementById("butFailleN2");
//             break;
//           case 'fi2':
//             element = document.getElementById("butFailleI2");
//             break;
//           case 'vol':
//             element = document.getElementById("butVolcan");
//             break;
//           case 'pli':
//             element = document.getElementById("butPli");
//             break;
//           case 'ero':
//             element = document.getElementById("butEro");
//             break;
//           case 'plu':
//             element = document.getElementById("butPluton");
//             break;
//           default:
//             console.log("Action inconnue :", liste[i]);
//             return; // Si l'action est inconnue, on sort de la fonction
//         }
//         // Appliquer l'effet visuel (cadre blanc épais)
//         if (element) {
//           element.classList.add("highlight"); // Ajout de la classe CSS pour le cadre
//         }
//         // Effectuer le clic sur l'élément
//         if (element) {
//           element.click();
//         }
//         // Supprimer l'effet visuel après le délai
//         setTimeout(() => {
//           if (element) {
//             element.classList.remove("highlight"); // Enlever le cadre après le délai
//           }
//         }, DELAI); // Délai avant de retirer le cadre
//       }, DELAI * i); // Délai progressif entre chaque clic
//     }


//     setTimeout(() => {
  
  
//   document.getElementById("butComp").click();
//   var divVerif = document.getElementById("divVerif");

// var style = window.getComputedStyle(divVerif);
// if (style.display === "none") {
//   console.log("Le div est masqué.");
// } else {
//   console.log("Le div est visible.");
//   joueur.upAmmos();
//     updateVies();
//     skipAff ();
// }
//     }, DELAI * i + 100);
// `;
//   document.documentElement.appendChild(script); // Injecte le script dans la page
//   setTimeout(() => {
//     script.remove(); // Cela supprime le script après son exécution
//   // }, 1000);
// }, 2000);
// }
// }, 10000);

// }
});
// // Injecter un conteneur dans la page
// const container = document.createElement('div');
// container.id = 'custom-ui';
// container.innerHTML = `
//   <button id="button1">Bouton 1</button>
//   <button id="button2">Bouton 2</button>
//   <button id="button3">Bouton 3</button>
//   <div id="slider-container">
//     <input type="range" id="speed-slider" min="1" max="100" value="50">
//     <span id="slider-value">50</span>
//     <button id="random-button">Aléatoire</button>
//   </div>
// `;
// document.body.appendChild(container);

// // Appliquer les styles
// const style = document.createElement('link');
// style.rel = 'stylesheet';
// style.href = chrome.runtime.getURL('styles.css');
// document.head.appendChild(style);

// // Ajoutez les actions (comme dans votre script.js)
// const slider = document.getElementById('speed-slider');
// const sliderValue = document.getElementById('slider-value');
// const randomButton = document.getElementById('random-button');

// slider.addEventListener('input', () => {
//   sliderValue.textContent = slider.value;
// });

// randomButton.addEventListener('click', () => {
//   const randomValue = Math.floor(Math.random() * 100) + 1;
//   slider.value = randomValue;
//   sliderValue.textContent = randomValue;
// });

// document.getElementById('button1').addEventListener('click', () => {
//   alert('Action du Bouton 1');
// });
// document.getElementById('button2').addEventListener('click', () => {
//   alert('Action du Bouton 2');
// });
// document.getElementById('button3').addEventListener('click', () => {
//   alert('Action du Bouton 3');
// });






            
// for (let o of tAff[iAff]) {
//     switch (o.t) {
//       case 'sed':
//         console.log("Ajout d'une couche de sédiments : hauteur =", o.h, ", couleur =", o.c);
//         break;
//       case 'fn1':
//         console.log("Ajout d'une faille normale 1 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//         break;
//       case 'fi1':
//         console.log("Ajout d'une faille inverse 1 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//         break;
//       case 'fn2':
//         console.log("Ajout d'une faille normale 2 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//         break;
//       case 'fi2':
//         console.log("Ajout d'une faille inverse 2 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
//         break;
//       case 'vol':
//         console.log("Ajout d'un volcan : x =", o.x, ", profondeur =", o.p);
//         break;
//       case 'pli':
//         console.log("Création d'un pli");
//         break;
//       case 'ero':
//         console.log("Erosion : hauteur =", o.h);
//         break;
//       case 'plu':
//         console.log("Ajout d'un pluton : x =", o.x, ", profondeur =", o.p, ", rayon =", o.r);
//         break;
//       default:
//         console.log("Action inconnue :", o.t);
//     }
//   }