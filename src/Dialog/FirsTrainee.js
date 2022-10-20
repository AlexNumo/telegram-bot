// import React from 'react';
// import {
//     DialogStep,
//     ButtonGroup,
//     Button,
//     Text
// } from '@urban-bot/core';

// export const FirstTrainee = ({HandleClickFirstTrainee}) => {
//     return (
//         <DialogStep match="tabata" content={
//             <ButtonGroup title="Перше тренування?">
//                 <Button id="first-trainee" onClick={HandleClickFirstTrainee}>Так</Button>
//                 <Button id="not-first-trainee" onClick={HandleClickFirstTrainee}>Ні, вже не вперше в цій студії</Button>
//             </ButtonGroup>
//         } >
//             <DialogStep match="first-trainee" content={
//                 <Text>Будь ласка, введіть Ваше ім'я:</Text>}
//                 id="name"
//                 onNext={(name) => console.log(name)}/>
//         </DialogStep>
//     )
// };