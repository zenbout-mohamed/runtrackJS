document.getElementById('rebootButton').addEventListener('click', function() {
    var quotes = [
      "Tout ce que je peux faire, c'est vous dire que c'est un oiseau de proie. Mais vous devez décider si c'est un oiseau de proie pour vous, ou pour quelqu'un d'autre.",
      "Je pense que c'est votre vie... mais c'est juste une supposition.",
      "Ce sont vos yeux. Rien de plus.",
      "D'habitude, on peut voir un peu la ville, mais pas cette nuit. Il est couvert de brume.",
      "C'est juste le souvenir d'un chien errant qui traverse la pluie.",
      // Ajoutez d'autres citations de "Blade Runner" ici
    ];
    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.querySelector('.jumbotron h1').innerText = quotes[randomIndex];
  });

function changeContent(content) {
    document.querySelector('.jumbotron p').innerText = content;
}