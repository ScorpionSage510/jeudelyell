
for (let o of tAff[iAff]) {
    switch (o.t) {
      case 'sed':
        console.log("Ajout d'une couche de sédiments : hauteur =", o.h, ", couleur =", o.c);
        break;
      case 'fn1':
        console.log("Ajout d'une faille normale 1 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
        break;
      case 'fi1':
        console.log("Ajout d'une faille inverse 1 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
        break;
      case 'fn2':
        console.log("Ajout d'une faille normale 2 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
        break;
      case 'fi2':
        console.log("Ajout d'une faille inverse 2 : x =", o.x, ", pente =", o.p, ", hauteur =", o.h);
        break;
      case 'vol':
        console.log("Ajout d'un volcan : x =", o.x, ", profondeur =", o.p);
        break;
      case 'pli':
        console.log("Création d'un pli");
        break;
      case 'ero':
        console.log("Erosion : hauteur =", o.h);
        break;
      case 'plu':
        console.log("Ajout d'un pluton : x =", o.x, ", profondeur =", o.p, ", rayon =", o.r);
        break;
      default:
        console.log("Action inconnue :", o.t);
    }
  }