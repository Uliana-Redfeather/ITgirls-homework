function getCard() {
  let cardarray = [];
 
 
  for(i=0;i<5;i++) {
let a = "B"+ generateRandom(1,15)
if (cardarray.includes(a)){
  i--;
} else {
  cardarray.push(a)
}

}

for(i=0;i<5;i++) {
  let a = "I"+ generateRandom(16,30)
  if (cardarray.includes(a)){
    i--;
  } else {
    cardarray.push(a)
  }
  
  }

  for(i=0;i<4;i++) {
    let a = "N"+ generateRandom(31,45)
    if (cardarray.includes(a)){
      i--;
    } else {
      cardarray.push(a)
    }
    
    }

    for(i=0;i<5;i++) {
      let a = "G"+ generateRandom(46,60)
      if (cardarray.includes(a)){
        i--;
      } else {
        cardarray.push(a)
      }
      
      }

      for(i=0;i<5;i++) {
        let a = "O"+ generateRandom(61,75)
        if (cardarray.includes(a)){
          i--;
        } else {
          cardarray.push(a)
        }
        
        }
return cardarray

}

function generateRandom(min, max) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;
  return rand;
}
console.log(getCard())