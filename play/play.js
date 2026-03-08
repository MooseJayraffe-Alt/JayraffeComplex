const gameDatabase = {
  "half-life": {
    title: "Half-Life",
    creator: "Valve Software",
    desc: "Run, think, shoot, live.",
    cover: "https://archive.org/download/hl_assets/cover.jpg",
    screenshots: ["ss1.jpg", "ss2.jpg", "ss3.jpg"],
    engine: "xash3d"
  }
  // ... more games
};

function setupPage(gameId) {
  const game = gameDatabase[gameId];
  
  // Set the blurred background
  document.getElementById('bg-image').style.backgroundImage = `url(${game.cover})`;
  
  // Set Text Content
  document.getElementById('game-title').innerText = game.title;
  document.getElementById('game-creator').innerText = `Created by: ${game.creator}`;
  document.getElementById('game-desc').innerText = game.desc;

  // Pick a random photo from the list
  const randomImg = game.screenshots[Math.floor(Math.random() * game.screenshots.length)];
  document.getElementById('random-screenshot').src = randomImg;
}
