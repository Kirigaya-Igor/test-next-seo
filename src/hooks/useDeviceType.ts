'use client';

import { useEffect, useState } from 'react';

import { mediaIntervals } from 'styles/media';

import { useWindowResize } from './useWindowResize';

const MOBILE_BREAKPOINT = mediaIntervals.mobile.max || 743;
const TABLET_BREAKPOINT = mediaIntervals.tablet.max || 1200;
const LAPTOP_BREAKPOINT = mediaIntervals.laptop.max || 1439;

enum DeviceType {
    MOBILE = 'MOBILE',
    TABLET = 'TABLET',
    LAPTOP = 'LAPTOP',
    DESKTOP = 'DESKTOP',
}

function getDeviceType(width: number): DeviceType {
    if (width <= MOBILE_BREAKPOINT) {
        return DeviceType.MOBILE;
    }

    if (width <= TABLET_BREAKPOINT) {
        return DeviceType.TABLET;
    }

    if (width <= LAPTOP_BREAKPOINT) {
        return DeviceType.LAPTOP;
    }

    return DeviceType.DESKTOP;
}

export const useDeviceType = () => {
    const width = useWindowResize();

    const defaultDeviceType = getDeviceType(width);

    const [isMobile, setIsMobile] = useState<boolean>(defaultDeviceType === DeviceType.MOBILE);
    const [isTablet, setIsTablet] = useState<boolean>(defaultDeviceType === DeviceType.TABLET);
    const [isLaptop, setIsLaptop] = useState<boolean>(defaultDeviceType === DeviceType.LAPTOP);
    const [isDesktop, setIsDesktop] = useState<boolean>(defaultDeviceType === DeviceType.DESKTOP);

    const setDeviceType = (deviceType: DeviceType) => {
        setIsMobile(deviceType === DeviceType.MOBILE);
        setIsTablet(deviceType === DeviceType.TABLET);
        setIsLaptop(deviceType === DeviceType.LAPTOP);
        setIsDesktop(deviceType === DeviceType.DESKTOP);
    };

    useEffect(() => {
        const deviceType = getDeviceType(width);

        setDeviceType(deviceType);
    }, [width]);

    return {
        isMobile,
        isTablet,
        isLaptop,
        isDesktop,
    };
};
