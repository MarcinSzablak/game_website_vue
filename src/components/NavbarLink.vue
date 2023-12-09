<script lang="ts">
import '../main.scss'
export default{
    props:[ 'links' ],
}
</script>

<template>
    <li
        class="listElement"
        v-for="link in links"
    >
        <a
            class="listLink text"
            href="#"
        >{{ link.title }}</a>
    </li>
</template>

<style scoped>
.listElement{
    list-style: none;
    margin-right: 10px;
}

.listLink{
    color:rgba(255,255,255,0.8);
    text-decoration: underline 0.1em rgba(255, 255, 255, 0);
    transition:
        color ease-out 300ms,
        text-decoration-color 600ms;
}
.listLink:hover{
    color:rgba(255,255,255,1);
    text-decoration-color: rgba(255, 255, 255, 1);
}
</style>