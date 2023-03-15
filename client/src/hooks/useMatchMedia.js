import { useState, useLayoutEffect } from "react";

const queries = [
    '(max-width: 620px)',
    '(min-width: 621px) and (max-width: 800px)',
    '(min-width: 801px)'
];

export const useMatchMedia = () => {
    if (typeof window === 'undefined') return {};
    
    const [values, setValues] = useState(getValues);
    const mediaQueryLists = queries.map(query => matchMedia(query));
    const getValues = () => mediaQueryLists.map(mql => mql.matches);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);

        mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

        return () => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
    })

    return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
        ...acc,
        [screen]: values[index],
    }), {})
}