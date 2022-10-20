import React from 'react';
import {
    Dialog, DialogStep, Text
} from '@urban-bot/core';

export function FlatDialogExample() {
    return (
        <Dialog>
            <DialogStep content={<Text>Привет, как тебя зовут?</Text>}>
                {(name) => (
                    <DialogStep 
                        content={<Text>{`${name}, cколько тебе лет?`}</Text>}
                    />
                )}
            </DialogStep>
        </Dialog>
    );
}