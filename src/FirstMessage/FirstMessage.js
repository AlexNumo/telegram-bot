import React from 'react';
import { ButtonGroup, Button } from '@urban-bot/core';
import { useRouter } from '@urban-bot/core';

export const FirstMessage = () => {
    const { navigate } = useRouter();
    return (
        <ButtonGroup title={"Вітаю! Бажаєте записатися на тренування?"} isNewMessageEveryRender={false}>
            <Button onClick={() => navigate('/want-to-hard-work')}>Так</Button>
            {/* <Button onClick={() => <Text('/want-to-hard-work')}>Ні</Button> */}
        </ButtonGroup>
    );
}