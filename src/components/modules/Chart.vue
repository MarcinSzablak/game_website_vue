<script lang="ts">
  export default {
    props:[ 'firstCounter', 'secondCounter', 'firstText', 'secondText' ],
    computed: {
      total(): number {
        return this.firstCounter + this.secondCounter;
      },
      firstPercentage(): string {
        return this.calculatePercentage(this.firstCounter);
      },
      secondPercentage(): string {
        return this.calculatePercentage(this.secondCounter);
      },
    },
    methods: {
      calculatePercentage(count: number): string {
        return this.total === 0 ? '0%' : `${(count / this.total) * 100}%`;
      },
    },
  };
</script>

<template>
    <div class="coin-toss">
        <div class="bar-text">
            <p>{{ firstCounter }}</p>
            <p>{{ secondCounter }}</p>
        </div>
        <div class="bar">
            <div class="first" :style="{ width: firstPercentage }"></div>
            <div class="second" :style="{ width: secondPercentage }"></div>
        </div>
        <div class="bar-text">
            <p>{{ firstText }} {{ Math.round(parseInt(firstPercentage)) }}%</p>
            <p>{{ secondText}} {{ Math.round(parseInt(secondPercentage)) }}%</p>
        </div>
    </div>
</template>

<style>
.bar {
    display: flex;
    height: 5px;
    min-width: 200px;
}

.bar-text{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: small;
}

.first {
    background-color: var(--new-pink);
}

.second {
    background-color: var(--new-blue);
}
</style>