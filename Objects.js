/*Об'єкти з іменами*/ 
const fn =() => {
  const object1 = {name: "Denys"};
  let object2 = {name: "Bogdan"};

  object1.name = "Petro";
  object2.name = "Harry";

  console.log(object1, object2);
}

fn();


/* Функція createUser */
const createUser = (name, city) => {
  console.log({name, city});
}

createUser('Mussolini', 'Roma');