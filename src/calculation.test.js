import {calculateBiorhythms} from './calculations';


it('calculate the physical biorhuthm', ()=>{
    const {physical} = calculateBiorhythms('1995-01-01', '2020-02-18');
    expect(physical).toBeCloseTo(0.5196)
})

it('calculate the emotional biorhuthm', ()=>{
    const {emotional} = calculateBiorhythms('1995-01-01', '2020-02-18');
    expect(emotional).toBeCloseTo(-0.9010)
})

it('calculate the biorhuthm', ()=>{
    const {intellectual} = calculateBiorhythms('1995-01-01', '2020-02-18');
    expect(intellectual).toBeCloseTo(0.8146)
})