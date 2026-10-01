import type { EmitFn } from 'vue';
import type { PlacementPos } from '../../types';

export interface Props {
    pos: PlacementPos;
    size: number;
}

export type Emits = {
    onClose: [];
    onResize: [size: number];
    onResizeStart: [];
    onResizeEnd: [];
};

export interface ModelReturn {
    onPointerMove: (event: PointerEvent) => void;
    onPointerUp: (event: PointerEvent) => void;
    onPointerDown: (event: PointerEvent) => void;

}

export interface ModelProps {
    pos: PlacementPos;
    size: number;
    emits: EmitFn<Emits>;
    
}
