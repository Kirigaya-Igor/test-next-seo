import Link from 'next/link';

import { motionPageWrapperVariants } from 'const';
import { ColumnWrapper, PageWrapper } from 'styles';

export const PollsPageBase = () => {
    return (
        <PageWrapper
            variants={motionPageWrapperVariants}
            initial="initial"
            animate="enter"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <ColumnWrapper gap={48}>
                <h3>THIRD PAGE</h3>

                <ColumnWrapper gap={16}>
                    <Link href="/">MAIN PAGE</Link>

                    <Link href="/test1">TEST1</Link>
                </ColumnWrapper>
            </ColumnWrapper>
        </PageWrapper>
    );
};
