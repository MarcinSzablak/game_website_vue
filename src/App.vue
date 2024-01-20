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
    this.getThemeSetting()
  },
  data() {
    return {
      links: [] as Array<object>,
      theme: false as boolean,
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
      this.storeThemeSetting()
    },
    storeThemeSetting() {
      localStorage.setItem('theme', this.theme.toString());
    },
    getThemeSetting() {
      let theme = localStorage.getItem('theme');
      let themeBoolen: boolean
      if(theme == "true"){
         themeBoolen = true
      }
      else{
        themeBoolen = false
      }

      if (theme) {
          this.theme = themeBoolen
      }
    }
  },
}
</script>

<template>
  <navbar
    :links="links"
    :theme="theme"
    :changeTheme="changeTheme"
  ></navbar>

  <router-view
    :theme="theme"
  ></router-view>

  <new-footer
    :theme="theme"
  ></new-footer>
</template>

<style scoped>

</style>
