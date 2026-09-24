import { computed, onMounted, onUnmounted, useSlots } from "vue";
import type { ModelReturn, ModelProps, PlacementPos, SlotsCheck } from "./types";

const useModel = ({
    options,
    emits
}: ModelProps): ModelReturn => {

    // slots
  const slots = useSlots();
  
  const slotsCheck = computed<SlotsCheck>(() => {
    return {
      hasHeader: !!slots?.header, 
      hasBody: !!slots?.body, 
      hasFooter: !!slots?.footer
    }
  })
  // end-slots

    // positions
    const placementPos = computed<PlacementPos>(() => {
        return {
            isRight: options.value.placement === 'right',
            isTop: options.value.placement === 'top',
            isLeft: options.value.placement === 'left',
            isBottom: options.value.placement === 'bottom',
            isY: options.value.placement === 'top' || options.value.placement === 'bottom',
            isX: options.value.placement === 'left' || options.value.placement === 'right'
        }
    });
    // end-positions

    // calculate-sizes
    const headerWidth = computed<string>(() => options.value.showCloseBtn ? '94%' : '100%');
    const bodyWidth = computed<string>(() => options.value.showCloseBtn && !slotsCheck.value.hasHeader ? '94%' : '100%')
    // end-calculate-sizes

    // close-handlers
    const handleClosebtnClose = (): void => { options.value.closeableCloseBtn ? emits('onClose') : null; }
    const handleMaskClose = (): void => { options.value.closeableMask ? emits('onClose') : null; }
    const handleEscClose = (): void => { emits('onClose'); }
    // end-close-handlers

    // esc
    onMounted(() => {
        if (options.value.closeOnEsc) { window.addEventListener('keydown', handleEscClose); }
    });

    onUnmounted(() => {
        if (options.value.closeOnEsc) { window.removeEventListener('keydown', handleEscClose); }
    });
    // end-esc

    return {
        placementPos,
        handleClosebtnClose,
        handleMaskClose, 
        headerWidth, 
        bodyWidth, 
        slotsCheck
    }

}

export default useModel;