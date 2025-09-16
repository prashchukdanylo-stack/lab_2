const phoneBook = {
  Chriss: "+123456789032",
  Tom: "+3054940781111"
};

function findByName(name) {
  console.log(phoneBook[name]);
}

findByName("Chriss");