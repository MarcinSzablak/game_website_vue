<script lang="ts">
import '../main.scss'
import TextMessege from './modules/TextMessege.vue'
import Chart from './modules/Chart.vue'

export default {
    props:['theme'],
    components:{
        TextMessege,
        Chart
    },
    data(){
        return{
            coinStatus: "head" as string,
            dummyToggle: false as boolean,
            clicked: false as boolean,
            coinStatusShow: "head" as string,
            templateHeadMeter: 1 as number,
            templateTailMeter: 1 as number,
        }
    },
    methods:{
        coinFlip(): void{
            if(this.clicked == false){
                this.clicked = true
            }
            var random: number = Math.random() * 2
            if(random > 1){
                this.coinStatus = "head"
            }
            else{
                this.coinStatus = "tail"
            }
            this.dummyToggle = !this.dummyToggle;
            setTimeout(() => {
                this.coinStatus = this.coinStatus === 'head' ? 'tail' : 'head';
                this.dummyToggle = !this.dummyToggle;
                setTimeout(() =>{
                    this.coinStatusShow = this.coinStatus
                    this.coinStatus == "head" ? this.templateHeadMeter+=1 : this.templateTailMeter +=1
                },1850)
            }, 100);
        },
    },
}
</script>

<template>
    <div
        class="main-container unselectable"
        :class="theme ? 'darkMain' : 'lightMain'">
        <h3 class="coin-status">{{coinStatusShow}}</h3>
        <chart
            :firstCounter="templateHeadMeter"
            :secondCounter="templateTailMeter"
            :firstText="'Head'"
            :secondText="'Tail'"
        ></chart>
        <text-messege
            :text="'Click the coin!'"
            :clicked="clicked"
        ></text-messege>
        <div
            class="coin"
            :class=" coinStatus === 'head' ? 'flipHead' : 'flipTail' "
            v-on:click="coinFlip"
        >
            <div class="side head"></div>
            <div class="side tail"></div>
        </div>
    </div>
</template>

<style scoped>
.main-container{
    justify-content: flex-start;
}

.coin-status{
    font-size: calc(0.3vw + 2.5vh);
}
.coin{
    margin-top: 20vh;
    width: calc(8vw + 20vh);
    height: calc(8vw + 20vh);
    background-color: none;
    color: var(--new-white);
    cursor: pointer;
    transition: transform 1s ease-in;
    transform-style: preserve-3d;
}
.side {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    backface-visibility: hidden;
}
.head{
    background: url("/orzel.png") center no-repeat;
    background-size: cover;
}
.tail{
    background: url("/reszka.png") center no-repeat;
    background-size: cover;
    transform: rotateX(-180deg);
}
.flipHead {
    animation: resultHead 2s ease-out forwards;
}
.flipTail {
    animation: resultTail 2s ease-out forwards;
}

@keyframes resultHead {
    from {
    transform: rotateX(0);
    }
    to {
    transform: rotateX(1800deg);
    }
}

@keyframes resultTail {
    from {
    transform: rotateX(0);
    }
    to {
    transform: rotateX(1980deg);
    }
}

@media screen and (max-width: 650px) {
    .coin{
        margin-top: 10vh;
        width: calc(8vw + 28vh);
        height: calc(8vw + 28vh);
        background-color: none;
        color: var(--new-white);
        cursor: pointer;
        transition: transform 1s ease-in;
        transform-style: preserve-3d;
    }
}
</style>