'use client';

import { useEffect, useState } from 'react';

import { millisToDate } from 'utils';

import { useMountEffect } from './useMountEffect';

export const useCountdown = (endTime: number, interval = 60 * 1000) => {
    const [isTimerStarted, setTimerStarted] = useState(false);

    const [votingEnd, setVotingEnd] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    const isTimerActive =
        +votingEnd.days !== 0 ||
        +votingEnd.hours !== 0 ||
        +votingEnd.minutes !== 0 ||
        +votingEnd.seconds !== 0;

    /* ставит стартовое значение */
    useMountEffect(() => {
        if (endTime > Date.now()) {
            setVotingEnd(millisToDate(endTime - Date.now()));

            setTimerStarted(true);
        }
    });

    useEffect(() => {
        if (endTime < Date.now() && isTimerStarted) {
            setVotingEnd({
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
            });
        }
    }, [endTime]);

    useEffect(() => {
        if (!isTimerStarted && endTime > Date.now()) {
            setVotingEnd(millisToDate(endTime - Date.now()));

            setTimerStarted(true);
        }

        /* обратный таймер */
        const timerId = setTimeout(() => {
            endTime > Date.now() && setVotingEnd(millisToDate(endTime - Date.now()));
        }, interval);

        return () => {
            clearTimeout(timerId);
        };
    }, [votingEnd, endTime]);

    return { timer: votingEnd, isTimerStarted, isTimerActive, setTimerStarted };
};
