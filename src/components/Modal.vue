<script lang="ts">
import "../main.scss"
export default{
    props:['gameOver', 'resetGame', 'playerOrder'],
}
</script>
<template>
    <div
        :style=" !gameOver ? {display: 'none'}: {display: 'flex'}"
        class="modal"
        >
        <div class="boxModal">
            <p
                class="text modalText"
            >{{gameOver && playerOrder !== 'none' ? playerOrder + ' player wins!' : 'Draw'}} </p>
            <button
                class="text"
                v-on:click.prevent="resetGame"
            >Reset</button>
        </div>
    </div>
</template>
<style>
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
    justify-content: space-evenly;
    align-items: center;
    width: 300px;
    height: 300px;
    background-color: rgba(43, 39, 48, 0.9);
}
.modalText{
    color: var(--new-white);
    font-family: 'Urbanist', sans-serif;
    font-size: 30px;
}
</style>