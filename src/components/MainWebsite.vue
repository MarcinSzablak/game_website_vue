<script lang="ts">
import '../main.scss'
export default{
    props:['theme']
}
</script>

<template>
    <div
        class="main-container text unselectable"
        :class="theme ? 'darkMain': 'lightMain'"
    >
        <h1>Welcome</h1>
        <p>This simple project is made, because I want to learn vue.</p>
        <p>Here you have a simple games like tic-tac-toe, coin flip and memory cards, play one if you want</p>
        <img src="../../public/animacja3.gif"/>
    </div>
</template>

<style scoped>
div{
    text-align: center;
}
h1{
    font-size: calc(1vw + 3vh)
}
p{
    font-size: calc(0.4vw + 2vh)
}
img{
    width: 40%;
    height: 80%;
}
</style>