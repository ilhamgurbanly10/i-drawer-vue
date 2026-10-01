export const getSizeInPixels = (
    value: string,
    property: 'width' | 'height' = 'width',
    parent?: HTMLElement,
): number => {
    const element = document.createElement('div');
    
    element.style.position = 'absolute';
    element.style[property] = value;

    if (parent) {
        parent.appendChild(element);
    } else {
        document.body.appendChild(element);
    }

    const pixels = property === 'width'
        ? element.getBoundingClientRect().width
        : element.getBoundingClientRect().height;

    element.remove();

    return pixels;
};

export const toPxString = (pxSize: number): string => `${pxSize}px`;