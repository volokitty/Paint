import { PixelColorType } from '../../../types/color';
import { CanvasActionTypes, CanvasAction } from './types';

export function mouseDown(): CanvasAction {
    return { type: CanvasActionTypes.MOUSE_DOWN };
}

export function mouseUp(): CanvasAction {
    return { type: CanvasActionTypes.MOUSE_UP };
}

export function fillPixel(index: number): CanvasAction {
    return { type: CanvasActionTypes.FILL_PIXEL, payload: { index } };
}

export function switchActiveColor(color: PixelColorType): CanvasAction {
    return { type: CanvasActionTypes.SWITCH_ACTIVE_COLOR, payload: { color } };
}

export function clearCanvas(): CanvasAction {
    return { type: CanvasActionTypes.CLEAR_CANVAS };
}
