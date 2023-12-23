<script lang="ts">
import Timer from './modules/Timer.vue'
import MemoryCard from './modules/MemoryCard.vue'
export default{
    props:['theme'],
    components:{
        Timer,
        MemoryCard
    }
}
</script>

<template>
     <div
        class="main-container unselectable"
        :class="theme ? 'darkMain' : 'lightMain'">
        <timer></timer>
        <memory-card></memory-card>
    </div>
</template>

<style scoped>

</style>