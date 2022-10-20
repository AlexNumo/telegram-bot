import React, { useState } from 'react';
import { NotWantTrainee } from './NotWantTrainee';
// import { KindTrainee } from './KindTrainee';
import { FirstTrainee } from './FirsTrainee';

import {
    Dialog,
    DialogStep,
    ButtonGroup,
    Button,
    Text
} from '@urban-bot/core';

export function DialogTest() {
    const [wantTrainee, setWantTrainee] = useState('');
    const [kindTrainee, setKindTrainee] = useState('');
    const [firstTrainee, setFirstTrainee] = useState('');
    const [userNameSurname, setUserNameSurname] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [traineeDate, setTraineeDate] = useState('');

    console.log("1. wantTrainee: ", wantTrainee);
    console.log("2. kindTrainee: ", kindTrainee);
    console.log("3. firstTrainee: ", firstTrainee);
    console.log("4. userNameSurname: ", userNameSurname);
    console.log("5. userSurname: ", userSurname);
    console.log("6. userPhone: ", userPhone);
    console.log("7. traineeDate: ", traineeDate);




    const HandleClickKindTrainee = (e) => {
        setKindTrainee(e.nativeEvent.payload.data);
    }

    const HandleClickFirstTrainee = (e) => {
        setFirstTrainee(e.nativeEvent.payload.data);
    }

    // const HandleClickUserName = (e) => {
    //     setUserName(e.nativeEvent.payload.data);
    // }
    return (
        <Dialog>
            <DialogStep content={
                <ButtonGroup title="Вітаю! Бажаєте записатися на тренування?">
                    <Button id="trainee" onClick={()=>{setWantTrainee("yes")}}>Так</Button>
                    <Button id="not-trainee" onClick={()=>{setWantTrainee("no")}}>Ні</Button>
                </ButtonGroup>
            }> 
                <DialogStep match="trainee" content={
                    <ButtonGroup title="Яке тренування бажаєте обрати?">
                        <Button id="high-heels" onClick={HandleClickKindTrainee}>High Heels</Button>
                        <Button id="tabata" onClick={HandleClickKindTrainee}>Tabata</Button>
                        <Button id="kangoo" onClick={HandleClickKindTrainee}>Kangoo</Button>
                        <Button id="sky-jumping" onClick={HandleClickKindTrainee}>Sky jumping</Button>
                        <Button id="stretching" onClick={HandleClickKindTrainee}>Stretching</Button>
                        <Button id="another" onClick={HandleClickKindTrainee}>Інше</Button>
                    </ButtonGroup>
                } >
                    <DialogStep content={
                        <ButtonGroup title="Перше тренування?">
                            <Button id="first-trainee" onClick={HandleClickFirstTrainee}>Так</Button>
                            <Button id="not-first-trainee" onClick={HandleClickFirstTrainee}>Ні, вже не вперше в цій студії</Button>
                        </ButtonGroup>
                    } >
                        <DialogStep content={
                            <Text>Будь ласка, введіть Ваше ім'я та прізвище:</Text>}
                            id="name"
                            onNext={(name) => setUserNameSurname(name)}>
                            <DialogStep content={
                                <Text>Будь ласка, введіть своє прізвище:</Text>}
                                id="surname"
                                onNext={(surname) => setUserSurname(surname)}>
                                <DialogStep content={
                                <Text>Будь ласка, введіть свій номер телефону:</Text>}
                                id="phone"
                                onNext={(phone) => setUserPhone(phone)}>
                                    <DialogStep content={
                                    <Text>Будь ласка, введіть бажаний день та час тренування у форматі "Понеділок 19:00":</Text>}
                                    id="date"
                                    onNext={(date) => setTraineeDate(date)}>
                                    </DialogStep>
                                    </DialogStep>
                                </DialogStep>
                            </DialogStep>
                    </DialogStep>
                </DialogStep>
                <NotWantTrainee />
            </DialogStep>
        </Dialog>
    );
}
