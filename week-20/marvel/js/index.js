let superheroes = `[{
    "name": "Batman",
    "universe": "DC comics",
    "alterEgo": "Bruce Wayne",
    "job": "justice saviour",
    "friends": "Robin, Batgirl",
    "superpowers": "intelligence, flexibility",
    "img":"https://upload.wikimedia.org/wikipedia/ru/thumb/a/a2/Batman_Jim_Lee.jpg/219px-Batman_Jim_Lee.jpg"
},{
    "name": "Superman",
    "universe": "DC comics",
    "alterEgo": "Clark Kent",
    "job": "justice warrior",
    "friends": "dog Krypto",
    "superpowers": "superpower, flight, self-healing",
    "img":"https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg"
},{
    "name": "Spiderman",
    "universe": "Marvel comics",
    "alterEgo": "Peter Parker",
    "job": "justice warrior, student, photographer",
    "friends": "the Avengers",
    "superpowers": "spider senses",
    "img":"https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png"
}]`;
document.addEventListener("DOMContentLoaded", function (event) {
  let jsons = JSON.parse(superheroes);

  let content = "";
  for (let json of jsons) {
    content += ` <div class="superheroes-block">
        <br>
        <img
          class="image_block"
          src="${json.img}"
          alt="sprinkler"
        />
        
        <div class="superheroes_info">
          <a class="topic_headers"><h2>${json.name}</h2></a>
          <a class="card_article_text"
            ><div>universe: ${json.universe}</div>
            <div>alterEgo: ${json.alterEgo}</div>
            <div>job: ${json.job}</div>
            <div>friends: ${json.friends}</div>
            <div>superpowers: ${json.superpowers}</div></a
          >
        </div>
    `;
  }
  document.getElementById("jsonsContainer").innerHTML = content;
});
