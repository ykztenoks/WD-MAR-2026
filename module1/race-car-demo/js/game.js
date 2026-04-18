class Game {
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.endScreen = document.getElementById("game-end");
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.highScoresElement = document.querySelector("#high-scores");
    this.player = new Player(110, 300, 60, 120, "images/car.png");
    this.height = 400;
    this.width = 300;
    this.obstacles = [new Obstacle()];
    this.projectiles = [];
    this.score = 0;
    this.lives = 1;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = 1000 / 60;
    this.counter = 0;
    this.shootingSound = new Audio("../sounds/shoot.wav");
    this.shootingSound.volume = 0.1;
  }
  start() {
    //this sets the height and width of the game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    //this hides the start screen
    this.startScreen.style.display = "none";
    //this shows the game screen
    this.gameScreen.style.display = "block";
    // //this will call the generate hearts method and add them to the game screen
    this.generateHearts();
    //this starts the loop for the game
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  generateHearts() {
    for (let i = 0; i < 3; i++) {
      const heartImg = document.createElement("img");
      if (i < this.lives) {
        heartImg.src = "images/heart-full.png";
      } else {
        heartImg.src = "images/heart-empty.png";
      }
      heartImg.classList.add("heart");
      this.livesElement.appendChild(heartImg);
    }
  }
  gameLoop() {
    this.update();
    //this checks when the game is over and if true then stops the game
    if (this.gameIsOver === true) {
      clearInterval(this.gameIntervalId);
      //when the game is over, store the score inside the local storage
      const highScoresFromLS = JSON.parse(localStorage.getItem("highScores"));
      // //the first time you play the game, you need to only set the high score
      if (!highScoresFromLS) {
        localStorage.setItem("highScores", JSON.stringify([this.score]));
      } else {
        highScoresFromLS.push(this.score);
        //after you push the score, sort in desc order and slice the first 3
        //sorting the highscores
        highScoresFromLS.sort((a, b) => {
          if (a > b) {
            return -1;
          } else if (a < b) {
            return 1;
          } else {
            return 0;
          }
        });
        const topThreeScores = highScoresFromLS.slice(0, 3);
        localStorage.setItem("highScores", JSON.stringify(topThreeScores));

        //   //this will update the DOM to show the three scores we stored
        topThreeScores.forEach((oneScore) => {
          const newLi = document.createElement("li");
          newLi.innerText = oneScore;
          this.highScoresElement.appendChild(newLi);
        });
      }
    }
  }

  update() {
    //increment the counter so we can add obstacles when it is a certain number
    this.counter++;
    //this updates the player on the DOM based on the directions of the player
    this.player.move();

    //this will move all of the obstacles
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();

      //this is checking for collisions (inside the for loop)
      const didCollide = this.player.didCollide(currentObstacle);
      console.log("did it collide", didCollide);
      if (didCollide) {
        this.obstacles.splice(i, 1);
        currentObstacle.element.remove();
        this.lives--;
        this.livesElement.innerHTML = "";
        // this.livesElement.innerText = this.lives;
        this.generateHearts();
        //play the horn sound on collision
        // this.horn.play();
      }

      //this checks the top of the obstacle and if it is greater than the height of the game screen ...
      //then it increases the score and removes that obstacle
      //first increment the score
      if (currentObstacle.top > this.height + 100) {
        this.score++;
        //remove the obstacle from the array
        this.obstacles.splice(i, 1);
        //update the DOM to reflect the new score
        this.scoreElement.innerText = this.score;
        currentObstacle.element.remove();
        i--;
      }

      for (let j = 0; j < this.projectiles.length; j++) {
        const currentProjectile = this.projectiles[j];
        currentProjectile.move();

        if (currentProjectile.didCollide(currentObstacle)) {
          //remove the obstacle
          this.obstacles.splice(i, 1);
          currentObstacle.element.remove();
          //remove the bullet from array and the DOM
          this.projectiles.splice(j, 1);
          currentProjectile.element.remove();
        }
      }
    }

    //outside the for loop
    //checking for when the game is over
    if (this.lives === 0) {
      console.log("you died, you lost all your lives");
      this.gameIsOver = true;
      this.player.element.remove();
      this.obstacles.forEach((oneObstacle) => {
        oneObstacle.element.remove();
      });
      //hide the game screen and show the game over screen
      this.gameScreen.style.display = "none";
      this.endScreen.style.display = "block";
    }

    //this adds a new obstacle to the array every so many frames
    if (this.counter % 120 === 0) {
      this.obstacles.push(new Obstacle());
    }
  }

  playShootingSound() {
    this.shootingSound.play();
  }
}
