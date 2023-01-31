function joke() {
  fetch("https://geek-jokes.sameerkumar.website/api?format=json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.joke);
      document.getElementById("joke").innerHTML = data.joke;
    });
}
