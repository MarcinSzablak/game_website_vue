<script lang="ts">
export default {
  props: ['text', 'clicked'],
  methods: {
    handleClick() {
      this.$emit('update:clicked', true);
    },
  },
};
</script>

<template>
  <transition name="fade">
    <p
        v-if="!clicked"
        @click="handleClick"
        class="showed"
    >{{ text }}</p>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.showed {
  display: flex;
}
</style>