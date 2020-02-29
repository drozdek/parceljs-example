import $ from 'jquery';
import mod1 from './mod1';

export function printName(name) {
    return `Hello Mr. ${name} ` ;
};

export const jq = () => {
    let b = $('body').attr('class', 'bodyclass');
    return b
}

const my = (d1) => {
    const DIG = 55;
    return mod1() + DIG;
}

export { my };