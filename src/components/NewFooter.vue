<script lang="ts">
import '../main.scss'
export default{
    props:['theme']
}
</script>

<template>
    <div
        class="container text unselectable"
        :class="theme ? 'dark': 'light'"
    >
        <a
            class="text"
            :class="theme ? 'dark': 'light'"
            href="https://github.com/MarcinSzablak"
        >made by Jerz
            <font-awesome-icon icon="fa-brands fa-github" />
        </a>

    </div>
</template>

<style scoped>
.container{
    position: relative;
    left: 0;
    bottom: 0;
    padding: 20px;
    width: 100%;

    text-align: center;
}
</style>