function creerNouvellePersonne(nom) {
  var obj = {};
  obj.nom = nom;
  obj.salutation = function () {
    alert("Salut ! Je m'appelle " + this.nom + ".");
  };
  return obj;
}

var salva = creerNouvellePersonne("Salva");
console.log(salva.nom);
salva.salutation();
