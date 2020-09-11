import dayjs from 'dayjs';

export function calculateBiorhythm(birthDate, targetDate,cycle){
    const birthDay =dayjs(birthDate).startOf('day');
    const tagetDay = dayjs(targetDate).startOf('day');
    const diff = tagetDay.diff(birthDay, 'days')
    return Math.sin(2 * Math.PI * diff /cycle);
}

export function calculateBiorhythms(birthDate, targetDate){
    return{
        physical: calculateBiorhythm(birthDate, targetDate,23),
        emotional: calculateBiorhythm(birthDate, targetDate,28),
        intellectual: calculateBiorhythm(birthDate, targetDate,33),
    }
}

//CALCULATE THE ATA IN THE GRAPH 
export function calculateBiorhythmSeries(birthDate, startDate, size){
    const series =[];
    const startDay = dayjs(startDate).startOf('day');
    for(let i = 0; i < size; i++){
        const targetDate = startDay.add(i, 'days').toISOString();
        series.push(calculateBiorhythms(birthDate, targetDate));
    }
    return series;
}