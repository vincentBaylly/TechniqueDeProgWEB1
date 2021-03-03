function Personne(nom, age, genre) {
  this.nom = nom;
  this.age = age;
  this.genre = genre;

  this.salutation = function () {
    alert("Bonjour ! Je m'appelle " + this.nom + ".");
  };

  //
  this.description = function () {
    alert(
      "Hello ! Je m'appelle " +
        this.nom +
        " et j'ai " +
        this.age +
        " je suis une " +
        this.genre +
        "."
    );
  };
}

var personne1 = new Personne("Vincent", 36, "M");
personne1.salutation();
personne1.description();
