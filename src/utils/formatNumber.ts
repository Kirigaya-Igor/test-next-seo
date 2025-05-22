import { deleteZeros } from './deleteZeros';

export const formatNumber = (value: number, float = 2, symbol = ' ') => {
    const [integerPart, decimalPart] = value.toFixed(float).split('.');

    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, symbol);

    const formattedNumber =
        float > 0 ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;

    return deleteZeros(formattedNumber);
};
