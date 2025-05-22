export const getTailsString = (assetsAddress = '', max = 6): string => {
    return assetsAddress.length > max * 2
        ? assetsAddress.slice(0, max) + '...' + assetsAddress.slice(-max)
        : assetsAddress;
};
