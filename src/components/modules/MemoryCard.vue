<script lang="ts">
export default{
    props:['card'],
}
</script>

<template>
     <div
        :id="card.id"
     >{{card.name}}</div>
</template>

<style scoped>

</style>