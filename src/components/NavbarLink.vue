<script lang="ts">
import '../main.scss'
export default{
    props:[ 'links', 'theme'],
}
</script>

<template>
    <li
        class="list-element"
        v-for="link in links"
    >
        <a
            class=" text"
            :class="theme ? 'list-link-dark': 'list-link-light'"
            href="#"
        >{{ link.title }}</a>
    </li>
</template>

<style scoped>
.list-element{
    list-style: none;
    margin-right: 10px;
}

.list-link-light{
    color:rgba(43, 39, 48, 0.8);
    text-decoration: underline 0.1em rgba(43, 39, 48, 0);
    transition:
        color ease-out 300ms,
        text-decoration-color 600ms;
}
.list-link-light:hover{
    color:rgba(43, 39, 48, 0.8);
    text-decoration-color: rgba(43, 39, 48, 1);
}

.list-link-dark{
    color:rgba(254, 246, 255, 0.8);
    text-decoration: underline 0.1em rgba(254, 246, 255, 0);
    transition:
        color ease-out 300ms,
        text-decoration-color 600ms;
}
.list-link-dark:hover{
    color:rgba(254, 246, 255, 0.8);
    text-decoration-color: rgba(254, 246, 255, 1);
}
</style>