<script lang="ts">
import Timer from './modules/Timer.vue'
import MemoryCard from './modules/MemoryCard.vue'
export default{
    props:['theme'],
    components:{
        Timer,
        MemoryCard
    },
    data(){
        return{
            cards: [] as Array<any>,
            mixedCards: [] as Array<Object>,
            flippedCards: [] as Array<any>,
            matchedCards: [] as Array<number>
        }
    },
    async created(){
        await this.getMemoryCards()
        this.setUpCards()
        this.cards.forEach((card) => {
            card.isFlipped = false;
            card.isMatched = false;
        });
    },

    methods:{
        async getMemoryCards(): Promise<void>{
            let res = await fetch('memoryCards.json');
            let data = await res.json();
            this.cards = data;
        },

        setUpCards(): void{
            var duplicatedCards = this.cards.map(card => ({ ...card }));
            duplicatedCards.push(...this.cards.map(card => ({ ...card })));
            this.mixedCards = duplicatedCards
            this.mixedCards = this.mixedCards.sort(() => Math.random() - 0.5 )
        },

        flipCard(card: any) :void{
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
                },400)
            }
            else{
                setTimeout(() => {
                    this.flippedCards.forEach(card => card.isFlipped = false);
                    this.flippedCards = [];
                }, 800)
            }
        },
    }
}
</script>

<template>
     <div
        class="main-container unselectable"
        :class="theme ? 'darkMain' : 'lightMain'">
        <timer></timer>
        <div
            class="cards"
        >
            <memory-card
                v-for="card in mixedCards"
                :card="card"
                :flipCard="()=>flipCard(card)"
            ></memory-card>
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