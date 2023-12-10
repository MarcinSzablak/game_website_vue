<script lang="ts">
export default{
    data(){
        return{
            board: [
                ["","",""],
                ["","",""],
                ["","",""]
            ] as Array<Array<string>>,
            playerOrder: "X" as string,
            gameOver: false as boolean,
            clicks: 0 as number,
        }
    },
    methods:{
        playerClick(rowIndex: any, colIndex: any){
            if(this.board[rowIndex][colIndex] == ""){
                this.board[rowIndex][colIndex] = this.playerOrder
                this.clicks += 1
                if (this.checkWinCondition()){
                    this.gameOver = true
                    this.playerOrderChange()
                }
                this.playerOrderChange()
            }
            if (this.clicks >= 9){
                this.gameOver = true
                this.playerOrder = "none"
            }
            return
        },
        playerOrderChange(){
            if(this.playerOrder == "X"){
                this.playerOrder = "O"
                return
            }
            this.playerOrder = "X"
            return
        },
        checkWinCondition() {
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
        resetGame(){
            this.gameOver = !this.gameOver
            this.board = [ ["","",""], ["","",""],["","",""]]
            this.clicks = 0
            this.playerOrderChange()
        },
    }
}
</script>

<template>
    <div class="main-container unselectable">
        <table class="board">
            <tr
                class="row"
                v-for="(row, rowIndex) in board"
                :key="rowIndex"
            >
                <button
                    class="column"
                    :class="{
                        'x-theme': board[rowIndex][colIndex] === 'X',
                        'o-theme': board[rowIndex][colIndex] === 'O'
                    }"
                    v-for="(col, colIndex) in row"
                    :key="colIndex"
                    :disabled="gameOver"
                    v-on:click="playerClick(rowIndex, colIndex)"
                >{{board[rowIndex][colIndex]}}</button>
            </tr>
        </table>
        <div
            :style=" !gameOver ? {display: 'none'}: {display: 'flex'}"
            class="modal"
        >
            <div class="boxModal">
                <p class="text modalText">Player {{playerOrder}} wins!</p>
                <button
                    class="text"
                    v-on:click.prevent="resetGame"
                >Reset</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.modal{
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
}
.boxModal{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    background-color: rgba(43, 39, 48, 0.9);
}
.modalText{
    color: var(--new-white);
    font-size: 30px;
}

button{
    padding: 10px;
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
    width: 100px;
    height: 100px;
    margin: 5px;
    font-family: 'Urbanist', sans-serif;
    font-size: 100px;
}
.x-theme{
    background-color: var(--new-pink);
}
.o-theme{
    background-color: var(--new-blue);
}
</style>