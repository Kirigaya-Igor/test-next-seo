import Link from 'next/link';

import { motionPageWrapperVariants } from 'const';
import { ColumnWrapper, PageWrapper } from 'styles';

export const HomeBase = () => {
    return (
        <PageWrapper
            variants={motionPageWrapperVariants}
            initial="initial"
            animate="enter"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <ColumnWrapper gap={48}>
                <h3>MAIN PAGE</h3>

                <ColumnWrapper gap={16}>
                    <Link href="/test1">TEST1</Link>

                    <Link href="/test2">TEST2</Link>
                </ColumnWrapper>
            </ColumnWrapper>
        </PageWrapper>
    );
};
