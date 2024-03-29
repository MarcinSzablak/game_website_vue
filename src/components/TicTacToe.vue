<script lang="ts">
import '../main.scss'
import Modal from './modules/Modal.vue'

interface Stats {
    x_Wins: number,
    o_Wins: number,
    draw: number
}

export default {
    props:['theme'],
    components:{
        Modal
    },
    data() {
        return {
            board: [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ] as Array<Array<string>>,
            playerOrder: "X" as string,
            gameOver: false as boolean,
            clicks: 0 as number,
            stats: {
                x_Wins: 0,
                o_Wins: 0,
                draw: 0,
            } as Stats,
            aiPlay: false as boolean,
            audio: new Audio("https://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"),
        }
    },
    methods: {
        playerClick(rowIndex: any, colIndex: any): void {
            if (this.board[rowIndex][colIndex] == "") {
                this.board[rowIndex][colIndex] = this.playerOrder
                this.clicks += 1
                this.playSoundEffect()
                if (this.checkWinCondition()) {
                    this.gameOver = true
                    switch (this.playerOrder) {
                        case "X":
                            this.stats.x_Wins += 1
                            break;
                        default:
                            this.stats.o_Wins += 1
                            break;
                    }
                    return;
                }
                this.playerOrderChange()
                if (this.aiPlay) this.aiMove();
            }
            if (this.clicks >= 9) {
                this.gameOver = true
                this.playerOrder = "none"
                this.stats.draw += 1
            }
            return
        },
        playerOrderChange(): void {
            if (this.playerOrder === "X" && !this.gameOver) {
                this.playerOrder = "O";
                return;
            }
            this.playerOrder = "X";
            return;
        },
        //checks win condytion
        checkWinCondition(): any {
            const b = this.board;
            const winConditions = [
                [b[0][0], b[0][1], b[0][2]],
                [b[1][0], b[1][1], b[1][2]],
                [b[2][0], b[2][1], b[2][2]],
                [b[0][0], b[1][0], b[2][0]],
                [b[0][1], b[1][1], b[2][1]],
                [b[0][2], b[1][2], b[2][2]],
                [b[0][0], b[1][1], b[2][2]],
                [b[0][2], b[1][1], b[2][0]]
            ];

            for (const condition of winConditions) {
                const [a, b, c] = condition;
                if (a !== "" && a === b && a === c) {
                    return a;
                }
            }
            return null;
        },
        //reset game
        resetGame(): void {
            this.board = [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ]
            this.clicks = 0
            this.playerOrderChange()
            this.gameOver = !this.gameOver
        },
        //make move as ai
        aiMove(): void {
            if (!this.gameOver) {
                let attempts = 0;
                const maxAttempts = 50;

                while (attempts < maxAttempts) {
                    const rowIndex = Math.floor(Math.random() * 3);
                    const colIndex = Math.floor(Math.random() * 3);

                    if (this.board[rowIndex][colIndex] === "") {
                        this.board[rowIndex][colIndex] = this.playerOrder;
                        this.clicks += 1;

                        if (this.checkWinCondition()) {
                            this.gameOver = true;
                            switch (this.playerOrder) {
                                case "X":
                                    this.stats.x_Wins += 1;
                                    break;
                                default:
                                    this.stats.o_Wins += 1;
                                    break;
                            }
                            return;
                        }

                        this.playerOrderChange();
                        return;
                    }

                    attempts++;
                }
                this.gameOver = true;
                this.playerOrder = "none";
                this.stats.draw += 1;
            }
        },
        //switch second player to ai
        changeToAi(): void {
            this.aiPlay = !this.aiPlay
            this.board = [
                ["", "", ""],
                ["", "", ""],
                ["", "", ""]
            ]
            this.clicks = 0
            this.stats.x_Wins = 0
            this.stats.o_Wins = 0
            this.stats.draw = 0
            this.playerOrder = "X"
        },
        playSoundEffect():void{
            this.audio.play()
        }
    }
}
</script>

