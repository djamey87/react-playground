import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '.';

describe('Button', () => {
    test('Should render', () => {
        render(<Button />);

        const buttonEl = screen.getByTestId('button');
        expect(buttonEl).toHaveValue('I have a value of 0');
        
        fireEvent.click(buttonEl);
        expect(buttonEl).toHaveValue('I have a value of 1');
    })
})