obj1 = {
  first:  "1",
  second: "2",
  third:  false,
  fourth: ["anytime",2,3,4],
  fifth:  null,
  sixth:  undefined,
  seventh:{}
}

function strCount(obj){

  result = 0;
  for (var i in obj) {
    if (typeof obj[i] == 'object') result += strCount(obj[i]);
    if (typeof obj[i] == 'string') result += 1
  }


    return result
  }

