class Game {
  constructor(name) {
    this.name = name;
    this.playersWins = 0;
    this.dealerWins = 0;
    console.log("Game constructor " + this.name);
    this.id = "game_" + this.name.replace(" ", "_");
    this.container = this.createContainer();

    this.addListeners();
  }

  createContainer() {
    const container = document.createElement("div");
    container.id = this.id;
    container.className = "game";
    container.innerHTML = `<h1>${this.name}</h1>
    <button id="deal_${this.id}">Deal</button>
    <button id="hit_${this.id}">Hit</button>
    <button id="stand_${this.id}">Stand</button>
    <div id="players_${this.id}">players area</div>
    <div id="result_${this.id}">result area</div>
    `;
    document.body.appendChild(container);
    return container;
  }


  addListeners() {
    const dealButton = document.getElementById("deal_"+this.id);
    dealButton.addEventListener("click", this.deal.bind(this));
    const hitButton = document.getElementById("hit_" + this.id);
    hitButton.addEventListener("click", this.hit.bind(this));
    const standButton = document.getElementById("stand_" + this.id);
    standButton.addEventListener("click", this.stand.bind(this));
  }

  deal() {
    console.log("Deal");
  }

  stand() {
    console.log("Stand");
  }

  hit() {
    console.log("Hit");
  } 



}

export default Game;