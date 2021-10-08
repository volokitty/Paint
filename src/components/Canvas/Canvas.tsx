import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CanvasSize } from '../../constants/canvas';
import { PixelSize } from '../../constants/pixel';
import { RootStateType } from '../../store/reducers';
import { fillPixel, mouseDown, mouseUp } from '../../store/reducers/canvas/action-creators';
import { PixelColorType } from '../../types/color';
import Pixel from '../Pixel';
import style from './Canvas.module.css';

function Canvas() {
    const { pixels } = useSelector((state: RootStateType) => state.canvas);
    const dispatch = useDispatch();

    useEffect(() => {
        document.addEventListener('mousedown', () => dispatch(mouseDown()));
        document.addEventListener('mouseup', () => dispatch(mouseUp()));
    }, []);

    return (
        <div
            className={style.canvas}
            style={{
                gridTemplateColumns: `repeat(${CanvasSize.WIDTH}, ${PixelSize}px)`,
            }}
        >
            {pixels.map((color: PixelColorType, index) => (
                <Pixel
                    // eslint-disable-next-line react/no-array-index-key
                    key={}
                    onClick={() => dispatch(fillPixel(index))}
                    color={color}
                />
            ))}
        </div>
    );
}

export default Canvas;
