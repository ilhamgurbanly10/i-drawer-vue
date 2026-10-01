import type { Placement, PlacementPos } from "../../types";

export const getPlacement = (placement: Placement): PlacementPos => {

    const isY = placement === 'top' || placement === 'bottom';
    return {
        isRight: placement === 'right',
        isTop: placement === 'top',
        isLeft: placement === 'left',
        isBottom: placement === 'bottom',
        isY: isY,
        isX: placement === 'left' || placement === 'right', 
        property: isY ? 'height' : 'width'
    }
}