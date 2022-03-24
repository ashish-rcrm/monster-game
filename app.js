new Vue({
    el: "#app",
    data: {
        gameStatus: false,
        playerHealth: 100,
        monsterHealth: 100,
        logs: []
    },
    computed: {
        winner: function () {
            if (this.health2 < 0)
                alert("You have defeated the monster!!");
            giveUp();
        }
    },
    methods: {
        startGame: function () {
            this.gameStatus = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        Attack: function () {
            console.log("called");
            this.playerHealth -= 5;
            this.monsterHealth -= 7;
            return {

            }
        },
        giveUp: function () {
            this.gameStatus = !this.gameStatus;
            this.health1 = 100;
            this.health2 = 100;
        }
    }
})