import React, { useState } from 'react';
import { convertToString } from '../../lib/string.util';

interface Props {

}

const Button:React.FC<Props> = () => {
    const [buttonValue, setButtonValue] = useState(0);
    
    const incrementValue = () => {
        setButtonValue(buttonValue + 1);
    }

    return (
        <div data-testid="button-wrapper">
            <input type="button" value={`I have a value of ${convertToString(buttonValue)}`} onClick={incrementValue} data-testid="button" />
        </div>
    )
}

export default Button;