<template>
    <div
        class="main-container unselectable"
        :class="theme ? 'darkMain' : 'lightMain'">

        <div
            class="stats-box"
            >
            <p
                v-for="(stat, statIndex) in stats"
                class="text stats"
                :class="{
                    'x-theme': statIndex.toString() === 'x_Wins',
                    'o-theme': statIndex.toString() === 'o_Wins',
                    'darkMain': theme ,
                    'lightMain': !theme,
                }"
            >{{statIndex.toString().replace("_Wins"," ").toUpperCase()}}: {{stat}}</p>
        </div>

        <p class="actual-player" :class="theme ? 'darkMain' : 'lightMain'">{{gameOver && playerOrder === 'none' ? 'Draw' : playerOrder}}</p>

        <table class="board">
            <tr
                class="row"
                v-for="(row, rowIndex) in board"
                :key="rowIndex"
            >
                <button
                    class="column"
                    :class="{
                        'clicked': board[rowIndex][colIndex] ,
                        'x-theme': board[rowIndex][colIndex] === 'X',
                        'o-theme': board[rowIndex][colIndex] === 'O',
                        'darkMain': theme ,
                        'lightMain': !theme,
                    }"
                    v-for="(col, colIndex) in row"
                    :key="colIndex"
                    :disabled="gameOver"
                    v-on:click="playerClick(rowIndex, colIndex)"
                >{{board[rowIndex][colIndex]}}</button>
            </tr>
        </table>
        <button
            class="ai-button"
            :class="aiPlay ? 'darkButton': 'lightButton'"
            v-on:click.prevent="changeToAi"
        >AI Play</button>
        <Modal
            :gameOver="gameOver"
            :resetGame="resetGame"
            :playerOrder="playerOrder"
        ></Modal>
    </div>
</template>

<style scoped>
.actual-player{
    font-family: 'Urbanist', sans-serif;
    font-size: calc(1vw + 2vh);
    font-weight: 900;
}
.row{
    display: flex;
}
table, tr, td{
    border-collapse: separate;
}
.column{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--new-gray);
    width: calc(4vw + 8vh);
    height: calc(4vw + 8vh);
    margin: calc(0.1vw + 0.5vh);
    font-family: 'Urbanist', sans-serif;
    font-weight: 900;
    font-size: calc(5vw + 9vh);
    cursor: pointer;
}
.column.clicked{
    animation: pop 0.2s linear 1;
}
@keyframes pop{
  50%  {transform: scale(1.1);}
}
.x-theme{
    background-color: var(--new-pink) !important;
    cursor: default;
}
.o-theme{
    background-color: var(--new-blue) !important;
    cursor: default;
}

.stats-box{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin: 0.4vh;
}
.stats{
    background-color: var(--new-gray);
    margin: calc(0.4vw + 1vh);
    padding: calc(0.2vw + 0.6vh);
    font-family: 'Urbanist', sans-serif;
    font-size: calc(1vw + 1.5vh);
    font-weight: 500;
    border-radius: calc(0.3vw + 0.5vh);
    border: calc(0.1vw + 0.1vh) black solid;
}
.ai-button{
    margin-top: calc(0.4vw + 1vh);
    border-radius: calc(0.3vw + 0.5vh);
    font-size: calc(1vw + 1.5vh);
    color: black;
    padding: calc(0.1vw + 1vh);
    cursor: pointer;
}
.darkButton {
    background-color: var(--new-purple);
    color:white;
    border:calc(0.1vw + 0.1vh) var(--new-purple) solid;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.lightButton {
    background-color: var(--new-white);
    border:calc(0.1vw + 0.1vh) black solid;
    transition: background-color 0.3s ease, box-shadow 0.1s ease, color 0.1s ease;
}

@media screen and (max-width: 650px) {
    .ai-button{
        margin-top: calc(0.4vw + 1vh);
        border-radius: calc(0.5vw + 0.8vh);
        font-size: calc(1.8vw + 2.4vh);
        padding: calc(0.2vw + 1.5vh);
    }
}
</style>