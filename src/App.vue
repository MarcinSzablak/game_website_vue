<script lang="ts">
import Navbar from './components/Navbar.vue';
import NewFooter from './components/NewFooter.vue';
import './main.scss';

export default{
  components:{
    Navbar,
    NewFooter
  },
  created(){
    this.getLinks()
  },
  data() {
    return {
        links: []
    }
  },
  methods: {
    async getLinks() {
        let res = await fetch('navBarLinks.json');
        let data = await res.json();

        this.links = data;
    },
  },
}
</script>

<template>

  <navbar
    :links="links"
  ></navbar>

  <new-footer></new-footer>

</template>

<style scoped>

</style>
