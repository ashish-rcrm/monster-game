new Vue({
    el: "#app",
    data: {
        gameStatus: false,
        playerHealth: 100,
        monsterHealth: 100,
        logs: []
    },
    methods: {
        startGame() {
            this.gameStatus = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack() {
            let max = 10;
            let min = 3;
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;

            if (this.monsterHealth <= 0) {
                alert("You won!!");
                this.gameStatus = false;
                return;
            }

            max = 12;
            min = 5;
            damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;

            if (this.playerHealth <= 0) {
                alert("You lost!!");
                this.gameStatus = false;
                return;
            }
        },
        specialAttack() {

        },
        heal() {

        },
        giveUp() {
            this.gameStatus = !this.gameStatus;
            this.health1 = 100;
            this.health2 = 100;
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        }
    }
})