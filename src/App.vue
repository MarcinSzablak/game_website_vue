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
  },
  data() {
    return {
        links: [] as Array<any>,
        theme: false as boolean
    }
  },
  methods: {
    async getLinks() {
        let res = await fetch('navBarLinks.json');
        let data = await res.json();

        this.links = data;
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
  ></memory>

  <new-footer
    :theme="theme"
  ></new-footer>

</template>

<style scoped>

</style>
