import { motion } from 'framer-motion';
import styled, { css, keyframes } from 'styled-components';

import { createShouldForwardProp } from 'utils';

import { theme } from './const';
import { toEnd } from './media';

export const PageWrapper = styled(motion.main)`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: ${theme.maxContentWidth};
    margin-top: 80px;

    ${toEnd('mobile')} {
        margin-top: 40px;
    }
`;

const commonFlexProps = ['gap', 'fullWidth', 'marginTop', 'withWrap', 'isCenter'];

const columnWrapperProps = createShouldForwardProp(commonFlexProps);

export const ColumnWrapper = styled.div.withConfig({ shouldForwardProp: columnWrapperProps })<{
    gap?: number;
    fullWidth?: boolean;
    marginTop?: number;
    withWrap?: boolean;
    isCenter?: boolean;
}>`
    display: flex;
    align-items: ${({ isCenter }) => isCenter && 'center'};
    flex-flow: column ${({ withWrap }) => withWrap && 'wrap'};
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
`;

const flexAlignCenterWrapperProps = createShouldForwardProp([
    ...commonFlexProps,
    'isJustifyCenter',
]);

export const FlexAlignCenterWrapper = styled.div.withConfig({
    shouldForwardProp: flexAlignCenterWrapperProps,
})<{
    gap?: number;
    fullWidth?: boolean;
    isCenter?: boolean;
    isJustifyCenter?: boolean;
    marginTop?: number;
    withWrap?: boolean;
}>`
    display: flex;
    align-items: ${({ isCenter = true }) => isCenter && 'center'};
    justify-content: ${({ isJustifyCenter = false }) => isJustifyCenter && 'center'};
    flex-wrap: ${({ withWrap }) => withWrap && 'wrap'};
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
`;

const flexBetweenWrapperProps = createShouldForwardProp(commonFlexProps);

export const FlexBetweenWrapper = styled.div.withConfig({
    shouldForwardProp: flexBetweenWrapperProps,
})<{
    gap?: number;
    fullWidth?: boolean;
    isCenter?: boolean;
    withWrap?: boolean;
}>`
    display: flex;
    align-items: ${({ isCenter = true }) => isCenter && 'center'};
    justify-content: space-between;
    flex-wrap: ${({ withWrap }) => withWrap && 'wrap'};
    gap: ${({ gap = 8 }) => `${gap}px`};

    width: ${({ fullWidth }) => fullWidth && '100%'};
`;

export const dropdownShowAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const dropdownHideAnimation = keyframes`
    0% {
        opacity: 1;
    }
    
    100% {
        opacity: 0;
    }
`;

const dropdownContentProps = createShouldForwardProp(['isOpen']);

export const DropdownContent = styled.div.withConfig({ shouldForwardProp: dropdownContentProps })<{
    isOpen: boolean;
}>`
    position: absolute;
    top: 44px;
    right: 0;

    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 24px 8px;

    background: rgb(26 26 26 / 40%);

    border-radius: 24px;

    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};

    backdrop-filter: blur(40px);

    transition: all 0.2s ease-in-out;

    animation-name: ${({ isOpen }) => (isOpen ? dropdownShowAnimation : dropdownHideAnimation)};
    animation-duration: ${({ isOpen }) => (isOpen ? '0.4s' : '0.2s')};
    animation-fill-mode: forwards;

    overflow: hidden auto;

    z-index: 10;

    &::-webkit-scrollbar-track {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const getIconSize = (size: number) => {
    return css`
        width: ${`${size}px`};
        min-width: ${`${size}px`};
        height: ${`${size}px`};
        min-height: ${`${size}px`};
    `;
};
