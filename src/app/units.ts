import styled from 'styled-components';

import { toEnd } from 'styles';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100%;
    padding: 0 82px;

    ${toEnd('laptop')} {
        padding: 0 62px;
    }

    ${toEnd('tablet')} {
        padding: 0 40px;
    }

    ${toEnd('mobile')} {
        padding: 0 20px;
    }
`;
