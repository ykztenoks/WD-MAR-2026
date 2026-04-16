class Projectile {
  constructor(top, left) {
    this.gameScreen = document.querySelector("#game-screen");
    this.left = left;
    this.top = top;
    this.width = 20;
    this.height = 40;
    //this creates the <img /> in js to append to the game screen
    this.element = document.createElement("img");
    this.element.style.position = "absolute";
    this.element.src = "images/bullet.png"; // './images/carImage.png'
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    //this actually adds the img to the DOM
    this.gameScreen.appendChild(this.element);
  }
  move() {
    this.top -= 8;
    this.updatePosition();
  }
  //this method visually shows us where the player move
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
