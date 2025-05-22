import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { Nullable } from 'types/common';

export const setQueryParam = (
    paramName: string,
    paramValue: Nullable<string>,
    searchParams: ReadonlyURLSearchParams,
    router: AppRouterInstance,
) => {
    if (!!paramValue) {
        const params = new URLSearchParams(searchParams.toString());

        params.set(paramName, paramValue);

        router.replace(`?${params.toString()}`, { scroll: false });
    }
};
