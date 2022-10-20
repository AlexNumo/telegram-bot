// import React from 'react';
// import { Tabata } from './Kind/Tabata';
// import {
//     Button,
//     DialogStep,
//     ButtonGroup,
// } from '@urban-bot/core';

// export const KindTrainee = ({HandleClickKindTrainee}) => {
//     return (
//         <DialogStep match="trainee" content={
//             <ButtonGroup title="Яке тренування бажаєте обрати?">
//                 <Button id="high-heels" onClick={HandleClickKindTrainee}>High Heels</Button>
//                 <Button id="tabata" onClick={
//                     // HandleClickKindTrainee
//                     (e)=>{console.log(e.nativeEvent.payload.data)}
//                 }>Tabata</Button>
//                 <Button id="kangoo" onClick={HandleClickKindTrainee}>Kangoo</Button>
//                 <Button id="sky-jumping" onClick={HandleClickKindTrainee}>Sky jumping</Button>
//                 <Button id="stretching" onClick={HandleClickKindTrainee}>Stretching</Button>
//                 <Button id="another" onClick={HandleClickKindTrainee}>Інше</Button>
//             </ButtonGroup>
//         } >
//             <Tabata/>
//         </DialogStep>
//     )
// }