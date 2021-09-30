import React from 'react';
import { PixelSize } from '../../constants/pixel';
import { PixelColorType } from '../../types/color';
import style from './Pixel.module.css';

type PixelPropsType = {
    color: PixelColorType;
    onClick: () => void;
};

function Pixel({ color, onClick }: PixelPropsType) {
    return (
        <div
            className={style.pixel}
            onClick={onClick}
            role="none"
            style={{
                backgroundColor: color,
                width: `${PixelSize}px`,
                height: `${PixelSize}px`,
            }}
        />
    );
}

export default Pixel;
