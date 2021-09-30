import React from 'react';
import { useDispatch } from 'react-redux';
import { switchActiveColor } from '../../store/reducers/canvas/action-creators';
import { PixelColorType } from '../../types/color';
import style from './ColorPin.module.css';

type ColorPinPropsType = {
    color: PixelColorType;
    isActive: boolean;
};

function ColorPin({ color, isActive }: ColorPinPropsType) {
    const dispatch = useDispatch();

    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
            className={`${style.colorPin} ${isActive ? style.active : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => dispatch(switchActiveColor(color))}
            type="button"
        />
    );
}

export default ColorPin;
