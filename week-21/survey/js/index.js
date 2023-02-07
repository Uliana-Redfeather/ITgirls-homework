class cats {
  constructor(nickname, name, phone, breed, food, sex) {
    this.nickname = nickname;
    this.name = name;
    this.phone = phone;
    this.breed = breed;
    this.food = food;
    this.sex = sex;
  }
}
function saveCat() {
  let cat1 = new cats(
    document.getElementById("name").value,
    document.getElementById("owner").value,
    document.getElementById("number").value,
    document.getElementById("breed").value,
    document.getElementById("food").value,
    document.getElementById("sex").value
  );
  console.log(cat1);
}

button.onclick = function (e) {
  e.preventDefault();

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: new FormData(formElem),
  })
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
    })
    .catch((error) => console.log(error));
};
