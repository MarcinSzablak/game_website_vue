<script lang="ts">
import Timer from './modules/Timer.vue'
import MemoryCard from './modules/MemoryCard.vue'
import Modal from './modules/Modal.vue'
export default{
    props:['theme'],
    components:{
    Timer,
    MemoryCard,
    Modal
},
    data(){
        return{
            cards: [] as Array<any>,
            mixedCards: [] as Array<any>,
            flippedCards: [] as Array<any>,
            matchedCards: [] as Array<number>,
            firstClick: false as boolean,
            gameOver: false as boolean,
        }
    },
    async created(){
        await this.getMemoryCards()
        this.setUpCards()
    },

    methods:{
        async getMemoryCards(): Promise<void>{
            let res = await fetch('memoryCards.json');
            let data = await res.json();
            this.cards = data;
        },

        setUpCards(): void{
            this.cards.forEach((card) => {
                card.isFlipped = false;
                card.isMatched = false;
            });
            var duplicatedCards = this.cards.map(card => ({ ...card }));
            duplicatedCards.push(...this.cards.map(card => ({ ...card })));
            this.mixedCards = duplicatedCards
            this.mixedCards = this.mixedCards.sort(() => Math.random() - 0.5 )
        },

        flipCard(card: any) :void{
            if(!this.firstClick){
                this.firstClick = true
                this.toggleTimer()
            }

            if(card.isMatched || card.isFlipped || this.flippedCards.length === 2){
                return
            }

            card.isFlipped = true
            if(this.flippedCards.length < 2){
                this.flippedCards.push(card);
            }
            if(this.flippedCards.length === 2){
                this.match();
            }
        },

        match(): void{
            if(this.flippedCards[0].name === this.flippedCards[1].name)
            {
                setTimeout(() => {
                    this.flippedCards.forEach(card => card.isMatched = true);
                    this.flippedCards = [];
                    if(this.mixedCards.every(card => card.isMatched === true)){
                        this.gameOver = true;
                        this.toggleTimer()
                    }
                },400)
            }
            else{
                setTimeout(() => {
                    this.flippedCards.forEach(card => card.isFlipped = false);
                    this.flippedCards = [];
                }, 800)
            }
        },

        resetGame(){
            this.firstClick = false
            this.gameOver = false
            this.setUpCards()
            this.resetTimer()
        },
        toggleTimer(){
            (this.$refs.timer as any).toggleTimer()
        },
        resetTimer(){
            (this.$refs.timer as any).reset()
        }
    }
}
</script>

<template>
     <div
        class="main-container unselectable"
        :class="theme ? 'darkMain' : 'lightMain'">
        <timer
            ref="timer"
        ></timer>
        <div
            class="cards"
        >
            <memory-card
                v-for="card in mixedCards"
                :card="card"
                :flipCard="()=>flipCard(card)"
            ></memory-card>
            <modal
                :gameOver="gameOver"
                :playerOrder="gameOver ? 'In ' +  ($refs.timer as any).formattedTime + 's' : false"
                :resetGame="resetGame"
            ></modal>
        </div>
    </div>
</template>

<style scoped>
.cards{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
}
</style>