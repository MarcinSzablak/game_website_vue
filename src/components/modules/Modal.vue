<script lang="ts">
import "../../main.scss"
export default{
    props:['gameOver', 'resetGame', 'playerOrder'],
}
</script>
<template>
    <div
        :style=" !gameOver ? {display: 'none'}: {display: 'flex'}"
        class="modal"
        >
        <div class="box-modal">
            <p
                class="text modal-text"
            >{{gameOver && playerOrder !== 'none' ? playerOrder + ' player wins!' : 'Draw'}} </p>
            <button
                class="modal-button"
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
    top: 0;
    backdrop-filter: blur(2px);
}
.box-modal{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: calc(10vw + 26vh);
    height: calc(10vw + 26vh);
    background-color: rgba(43, 39, 48, 0.9);
    border-radius: calc(0.3vw + 0.5vh);
}
.modal-text{
    color: var(--new-white);
    font-family: 'Urbanist', sans-serif;
    font-size: calc(0.6vw + 2.7vh);
    text-align: center;
}
.modal-button{
    padding: calc(0.3vw + 0.8vh);
    font-size: calc(0.3vw + 2vh);
    font-family: 'Urbanist', sans-serif;
    border-radius: calc(0.3vw + 0.5vh);
}
</style>