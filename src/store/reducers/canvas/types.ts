import { PixelColorType } from '../../../types/color';

export type CanvasStateType = {
    pixels: Array<PixelColorType>;
    activeColor: PixelColorType;
    isMouseDown: boolean;
};

export enum CanvasActionTypes {
    FILL_PIXEL = 'FILL_PIXEL',
    CLEAR_CANVAS = 'CLEAR_CANVAS',
    SWITCH_ACTIVE_COLOR = 'SWITCH_ACTIVE_COLOR',
    MOUSE_DOWN = 'MOUSE_DOWN',
    MOUSE_UP = 'MOUSE_UP',
}

type FillPixelActionType = {
    type: CanvasActionTypes.FILL_PIXEL;
    payload: { index: number };
};

type ClearCanvasActionType = {
    type: CanvasActionTypes.CLEAR_CANVAS;
};

type SwitchActiveColorActionType = {
    type: CanvasActionTypes.SWITCH_ACTIVE_COLOR;
    payload: { color: PixelColorType };
};

type MouseDownActionType = {
    type: CanvasActionTypes.MOUSE_DOWN;
};

type MouseUpActionType = {
    type: CanvasActionTypes.MOUSE_UP;
};

export type CanvasAction =
    | FillPixelActionType
    | ClearCanvasActionType
    | SwitchActiveColorActionType
    | MouseDownActionType
    | MouseUpActionType;
