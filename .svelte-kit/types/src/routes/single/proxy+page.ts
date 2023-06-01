// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export function load({url, route }) {
    const ids= url.searchParams.get('ids');
    return {ids:ids};
}