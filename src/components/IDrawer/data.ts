import type { Options } from "./types";

export const defaultSize: number = 300;

export const initialOptions: Required<Options> = {
    closeableCloseBtn: true,
    showCloseBtn: true,
    closeableMask: true,
    zIndex: 9999999, 
    center: true, 
    closeOnEsc: true,
    size: `${defaultSize}px`,
    maxSize: null,
    minSize: null,
    maskColor: 'rgba(0, 0, 0, .5)', 
    contentColor: 'white', 
    resizable: true, 
    mask: true, 
    placement: 'right', 
    renderOnShow: false, 
    padding: 20, 
    hideOnDesktop: false
}

