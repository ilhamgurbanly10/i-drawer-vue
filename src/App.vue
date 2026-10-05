<script setup lang="ts">
import { reactive, ref } from 'vue';
import IDrawer, { type IDrawerOptions } from './components/IDrawer';
const show = ref<boolean>(false);
  // const size = ref<string>('50%');
const options = reactive<IDrawerOptions>({
  closeableMask: true, 
  mask: true,
  contentColor: 'white',
  placement: 'bottom', 
  renderOnShow: false,
  // size: '60%', 
  maxSize: '80%',
  minSize: '10%',
  maskColor: 'rgba(0, 0, 0, .5)', 
  hideOnDesktop: false, 
  resizable: true
})

const showDrawer = (): void => {
  show.value = true
}

</script>

<template>
  <button @click="showDrawer()">Show</button>
  <IDrawer 
  :show="show" :options="options" @on-close="show = false"
   @on-resize="(data) => { options.size = `${data}px`; console.log('actual-size', data)}"
   @on-resize-start="() => { console.log('started'); }"
   @on-resize-end="() => { console.log('ended'); }"
   > 
  <template #header>Header</template>
  <template #body>Body</template>
  <template #footer>Footer</template>
  </IDrawer>
</template>
