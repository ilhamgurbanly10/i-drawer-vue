<script lang="ts" setup>
import type { Props, Emits } from './types';
import useModel from './model';
import { computed } from 'vue';

const {

} = defineProps<Props>();
const emits = defineEmits<Emits>();


const {

} = useModel({});
</script>

<template>
    <div class="i-drawer-resize-area" area-label="Resize" :class="{
        'i-drawer-r-right': pos.isRight,
        'i-drawer-r-left': pos.isLeft,
        'i-drawer-r-top': pos.isTop,
        'i-drawer-r-bottom': pos.isBottom
    }">

    </div>
</template>

<style scoped>
@import "./styles.css";
</style>