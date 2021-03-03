var Animal = function () {
  this.race = race;
  this.couleur = couleur;
  this.taille = taille;
  this.estNourri = estNourri;
  this.estFatigue = fatigue;
};

function Animal() {
  this.race = race;
  this.couleur = couleur;
  this.taille = taille;
  this.estNourri = estNourri;
  this.estFatigue = estfatigue;
}

Animal.prototype.manger = function () {
  this.estNourri = true;
  console.log("L animal a mange " + this.estNourri);
};

Animal.prototype.comportementDeMonObjet = function () {
  //code logique de mon comportement
  //if
  //while
  //for
};

Animal.prototype.deplacement = function () {
  //code logique de mon comportement
  //
  //sauter
  //courrir
};

Animal.prototype.dormir = function () {
  if (this.estFatigue) {
    this.estFatigue = false;
  }
  console.log("L animal a dormi");
};

var animal = new Animal("chat");
animal.dormir();
