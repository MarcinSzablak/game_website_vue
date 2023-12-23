<script lang="ts">
export default{
    props:['theme'],
    data(){
        return{
        }
    },
    methods:{

    }
}
</script>

<template>
     <div class="timer">
        <div class="seconds">
            00
        </div>
        :
        <div class="miliseconds">
            00
        </div>
     </div>
     <button

     >test</button>
</template>

<style scoped>
.timer{
    display: flex;
    flex-direction: row;
}
</style>