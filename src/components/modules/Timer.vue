<script lang ="ts">
export default {
  data() {
    return {
      isRunning: false as boolean,
      startTime: 0 as number,
      currentTime: 0 as number,
      interval: 0 as number,
    };
  },
  computed: {
    formattedTime(): string {
      const time = this.isRunning ? Date.now() - this.startTime + this.currentTime : this.currentTime;
      const minutes = Math.floor(time / 60000);
      const seconds = ((time % 60000) / 1000).toFixed(1);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(4, '0')}`;
    },
  },
  methods: {
    toggleTimer(): void {
      if (this.isRunning) {
        clearInterval(this.interval);
        this.isRunning = false;
        this.currentTime += Date.now() - this.startTime;
      } else {
        this.startTime = Date.now();
        this.interval = setInterval(this.updateTime, 100);
        this.isRunning = true;
      }
    },
    updateTime():void {
      this.currentTime = Date.now() - this.startTime;
    },
    reset():void {
      clearInterval(this.interval);
      this.isRunning = false;
      this.startTime = 0;
      this.currentTime = 0;
    },
  },
};
</script>

<template>
  <div class="stopwatch">
    <div class="timer">{{ formattedTime }}</div>
  </div>
</template>

<style scoped>
.stopwatch {
  text-align: center;
  margin-top: 2vh;
}

.timer {
  font-size: calc(1.5vw + 3.5vh);
  margin-bottom: 1vh;
}
</style>
