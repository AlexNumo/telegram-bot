import React from 'react';
import { Text, useText } from '@urban-bot/core';

export function WantToHardWork() {
    const [text, setText] = React.useState('Привет!');

    useText(({ text }) => {
        setText(text);
    });

    return (
        <Text>
            {text}
        </Text>
    );
}