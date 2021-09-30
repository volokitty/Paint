import { combineReducers } from 'redux';
import canvasReducer from './canvas/canvasReducer';

export const rootReducer = combineReducers({
    canvas: canvasReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
