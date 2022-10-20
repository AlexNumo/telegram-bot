import React from 'react';
import {
    DialogStep,
    ButtonGroup,
} from '@urban-bot/core';

export const NotWantTrainee = () => {
    return (
        <DialogStep match="not-trainee" content={
            <ButtonGroup title="Дуже шкода! Повертайтеся до нас обов'язково!">
            </ButtonGroup>
        } />
    )
}