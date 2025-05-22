'use client';

import { ReactNode } from 'react';

import StyledComponentsRegistry from './registry';
import * as S from './units';

export const ProvidersWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <StyledComponentsRegistry>
            <S.MainWrapper>{children}</S.MainWrapper>
        </StyledComponentsRegistry>
    );
};
