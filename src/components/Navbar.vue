<script lang="ts">
import '../main.scss';
import NavBarLink from './NavbarLink.vue';

export default {
    props:['links'],
    components: {
        NavBarLink
    },
}
</script>

<template>
    <nav class="navbar">
        <a class="navbar-title text" href="#">GameWebsite</a>
        <ul class="list-container">
            <NavBarLink
                :links="links"
            ></NavBarLink>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
    min-width: 100%;
    background-color: var(--new-purple);
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