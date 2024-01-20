<script lang="ts">
export default{
    props:['card', 'flipCard'],
}
</script>

<template>
    <div
        class="card"
        v-on:click="flipCard"
        :class="{ 'flip': card.isFlipped, 'flipImage': !card.isFlipped}"
    >
        <div class="card-front side"></div>
        <img
            class="card-image side"
            :class="{ 'matched' : card.isMatched }"
            :src="card.img"
        />
    </div>
</template>

<style scoped>
.matched{
    cursor: default !important;
    opacity: 0.7;
}
.side{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    position: absolute;
    backface-visibility: hidden;
}
.card-front{
    backface-visibility: hidden;
}
.card-image{
    backface-visibility: hidden;
    transform: rotateY(180deg);
    object-fit: cover;
    cursor: default;
}
.card{
    -webkit-box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.25);
    box-shadow: 2px 2px 3px 0px rgba(0,0,0,0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--new-pink);
    border-radius: 10px;
    margin: calc(0.5vw + 0.5vh);
    cursor: pointer;
    position: relative;
    width: calc(4vw + 7vh);
    height: calc(4vw + 7vh);
    transform-style: preserve-3d;
}

.flip {
    animation: result 0.5s ease-out forwards;
}
.flipImage {
    animation: resultImg 0.5s ease-out forwards;
}

@keyframes result {
    from {
    transform: rotateY(0deg);
    }
    to {
    transform: rotateY(180deg);
    }
}

@keyframes resultImg {
    from {
    transform: rotateY(180deg);
    }
    to {
    transform: rotateY(0deg);
    }
}


</style>