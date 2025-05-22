export const createShouldForwardProp = (blockedProps: string[]) => {
    return (prop: string) => !blockedProps.includes(prop);
};
