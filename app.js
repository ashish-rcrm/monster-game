new Vue({
    el: "#app",
    data: {
        gameStatus: false,
        playerHealth: 100,
        monsterHealth: 100,
        turns: []
    },
    methods: {
        startGame() {
            this.gameStatus = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack() {
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits monster for " + damage
            });
            if (this.checkWin()) {
                return;
            }

            damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: "Monster hits player for " + damage
            });
        },
        specialAttack() {
            let damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits Monster hard for " + damage
            })

            if (this.checkWin()) {
                return;
            }

            damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: "Monster hits player for " + damage
            });
        },
        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            }
            else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: "Player heals for 10"
            })

            let damage = this.calculateDamage(3, 10);
            this.playerHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: "Monster hits player for " + damage
            });
        },
        giveUp() {
            this.gameStatus = false;
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm("You Won, New Game??")) {
                    this.startGame();
                }
                else {
                    this.gameStatus = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0) {
                if (confirm("You lost, Wanaa Try Again!")) {
                    this.startGame();
                }
                else {
                    this.gameStatus = false;
                }
                return true;
            }
            return false;
        }
    }
})