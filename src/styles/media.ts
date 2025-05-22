import { Breakpoint, BreakpointName, Intervals } from './types';

export const breakpointsList = Object.values(Breakpoint);

export const mediaIntervals: Intervals = {
    mobile: { min: 375, max: 743 },
    tablet: { min: 744, max: 1200 },
    laptop: { min: 1201, max: 1439 },
    desktop: { min: 1440, max: null },
};

export const from = (key: BreakpointName) => {
    const { min } = mediaIntervals[key];

    if (min === null) {
        throw new Error(`Interval ${key} not contains "min". Maybe you should use "toEnd"?`);
    }

    return `@media screen and (min-width: ${min}px)`;
};

export const to = (key: BreakpointName) => {
    const { min } = mediaIntervals[key];

    return `@media screen and (max-width: ${min - 1}px)`;
};

export const toEnd = (key: BreakpointName) => {
    const { max } = mediaIntervals[key];

    if (max === null) {
        throw new Error(`Interval ${key} not contains "max". Maybe you should use "from"?`);
    }

    return `@media screen and (max-width: ${max}px)`;
};

export const toEndHeight = (value: number) => {
    return `@media screen and (max-height: ${value}px)`;
};

export const additionalBreakpoint = (value: number) => {
    return `@media screen and (max-width: ${value}px)`;
};

export const within = (key: BreakpointName) => {
    const { min, max } = mediaIntervals[key];

    if (min === null) {
        throw new Error(`Interval ${key} not contains "min". Try to use larger interval.`);
    }

    if (max === null) {
        throw new Error(`Interval ${key} not contains "max". Try to use smaller interval.`);
    }

    return `@media screen and (min-width: ${min}px) and (max-width: ${max}px)`;
};
