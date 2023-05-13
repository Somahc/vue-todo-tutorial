<script setup>
import { onUnmounted } from 'vue';
import BaseButton from '/src/components/BaseButton.vue';
const emit = defineEmits(['add-click']);

onUnmounted(() => {
  console.log('onUnmounted');
});
</script>

<template>
  <BaseButton color="blue" @on-click="emit('add-click')"> 追加 </BaseButton>
</template>
