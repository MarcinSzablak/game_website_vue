<script lang="ts">
export default{
    data(){
        return{
            board: [
                ["","",""],
                ["","",""],
                ["","",""]
            ] as Array<Array<string>>,
            playerOrder: "X",
        }
    },
    methods:{
        playerClick(rowIndex: any, colIndex: any){
            if(this.board[rowIndex][colIndex] == ""){
                this.board[rowIndex][colIndex] = this.playerOrder
                this.playerOrderChange()
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
        }
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
                <td
                    class="column"
                    :class=""
                    v-for="(col, colIndex) in row"
                    :key="colIndex"
                    v-on:click="playerClick(rowIndex, colIndex)"
                >{{board[rowIndex][colIndex]}}</td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
.main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.board{

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
    background-color: aqua;
}
.o-theme{
    background-color: brown;
}
</style>