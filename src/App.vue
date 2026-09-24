<script setup lang="ts">
import { reactive, ref } from 'vue';
import IDrawer, { type IDrawerOptions } from './components/IDrawer';
const show = ref<boolean>(false);
const options = reactive<IDrawerOptions>({
  closeableMask: true, 
  mask: false,
  contentColor: 'white',
  placement: 'right', 
  renderOnShow: false,
  size: '300px', 
  maxSize: '50%',
  maskColor: 'rgba(0, 0, 0, .5)', 
  hideOnDesktop: false, 
  resizable: true
})

</script>

<template>
  <button @click="show = true">Show</button>
  <IDrawer 
  :show="show" :options="options" @on-close="show = false"> 
  <template #header>Header</template>
  <template #body>Body</template>
  <template #footer>Footer</template>
  </IDrawer>
</template>
