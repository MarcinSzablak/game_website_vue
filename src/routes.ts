import { createRouter, createWebHistory } from "vue-router";
import CoinFlip from "./components/CoinFlip.vue";
import TicTacToe from "./components/TicTacToe.vue";
import Memory from "./components/Memory.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: CoinFlip },
        { path: '/coinflip', component: CoinFlip },
        { path: '/tictactoe', component: TicTacToe },
        { path: '/memory', component: Memory },
    ],
})

export default router;