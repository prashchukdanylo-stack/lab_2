const phoneBook = [
  {name: "Mussolini",
    phone: "+205678936789" },
  {name: "Chriss",
    phone: "+123456789032"},
  {name: "Tom",
    phone: "+3054940781111"
  }
]


const findPhoneByName = (name) => {
  for (const object of phoneBook){
    if (object.name === name){
      console.log(object.phone);
    }
  }
}
findPhoneByName("Tom");