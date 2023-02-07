function check() {
  let name = document.getElementById("name");
  let surname = document.getElementById("surname");
  let age = document.getElementById("age");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  document.getElementById("errorMessage").innerHTML = "";

  if (name.value == "") {
    document.getElementById("errorMessage").innerHTML +=
      "<br> Name field is not filled <br>";
  }
  if (surname.value == "") {
    document.getElementById("errorMessage").innerHTML +=
      "Surname field is not filled <br>";
  }
  if (age.value == "") {
    document.getElementById("errorMessage").innerHTML +=
      "Age field is not filled <br>";
  } else {
    if (age.value != "1234567890") {
      document.getElementById("errorMessage").innerHTML +=
        "Please write down an age <br>";
    }
  }
  if (email.value == "") {
    document.getElementById("errorMessage").innerHTML +=
      "Email field is not filled <br>";
  } else {
    if (email.value != "@") {
      document.getElementById("errorMessage").innerHTML +=
        "Please write down an email <br>";
    }
  }
  if (password.value == "") {
    document.getElementById("errorMessage").innerHTML +=
      "Password field is not filled <br>";
  } else {
    alert(`Welcome, ${name.value}`);
  }
}

class users {
  constructor(name, surname, age, email, password) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.password = password;
  }
}

function response() {
  let user = new users(
    document.getElementById("name").value,
    document.getElementById("surname").value,
    document.getElementById("age").value,
    document.getElementById("email").value,
    document.getElementById("password").value
  );

  fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  console.log(JSON.stringify(user));
}
