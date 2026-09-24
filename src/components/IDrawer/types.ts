import type { ComputedRef, EmitFn } from 'vue';

export type Placement = 'top' | 'bottom' | 'right' | 'left';

export interface Options {
    closeableCloseBtn?: boolean;
    showCloseBtn?: boolean;
    zIndex?: number;
    center?: boolean;
    closeOnEsc?: boolean;
    size?: string;
    maxSize?: string;
    maskColor?: string;
    contentColor?: string;
    closeableMask?: boolean;
    resizable?: boolean;
    mask?: boolean;
    placement?: Placement;
    renderOnShow?: boolean;
    padding?: number;
    hideOnDesktop?: boolean;
}

export interface Props {
    options?: Options;
    show: boolean;
}

export type Emits = {
    onClose: [];
};

export interface ModelReturn {
    placementPos: ComputedRef<PlacementPos>;
    handleClosebtnClose: () => void;
    handleMaskClose: () => void;
    headerWidth: ComputedRef<string>;
    bodyWidth: ComputedRef<string>;
    slotsCheck: ComputedRef<SlotsCheck>;
}

export interface ModelProps {
    options: ComputedRef<Required<Options>>;
    emits: EmitFn<Emits>;
}

export interface PlacementPos {
    isRight: boolean;
    isTop: boolean;
    isLeft: boolean;
    isBottom: boolean;
    isY: boolean;
    isX: boolean;
}

export interface SlotsCheck {
    hasHeader: boolean;
    hasBody: boolean;
    hasFooter: boolean;
}