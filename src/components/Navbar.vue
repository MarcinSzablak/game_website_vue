<script lang="ts">
import '../main.scss';
import NavBarLink from './NavbarLink.vue';

export default {
    props:['links', 'theme', 'changeTheme'],
    components: {
        NavBarLink
    },
}
</script>

<template>
    <nav class="navbar unselectable" :class="theme ? 'dark': 'light'">
        <a class="navbar-title text" :class="theme ? 'dark': 'light'" href="#">GameWebsite</a>
        <ul class="list-container">
            <NavBarLink
                :theme="theme"
                :links="links"
            ></NavBarLink>
        </ul>
        <button
            v-on:click="changeTheme"
        >asds</button>
    </nav>
</template>

<style scoped>

.navbar {
    z-index:1;
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
    min-width: 100%;

    padding-left: 10px;
    padding-right: 10px;
}

.list-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 15px;
}
.navbar-title{
    font-weight: 600;
    font-size: large;
}
</style>