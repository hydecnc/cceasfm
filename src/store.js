import { writable } from 'svelte/store';
 
const cceData = [
    { name: 'MCC Wallpainting @ Eduardo Caballero School', date: '', volunteerPositions: "30/day", hoursRewarded: "3/day", },
    { name: 'Unidos Sábados del Rol', date: '', volunteerPositions: 20, hoursRewarded: 34, },
    { name: 'Mas Utiles', date: 'TUE & THU', volunteerPositions: 7, hoursRewarded: 13, },
    { name: 'Mas Utiles', date: 'MON & WED', volunteerPositions: 7, hoursRewarded: 13, },
    { name: 'A Roof in ASFM November Construction', date: '', volunteerPositions: 112, hoursRewarded: 22, }
];


export const data = writable(cceData);
 
// count.subscribe((value) => {
//   console.log(value);
// }); // logs '0'