<script lang="ts">
import CoinFlip from './components/CoinFlip.vue';
import Memory from './components/Memory.vue';
import Navbar from './components/Navbar.vue';
import NewFooter from './components/NewFooter.vue';
import TicTacToe from './components/TicTacToe.vue';
import './main.scss';

export default{
  components:{
    Navbar,
    NewFooter,
    TicTacToe,
    CoinFlip,
    Memory
},
  created(){
    this.getLinks()
    this.getMemoryCards()
  },
  data() {
    return {
      links: [] as Array<object>,
      theme: false as boolean,
      cards: [] as Array<any>
    }
  },
  methods: {
    async getLinks() {
      let res = await fetch('navBarLinks.json');
      let data = await res.json();
      this.links = data;
    },
    async getMemoryCards(){
      let res = await fetch('memoryCards.json');
      let data = await res.json();
      this.cards = data;
    },
    changeTheme(){
      this.theme = !this.theme
    },
  },
}
</script>

<template>

  <navbar
    :links="links"
    :theme="theme"
    :changeTheme="changeTheme"
  ></navbar>

  <!-- <tic-tac-toe
    :theme="theme"
  ></tic-tac-toe> -->
<!--
  <coin-flip
    :theme="theme"
  ></coin-flip> -->
  <memory
    :theme="theme"
    :cards="cards"
  ></memory>

  <new-footer
    :theme="theme"
  ></new-footer>

</template>

<style scoped>

</style>
