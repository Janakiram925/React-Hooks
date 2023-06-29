import React from 'react'
import { themeContext } from './context';
import { useContext } from 'react';

export default function ThemedButton() {
    const theme = useContext(themeContext);
    
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    )
}
