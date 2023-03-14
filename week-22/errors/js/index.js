function search() {
  const offset = Math.floor(Math.random() * 1000);
  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=AdLPl92OxDLhPqzx7vyRerj5rE6MULPK&q=cats&limit=5&offset=" +
      offset +
      "&rating=g&lang=en"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong");
    })
    .then((data) => {
      document.querySelector(".containergif").replaceChildren();

      for (var i in data.data) {
        const gif = document.createElement("img");
        gif.src = data.data[i].images.original.url;
        document.querySelector(".containergif").appendChild(gif);
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}
