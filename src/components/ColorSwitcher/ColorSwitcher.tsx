import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../store/reducers';
import { PixelColors } from '../../types/color';
import ColorPin from '../ColorPin';
import style from './ColorSwitcher.module.css';

function ColorSwitcher() {
    const { activeColor } = useSelector((state: RootStateType) => state.canvas);

    return (
        <div className={style.colorSwitcher}>
            {Object.values(PixelColors).map((color) => (
                <ColorPin key={color} color={color} isActive={activeColor === color} />
            ))}
        </div>
    );
}

export default ColorSwitcher;
