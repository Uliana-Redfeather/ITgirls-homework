function dataReverse(data) {
  let result = [];
  let result_temp = [];
  for (i=0; i<data.length;i += 8){
    result_temp = [];
    for (j=0;j<8;j++){
    
    result_temp.push(data.slice(i+j,i+j+1))
  }

  for (j=7;j>=0;j--){
    result.unshift(data.slice(i+j,i+j+1))
  }
  

}

  return result;
  
}

const person = {
  name: 'Valera',
  age: 23
}
let city = person.city
city= 'Amsterdam'
person.age = 15
console.log(person)