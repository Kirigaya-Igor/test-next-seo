export const USD_PRECISION = 2;

export const VOICE_PRECISION = 9;

export const APPLE_DEVICES = /iPhone|iPad|iPod|iOS/i;

export const MOBILE_DEVICES =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i;

export const TRANSACTION_DELAY = 5000;

export const ASC = 'asc';
export const DESC = 'desc';

export const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

export const motionPageWrapperVariants = {
    initial: { opacity: 0, y: 30 },
    enter: { opacity: 1, y: 0 },
};

export const motionHeaderWrapperVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
};

export const DEFAULT_FILE = {
    filename: '',
    size: 0,
    mimetype: '',
    blob: null,
};
