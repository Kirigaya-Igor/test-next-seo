'use client';

import { useEffect, useState } from 'react';

export const useWindowResize = () => {
    const [width, setWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0,
    );

    const onResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return width;
};
