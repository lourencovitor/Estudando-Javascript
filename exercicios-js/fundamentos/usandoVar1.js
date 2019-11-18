{
  {
    {
      {
        var sera = "Será???";
        console.log(sera);
      }
    }
  }
}

// Varivel so tem dois escopos possiveis ou ele é nivel GLOBAL visivel na aplicação inteira ou cria uma var de escopo de função

console.log(sera);

function teste(){
    var local = 123;
    console.log(local);
}

teste();
console.log(local);