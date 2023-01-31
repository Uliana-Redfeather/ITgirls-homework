
function foxes() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("image").style.backgroundImage =
        "url(" + data.image + ")";
      console.log(data.image);
      console.log(document.getElementById("image").style.backgroundImage);
    });
}
