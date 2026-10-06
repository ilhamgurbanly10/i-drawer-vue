<script setup lang="ts">

import { reactive, ref } from 'vue';
import IDrawer, { type IDrawerOptions } from './components/IDrawer';
const show = ref<boolean>(false);

const options = reactive<IDrawerOptions>({
  closeableMask: true,
  mask: true,
  contentColor: 'white',
  placement: 'top',
  renderOnShow: false,
  size: '400px',
  maxSize: '95%',
  minSize: '10%',
  maskColor: 'rgba(0, 0, 0, .5)',
  hideOnDesktop: false,
  resizable: true, 
  closeOnEsc: true
})

interface PlacmenetOption {
  label: string;
  value: IDrawerOptions['placement'];
}

type PlacmenetOptions = PlacmenetOption[];

const placementOptions = reactive<PlacmenetOptions>([
  {
    label: 'Top',
    value: 'top'
  },
  {
    label: 'Right',
    value: 'right'
  },
  {
    label: 'Bottom',
    value: 'bottom'
  },
  {
    label: 'Left',
    value: 'left'
  }
])

const showDrawer = (): void => {
  show.value = true
}

const onPlacementChange = (event: Event): void => {
  const value = (event.target as HTMLInputElement).value;
  options.placement = value as IDrawerOptions['placement'];
  options.size = '400px';
}

</script>

<template>

  <h1 class="package-title">I Drawer Vue JS Package by Ilham Gurbanly</h1>

  <p class="package-version"><strong class="main-color">Version: </strong> 1.0.0 </p>
  <p class="package-desc">A lightweight and flexible Vue.js drawer package with customizable placement, sizing, overlay, responsive behavior, lazy rendering, and resizing support.</p>

  <div class="radio-group sm-top-space">

    <label v-for="option in placementOptions" :key="option.value">
      <input type="radio" name="placement" :value="option.value" :checked="option.value === options.placement"
        @change="onPlacementChange">
      {{ option.label }}
    </label>

  </div>

 <div class="sm-top-space">
   <label>
      <input type="checkbox" name="placement" :checked="options.mask"
        @change="options.mask = !options.mask">
      Show mask
  </label>
 </div>

 <div class="sm-top-space">
   <label>
      <input type="checkbox" name="placement" :checked="options.closeableMask"
        @change="options.closeableMask = !options.closeableMask">
      Closeable Mask
  </label>
 </div>

 <div class="sm-top-space">
   <label>
      <input type="checkbox" name="placement" :checked="options.closeOnEsc"
        @change="options.closeOnEsc = !options.closeOnEsc">
      Close On Esc
  </label>
 </div>

 <div class="sm-top-space">
   <label>
      <input type="checkbox" name="placement" :checked="options.resizable"
        @change="options.resizable = !options.resizable">
      Resizable
  </label>
 </div>

  <button class="btn btn-primary sm-top-space" @click="showDrawer()">Show Drawer</button>

  <br />

   <a target="_blank" class="btn btn-secondary sm-top-space" href="https://www.npmjs.com/package/i-modal-vue">Visit package on npm</a>


  <IDrawer :show="show" :options="options" @on-close="show = false"
    @on-resize="(data) => { options.size = `${data}px`; console.log('actual-size', data) }"
    @on-resize-start="() => { console.log('resizing_started'); }" @on-resize-end="() => { console.log('resizing_ended'); }">

    <template #header>

      <img src="./assets/user.avif" class="profile-img" />
      <h2 class="profile-name">Emily Smith</h2>
      <p class="profile-desc">Front-End Developer</p>

    </template>

    <template #body>
      <p class="profile-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the
        librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy
        text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with
        desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
    </template>

    <template #footer>
      <div class="profile-footer">
        <button class="btn btn-primary">Follow</button>
        <button class="btn btn-primary">Share Profile</button>
      </div>
    </template>

  </IDrawer>

   <section class="doc-container">

    <h2 class="doc-title">Documentation</h2>

    <ul class="doc-list">
      <li><strong>show: boolean (Required)</strong> - controls whether the drawer is visible.</li>
      <li><strong>onClose: event (Required)</strong> - Emitted when the user requests to close the drawer (e.g. by
        pressing the ESC key, clicking the mask, or clicking the close icon). The parent is responsible for setting
        show to false.</li>
         <li><strong>onResizeStart: event (Optional)</strong> - Emitted when the user starts resize the drawer.</li>
          <li><strong>onResizeEnd: event (Optional)</strong> - Emitted when resizing gets stopped.</li>
          <li><strong>onResize: event(size) (Optional)</strong> - Emitted when the user resizes, and returns size as props.</li>
      <li><strong>options: options object (Optional)</strong>
        <ul>
          <li><strong>closeableCloseBtn: boolean (Optional)</strong> - whether close button can close the drawer, default
            value is true.</li>
          <li><strong>showCloseBtn: boolean (Optional)</strong> - whether to show close button, default value is true.
          </li>
          <li><strong>zIndex: number (Optional)</strong> - z-index value of drawer, default value is 9999999.</li>
          <li><strong>closeOnEsc: boolean (Optional)</strong> - whether ESC button can close the drawer, default value is
            true.</li>
          <li><strong>maskColor: string (Optional)</strong> - mask color of drawer, default value is rgba(0, 0, 0, .5).
          </li>
          <li><strong>contentColor: string (Optional)</strong> - content background color of drawer, default value is
            white.</li>
          <li><strong>closeableMask: boolean (Optional)</strong> - whether clicking on mask can close the drawer, default
            value is true.</li>
          <li><strong>padding: number (Optional)</strong> - padding of the drawer content, default value is 20.</li>
           <li><strong>hideOnDesktop: boolean (Optional)</strong> - whether hide drawer on desktop screens, default
            value is false.</li>
             <li><strong>renderOnShow: boolean (Optional)</strong> - whether render drawer if show is true, default
            value is false, it hides it via CSS by default.</li>
             <li><strong>resizable: boolean (Optional)</strong> - whether drawer content is resizable, default
            value is true.</li>
             <li><strong>placement: 'top' | 'right' | 'bottom' | 'left' (Optional)</strong> - placement of drawer content, default
            value is 'right'.</li>
             <li><strong>minSize: string | null (Optional)</strong> - minimum size of drawer content, due to placement position 
              it can be height or width, default value is null.
          </li>
           <li><strong>maxSize: string | null (Optional)</strong> - maximum size of drawer content, due to placement position 
              it can be height or width, default value is null.
          </li>
           <li><strong>size: string (Optional)</strong> - size of content. Important note here, 
            if you define size manually, then to resize you should use onResize event to change your content 
            size state, otherwise it will not work. If size is not defined it will work fine on resize, so you do not need 
            listen onResize event to resize content. 
            Default value is '300px'.
          </li>
        </ul>
      </li>
      <li><strong>header</strong> - named slot for providing custom header content.</li>
      <li><strong>body</strong> - named slot for providing custom body content.</li>
      <li><strong>footer</strong> - named slot for providing custom footer content.</li>
    </ul>

  </section>

</template>

