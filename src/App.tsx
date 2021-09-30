import React from 'react';
import { useDispatch } from 'react-redux';
import Canvas from './components/Canvas';
import ColorSwitcher from './components/ColorSwitcher/ColorSwitcher';
import './App.css';
import { clearCanvas } from './store/reducers/canvas/action-creators';

function App() {
    const dispatch = useDispatch();

    return (
        <div className="App">
            <Canvas />
            <ColorSwitcher />
            <button onClick={() => dispatch(clearCanvas())} type="button">
                Clear canvas
            </button>
        </div>
    );
}

export default App;
