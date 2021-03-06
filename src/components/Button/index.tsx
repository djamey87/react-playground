import React, { useState } from 'react';

interface Props {

}

const Button:React.FC<Props> = () => {
    const [buttonValue, setButtonValue] = useState(0);
    
    const incrementValue = () => {
        setButtonValue(buttonValue + 1);
    }

    return (
        <div data-testid="button-wrapper">
            <input type="button" value={`I have a value of ${buttonValue}`} onClick={incrementValue} data-testid="button" />
        </div>
    )
}

export default Button;