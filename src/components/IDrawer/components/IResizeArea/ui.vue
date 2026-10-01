<script lang="ts" setup>
import type { Props, Emits } from './types';
import useModel from './model';

const { pos, size } = defineProps<Props>();
const emits = defineEmits<Emits>();

const {
    onPointerDown, 
    onPointerMove, 
    onPointerUp
} = useModel({emits, size, pos});

// 1) Kodu seliqeye sal model + temiz funksiya - OK

// 2) limit (minSize ile) - OK 

// 3) controlled size olarsa - OK 

// 4) Her bir halda bayira funksiya emit et - OK

// 5) Yeniden acilanda placement deyiserse, cunki size silinmir, destroy olmur baglananda - 

// 6) View transition - 

// 7) Butun kodlari temizle - 

// 8) Ardi text faylinda - 

// 9) Tam yoxlama her bir hali - 

// 10) 

</script>

<template>
    <div class="i-drawer-resize-area" aria-label="Resize" :class="{
        'i-drawer-r-right': pos.isRight,
        'i-drawer-r-left': pos.isLeft,
        'i-drawer-r-top': pos.isTop,
        'i-drawer-r-bottom': pos.isBottom
    }" @pointerdown="onPointerDown" @pointermove="onPointerMove" @pointerup="onPointerUp"
        @pointercancel="onPointerUp" />
</template>

<style scoped>
@import "./styles.css";
</style>