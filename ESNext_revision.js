// Classes ==> not ES7 (look at google docs)
class human {
  constructor(gender) {
    this.gender = gender;
  }

  revealGender() {
    return `I AM A ${this.gender}`;
  }
}

class person extends human {
  constructor(gender, name) {
    super(gender);
    this.name = name;
  }

  displayMe() {
    console.log(`MY NAME IS ${this.name} AND I AM A ${this.gender}`);
  }
}

const person1 = new person("FEMALE", "VICTORIA");

console.log(person1);
person1.displayMe();

//Destruct array --------------
const arr = [1, 6, 8];
const [n1, , n2] = arr; //must get in the same INDEX
console.log(n1, n2);

//Destruct obj ----------------
const file = {
  filename: "img.png",
  path: "./src/assets/imgs",
};

const { path } = file; //Must use same name as the att just as in 'import from'
console.log(path);

//Reference and copy ---------
//--> if i assign an object/arr to another, we assign the reference in memory, so if i change one, the other will suffer
//--> to avoid that, use the spread operator to make a copy from an object/arr
