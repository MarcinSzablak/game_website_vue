<script lang="ts">
import '../main.scss';
import NavBarLink from './modules/NavbarLink.vue';

export default {
    props:['links', 'theme', 'changeTheme'],
    components: {
        NavBarLink
    },
    data() {
        return {
            mobileLinksVisible: false as boolean
        };
    },
    methods: {
        toggleMobileLinks() {
            var x: any = document.getElementById("myTopnav");
            if (!x.className.includes('responsive')) {
              x.className += ' responsive';
            } else {
              x.className = this.theme ? 'topnav unselectable dark': 'topnav unselectable light';
            }
        }
    }
}
</script>

<template>
    <div
      class="topnav unselectable "
      id="myTopnav"
      :class="theme ? 'dark': 'light'">
        <div class="nav">
          <div class="dumb">
            <a
              class="navbar-title text"
              :class="theme ? 'dark': 'light'"
              href="#"
              >GameWebsite</a>
            <button
              class="themeButton"
              v-on:click="changeTheme"
              >
                <font-awesome-icon
                    class="themeIcon"
                    :class="theme ? 'dark': 'light'"
                    icon="circle-half-stroke"
                />
            </button>
          </div>
          <a
            href="javascript:void(0);"
            class="icon"
            v-on:click="toggleMobileLinks"
            >
              <font-awesome-icon
                  class="bars-icon"
                  :class="theme ? 'dark': 'light'"
                  icon="fa-solid fa-bars"
              />
          </a>
        </div>
        <ul class="links">
          <NavBarLink
                :theme="theme"
                :links="links"
          ></NavBarLink>
        </ul>
    </div>
</template>

<style scoped>

.topnav {
  overflow: hidden;
  display: flex;
  align-items: center;
}
.topnav a {
  float: left;
  display: block;
  text-align: center;
  text-decoration: none;
}

.topnav .icon {
  display: none;
}

.bars-icon{
  width:calc(25px + 0.5vw);
  height: calc(25px + 0.5vw);
  margin: calc(15px + 0.5vw);
}
.dumb{
  display: flex;
  align-items: center;
  margin-right: calc(16px + 0.5vw);
}
.links{
  display: flex;
  flex-direction: row;
}
.themeButton{
    display: flex;
    justify-content: center;
    align-content: center;
    padding: calc(1px + 0.5vw);
    background: none;
    border-radius: 100000px;
    cursor: pointer;
}
.themeButton:hover{
    background-color: rgba(254, 246, 255, 0.2);
}
.themeIcon{
    background: none;
    width: calc(15px + 0.5vw);
    height: calc(15px + 0.5vw);
}

.navbar-title{
    font-weight: 600;
    padding:calc(16px + 0.5vw);
    font-size: calc(25px + 0.5vw);
}

@media screen and (max-width: 650px) {
  .topnav{
    display: block;
  }
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    text-align: left;
    float: right;
    display: block;
  }
  .links{
    display: none;
    position: absolute;
    width: 100%;
    padding: 16px;
  }
  .topnav .nav{
    text-align: left;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .nav{

  }
}

@media screen and (max-width: 650px) {
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .links {
    display: flow;
    background-color: rgba(184, 164, 231, 0.95);
  }
}

</style>