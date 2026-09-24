<script lang="ts" setup>
import type { Props, Emits, Options } from './types';
import useModel from './model';
import { computed } from 'vue';
import { initialOptions } from './data';
import { defineAsyncComponent } from 'vue'

const IResizeArea = defineAsyncComponent(() =>
  import('./components/IResizeArea')
);

const {
    show,
    options = {}
} = defineProps<Props>();
const emits = defineEmits<Emits>();
const allOptions = computed<Required<Options>>(() => {
    return { ...initialOptions, ...options }
});

const {
    placementPos,
    handleClosebtnClose,
    handleMaskClose,
    headerWidth,
    bodyWidth, 
    slotsCheck
} = useModel({ options: allOptions, emits });
</script>

<template>
    <div @click="handleMaskClose()" v-if="allOptions.renderOnShow ? show : true" class="i-drawer-container"
        :class="{ 'i-drawer-mask': allOptions.mask, 'i-drawer-show': show, 'i-drawer-hide-on-desktop': allOptions.hideOnDesktop }"
        :style="{ backgroundColor: allOptions.maskColor, zIndex: allOptions.zIndex }">

        <div @click.stop aria-modal="true" class="i-drawer-content" :class="{
            'i-drawer-right': placementPos.isRight,
            'i-drawer-left': placementPos.isLeft,
            'i-drawer-top': placementPos.isTop,
            'i-drawer-bottom': placementPos.isBottom,
            'i-drawer-content-show': show
        }" :style="{
            backgroundColor: allOptions.contentColor,
            zIndex: allOptions.zIndex + 1,
            width: placementPos.isY ? '100dvw' : allOptions.size,
            maxWidth: placementPos.isY ? '100dvw' : allOptions.maxSize,
            height: placementPos.isX ? '100dvh' : allOptions.size,
            maxHeight: placementPos.isX ? '100dvh' : allOptions.maxSize,
            padding: `${allOptions.padding}px`
        }">

        <IResizeArea :pos="placementPos" v-if="allOptions.resizable" />

            <button v-if="allOptions.showCloseBtn" :class="{ 'i-drawer-close-disabled': !allOptions.closeableCloseBtn }"
                class="i-drawer-close" aria-label="Close" type="button"
                @click="handleClosebtnClose()"
                :style="{ top: `${allOptions.padding}px`, right: `${allOptions.padding}px` }">
                <svg fill-rule="evenodd" viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em"
                    height="1em" fill="currentColor" aria-hidden="true">
                    <path
                        d="M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z">
                    </path>
                </svg>
            </button>

            <div v-if="slotsCheck.hasHeader" class="i-drawer-header" :style="{ width: headerWidth }">
                <slot name="header" />
            </div>
            <div v-if="slotsCheck.hasBody" class="i-drawer-body" :style="{ width: bodyWidth, marginTop: slotsCheck.hasHeader ? `${allOptions.padding}px` : '0px'  }">
                <slot name="body" />
            </div>
            <div v-if="slotsCheck.hasFooter" class="i-drawer-footer" :style="{ paddingTop: `${allOptions.padding}px` }">
                <slot name="footer" />
            </div>
        </div>

    </div>
</template>

<style scoped>
@import "./styles.css";
</style>