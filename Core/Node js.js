class Animales{

    constructor(Race,couleur,jambes){
        this.Race = Race;
        this.couleur = couleur;
        this.jambes = jambes;
    }
    makeSound() {
        console.log(`${this.Race} the ${this.couleur} says ${this.jambes}!`);
      }
    static numberOfLegs(num) {
        console.log(`This animal has ${num} legs.`);
      }
    
      path(){
        if(this.couleur=== this.Noir){
            console.log("guipard")
        }
        else if (this.couleur ===this.rouge){
            console.log("poisson")
        }
      }
}
const lion = new Animales("lion", "brown", 4);
lion.makeSound(); // lion the brown says 4!
Animales.numberOfLegs(4); // This animal has 4 legs.
lion.path(); // undefined (car la couleur de lion n'est ni "Noir" ni "rouge")