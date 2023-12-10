<script lang="ts">
import '../main.scss'
export default{
    props:[ 'links' ],
}
</script>

<template>
    <li
        class="list-element"
        v-for="link in links"
    >
        <a
            class="list-link text"
            href="#"
        >{{ link.title }}</a>
    </li>
</template>

<style scoped>
.list-element{
    list-style: none;
    margin-right: 10px;
}

.list-link{
    color:rgba(43, 39, 48, 0.8);
    text-decoration: underline 0.1em rgba(43, 39, 48, 0);
    transition:
        color ease-out 300ms,
        text-decoration-color 600ms;
}
.list-link:hover{
    color:rgba(43, 39, 48, 0.8);
    text-decoration-color: rgba(43, 39, 48, 1);
}
</style>