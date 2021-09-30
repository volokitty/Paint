import { CanvasSize } from '../../../constants/canvas';
import { PixelColors, PixelColorType } from '../../../types/color';
import replaceItemInArray from '../../../utils/replaceItemInArray';
import { CanvasAction, CanvasActionTypes, CanvasStateType } from './types';

const initialState: CanvasStateType = {
    pixels: Array<PixelColorType>(CanvasSize.WIDTH * CanvasSize.HEIGHT).fill(PixelColors.DEFAULT),
    activeColor: PixelColors.DEFAULT,
    isMouseDown: false,
};

function canvasReducer(state = initialState, action: CanvasAction): CanvasStateType {
    switch (action.type) {
        case CanvasActionTypes.FILL_PIXEL:
            return {
                ...state,
                pixels: replaceItemInArray(state.pixels, action.payload.index, state.activeColor),
            };
        case CanvasActionTypes.CLEAR_CANVAS:
            return { ...state, ...state.pixels.fill(PixelColors.DEFAULT) };
        case CanvasActionTypes.SWITCH_ACTIVE_COLOR:
            return { ...state, activeColor: action.payload.color };
        case CanvasActionTypes.MOUSE_DOWN:
            return { ...state, isMouseDown: true };
        case CanvasActionTypes.MOUSE_UP:
            return { ...state, isMouseDown: false };
        default:
            return { ...state };
    }
}

export default canvasReducer;
