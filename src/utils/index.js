import numeral from 'numeral';
export const valueFormated = value => numeral(value).format('0,0.00');
